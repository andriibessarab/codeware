import {Link} from "react-router-dom";

import "./LoginPage.scss";

const LoginPage = () => {
    return (
        <div>
            <div className="page-container">
                <div className="container-left bg">

                    <h2>Log In</h2>
                    <p>By logging into ODE you agree to <Link to="tos">Terms and Conditions</Link> and <Link to="privacy">Privacy Policy</Link>.</p>
                </div>
                <div className="container-right">
                    <form action="" method="">
                        <label htmlFor="email">Email/Username</label>
                        <input type="email" placeholder="email" id="email"/>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="password" id="password"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
