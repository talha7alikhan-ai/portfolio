import { useRef } from "react"
import Card from "./components/Card"
import { Globe } from "./components/globe"
import CopyEmailButton from "./components/CopyEmailButton"
import { FrameWorks } from "./components/FrameWorks"

const About = () => {
    const grid2Container = useRef()
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
        {/* grid 1 - THIS IS THE WRAPPER FOR THE IMAGE */}
        <div className="relative flex items-end grid-default-color grid-1 overflow-hidden">
          {/* CONTENT FOR GRID 1 (Text, etc.) GOES HERE */}
          
          <img 
            src="assets/coding-pov.png" 
            alt="coding" 
            className="absolute scale-[1.75] -right-[5rem] -top-4 md:scale-[3] md:left-1/2 md:inset-y-10 lg:scale-[2.5] z-0 opacity-50 pointer-events-none select-none"/>
            <div className="z-10">
               <p className="headtext">Hi I'm Talha Ali</p>
                <p className="subtext">
                 I'm a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life in the digital world.
                </p>   
            </div>
            <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo">
            </div>
        </div>
        {/* grid 2 */}
        <div className="grid-default-color grid-2">
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500">
                    CODE IS CRAFT 
                </p> 
                <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="GRASP" ContainerRef={grid2Container}/>
                <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="SOLID" ContainerRef={grid2Container} /> 
                <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="Design Pattern" ContainerRef={grid2Container} />
                <Card style={{ rotate: "-45deg", bottom: "55%", left: "0%" }} text="Design Principles" ContainerRef={grid2Container} />
                <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="SRP" ContainerRef={grid2Container} />
                <Card style={{ rotate: "20deg", top: "70%", left: "70%" }} image="assets/csharp-pink.png" ContainerRef={grid2Container} />
                <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/dotnet-pink.png"  ContainerRef={grid2Container} />
                <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/blazor-pink.png" ContainerRef={grid2Container} />
            </div>
        </div>
        
        {/* grid 3 */}
        <div className="grid-black-color grid-3">
            <div className="z-10 w-[50%]">
             <p className="headtext">Time Zone</p>
             <p className="subtext"> I'm based in Mars, and open to remote work worldwide.</p>
            </div>
            <figure className="absolute  left-[30%] right-[-30%] top-[10%]">
             <Globe />
            </figure>
        </div>
         
        {/* grid 4 */}
        <div className="grid-special-color grid-4">
         <div className="flex flex-col items-center justify-center gap-4 size-full">
         <p className="text-center headtext">Do You Want To start a project together?</p>
         <CopyEmailButton />
         </div>    
        </div> 
        {/* grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext"> tech stack</p>
            <p className="subtext">I specialize in building responsive and accessible web applications using modern technologies.</p>
          </div>
         <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125"><FrameWorks /></div>
        </div>
      </div>
    </section>
  )
}

export default About