import { FaCircle, FaExternalLinkAlt, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import ME from '../../assets/ME2.jpeg'
import spritetester from "../../assets/spritetester.jpeg"
import omw from "../../assets/omw.jpeg"
import alberttransite from "../../assets/alberttransite.jpeg"
import cortexos from "../../assets/cortexos.jpg"
import { ReactNode, RefObject, useEffect } from 'react'


const Experience = [
  {
    name: "Kortex",
    title: "Software Engineer",
    description: "Core team member in the inception of the Kortex note taking application. Primary member in feature development under tight release deadlines to a successful launch to 20k+ users.",
    date: "JAN-AUG 2024",
    href: "https://www.kortex.co/"
  },
  {
    name: "Tesla",
    title: "Software Engineer",
    description: "Revamped Tesla’s internal CRM application (replacing Salesforce) building comprehensive data tables and inline management tooling to track sales leads and handle interactions for 40k+ global prospects",
    date: "MAY-AUG 2023",
    href: "https://www.tesla.com/"
  },
  {
    name: "Halp",
    title: "Full-Stack Engineer",
    description: "Core team member in the inception of the Kortex note taking application. Led core feature development under tight release deadlines to a successful launch to 20k+ users.",
    date: "SEP-DEC 2022",
    href: "https://www.halp.co/"
  },
  {
    name: "Canix",
    title: "Full-Stack Engineer",
    description: "Helped launch the company's component library (Componix - name not official tehe) to standardize component development across multiple applications.",
    date: "JAN-APR 2022",
    href: "https://www.canix.com/"
  },
  {
    name: "Sponsor Circle",
    title: "Frontend Engineer",
    description: "Overhauled the company's website from raw HTML/CSS to React decreasing technical overhead, reducing server response and page rendering times to lower memory usage and improving long term scalability.",
    date: "MAY-AUG 2021",
    href: "https://sponsorcircle.com/"
  },
]

const Projects = [
  {
    name: "Sprite Tester",
    description: "Web application for uploading and testing 2-D animated sprites! Save sprite animation sequences and control them to see how they run, walk, and jump!",
    img: spritetester,
    href: "https://spritetester.netlify.app/",
  },
  {
    name: "OMW!",
    description: "Social media application for users to see where their friends are and what fun events are happening near them!",
    img: omw,
  },
  {
    name: "Cortex-OS",
    description: "Custom C based operating system incorporating multitasking, memory management, file system support, process communication, and device management.",
    img: cortexos,
  },
  {
    name: "alberttran.com",
    description: "Previous iteration of this website.",
    img: alberttransite,
    href: "https://alberttranv1.netlify.app/",
  }

]

const MainSection = (props : {aboutRef: RefObject<HTMLDivElement>, experienceRef: RefObject<HTMLDivElement>, projectsRef : RefObject<HTMLDivElement>}) => {
  const {aboutRef, experienceRef, projectsRef} = props;

  const onScroll = () => {
    console.log("hello")
    console.log(aboutRef.current?.getBoundingClientRect());
  }

  useEffect(() => {
    console.log("helloss")
    window.addEventListener('scroll', onScroll);
    return () => {
        window.removeEventListener('scroll', onScroll);
    };
}, []);


  const SectionClicker = (props :{title : string, scrollTo: RefObject<HTMLDivElement>}) => {
    return (
      <div className='group flex gap-2 items-center opacity-30 hover:opacity-100 cursor-pointer'
        onClick={() => {
          props.scrollTo.current?.scrollIntoView({behavior: "smooth"})
        }}>
        <div className='w-10 group-hover:w-14 border-b border-black transition-all'/>
        {props.title}
    </div>
    )
  }

  const Link = (props: {label: string, href: string}) => {
    return (
      <a target={"_blank"} href={props.href} className='font-light hover:underline cursor-pointer text-gray-500 hover:text-black'>
        {props.label}
      </a>
    )
  }

  const Separator = () => {
    return (
      <div className='w-full my-10 border-b border-black'/>
    )
  }

  const Card = (props : {title: string, subTitle?: string, description: string, item: ReactNode, href?: string}) => {
    const {title, subTitle, description, href, item} = props;
    return (
      <a target='_blank' className='group border-transparent border hover:border-black text-black hover:text-black rounded-md p-6 flex gap-6 hover:shadow transition' href={href}>
        <div className='' style={{flex:1}}>
          <div>
            {item}
          </div>
        </div>
        <div className='' style={{flex:3}}>
          <div className='flex gap-2 items-center'>
            <div className="font-Bebas text-xl">
              {title}
            </div>
            {subTitle &&
            <>
              <FaCircle size={6}/>
              <div className="font-Abel text-lg">
                {subTitle.toUpperCase()}
              </div>
            </>
            }
            {href && 
            <FaExternalLinkAlt className='mb-1 ml-2 opacity-10 group-hover:opacity-100 transition-all'/>}
          </div>
          <div className='font-Abel'>
            {description}
          </div>
        </div>
      </a>
    )
  }

  const Paragraph = () => {
    return (
      <>
        {"Hey! I'm Albert and I'm a Software Engineer. I love making things\
        that look good and things that work good under the hood. So far\
        I've used my talents to help build an "}
        <Link  label="advertising agency site" href="https://sponsorcircle.com/"/>
        {", a "}
        <Link  label="cannabis ERP" href="https://www.canix.com/"/>
        {", an "}
        <Link  label="education advisor platform" href="https://www.halp.co/"/>
        {", a "}
        <Link  label="car company's CRM" href="https://www.tesla.com/"/>
        {", and a "}
        <Link  label="second brain." href="https://www.kortex.co/"/>
        {"\n \
        \n \
        Right now I'm studying Software Engineering at the University of\
        Waterloo, but if you're reading this I'm looking for work! So feel\
        free to email me if you'd like to talk\
        a little more :).\n \
        \n \
        Outside of work you can find me playing volleyball (some "}
        <Link label="9 man" href="https://www.torontolegacyathletics.com/nacivt"/>
        {" too), at a poker table\
        or feeding some cats on the street."}
      </>
    )
  }

  return (
    <div className="w-full flex justify-center items-center py-[100px]">
      <div className="flex gap-[5rem] min-[962px]:gap-[10rem] text-black mx-10 flex-wrap justify-center">
        <div className='flex flex-col min-[962px]:h-[80vh] min-[962px]:sticky top-[6rem] justify-between items-center gap-2'>
          <div className='flex flex-col min-[962px]:gap-[5rem]'>
            <div className='flex flex-col items-center gap-2'>
              <img src={ME} className='rounded-full h-60 min-w-60 object-cover border-2 border-black'/>
              <blockquote className='border-l border-l-black pl-2 font-Abel'>
                "Happily chasing waterfalls."
              </blockquote>
            </div>
            <div className='flex flex-col gap-5 font-Abel max-[961px]:hidden'>
              <SectionClicker title={"ABOUT"} scrollTo={aboutRef}/>
              <SectionClicker title={"EXPERIENCE"} scrollTo={experienceRef}/>
              <SectionClicker title={"PROJECTS"} scrollTo={projectsRef}/>
            </div>
          </div>
          <div className='flex gap-5'>
            <a target="_blank" href='https://github.com/alberttran1'>
              <FaGithub size={30} className='text-gray-600 hover:text-black cursor-pointer'/>
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/alberttran1/'>
              <FaLinkedin size={30} className='text-gray-600 hover:text-black cursor-pointer'/>
            </a>
            <a target="_blank" href='https://www.instagram.com/albert_ttran'>
              <FaInstagram size={30} className='text-gray-600 hover:text-black cursor-pointer'/>
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-6 w-[30rem]'>
          <div className='font-Abel whitespace-pre-line text-lg scroll-mt-[90px]' ref={aboutRef}>
            <Paragraph/>
          </div>
          <Separator/>
          <div className='flex flex-col gap-6'>
            <div className='text-5xl font-Bebas scroll-mt-[90px]' ref={experienceRef}>
              Experience
            </div>
            {Experience.map((experience,index) => {
              return <Card key={`experience_card_${index}`} title={experience.name} subTitle={experience.title} description={experience.description} item={experience.date} href={experience.href}/>
            })}
          </div>
          <Separator/>
          <div className='flex flex-col gap-6'>
          <div className='text-5xl font-Bebas scroll-mt-[90px]' ref={projectsRef}>
              Projects
            </div>
            {Projects.map((project,index) => {
              return <Card key={`project_card_${index}`} title={project.name} description={project.description} href={project.href} item={project.img && <img className="rounded shadow h-[4rem] object-cover" src={project.img}/>}/>
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainSection