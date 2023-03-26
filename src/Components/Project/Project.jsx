import React from 'react'
import './Project.css'


const Project = ({date,Link,heading,stack1,stack2,stack3, text, img1,img2}) => {
 
  return (
    <div>
             <div className='projectWrap'>
        <div className='projectBox'>
          <h6 className='date'>{date}</h6>
          <h1 className='companyName'>{heading}</h1>
          <p className='writeUp'>{text}</p>

          <a href={Link} className='linkCarrier'>
          <p className='visitLink'> Visit Link</p>
          </a>
          <div className='frameWork'>

            <p className='workings'>{stack1}</p>
            <p className='workings'>{stack2}</p>
            <p className='workings'>{stack3}</p>


          </div>
        </div>

        <div className='imgBox'>
          <img src={img1} alt="" className='boxImg'/>
          <img src={img2} alt="" className='boxImg2'/>
          <a href="http://"></a>

        </div>
        </div>
    </div>
  )
}

export default Project