import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import canvasBgDot from "@/utils/canvasBgDot";
import techStack from "@/utils/constants";
import { ArrowUp } from "lucide-react";

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    canvasBgDot(); // initializes canvas background animation
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <canvas className="fixed top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10 flex flex-col w-full h-full justify-center items-center px-4">
        <h1 className="text-gray-300 font-tertiary font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center leading-tight">
          Hej<span className="text-red-700 text-xl sm:text-3xl">, </span>I
          <span className="text-red-700 text-xl sm:text-3xl">'</span>m a Web Developer
          <span className="text-red-700 text-xl sm:text-3xl">.</span>
        </h1>

        <Card className="max-w-full sm:max-w-lg mx-auto mt-4 sm:mt-6 border-transparent">
          <CardContent className="w-full px-4 sm:px-8 py-4 flex justify-center items-center overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={techStack[index].name}
                style={{ color: techStack[index].color }}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-wrap justify-center items-center gap-3 sm:text-3xl md:text-4xl lg:text-5xl font-secondary font-custombold bg-clip-text text-transparent ${techStack[index].gradient}`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${techStack[index].gradient} rounded-full`}>
                  <img alt="techStack icon" src={techStack[index].icon} className="w-full h-full object-contain" />
                </div>
                {techStack[index].name}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>

        <ArrowUp size={24} className="text-red-700 mt-4 sm:mt-6" />
        <h1 className="text-gray-500 font-tertiary font-semibold text-xl sm:text-3xl mt-2">Tech Stack</h1>
      </div>
    </section>
  );
};

export default Hero;
