import { Link } from "react-router-dom";
import '../assets/css/login.css';
import Input from './../components/Global/Input';
import Button from './../components/Global/Button';

const RegisterPage = () => {
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Register</h1>
            <div className="form-login-register">
              <form action>
                <div className="form-control">
                  <Input type="text" label="Username" placeholder="Enter Username ..."/>
                </div>
                <div className="form-control">
                  <Input type="password" label="Password" placeholder="Enter Password ..."/>
                </div>
                <div className="form-control">
                  <Input type="password" label="Confirm Password" placeholder="Enter Confirm Password ..."/>
                </div>
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" submittype="button" size="large" loading="false" title="Submit">Submit</Button>
                  <Link to="/login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  );
}

export default RegisterPage;
