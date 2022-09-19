const Title = ({ title }) => {
  return (
    <div className="mb-16 laptop:flex laptop:justify-center">
      <div>
        <h1 className="dark:text-white text-black text-[34px] font-bold tracking-widest mb-1 laptop:text-[40px]">
          {title}
        </h1>
        <div className="w-[100px] h-1 rounded-full bg-wheat-500" />
      </div>
    </div>
  );
};

export default Title;
