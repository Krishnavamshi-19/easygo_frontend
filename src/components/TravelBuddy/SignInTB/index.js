import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignInTBElements'
// import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import Authcontext from '../../Acontext/Authcontext' 
// import TBcontext from '../Tcontext/TBcontext'
import { useContext,useState } from 'react'
const AddT = () => {
  // const{showAlert}=props
  // const context=useContext(TBcontext);
  // const{addTravel}=context
//  const history=useNavigate()

//  const onChange =(e)=>{
//   setNote({...note,[e.target.name]:e.target.value})
//  }
//  const handleSubmit=async(e)=>{
//    e.preventDefault();
//    addTravel(note.from,note.to,note.on,note.vtype,note.vnumber,note.fare,note.buddies,note.image,note.contact)
//    console.log("Created a new note","success")
//    history('/travelbuddy')
//  }

 const [note, setNote] = useState({from:"",to:"",vtype:"",vnumber:"",on:"",fare:"",buddies:"",image:"",contact:""})
  return (
    <>
    <Container>
      <FormWrap>
      <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/travelbuddy"> <RxCross1/></ExitIcon>
      </FormTop>
          <FormContent>
            <Form action="#">
              <FormH1>Add Travel</FormH1>
              <FormLabel htmlFor='for'>From</FormLabel>
              <FormInput id='from' type="text"name='from' value={note.from}  required minLength={3}/>
              <FormLabel htmlFor='for'>To</FormLabel>
              <FormInput id='to' type="text"name='to' value={note.to} required minLength={3}/>
              <FormLabel htmlFor='for'>Vtype</FormLabel>
              <FormInput id='vtype'  type="text"name='vtype' value={note.vtype} required/>
              <FormLabel htmlFor='for'>Vnumber</FormLabel>
              <FormInput id='vnumber'  type="text"name='vnumber' value={note.vnumber} required/>
              <FormLabel htmlFor='for'>Fare</FormLabel>
              <FormInput id='fare' type="text"name='fare' value={note.fare} required/>
              <FormLabel htmlFor='for'>On</FormLabel>
              <FormInput id='on' type="text"name='on' value={note.on} required/>
              <FormLabel htmlFor='for'>Buddies</FormLabel>
              <FormInput id='buddies'  type="text"name='buddies'  value={note.buddies} required/>
              <FormLabel htmlFor='for'>Image Url</FormLabel>
              <FormInput id='image'  type="text"name='image' value={note.image} required/>
              <FormLabel htmlFor='for'>Contact</FormLabel>
              <FormInput id='contact'  type="text"name='contact' value={note.contact} required minLength={3}/>
              <FormButton type='submit' disabled={note.from.length<3||note.contact.length<8||note.to.length<3}>Continue</FormButton>
           
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>   
  )
}

export default AddT;






























// import React from 'react'
// import { RxCross1 } from 'react-icons/rx'
// import { Container, FormContent, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SignInTBElements'
// // import { Form } from 'react-router-dom'

// const SignInTB = () => {
//   return (
//     <>
//     <Container>
//       <FormWrap>
//         <FormTop>
//         <Icon to="/">EasyGo</Icon>
//         <ExitIcon to="/travelbuddy"> <RxCross1/></ExitIcon>
//         </FormTop>
     
//           <FormContent>
//             <Form action="#">
//               <FormH1>Travel Buddy Form</FormH1>
//               <FormLabel htmlFor='for'>Email</FormLabel>
//               <FormInput type='email' required/>
//               <FormLabel htmlFor='for'>Password</FormLabel>
//               <FormInput type='password' required/>
//               <FormButton type='submit'>Continue</FormButton>
//               <Text>Forgot password</Text>
//             </Form>
//           </FormContent>
//         </FormWrap>
//       </Container>
//     </>   
//   )
// }

// export default SignInTB;


