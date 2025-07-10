import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/utils/constants";
import { useEffect, useState } from "react";



const Projects = () => {
  const [isFading, setIsFading] = useState(false)
  const [imageIndices, setImageIndices] = useState(
    projects.map(() => 0)
  )
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true)
      setTimeout(() => {
        setImageIndices((prev) => (
          prev.map((index, i) =>
            projects[i].images.length > 1 ?
              (index + 1) % projects[i].images?.length : 0)
        ))
        setIsFading(false)
      }, 300)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <section id="projects" className="max-container bg-black py-10 px-5 mt-[40px]">
        <div className="flex flex-col justify-center items-center h-full w-full gap-5">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl border-b-4 border-red-700 font-tertiary text-white text-center">
            Projects
          </h1>

          {projects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center justify-center w-full gap-4 mt-2"
            >
              {/* Left Side - Text */}
              <Card className="w-full md:w-1/2 border-transparent">
                <CardContent className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl border-b-2 border-red-700 py-2 text-center">
                  {project.name}
                </CardContent>
                <CardContent className="text-white font-tertiary text-sm sm:text-base md:text-xl lg:text-2xl py-2 text-center">
                  {project.techStack.join(", ")}
                </CardContent>
              </Card>

              {/* Right Side - Image */}
              <div className="w-full md:w-1/2">
                <Card className="shadow-lg rounded-2xl overflow-hidden w-full">
                  <CardContent className="p-0">
                    <img
                      src={project.images[imageIndices[i]]}
                      alt={project.name}
                      className="object-contain w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] transition-opacity duration-500 ease-in-out"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}

        </div>

      </section >
    </>
  )
};

export default Projects;
