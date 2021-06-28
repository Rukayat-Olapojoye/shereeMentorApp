import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../components/stateprovider';
import './register.css';

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
    const userHistory = useHistory();

    //Fucntion for the user registartion handler
    function registerUser({ fullname, email, password, confirmpassword }) {

        // Ensuring user provides all inputs
        if (!email) {
            return alert("Please provide an email");
        }
        if (!password) {
            return alert("please provide a Password");
        }

        if (password !== confirmpassword) {
            return alert("passwords don't match");
        }


        let userFound = localStorage.getItem(email);
        console.log(userFound);
        if (userFound) {
            return alert("This user has already been registered, Please log in");
        }


        // create new user object and save it to local storage
        const newUser = {
            fullname: fullname,
            email: email,
            password: password,
            userId: Date.now(),
        };

        // save the users data for accessing later
        localStorage.setItem(email, JSON.stringify(newUser))
        alert("User created Sucessfully, please log in to continue!");

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
        <div className="limiter">
            <div className="wrap-login100">
                <form className="login100-form p-l-55 p-r-55 p-t-80"
                    onSubmit={handleSubmit(registerUser)}>
                    <span className="login100-form-title">Sign Up!</span>
                    <div className="wrap-input100" >
                        <input className="input100"
                            type="text" name="fullname"
                            placeholder="Full Name"
                            {...register("fullname", { required: true })} />
                    </div>

                    <div className="wrap-input100">
                        <input className="input100"
                            type="text" name="username"
                            placeholder="Username, e.g: jane.doe@gmail.com"
                            {...register("email", { required: true })} />
                    </div>
                    <div className="wrap-input100">
                        <input className="input100"
                            type="password" name="pass"
                            id="password"
                            placeholder="Password"
                            {...register("password", { required: true })} />

                    </div>
                    <div className="wrap-input100 ">
                        <input className="input100"
                            type="password" name="Confirmpassword"
                            id="confirmpassword"
                            placeholder="Confirm Password"
                            {...register("confirmpassword", { required: true })} />

                    </div>

                    {/* <div className="wrap-input100 validate-input m-b-16">
                        <div className="select-list">
                            <h3>What mentorship focus are you looking at?</h3>
                            <select name="mentorship_focus" id="mentorship_focus">
                                <option selected value=""> Mentorship Focus</option>
                                <option value="Financial Intelligence">Financial Intelligence</option>
                                <option value="Career Planning">Career Planning</option>
                                <option value="Skill Development">Skill Development</option>
                                <option value="Career Planning">Career Planning</option>
                                <option value="Networking">Networking</option>
                                <option value="Family and Lifestyle">Family and Lifestyle</option>
                            </select>
                        </div>

                    </div> */}

                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn"> Sign Up</button>
                    </div>


                </form>
            </div>
        </div>

    );
}

export default RegisterPage;
