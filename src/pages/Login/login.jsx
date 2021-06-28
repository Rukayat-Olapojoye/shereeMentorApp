import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../components/stateprovider';
import './login.css';



function LoginPage() {

    const context = useContext(AppContext);
    const { register, handleSubmit } = useForm();
    const userHistory = useHistory();


    //Function for handling user login
    const Userlogin = ({ email, password }) => {


        //Ensuring all users provies all inputs
        // if (!email) {
        //     return alert("Please provide an email");
        // }
        // if (!password) {
        //     return alert("Please provide a Password");
        // }

        const user = localStorage.getItem(email);

        if (!user) {
            return alert("An account for this email was not found");
        }

        const userdata = JSON.parse(user);
        console.log(userdata);

        if (password !== userdata.password) {
            return alert("Email or Password was incorrect");
        }

        alert("Login successful for: " + email);

        context.dispatch({
            type: 'LOGIN',
            payload: {
                isLoggedIn: true,
                userEmail: userdata.email,
            },
        });
        userHistory.push('/mentorspage');


    };




    return (

        <div className="limiter">
            <div className="wrap-login100">
                <form
                    className="login100-form  p-l-55 p-r-55 p-t-80"
                    onSubmit={handleSubmit(Userlogin)}>
                    <span className="login100-form-title">Sign In</span>
                    <div className="wrap-input100">
                        <input
                            className="input100"
                            type="text" name="username"
                            placeholder="Email"
                            required
                            {...register("email", { required: true })} />
                    </div>
                    <div className="wrap-input100">
                        <input className="input100"
                            type="password" name="pass"
                            placeholder="Password"
                            required
                            {...register("password", { required: true })} />

                    </div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn" type="submit"> Sign in</button>
                    </div>


                    <div className="flex-col-c p-t-170 p-b-40">
                        <span className="txt1 p-b-9">
                            Don’t have an account?
                        </span>
                        <a href="/register" className="txt3">Sign up here!</a><br />

                    </div>
                </form>
            </div>
        </div>

    );
}

export default LoginPage;
