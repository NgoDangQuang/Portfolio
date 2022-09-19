const PortfolioItems = ({ data }) => {
  return (
    <div className="mb-16 gap-10 laptop:grid laptop:grid-cols-2 shadow-lg py-8 px-4 rounded-xl border-b-2 border-solid border-wheat-400">
      <div className="mb-8 laptop:mb-0 h-full  rounded-lg">
        <img src={data?.img} alt="" className="rounded-lg h-full" />
      </div>

      <div className="laptop:flex laptop:items-center laptop:border-l-2 laptop:dark:border-wheat-400 laptop:border-wheat-500 laptop:border-solid laptop:pl-8">
        <div className="">
          <h2 className="mb-2 laptop:text-[24px] text-xl font-bold tracking-widest dark:text-wheat-500 text-wheat-600">
            {data?.title}
          </h2>
          <p className="mb-4 tracking-widest laptop:text-xl text-lg">
            {data?.desc}
          </p>
          <ul className="list-disc ml-4 mb-8">
            {data?.tools.map((item, index) => (
              <li className="laptop:text-16 mb-2 text-14" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 justify-center">
            <a
              href={data.linkDemo}
              target="_blank"
              rel="noreferrer"
              className="py-2 w-[50%] text-center bg-wheat-500 rounded-lg text-green-black font-bold laptop:text-lg hover:text-white hover:bg-wheat-600 transition-all duration-300"
            >
              Live
            </a>
            <a
              href={data.linkSource}
              target="_blank"
              rel="noreferrer"
              className="py-2 w-[50%] text-center bg-wheat-500 rounded-lg text-green-black font-bold laptop:text-lg hover:text-white hover:bg-wheat-600 transition-all duration-300"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItems;
