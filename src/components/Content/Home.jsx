import SocialMedia from "../SocialMedia";
import avt from "./../../asset/avt.jpg";
const Home = () => {
  return (
    <section className="laptop:flex laptop:justify-center laptop:items-center laptop:gap-20 my-16 laptop:px-16 mt-32" id='home'>
      <div className="text-center my-12">
        <h1 className="text-[42px] mb-4 font-bold tracking-widest">
          I'm A Web Developer
        </h1>
        <p className="text-wheat-500 tracking-widest text-lg">
          I love Building Beautiful Web Experience
        </p>
        <div className="flex justify-center gap-4 font-bold">
          <button className="btn-click">ABOUT ME</button>
          <button className="btn-click">PORTFOLIO</button>
        </div>
        <SocialMedia />
      </div>
      <div className="flex justify-center p-4">
        <div className="max-w-[400px] laptop:w-[400px] laptop:h-[530px] laptop:border-solid laptop:border-wheat-600 laptop:border-4 laptop:relative rounded-xl">
          <img
            src={avt}
            alt="avt"
            className="rounded-xl laptop:absolute laptop:top-[-20px] laptop:left-[-20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
