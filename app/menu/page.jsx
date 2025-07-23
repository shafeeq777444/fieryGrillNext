import AboutHero from "../../components/Menu/common/AboutHero";
import TotalMenus from "../../containers/menu/TotalMenus";
import AnimatedOnScroll from "../../components/common/AnimatedScrollerOnWraaper";
import FeatureSection from "../../components/Menu/common/FeatureSection";
import HorizontalScrollCarousel from "../../containers/menu/WeeklyMenus";

const Example = () => {

    return (
        <div className="bg-white">
            <div className="flex h-22  items-center justify-center"></div>
             <AboutHero/>
            <TotalMenus />
            <AnimatedOnScroll> <HorizontalScrollCarousel /></AnimatedOnScroll>
            <FeatureSection />
        </div>
    );
};

export default Example;
