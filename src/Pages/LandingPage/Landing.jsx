import React, {useState} from 'react'
// import Header from '../../Components/Header/Header'
import './Landing.css'
// import Image1 from '../../asset/HeroSectionImg.jpg'
// import Afrosound from '../../asset/Afrosound.png'
import Bootstrap from '../../asset/Bootstrap.png'
import CSS3 from '../../asset/CSS3.png'
import Github from '../../asset/github.svg'
import Html from '../../asset/html.svg'
import Javascript from '../../asset/javascript.svg'
import Reacts from '../../asset/react.svg'
import Mui from '../../asset/Mui.png'
import Redux from '../../asset/redux.svg'
import Whatsapp from '../../asset/whatsapp.svg'
import Twitter from '../../asset/twitter-icon.svg'
import Linkedin from '../../asset/linkedin.svg'
import Johnsonn from '../../asset/Johnsonn.jpg'
import Email from '../../asset/email.svg'
import Oluwayemi from '../../asset/Oluwayemi-Resume.pdf'
import DownloadIcon from '../../asset/downloadicon.svg'
import MBB from '../../asset/MBBPIL.jpg'
import Afrosound from '../../asset/Afrosound.jpg'
import Ehya from '../../asset/Ehyaa.jpg'
import Easyrent from '../../asset/Easyrent.jpg'
import Tompurse from '../../asset/Tompurse.jpg'
import MBBM from '../../asset/Mbbmobile.jpg'
import Easyrentmobile from '../../asset/Easymobile.jpg'
import Ehyamobile from '../../asset/Ehyamobile.jpg'
import Tompursemobile from '../../asset/Tommobile.jpg'
import Afromobile from '../../asset/Afromobile.jpg'
import Tailwind from '../../asset/tailwind.png'

import { Link } from 'react-router-dom'
import Project from '../../Components/Project/Project'

