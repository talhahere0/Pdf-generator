import React , {useState} from 'react'
import './Pdfgenerator.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Pdfgenerator = () => {

    const[Firstname,setFirstname]= useState("")
    const[Lastname,setLastname]= useState("")
    const[Email,setEmail]= useState("")
    const[Phone,setPhone]= useState("")
    const[Website,setWebsite]= useState("")
    const[Github,setGithub]= useState("")
    const[Linkedin,setLinkedin] = useState("")
    const[Twitter,setTwitter]= useState("")
    const[Facebook,setFacebook]= useState("")
    const[Instagram,setInstagram]= useState("")
    

    const addtoList = () => {
        axios.post("http://localhost:9000/food/insert",{Firstname:Firstname,Lastname:Lastname,Email:Email,Phone:Phone,Website:Website,Github:Github,Linkedin:Linkedin,Twitter:Twitter,Facebook:Facebook,Instagram:Instagram})
    }

    return (
        <>
       <div className='header'>
           <h1 className='hname'>Resume Builder</h1>

       </div>
       <div className='per-detail'>
           <p className='p-det'>Personal Details</p>
           <hr/>
       </div>
       <div className='user-1'>
           <input onChange={(event)=>{
    setFirstname(event.target.value)
  }} className='fname' placeholder='First Name*' />
           <input onChange={(event)=>{
    setLastname(event.target.value)
  }} className='lname' placeholder='Last Name*' />

       </div>
       <div className='user-2'>
           <input onChange={(event)=>{
    setEmail(event.target.value)
  }} className='em' placeholder='Email*' />
           <input onChange={(event)=>{
    setPhone(event.target.value)
  }} className='ph' placeholder='Phone*' />

       </div>

       <div  className='user-3'>
           <input onChange={(event)=>{
    setWebsite(event.target.value)
  }} className='web' placeholder='Website*' />
           <input onChange={(event)=>{
    setGithub(event.target.value)
  }} className='ghub' placeholder='GitHub*' />

       </div>

       <div className='user-4'>
           <input onChange={(event)=>{
    setLinkedin(event.target.value)
  }} className='link' placeholder='Linked In*' />
           <input onChange={(event)=>{
    setTwitter(event.target.value)
  }} className='twt' placeholder='Twitter*' />

       </div>

       <div className='user-5'>
           <input onChange={(event)=>{
    setFacebook(event.target.value)
  }} className='fb' placeholder='Facebook*' />
           <input onChange={(event)=>{
    setInstagram(event.target.value)
  }} className='insta' placeholder='Instagram*' />

       </div>

       <div className='user-6'>
          <Link onClick={addtoList} to='/workdetail'><button className='btn-n'>Next</button></Link>
       </div>
       
       
       





        </>
    )
}

export default Pdfgenerator
