import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../components/stateprovider';
import DefaultLayout from '../../layouts/default-layout';
import './login.css';
import { toast } from 'react-toastify';
//import {CookieProvider} from 'react-cookie';

function LoginPage() {

    const context = useContext(AppContext);
    const { register, handleSubmit } = useForm();
    const userHistory = useHistory();

    //Function for handling user login
    const Userlogin = ({ email, password }) => {

        let user = null;
        // try to find a  regular user
        if (localStorage.getItem(email)) {
            user = JSON.parse(localStorage.getItem(email))
        }

        // if that failed, find a mentor instead
        if (!user && localStorage.getItem('mentor-list')) {
            user = JSON
                .parse(localStorage.getItem('mentor-list'))
                .find(_mentor => _mentor.email === email);
        }

        if (!user) {
            return toast.error('An account for this email was not found');
        }

        const userdata = user;
        console.log(userdata);

        if (password !== userdata.password) {
            return toast.error('Email or Password was incorrect');
        }

        toast.success('Login successful for: ' + email);

        context.dispatch({
            type: 'LOGIN',
            payload: {
                isLoggedIn: true,
                userEmail: userdata.email,
            },
        });
        userHistory.push('/mentors');
    };

    return (
        <DefaultLayout>
            <div className="limiter">
                <div className="wrap-login100">
                    <form
                        className="login100-form  p-l-55 p-r-55 p-t-80"
                        onSubmit={handleSubmit(Userlogin)}
                    >
                        <span className="login100-form-title">Login</span>
                        <div className="wrap-input100">
                            <input
                                className="input100"
                                type="text"
                                name="username"
                                placeholder="Email"
                                required
                                {...register('email')}
                            />
                        </div>
                        <div className="wrap-input100">
                            <input
                                className="input100"
                                type="password"
                                name="pass"
                                placeholder="Password"
                                required
                                {...register('password')}
                            />
                        </div>
                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" type="submit">
                                {' '}
                                Login
                            </button>
                        </div>

                        <div className="flex-col-c p-t-170 p-b-40">
                            <span className="txt1 p-b-9">
                                Don’t have an account?
                            </span>
                            <a href="/register" className="txt3">
                                Sign up here!
                            </a>
                            <br />
                        </div>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default LoginPage;
