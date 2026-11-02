import Hero from "../Hero";
import PortfolioFilter from "./PortfolioFilter";

const PortfolioHero = ({ activeFilter, setActiveFilter, filters }) => {
  return (
    <Hero
      firstLine="Portfolio"
      secondLine="interior Designer"
      paragraph={
        <>
          We are a design studio specializing in architecture and interiors,
          redefining the art of spatial storytelling with bold ideas and
          creative exploration.
        </>
      }
      leftBottomText="Scroll to Explore"
      leftBottomIcon="⌄"
      rightBottomText={
        <PortfolioFilter
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      }
    />
  );
};

export default PortfolioHero;
