import React,{useState} from 'react'
import './Food.css'
import axios from 'axios'


const Food = () => {
    const[Email,setEmail]= useState("")
    const[Password,setPassword]= useState("")
    const[Address,setAddress]= useState("")
    const[Address1,setAddress1]= useState("")
    const[City,setCity]= useState("")
    const[State,setState] = useState("")
    const[Zip,setZip]= useState("0")

    const addtoList = () => {
        axios.post("http://localhost:9000/food/insert",{Email:Email,Password:Password,Address:Address,Address1:Address1,City:City,State:State,Zip:Zip})
    }

    return (
        <div>
            <form class='all-form'>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input onChange={(event)=>{
    setEmail(event.target.value)
  }} type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input onChange={(event)=>{
    setPassword(event.target.value)
  }} className='secondfield' type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input onChange={(event)=>{
    setAddress(event.target.value)
  }} className='thirdfield' type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input onChange={(event)=>{
    setAddress1(event.target.value)
  }} className='fifthfield' type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input onChange={(event)=>{
    setCity(event.target.value)
  }} className='sixthfield' type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select onChange={(event)=>{
    setState(event.target.value)
  }}  id="inputState" class="form-control">
        <option selected>Punjab</option>
        <option>Sindh</option>
        <option>Kashmir</option>
        <option>Balocishtan</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input onChange={(event)=>{
    setZip(event.target.value)
  }} className='seventhfield' type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input  class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button onClick={addtoList} type="submit" class="btn btn-primary">Sign in</button>
</form>
        </div>
    )
}

export default Food
