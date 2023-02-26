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
import Oluwayemi from '../../asset/Johnson-Resume.pdf'
import DownloadIcon from '../../asset/downloadicon.svg'
import MBB from '../../asset/MBBPIL.PNG'
import Afrosound from '../../asset/Afrosound.PNG'
import Ehya from '../../asset/Ehyaa.PNG'
import Easyrent from '../../asset/Easyrent.PNG'
import Tompurse from '../../asset/Tompurse.PNG'
import MBBM from '../../asset/Mbbmobile.PNG'
import Easyrentmobile from '../../asset/Easymobile.PNG'
import Ehyamobile from '../../asset/Ehyamobile.PNG'
import Tompursemobile from '../../asset/Tommobile.PNG'
import Afromobile from '../../asset/Afromobile.PNG'
import { Link } from 'react-router-dom'

const Landing = () => {

  const [toggle, setToggle] = useState(false);
const handleToggle = () => {
  return setToggle(prevToggle =>!prevToggle)
}

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
      <p className='frontend'>A Front-end Engineer keen at designing and developing tools that make people's lives simple.</p>
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
         <img src={Html} alt="" className='imgSize'/>
         <img src={CSS3} alt="" className='imgSize'/>
         <img src={Javascript} alt="" className='imgSize'/>
         <img src={Reacts} alt="" className='imgSize'/>
         <img src={Bootstrap} alt="" className='imgSize'/>
         <img src={Github} alt="" className='imgSize'/>
         <img src={Mui} alt="" className='imgSize'/>
         <img src={Redux} alt="" className='imgSize'/>

         <div>
         {/* <img src={Ehya} alt="" /> */}
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
        I am a passionate front-end developer with one year experience creating responsive and engaging websites. I have a strong focus on user experience and design, and I strive to create visually appealing and easy-to-use interfaces. <br />

My skills include proficiency in HTML, CSS, JavaScript, and framework such as React. I am also experienced in using version control tools like Git. <br />

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

        <div className='projectWrap'>
        <div className='projectBox'>
          <h6 className='date'>Jan 2023</h6>
          <h1 className='companyName'>MBBPIL</h1>
          <p className='writeUp'>I implement user interface design and solve user problems with React.js. I collaborated with Backend designer to achieve the functionality</p>

          <a href='www.mbbpil.vercel.app/' className='linkCarrier'>
          <p className='visitLink'> Visit Link</p>
          </a>
          <div className='frameWork'>

            <p className='workings'>React</p>
            <p className='workings'>CSS</p>
            <p className='workings'>JSX</p>


          </div>
        </div>

        <div className='imgBox'>
          <img src={MBB} alt="" className='boxImg'/>
          <img src={MBBM} alt="" className='boxImg2'/>

        </div>
        </div>

        <div className='projectWrap'>
        <div className='projectBox'>
          <h6 className='date'>Oct - Dec 2022</h6>
          <h1 className='companyName'>Easy Rent</h1>
          <p className='writeUp'>I collaborated with team of front end developers, product designer, back end and product manager to design easy rent application with React.js.</p>

          <a href='www.easy-rentt.vercel.app/' className='linkCarrier'>
          <p className='visitLink'> Visit Link</p>
          </a>
          <div className='frameWork'>

            <p className='workings'>React</p>
            <p className='workings'>CSS</p>
            <p className='workings'>JSX</p>


          </div>
        </div>

        <div className='imgBox'>
          <img src={Easyrent} alt="" className='boxImg'/>
          <img src={Easyrentmobile} alt="" className='boxImg2'/>

        </div>
        </div>

        <div className='projectWrap'>
        <div className='projectBox'>
          <h6 className='date'>September 2022</h6>
          <h1 className='companyName'>Tom Purse</h1>
          <p className='writeUp'>I implement user interface design and solve user problems of financial banking with React.js.</p>

          <a href='www.tomspurse.vercel.app/' className='linkCarrier'>
          <p className='visitLink'> Visit Link</p>
          </a>
          <div className='frameWork'>

            <p className='workings'>React</p>
            <p className='workings'>CSS</p>
            <p className='workings'>JSX</p>


          </div>
        </div>

        <div className='imgBox'>
          <img src={Tompurse} alt="" className='boxImg'/>
          <img src={Tompursemobile} alt="" className='boxImg2'/>

        </div>
        </div>


        <div className='projectWrap'>
        <div className='projectBox'>
          <h6 className='date'>Jan 2023</h6>
          <h1 className='companyName'>Ehya</h1>
          <p className='writeUp'>I implement user interface design and solve user problems with HTML, CSS and Javascript.</p>

          <a href='www.ehya.vercel.app/' className='linkCarrier'>
          <p className='visitLink'> Visit Link</p>
          </a>
          <div className='frameWork'>

            <p className='workings'>HTML</p>
            <p className='workings'>CSS</p>
            <p className='workings'>JS</p>


          </div>
        </div>

        <div className='imgBox'>
          <img src={Ehya} alt="" className='boxImg'/>
          <img src={Ehyamobile} alt="" className='boxImg2'/>

        </div>
        </div>


        <div className='projectWrap'>
        <div className='projectBox'>
          <h6 className='date'>July 2022</h6>
          <h1 className='companyName'>Afrosound</h1>
          <p className='writeUp'>I implement user interface design and solve user problems with HTML and CSS.</p>

          <a href='www.afrosound.vercel.app/' className='linkCarrier'>
          <p className='visitLink'> Visit Link</p>
          </a>
          <div className='frameWork'>

            <p className='workings'>HTML</p>
            <p className='workings'>CSS</p>
            {/* <p className='workings'>JSX</p> */}


          </div>
        </div>

        <div className='imgBox'>
          <img src={Afrosound} alt="" className='boxImg'/>
          <img src={Afromobile} alt="" className='boxImg2'/>

        </div>
        </div>

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