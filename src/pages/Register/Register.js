import React , {useState} from "react";
import registerImg from '../../images/Group 234.svg'; 
import { Link, NavLink } from "react-router-dom";
import * as Yup from 'yup';
import Swal from "sweetalert2";


// css
import '../Register/Register.css';


function Register(){

  const [form , updateForm] = useState({
    name : '',
    email : '',
    mobile : '',
    password : '',
    reEnterPassword : '',
  })


  const [errors , setErrors] = useState({})

  const validationSchema = Yup.object({
    name : Yup.string().required('name is required'),
    email : Yup.string().required('email is required')
    .email('invalid email format'),
    mobile : Yup.string().matches(/^\d{10}$/ , 'phone number must be 10 digit')
    .required('mobile no. is required'),
    password : Yup.string()
    .required('password is required')
    .min(6, 'Password must be atleast 6 characters'),
    reEnterPassword : Yup.string()
    .oneOf([Yup.ref('password')], 're-enter password does not match with password')
    .required('re-enter password is required')  
  })

  function handleChange(e){
  
    updateForm({
      ...form,
      [e.target.name] : e.target.value 
    })
  }

  const  registerSubmitEvent = async (e)=>{
    e.preventDefault();
    try {
      await validationSchema.validate(form , {abortEarly: false})
      console.log('form submitted' , form);
      updateForm({
        name : '',
        email : '',
        mobile : '',
        password : '',
        reEnterPassword : '',
      })

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Account Created Successfully!",
        footer: '<a href="/login">Please Login</a>'
      });
    } 
    catch (error) {
      console.log(error.inner);
      const newErrors = {}

      error.inner.forEach(err => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors)
    }
    
  }
    return(<>
        
    <div className="container-fluid p-0  registerContainer">
        <div className="ml-auto registerImageContainer">
            <img className="" src={registerImg}/>
        </div>
          
        <div className="formContainer mr-auto my-1">
            <h2 className="text-center">Create Account</h2>
    <form onSubmit={registerSubmitEvent} className="">
  <div class="form-group">
    <label  for="exampleInpuName1">Name</label>
    <input type="text" class="form-control" name="name" value={form.name}  onChange={handleChange}  id="exampleInputName1" placeholder="Enter your Name"/>
   {errors.name && <div className="error text-danger text-bold"> {errors.name} </div>}
  </div>
  <div class="form-group">
    <label  for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" name="email" value={form.email}  onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your e-mail"/>
   {errors.email && <div className="error text-danger text-bold"> {errors.email } </div>}

  </div>
  <div class="form-group">
    <label  for="exampleInpuNumber">Mobile No.</label>
    <input type="text" class="form-control" name="mobile" value={form.mobile} onChange={handleChange} id="exampleInpuNumber" placeholder="Enter your mobile no"/>
   {errors.mobile && <div className="error text-danger text-bold"> {errors.mobile } </div>}

  </div>
  <div class="form-group">
    <label  for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" name="password" value={form.password} onChange={handleChange} id="exampleInputPassword1" placeholder="Enter Password"/>
    <small id="exampleInputPassword1" class="form-text text-dark font-weight-bold">Password must be atleast 6 characters</small>
   {errors.password && <div className="error text-danger text-bold"> {errors.password } </div>}

  </div>
  <div class="form-group">
    <label  for="exampleInputPassword2">Re-enter Password</label>
    <input type="password" class="form-control" name="reEnterPassword" onChange={handleChange} value={form.reEnterPassword} id="exampleInputPassword2" placeholder="Re-enter Password"/>
    {/* <small id="exampleInputPassword1" class="form-text text-dark font-weight-bold">Password must be atleast 6 characters</small> */}
    {errors.reEnterPassword && <div className="error text-danger text-bold"> {errors.reEnterPassword } </div>}

  </div>
 
  <button type="submit" class="btn registerSubmit w-100">CREATE AN ACCOUNT</button>
  
</form>
<p className="mt-3 text-muted">By creating an account, you agree to our  <NavLink to={''}>Terms of Use </NavLink> and our <NavLink to={""}>Privacy Policy</NavLink>.</p>
<p className="text-muted mb-0"> Already have an account ?   <NavLink to={"/login"}>Sign-in</NavLink>.</p>

        </div>
    </div>
    </>)
}


export default React.memo(Register);