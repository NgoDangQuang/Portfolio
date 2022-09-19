import { portfolio } from "../../api/data";
import PortfolioItems from "./PortfolioItems";
import Title from "./Title";

const Portfolio = ({ isMobile }) => {
  const data = portfolio;
  return (
    <section className="dark:bg-green-black-500 bg-white py-16 px-8 laptop:px-32" id='portfolio'>
      <Title title={"Portfolio"} />
      {data.map((items, index) => (
        <PortfolioItems data={items} key={index} />
      ))}
      <div className="flex justify-center">
        <a
          href="https://github.com/NgoDangQuang"
          target="_blank"
          rel="noreferrer"
          className="px-12 py-3 bg-wheat-500 text-20 text-green-black-500 font-bold rounded-full hover:text-white hover:bg-wheat-600 transition-all duration-300"
        >
          More Project
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
