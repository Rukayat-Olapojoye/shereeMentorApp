import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../components/stateprovider';
import DefaultLayout from '../../layouts/default-layout';
import './register.css';
import { toast } from 'react-toastify';

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
    const userHistory = useHistory();

    //Fucntion for the user registartion handler
    function registerUser({ fullname, email, password, confirmpassword }) {
        // Ensuring user provides all inputs
        if (!email) {
            return toast.error('Please provide an email');
        }
        if (!password) {
            return toast.error('please provide a Password');
        }

        if (password !== confirmpassword) {
            return toast.error("passwords don't match");
        }

        let userFound = localStorage.getItem(email);
        console.log(userFound);
        if (userFound) {
            return toast.success(
                'This user has already been registered, Please log in',
            );
        }

        // create new user object and save it to local storage
        const newUser = {
            fullname: fullname,
            email: email,
            password: password,
            userId: Date.now(),
        };

        // save the users data for accessing later
        localStorage.setItem(email, JSON.stringify(newUser));
        toast.success('User created Sucessfully, please log in to continue!');

        context.dispatch({
            type: 'REGISTER',
            payload: {
                userId: newUser.userId,
                userEmail: newUser.email,
            },
        });
        userHistory.push('/login');
    }

    // Register form template
    return (
        <DefaultLayout>
            <div className="limiter">
                <div className="wrap-login100">
                    <form
                        className="login100-form p-l-55 p-r-55 p-t-80"
                        onSubmit={handleSubmit(registerUser)}
                    >
                        <span className="login100-form-title">Sign Up!</span>
                        <div className="wrap-input100">
                            <input
                                className="input100"
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                {...register('fullname', { required: true })}
                            />
                        </div>

                        <div className="wrap-input100">
                            <input
                                className="input100"
                                type="text"
                                name="username"
                                placeholder="Username, e.g: jane.doe@gmail.com"
                                {...register('email')}
                            />
                        </div>
                        <div className="wrap-input100">
                            <input
                                className="input100"
                                type="password"
                                name="pass"
                                id="password"
                                placeholder="Password"
                                {...register('password')}
                            />
                        </div>
                        <div className="wrap-input100">
                            <input
                                className="input100"
                                type="password"
                                name="Confirmpassword"
                                id="confirmpassword"
                                placeholder="Confirm Password"
                                {...register('confirmpassword')}
                            />
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                {' '}
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default RegisterPage;
