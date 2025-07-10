import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import canvasBgDot from "@/utils/canvasBgDot";
import techStack from "@/utils/constants";
import { ArrowUp } from "lucide-react";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    canvasBgDot();

    const checkScreen = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentTech = techStack[index];
  const iconBgClass = isSmallScreen ? currentTech.solidBg : currentTech.gradient;
  const textClass = isSmallScreen
    ? `${currentTech.solidText}`
    : `text-transparent bg-clip-text ${currentTech.gradient}`;

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] overflow-hidden">
      <canvas className="fixed top-0 left-0 w-full h-full z-[-1]" />

      <div className="relative z-10 flex flex-col w-full min-h-[100dvh] justify-center items-center px-4 py-8 sm:py-12">
        <h1 className="text-gray-300 font-tertiary font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight">
          Hej<span className="text-red-700">, </span>I
          <span className="text-red-700">'</span>m a Web Developer
          <span className="text-red-700">.</span>
        </h1>

        <Card className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto mt-6 border-transparent">
          <CardContent className="w-full px-4 sm:px-8 py-4 flex justify-center items-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTech.name}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap justify-center items-center gap-2 text-lg sm:text-2xl md:text-4xl lg:text-5xl font-secondary font-custombold"
              >
                {/* ICON */}
                <div
                  className={`w-7 h-7 sm:w-10 sm:h-10 ${iconBgClass} rounded-full flex items-center justify-center`}
                >
                  <img
                    src={currentTech.icon}
                    alt={currentTech.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* TEXT */}
                <span className={textClass}>{currentTech.name}</span>
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>

        <ArrowUp size={24} className="text-red-700 mt-6" />
        <h2 className="text-gray-500 font-tertiary font-semibold text-sm sm:text-xl mt-2">
          Tech Stack
        </h2>
      </div>
    </section>
  );
};

export default Hero;

