import React , {useState} from "react";
import * as Yup from 'yup';
import updateImg from '../../images/Group 234.svg';
import '../ForgotPassword/ResetPassword.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

function UpdatePassword(){

    const navigate = useNavigate();

    const [newPassword , setNewPassword] = useState({
        otp : '',
        password : '',
        reEnterPassword : '',
      })

    // const []

     const [errs , setErrs] = useState({})


      const validationSchema = Yup.object({
        otp : Yup.string().matches(/^\d{6}$/ , 'otp must be 6 digit')
        .required('otp is required'),
        password : Yup.string()
        .required('password is required')
        .min(6, 'Password must be atleast 6 characters'),
        reEnterPassword : Yup.string()
        .oneOf([Yup.ref('password')], 're-enter password does not match with password')
        .required('re-enter password is required')    
      })


      function handleChange(e){
        
        setNewPassword({
          ...newPassword,
          [e.target.name] : e.target.value 
        })
    }

    const submitUpdateEvent = async (e)=>{
        e.preventDefault();
        try {
          await validationSchema.validate(newPassword , {abortEarly: false})
            setNewPassword({
                otp : '',
                password : '',
                reEnterPassword : '',
            });
            Swal.fire({
                icon: "success",
                title: "Password Updated Successful",
                text: "You Will be directed to Login Page. Please Login",
                // footer: '<a href="/login">Please Login</a>'
              });
              navigate('/login')
        } 
        
        catch (error) {
          console.log(error.inner);
            const newErrors = {}
      
            error.inner.forEach(err => {
              newErrors[err.path] = err.message;
            });
      
            setErrs(newErrors)
        }}


    return(<>
     <div className="container-fluid p-0 updatePswdContainer">
        <div className="ml-auto updatePswdImageContainer">
            <img className="" src={updateImg}/>
        </div>
          
        <div className="updatePswdFormContainer mr-auto my-5">
            <h2 className="text-center">Update Password</h2>
            {/* <p className="mt-5">Enter the email address associated with your kashiprasadam account.</p> */}
<form  onSubmit={submitUpdateEvent} >
  <div class="form-group">
    <label  for="exampleInputOtp">Email OTP</label>
    <input type="text" class="form-control" name="otp" value={newPassword.otp}  onChange={handleChange} id="exampleInputOtp" aria-describedby="emailHelp" placeholder="Enter e-mail OTP"/>
   {errs.otp && <div className="error text-danger text-bold"> {errs.otp} </div>}
  </div>

  <div class="form-group">
    <label  for="exampleInputPassword2">Password</label>
    <input type="password" class="form-control" name="password" value={newPassword.password} onChange={handleChange} id="exampleInputPassword2" placeholder="Enter Password"/>
    <small id="exampleInputPassword1" class="form-text text-dark font-weight-bold">Password must be atleast 6 characters</small>
   {errs.password && <div className="error text-danger text-bold"> {errs.password } </div>}

  </div>
  <div class="form-group">
    <label  for="exampleInputPassword3">Re-enter Password</label>
    <input type="password" class="form-control" name="reEnterPassword" onChange={handleChange} value={newPassword.reEnterPassword} id="exampleInputPassword3" placeholder="Re-enter Password"/>
    {/* <small id="exampleInputPassword1" class="form-text text-dark font-weight-bold">Password must be atleast 6 characters</small> */}
    {errs.reEnterPassword && <div className="error text-danger text-bold"> {errs.reEnterPassword } </div>}

  </div>
 
  <button type="submit"  className="btn updatePswdSubmit w-100">Continue</button>
  
</form>
        </div>
    </div>

    </>)
}


export default React.memo(UpdatePassword);