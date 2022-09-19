import { AiOutlineCopyrightCircle } from "react-icons/ai";
import SocialMedia from "../SocialMedia";

const Copyright = () => {
  return (
    <div className=" py-8 dark:bg-green-black-500 bg-wheat-500">
      <SocialMedia />
      <div className="flex justify-center">
        <h1 className="font-bold tracking-widest">
          <AiOutlineCopyrightCircle
            size={"20px"}
            className="inline-block mr-1"
          />
          2022 DangQuang. All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Copyright;
