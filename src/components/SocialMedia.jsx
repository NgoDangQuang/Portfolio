import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="flex justify-center gap-10 my-4">
      <a
        href="https://www.facebook.com/quangbap76/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook className="icon-link hover:text-blue-700" />
      </a>
      <a
        href="https://www.linkedin.com/in/ngodangquang/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin className="icon-link hover:text-blue-500" />
      </a>
      <a
        href="https://github.com/NgoDangQuang"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="icon-link hover:text-purple-600" />
      </a>
    </div>
  );
};

export default SocialMedia;
