import React , {useState} from "react";
import loginImg from '../../images/Group 234.svg';
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from 'yup';




// css
import '../../pages/Login/Login.css';


function Login(){

  const [loginForm , updateLoginForm] = useState({
    email : '',
    password : '',  
  })

  const [errors , setErrors] = useState({})

  const validationSchema = Yup.object({
    email : Yup.string().required('email is required')
    .email('invalid email format'),
    password : Yup.string()
    .required('password is required')
    .min(6, 'Password must be atleast 6 characters'),
     
  })

  const navigate = useNavigate();

  function handleChange(e){
    console.log(loginForm);
    updateLoginForm({
      ...loginForm,
      [e.target.name] : e.target.value 
    })
  }

const submitEvent = async (e)=>{
  e.preventDefault();
  try {
    await validationSchema.validate(loginForm , {abortEarly: false})
    // localStorage.setItem('email' ,  loginForm.email );
    // localStorage.setItem('password' , loginForm.password);
    navigate('/')

  } catch (error) {
    console.log(error.inner);
      const newErrors = {}

      error.inner.forEach(err => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors)
  }

}


const keepMeSignedIn = ()=>{
    localStorage.setItem('isLoggedIn' , true);
}

    return(<>
          
      <div className="container-fluid p-0 loginContainer">
        <div className="ml-auto loginImageContainer">
            <img className="" src={loginImg}/>
        </div>
          
        <div className="loginFormContainer mr-auto my-5">
            <h2 className="text-center">Sign In</h2>


    <form  onSubmit={submitEvent} >
  <div class="form-group">
    <label  for="exampleInputEmail2">Email address</label>
    <input type="email" class="form-control" name="email" value={loginForm.email}  onChange={handleChange} id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter your e-mail"/>
   {errors.email && <div className="error text-danger text-bold"> {errors.email} </div>}
  </div>
 
  <div class="form-group">
    <label  for="exampleInputPassword2">Password</label>
    <input type="password" class="form-control" name="password" value={loginForm.password} onChange={handleChange}  id="exampleInputPassword2" placeholder="Enter Password"/>
    <small id="exampleInputPassword2" class="form-text text-dark font-weight-bold">Password must be atleast 6 characters</small>
   {errors.password && <div className="error text-danger text-bold"> {errors.password} </div>}

  </div>
  <button type="submit"  className="btn loginSubmit w-100">Sign In</button>
  
</form>
 <NavLink className='' to={'/resetPassword'}> <p className="text-right text-muted">Forgot your password </p></NavLink>

 <button onClick={keepMeSignedIn()} class="form-check checkBtn">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">keep me signed in</label>
  </button>

<p className="mt-3 text-muted">By signing in you agreeing to our  <NavLink to={''}>Terms of Use </NavLink> and our <NavLink to={""}>Privacy Policy</NavLink>.</p>


<div className="footerRegsiter">
<p className="text-muted text-center d-flex justify-content-center"> <hr className="d-block" /> New to Site ? <hr/> </p>
<button onClick={()=>{ navigate('/register')}} className="btn loginSubmit w-100"> CREATE AN ACCOUNT </button>
</div>

        </div>
    </div>
    </>)






}


export default React.memo(Login);