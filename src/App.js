import { useEffect, useState } from "react";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 900) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);
  return (
    <div className=" font-nunito overflow-y-auto overflow-x-hidden h-screen dark:bg-green-black bg-wheat-400 dark:text-white text-gray-900">
      <NavBar isMobile={isMobile} />
      <Content isMobile={isMobile}/>
    </div>
  );
}
