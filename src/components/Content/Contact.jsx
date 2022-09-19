import { BiIdCard } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
import Title from "./Title";

const Contact = () => {
  return (
    <section
      className="dark:bg-green-black bg-wheat-400 py-8 laptop:px-16 px-8 laptop:px-32"
      id="contact"
    >
      <Title title={"Contact"} />
      <div className="laptop:flex laptop:justify-center">
        <div>
          <h1 className="mb-4 text-20 tracking-widest font-semibold laptop:text-center laptop:text-[24px] laptop:font-bold">
            Contact Info
          </h1>
          <div className="flex gap-2 mb-4">
            <FaMapMarkerAlt size={"24px"} className="mr-2" />
            <h2 className="laptop:tracking-widest laptop:text-20">
              Address: Ho Chi Minh City, Vietnam
            </h2>
          </div>
          <div className="flex gap-2 mb-4">
            <BiIdCard size={"24px"} className="mr-2" />
            <h2 className="laptop:tracking-widest laptop:text-20">
              Phone: 0947 590 546
            </h2>
          </div>
          <div className="flex gap-2 mb-4">
            <GoMailRead size={"24px"} className="mr-2" />
            <h2 className="laptop:tracking-widest laptop:text-20">
              Email: ngoquang336@gmail.com
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
