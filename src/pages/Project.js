import React from 'react'
import './Project.css'
import {Link} from 'react-router-dom'

const Project = () => {
    return (
        <>
             <div className='header'>
           <h1 className='hname'>Resume Builder</h1>

       </div>
       <div className='per-detail'>
           <p className='p-det'>Projects Details</p>
           <hr/>
           </div>
           
         <div className='p-1'>
             <h3 className='p1'>Project 1</h3>
        </div>
        <div className='p1-field'>
            <input className='p1field' placeholder='Title*'/>
        </div>
        <div className='p2-field'>
            <input className='p2field' placeholder='Link*'/>
        </div>
        <div className='p3-field'>
            <input className='p3field' placeholder='Description*'/>
        </div>

        <div className='p-2'>
             <h3 className='p2'>Project 2</h3>
        </div>
        <div className='p1-2-field'>
            <input className='p1-2field' placeholder='Title*'/>
        </div>
        <div className='p2-2-field'>
            <input className='p1-2field' placeholder='Link*'/>
        </div>
        <div className='p3-2-field'>
            <input className='p3-2field' placeholder='Description*'/>
        </div>

        <div className='p-3'>
             <h3 className='p3'>Project 3</h3>
        </div>
        <div className='p1-3-field'>
            <input className='p1-3field' placeholder='Title*'/>
        </div>
        <div className='p2-3-field'>
            <input className='p2-3field' placeholder='Link*'/>
        </div>
        <div className='p3-3-field'>
            <input className='p3-3field' placeholder='Description*'/>
        </div>

        <div className='user-pro-6'>
           <Link to='/workdetail'>
           <button className='btn-pro-b'>
                  Back
              </button>
           </Link>
          <Link to='/extradetail'>
           
              <button className='btn-pro-n'>Next</button>
          </Link>
       </div>

      
        </>
    )
}

export default Project
