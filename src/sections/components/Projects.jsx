import { useState } from "react"
import { myProjects } from "../../constants"
import Project from "./Project"
import { motion, useMotionValue, useSpring } from "motion/react"
const Projects = () => {
const x = useMotionValue(0)
const y = useMotionValue(0)
const sprinX = useSpring(x, { stiffness: 50, damping: 10 })
const sprinY = useSpring(y, { stiffness: 50, damping: 10 })
const handleMouseMove = (event) => {
  const { clientX, clientY } = event
  x.set(clientX + 20)
  y.set(clientY + 20)
}
const [preview , setPreview] = useState(false)
  return (
    <section onMouseMove={handleMouseMove} className="relative c-space section-space">
     <h2 className="text-heading">My Selected Projects</h2>
     <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 w-full"/>
     {myProjects.map((project) => (
      <Project key={project.id} {...project} setPreview={setPreview}/>
     ))}
     {preview && ( <motion.img className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80" src={preview} style={{ x: sprinX, y: sprinY }}/>)}
    </section>
  )
}

export default Projects
