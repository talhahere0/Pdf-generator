import React from 'react'
import './ExtraDetails.css'
import images from './tickmark.png'
import {Link} from 'react-router-dom'

const ExtraDetail = () => {
  return (
    <>
         <div className='header'>
           <h1 className='hname'>Resume Builder</h1>

       </div>
       <div className='per-detail'>
           <p className='p-det'>Extra Details</p>
           <hr/>
           </div>
           <div className='s-l'>
             <label className='sl'>
               <img className='tickmark' height='25px' width='25px' src={images} alt='' />
               Skills/Languages</label>

           </div>
           <div className='user-ext-1'>
           <input className='skill1' placeholder='Skill 1*' />
           <input className='skill2' placeholder='Skill 2*' />
           <input className='skill3' placeholder='Skill 3*' />
           

       </div>
       <div className='user-ext-2'>
           <input className='skill1' placeholder='Skill 4*' />
           <input className='skill2' placeholder='Skill 5*' />
           <input className='skill3' placeholder='Skill 6*' />
           

       </div>
       <div className='s-l'>
             <label className='sl'>
               <img className='tickmark' height='25px' width='25px' src={images} alt='' />
               Interest</label>

           </div>

           <div className='user-ext-3'>
           <input className='skill1' placeholder='Skill 1*' />
           <input className='skill2' placeholder='Skill 2*' />
           <input className='skill3' placeholder='Skill 3*' />
           

       </div>
       <div className='user-ext-4'>
           <input className='skill1' placeholder='Skill 4*' />
           <input className='skill2' placeholder='Skill 5*' />
           <input className='skill3' placeholder='Skill 6*' />
           

       </div>

       <div className='user-ed-6'>
           <Link to='/project'>
           <button className='btn-ed-b'>
                  Back
              </button>
           </Link>
          <Link to='#'>
           
              <button className='btn-ed-n'>Submit</button>
          </Link>
       </div>
       <div className='user-7'>
         <button className='dwn-btn'>
           Download Cv
         </button>

       </div>
      
    </>
  )
}

export default ExtraDetail


