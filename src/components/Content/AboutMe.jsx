import Title from "./Title";

const AboutMe = () => {
  return (
    <section className="dark:bg-green-black-500 bg-white py-16 px-8 laptop:px-32" id='about-me'>
      <Title title={'About Me'}/>

      <div className="laptop:flex gap-10 justify-center">
        <div className="laptop:w-1/2">
          <h2 className="mb-6 text-20 tracking-widest font-bold laptop:text-[24px]">
            Get To Know Me!
          </h2>
          <p className="dark:text-amber-100 text-gray-500 text-16 mb-6 laptop:text-20 font-semibold text-justify">
            My name is Quang. I started learning how to code in January 2022 and
            spent most of my day to learn & practice HTML, CSS, JavaScript and
            React.
            <br />I enjoy coding and the challenge of learning something new
            everyday. My goal is to pursue a career in the field of front-end
            development.
          </p>
        </div>

        <div className="laptop:w-1/2">
          <h3 className="mb-6 text-20 tracking-widest font-bold laptop:text-[24px]">
            Education
          </h3>
          <p className="dark:text-amber-100 text-gray-500 text-16 mb-1 laptop:text-20 font-semibold">
            2018 - 2022
          </p>
          <h3 className="text-16 tracking-widest font-bold laptop:text-20">
            Bachelor Of Information And Technology - University Of Science
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
