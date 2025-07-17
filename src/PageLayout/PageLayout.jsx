import Hero from "../sections/Hero"
import Projects from "../sections/Projects"
import Aboutme from "@/sections/Aboutme"
import Contactme from "@/sections/Contactme"
import Blogs from "@/sections/Blogs"
import Education from "@/sections/Education"
import { Analytics } from "@vercel/analytics/react"
const PageLayout = ({ children }) => {

  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <Aboutme />
        <Education />
        <Blogs />
        <Projects />
        <Contactme />
      </div>
      <Analytics />
    </>
  )
}

export default PageLayout