const Landing = () => {

  const [toggle, setToggle] = useState(false);
const handleToggle = () => {
  return setToggle(prevToggle =>!prevToggle)
}
const logo =[
Html , CSS3, Javascript, Reacts, Bootstrap,Mui, Github, Redux, Tailwind
]

const projectData =[
  {id:0 , date:'Jan 2023', heading:'MBBPIL', text:'I implemented user interface design and solve user problems with React.js. I collaborated with Backend designer to achieve the functionality',  Link:"http://www.mbbpil.vercel.app/" ,stack1:'React', stack2:'CSS', stack3:'Html', img1:MBB, img2:MBBM },
{id:1 , date:'Oct - Dec 2022', heading:'Easy Rent', text:'I collaborated with team of front end developers, product designer, back end and product manager to design easy rent application with React.js.',  Link:"https://www.easy-rentt.vercel.app/.app/" ,stack1:'React', stack2:'CSS', stack3:'Html', img1:Easyrent, img2:Easyrentmobile},

{id:2 , date:'September 2022', heading:'Tom Purse', text:'I implemented user interface design and solve user problems of financial banking with React.js.',  Link:"https://www.tomspurse.vercel.app/" ,stack1:'React', stack2:'CSS', stack3:'Html', img1:Tompurse, img2:Tompursemobile},

{id:3 , date:'August 2022', heading:'Ehya', text:'I implemented user interface design and solve user problems with HTML, CSS and Javascript.',  Link:"https://www.ehya.vercel.app/" ,stack1:'HTML', stack2:'CSS', stack3:'JavaScript', img1:Ehya, img2:Ehyamobile},

{id:4 , date:'July 2022', heading:'Afrosound', text:'I implemented user interface design and solve user problems with HTML and CSS.',  Link:"https://www.afrosound.vercel.app/" ,stack1:'HTML', stack2:'CSS', img1:Afrosound, img2:Afromobile},
]
  return (
    <div>
     <section className="heroSection">
     <div className='headerNav'>
      {/* Logo */}
      <div>
      <Link to='/' className="logo">JOHNSON</Link>
          <p className='subLogo'>Portfolio website</p>
      </div>
      <div className="hamburger" id="hamburger" onClick={handleToggle}>
        {toggle ? <span>&times;</span> : <span>&#9776;</span>}
        </div> 

        {/* NaVIGATION BAR */}

        <nav className='navBar'>
        <ul className={toggle ? 'menu-drop': 'menu'}>
        {/* {toggle ? 'menu': 'deactive'} */}
         <li><a href='/' className='menu-list'>Home</a></li>
        <li><a href='#section3' className='menu-list'>Projects</a></li>
        <li><a href='#section2' className='menu-list'>About</a></li>
        <li><a href='#section4' className='menu-list'>Contact</a></li>

        <Link to='./'>
        <button className='btn1' type='submit'>HIRE ME</button>
        </Link>
        </ul>
        </nav>

       
    </div> 

     <div className="subHeroSection">
      <div className="content">
      <p className='I'>I'm</p>
      <h1 className='contentHead'>JOHNSON OLUWAYEMI,</h1>
      <p className='frontend'> Front-End Developer with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored. </p>
      <a href='#section3'>
      <button className='btn2'>See My Project</button>
      </a>
      </div>
     </div>

     </section>

     <section className='section1'>
      <div className="worked">
        <h2 className='workedStack'>Technology stack</h2>
       <p className='workedI'>I design, develop and create website with this toolkit</p>
       <div className="logos">
        {logo.map(item=> <img src={item} alt={item} className='imgSize'/>)}
         <div>
         </div>
       </div>
      </div>
     </section>

     {/* ABOUT ME SESSION */}

     <section className="section2" id='section2'>
      <div>
      <img src={Johnsonn} alt="Johnson" className='myImg'/>
      </div>
      <div>
        <h3 className='aboutHead'>
        Hi, I'm Johnson Oluwayemi
        </h3>
        <p className='aboutContent'>
        I am a passionate front-end developer with one year experience creating responsive and engaging websites with a proven ability to collaborate effectively with senior developers while spending extra time to be mentored.  I have a strong focus on user experience and design, and I strive to create visually appealing and easy-to-use interfaces. <br />
        Enjoy working closely with team members to ensure workloads are effectively redirected to bottlenecks and personally picking up the slack when necessary.

My skills include proficiency in HTML, CSS, JavaScript tailwind CSS, and framework such as Reactjs and typescript. I am also experienced in using version control tools like Git. <br />

In my free time, I enjoy exploring new technologies, attending meetups, and reading about web design trends. I believe in continuous learning and always seek to improve my skills and stay up to date with the latest developments in the field. <br />
<strong>
If you're interested in working together ,hire me or have any questions, feel free to contact me via any of my contact medium below the page.</strong> I'm always excited to collaborate and bring great ideas to life by building tools that change the world.
        </p>
        
        <a href={Oluwayemi} download='Johnson-Resume.pdf' className='resumeAnc'><div className='resumeBtn'>
          <img src={DownloadIcon} alt="" className='dwnImg'/>
          My resume</div></a>
        
      </div>
     </section>

    {/* PROJECTS SESSION */}
     <section className="section3" id='section3'>
      <h2 className='section3Head'>
        My Projects
      </h2>

      {projectData.map((item) => (
        <Project date={item.date} heading={item.heading} text={item.text} stack1={item.stack1} stack2={item.stack2} stack3={item.stack3} img1={item.img1} img2={item.img2} key={item.id}/>
      ))}



     </section>

     <section className='section4' id='section4'>
      <div className='section4Blo'>

      <p className='section4Para'><strong> Do you have a project in mind and would love to bring it to live? <br />
Then contact me, let us work together to create something beautiful.</strong></p>
      <div className='contactDiv'>
        <a href="www.github.com/smartprincipal">
        <img src={Github} alt="Github Logo" className='contactImg'/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=2348138187957">
        <img src={Whatsapp} alt="Whatsapp logo" className='contactImg'/>
        </a>
        <a href="https://twitter.com/HJorhnsin">
        <img src={Twitter} alt="" className='contactImg'/>
        </a>
        <a href="www.linkedin.com/in/johnson-oluwayemi-b85290110">
        <img src={Linkedin} alt="" className='contactImg'/>
        </a>
        <a href="mailto:johnsonoluwayemibunmi@gmail.com">
        <img src={Email} alt="" className='contactImg'/>
        </a>
      </div>

      </div>

      <p className='copyright'> &copy; Johnson Oluwayemi 2023</p>
     </section>
     
    </div>
  )
}

export default Landing