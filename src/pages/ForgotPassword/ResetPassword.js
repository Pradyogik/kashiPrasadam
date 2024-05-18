import React , {useState} from "react";
import * as Yup from 'yup';
import resetImg from '../../images/Group 234.svg';
import '../ForgotPassword/ResetPassword.css';
import updatePassword from "./updatePassword";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ResetPassword(){

  const navigate = useNavigate();

    const [resetpassword , updateResetpassword] = useState({
        email : '',
      })

     const [errors , setErrors] = useState({})


      const validationSchema = Yup.object({
        email : Yup.string().required('email is required')
        .email('invalid email format'),    
      })


      function handleChange(e){
        
        updateResetpassword({
          ...resetpassword,
          [e.target.name] : e.target.value 
        })
    }
    const submitResetEvent = async (e)=>{
        e.preventDefault();
        try {
          await validationSchema.validate(resetpassword , {abortEarly: false})
          navigate('/updatePassword')
         
         
        } 
        catch (error) {
          console.log(error.inner);
            const newErrors = {}
      
            error.inner.forEach(err => {
              newErrors[err.path] = err.message;
            });
      
            setErrors(newErrors)
        }}


    return(<>
   
     <div className="container-fluid p-0 resetContainer">
        <div className="ml-auto resetImageContainer">
            <img className="" src={resetImg}/>
        </div>
          
        <div className="resetFormContainer mr-auto my-5">
            <h2 className="text-center">Reset Password</h2>
            <p className="mt-5">Enter the email address associated with your kashiprasadam account.</p>
<form  onSubmit={submitResetEvent} >
  <div class="form-group">
    <label  for="exampleInputEmail3">Email address</label>
    <input type="email" class="form-control" name="email" value={resetpassword.email}  onChange={handleChange} id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter your e-mail"/>
   {errors.email && <div className="error text-danger text-bold"> {errors.email} </div>}
  </div>
 
  <button type="submit"  className="btn resetSubmit w-100">Continue</button>
  
</form>
        </div>
    </div>

    </>)
}


export default React.memo(ResetPassword);