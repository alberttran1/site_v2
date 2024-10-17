import Topbar from './components/Topbar/Topbar'
import Hero from './components/Hero/Hero'
import MainSection from './components/MainSection/MainSection'
import { useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import resume from "./assets/Albert_Tran_NewGrad_Resume.pdf"

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={    
          <>
            <Topbar
              aboutRef={aboutRef}
              experienceRef={experienceRef}
              projectsRef={projectsRef}
            />
            <div className='w-full bg-[#F9F6F1]'>
              <Hero/>
              <MainSection 
                aboutRef={aboutRef}
                experienceRef={experienceRef}
                projectsRef={projectsRef}
              />
            </div>
          </>
        }/>
        <Route path="resume" element={<embed src={resume} width={"100%"} height={"100%"} />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
