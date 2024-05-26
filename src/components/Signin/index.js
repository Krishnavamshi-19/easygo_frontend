import React from 'react'
import {RxCross1} from 'react-icons/rx'
import { Container, FormWrap, FormTop, Icon, ExitIcon, Form, FormH1, FormInputBox, FormLabel, FormInput, FormRemember, FormForgot, FormButton, FormRegister, FormSignUp, FormLast, FormGoBack } from './newelements'

const SignIN = () => {
  return (
    <>
    <Container>
    {/* <FormTop>
        <Icon to="/">EasyGo</Icon>
        <ExitIcon to="/"> <RxCross1/></ExitIcon>
    </FormTop> */}
      <FormWrap>
         
            <Form action="#">
              <FormH1>Login</FormH1>
              <FormInputBox>
              <FormInput type='email' placeholder="Username/Email" 
               required/>
              </FormInputBox>
              <FormInputBox>
              <FormInput type='password' placeholder="Password" 
               required/>
              </FormInputBox>

              <FormRemember>
                <FormForgot to="/">Forgot password</FormForgot>
              </FormRemember>
              
              <FormButton type='submit'>LogIn</FormButton>

              <FormRegister>
                <FormSignUp to="/">
                      New User? Register here
                </FormSignUp>
              </FormRegister>
              
              <FormLast>
              <FormGoBack to="/">
                    Go Back !!
                </FormGoBack>
              </FormLast>

            </Form>
       

      </FormWrap>
    </Container>
    
    </>   
  )
}

export default SignIN;