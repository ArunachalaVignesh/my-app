
import './Login.css';
import { useHistory } from "react-router-dom";  

function Login(){
    
  let history = useHistory();
  
  function handleClick() {
    history.push("/home");
  }
    return(
    <form>
        <div className="container">
            <label for="uname"><b>USERNAME</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label for="psw"><b>PASSWORD</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <button type="button" onClick={handleClick} >Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember me 
        </label>
      </div>
      <div className="container"  style={{backgroundColor:'#f1f1f1'}}>
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw"><a href="#">Forgot password?</a></span>
      </div>
    </form>
    )

}export default Login;