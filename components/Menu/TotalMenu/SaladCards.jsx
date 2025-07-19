import React from "react";

const SaladCards = ({salad,index}) => {
    return (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-amber-900 mb-2">{salad.name}</h3>
            <p className="text-slate-600">{salad.description}</p>
        </div>
    );
};

export default SaladCards;
