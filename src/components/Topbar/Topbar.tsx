import { RefObject } from "react"

const Topbar = (props : {aboutRef: RefObject<HTMLDivElement>, experienceRef: RefObject<HTMLDivElement>, projectsRef : RefObject<HTMLDivElement>}) => {
  const {aboutRef, experienceRef, projectsRef} = props;

  return (
    <div className="absolute w-full h-14 top-0 border-b border-b-black justify-between gap-2 text-black flex font-Abel bg-[#F9F6F1]">
      <div className="flex justify-center items-center gap-4 underline-offset-4">
        <div className="flex h-full w-[54px] items-center justify-center border-r border-r-black bg-black text-[#F9F6F1] cursor-pointer"
          onClick={() => window.location.reload()}>
          AT
        </div>
        <div className="hover:underline cursor-pointer" onClick={() => aboutRef.current?.scrollIntoView({behavior: "smooth"})}>
          ABOUT
        </div>
        <div className="hover:underline cursor-pointer" onClick={() => experienceRef.current?.scrollIntoView({behavior: "smooth"})}>
          EXPERIENCE
        </div>
        <div className="hover:underline cursor-pointer" onClick={() => projectsRef.current?.scrollIntoView({behavior: "smooth"})}>
          PROJECTS
        </div>
      </div>
      <a className="flex justify-center items-center p-2 hover:underline underline-offset-4 cursor-pointer text-black hover:text-black" target="_blank" href="/resume">
        RESUME
      </a>
    </div>
  )
}

export default Topbar