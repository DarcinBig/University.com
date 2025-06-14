import React from 'react'
import './Programs.css'
import program_1 from '../../assets/images/program-1.png'
import program_2 from '../../assets/images/program-2.png'
import program_3 from '../../assets/images/program-3.png'
import program_icon_1 from '../../assets/images/program-icon-1.png'
import program_icon_2 from '../../assets/images/program-icon-2.png'
import program_icon_3 from '../../assets/images/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="program-1 image" />
        <div className="caption">
            <img src={program_icon_1} alt="program icon" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="program-2 image" />
        <div className="caption">
            <img src={program_icon_2} alt="program icon" />
            <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="program-3 image" />
        <div className="caption">
            <img src={program_icon_3} alt="program icon" />
            <p>Post Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
