import React , {useState} from 'react'
import './Workdetail.css'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Workdetail = () => {
    const[CollegeUniversity,setCollegeUniversity]= useState("")
    const[StartDate,setStartDate]= useState("")
    const[EndDate,setEndDate]= useState("")
    const[Qualification,setQualification]= useState("")
    const[Description,setDescription]= useState("")
    const[School,setSchool]= useState("")
    const[StartDates,setStartDates] = useState("")
    const[EndDates,setEndDates]= useState("")
    const[Qualifications,setQualifications]= useState("")
    const[Descriptions,setDescriptions]= useState("0")
    

    const addtoList = () => {
        axios.post("http://localhost:9000/food/insert",{CollegeUniversity:CollegeUniversity,StartDate:StartDate,EndDate:EndDate,Qualification:Qualification,Description:Description,School:School,StartDates:StartDates,EndDates:EndDates,Qualifications:Qualifications,Descriptions:Descriptions})
    }





    return (
        <>
             <div className='header'>
           <h1 className='hname'>Resume Builder</h1>

       </div>
       <div className='per-detail'>
           <p className='p-det'>Education Details</p>
           <hr/>
           </div>
       <div className='user-ed-1'>
           <input onChange={(event)=>{
    setCollegeUniversity(event.target.value)
  }} className='c-u' placeholder='College/University*' />
           <input onChange={(event)=>{
    setStartDate(event.target.value)
  }} className='st' type='date' />
           <input onChange={(event)=>{
    setEndDate(event.target.value)
  }} className='en' type='date' />

       </div>
       <div className='user-ed-2'>
           <input onChange={(event)=>{
    setQualification(event.target.value)
  }} className='ed-q' placeholder='Qualification*' />
           <input onChange={(event)=>{
    setDescription(event.target.value)
  }} className='ed-d' placeholder='Description*' />

       </div>
       <div className='extra-user'>

       </div>

       <div className='user-ed-3'>
           <input onChange={(event)=>{
    setSchool(event.target.value)
  }} className='s' placeholder='School*' />
           <input onChange={(event)=>{
    setStartDates(event.target.value)
  }} className='st-3' type='date' />
           <input onChange={(event)=>{
    setEndDates(event.target.value)
  }} className='en-3' type='date' />

       </div>
       <div className='user-ed-5'>
           <input onChange={(event)=>{
    setQualifications(event.target.value)
  }} className='ed-q-5' placeholder='Qualification*' />
           <input onChange={(event)=>{
    setDescriptions(event.target.value)
  }} className='ed-d-5' placeholder='Description*' />

       </div>

      

       <div className='user-ed-6'>
           <Link to='/'>
           <button className='btn-ed-b'>
                  Back
              </button>
           </Link>
          <Link to='/project'>
           
              <button onClick={addtoList} className='btn-ed-n'>Next</button>
          </Link>
       </div>
     

        </>
    )
}

export default Workdetail
