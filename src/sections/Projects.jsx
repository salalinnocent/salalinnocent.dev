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
      <section id="projects" className="max-container bg-black py-10 px-5 mt-[120px]">
        <div className="flex flex-col justify-center items-center h-full w-full gap-5">
          <h1 className="text-2xl sm:text-xl md:text-5xl lg:text-5xl border-b-4 border-red-700 font-tertiary text-white">Projects</h1>

          {/*Left Side for the Project Name */}
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start justify-start md:items-center w-full">
              {/* Left: Static Text Content */}
              <Card className="mx-auto mt-2 border-transparent">
                <CardContent className="text-white text-2xl sm:text-xl md:text-3xl lg:text-3xl border-b-2 border-red-700 h-20 w-full flex justify-center overflow-hidden relative">{project.name}</CardContent>
                <CardContent className="text-white font-tertiary text-2xl sm:text-xl md:text-3xl lg:text-2xl h-10 w-full flex justify-center items-start overflow-hidden relative">{project.techStack.join(", ")}</CardContent>
              </Card>
              {/* <div className="w-full md:w-1/2 space-y-2"> */}
              {/* <h1 className="text-gray-300 text-3xl text-center border-2 border-red-700">{project.name}</h1> */}
              {/* <p className="text-gray-300 text-center text-2xl">{project.techStack.join(", ")}</p> */}
              {/* </div> */}

              {/* Right: Dynamic Image Content */}
              <div className="w-full md:w-1/2">
                <Card className="shadow-lg rounded-2xl overflow-hidden w-full">
                  <CardContent className="p-0">
                    <img
                      src={project.images[imageIndices[i]]}
                      alt={project.name}
                      className={`object-contain w-full h-[500px] transition-opacity duration-500 ease-in-out`}
                    />
                  </CardContent>
                </Card>
              </div>
            // </div>
          ))}
        </div>

      </section >
    </>
  )
};

export default Projects;
