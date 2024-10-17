import NAME from "../../assets/NAME.svg"
import JOB from "../../assets/JOB.svg"

const Hero = () => {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center border-b border-b-black">
        <div className="flex flex-col items-center">
            <div className="flex flex-col gap-2 m-10">
                <img src={NAME} className="flex-2 animate-appear1"/>
                <img src={JOB} className="flex-1 animate-appear2"/>
            </div>
        </div>
    </div>
  )
}

export default Hero