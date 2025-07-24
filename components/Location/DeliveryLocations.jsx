"use client"
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useGetLocations } from "../../services/Hooks/useLocations";
import LocationFeture from "./LocationFeature";
import DeliveryLocationsSkeleton from "../skeltons/location-skeltons/DeliveryLocationsSkeleton";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hhZmVlcTc3NDQiLCJhIjoiY205bHZnaTlzMDAwMjJxb2lxZzB4ODZkeiJ9.8Omr4NARLyfhzl6gKxGCdQ";

const gtaBoundary = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-79.6393, 43.5971],
            [-79.1105, 43.5336],
            [-79.1115, 43.7095],
            [-79.6355, 43.7365],
            [-79.6393, 43.5971],
          ],
        ],
      },
      properties: {
        name: "Greater Toronto Area",
      },
    },
  ],
};

// SVG Location Pin Icon
const LocationPinIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10 text-amber-500 mx-auto"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21c.414-1.03 2-4.09 2-7a5 5 0 10-4 0c0 2.91 1.586 5.97 2 7z"
    />
    <circle cx="12" cy="10" r="2" fill="currentColor" />
  </svg>
);

export default function DeliveryLocations() {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const [availableLocations, setAvailableLocations] = useState([]);
  const { data, isLoading, isError } = useGetLocations();

  useEffect(() => {
    if (data) {
      setAvailableLocations(data);
    }
  }, [data]);

  useEffect(() => {
    if (!mapContainerRef.current || !data) return;
    if (!mapboxgl.supported()) {
      // Optionally show a fallback UI or message
      console.error('WebGL not supported. Mapbox GL cannot be initialized.');
      return;
    }

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-79.3832, 43.6532],
      zoom: 9,
      minZoom: 6,
      maxZoom: 14,
    });

    mapInstance.addControl(new mapboxgl.NavigationControl(), "top-right");

    mapInstance.on("load", () => {
      mapInstance.addSource("gta-boundary", {
        type: "geojson",
        data: gtaBoundary,
      });

      const deliveryGeoJSON = {
        type: "FeatureCollection",
        features: data.map((loc) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: loc.coords,
          },
          properties: {
            name: loc.name,
          },
        })),
      };

      mapInstance.addSource("delivery-points", {
        type: "geojson",
        data: deliveryGeoJSON,
      });

      mapInstance.addLayer({
        id: "delivery-areas",
        type: "symbol",
        source: "delivery-points",
        minzoom: 12,
        layout: {
          "icon-image": "marker",
          "icon-size": 1,
          "icon-anchor": "bottom",
          "text-field": ["get", "name"],
          "text-size": 14,
          "text-offset": [0, 1.2],
          "text-anchor": "top",
          "text-font": ["Open Sans Bold"],
        },
        paint: {
          "text-color": "#222",
        },
      });
    });

    setMap(mapInstance);
    return () => mapInstance.remove();
  }, [data]);

  const flyToLocation = (coords) => {
    map?.flyTo({ center: coords, zoom: 13 });
  };

  if (isLoading) return <DeliveryLocationsSkeleton />;

  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-12 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Map + Feature Section */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="h-[300px] md:h-[400px] lg:h-[60vh] rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div ref={mapContainerRef} className="w-full h-full" />
          </div>
          {/* Only show on desktop */}
          <div className="hidden lg:block">
            <LocationFeture />
          </div>
        </div>

        {/* Location List Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-100 p-0 sm:p-2 md:p-4">
            <h2 className="text-xl md:text-2xl font-bold text-amber-900 px-4 pt-4 pb-2 border-b border-gray-100 sticky top-0 bg-white z-10 rounded-t-2xl">Delivery Locations</h2>
            <div
              className="max-h-[60vh] min-h-[200px] overflow-y-auto px-2 py-2 md:px-4 md:py-4 flex flex-col gap-3 custom-scrollbar"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#fbbf24 #f3f4f6' }}
            >
              {availableLocations?.length === 0 && (
                <div className="text-gray-400 text-center py-8">No locations available.</div>
              )}
              {availableLocations?.map((loc, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => flyToLocation(loc.coords)}
                    className="w-full text-left bg-gray-50 hover:bg-amber-50 focus:bg-amber-100 border border-gray-100 hover:border-amber-200 focus:border-amber-300 shadow-sm rounded-xl px-4 py-3 transition flex items-center gap-3 outline-none group"
                    tabIndex={0}
                    aria-label={`Fly to ${loc.name}`}
                  >
                    {/* SVG Location Pin Icon */}
                   
                    <span className="font-semibold text-amber-900 group-hover:underline group-focus:underline text-base md:text-lg">
                      {loc.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
