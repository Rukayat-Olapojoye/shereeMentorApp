import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../components/stateprovider';
import './Registermentor.css';
//import { cloudinary } from 'cloudinary-core';

function RegisterMentor() {
    const { register, handleSubmit } = useForm();
    const context = useContext(AppContext);
    const userHistory = useHistory();
    let imageselect = "";

    // Handler for Image selection  for upload
    const ImageSelectorHandler = (e) => {
        imageselect = e.target.files[0];

        //console.log(imageselect);
        context.dispatch({
            type: 'SELECT_IMAGE',
            payload: {
                imageSelected: imageselect,
            },
        });
    }

    // Handler for uploading selected image
    const ImageUploadHandler = () => {
        const formData = new FormData();
        //console.log(formData);
        formData.append("file", context.state.imageSelected);
        formData.append("upload_preset", "sheree_mentor");


        // saving image on cloudinary space into the wtf_mentors folder
        Axios.post(
            "https://api.cloudinary.com/v1_1/ddg54qg6i/image/upload", formData)
            .then((response) => {
                if (response.statusText === "Ok") {

                    // Dispatch to update our image in the state.
                    context.dispatch({
                        type: 'SAVE_IMAGE',
                        payload: {
                            imageUploaded: response.data.url,
                        },
                    });

                }


            });


    };

    //Fucntion for the user registartion handler
    function registerMentor({ fullname, email, password, confirmpassword, contact, hobbies, country, language, company, role, career }) {

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
        if (userFound) {
            return alert("This user email with " + email + " has already been registered, Please log in");
        }

        // create new mentor object and save it to local storage
        const newMentor = {
            fullname: fullname,
            email: email,
            password: password,
            userId: Date.now(),
            career: career,
            language: language,
            country: country,
            company: company,
            role: role,
            hobbies: hobbies,
            contact: contact,
            mentorImage: context.state.imageUploaded,

        };

        // save the users data for accessing later
        localStorage.setItem(email, JSON.stringify(newMentor))
        alert("User created Sucessfully, please log in to continue!");


        // dispatch for REGISTER_MENTOR carrying the newMentor Object
        context.dispatch({
            type: 'REGISTER_MENTOR',
            payload: {
                mentorUser: newMentor,
            },
        });
        userHistory.push('/mentors');
        //...........IMPORTANT!!!!!!..........................................

        // We should call another dispatch her or a component that pushes the newly added mentor to the mentors list


    }

    // Register form template
    return (
        <div className="limiter">
            <div className="wrap-login100">
                <form className="login100-form p-l-55 p-r-55 p-t-80"
                    onSubmit={handleSubmit(registerMentor)}>
                    <span className="login100-form-title">Mentor Sign Up!</span>
                    <div>
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

                        <div className="wrap-input100">
                            <input className="input100"
                                type="tel"
                                name="contact"
                                id="contact"
                                placeholder="Phonenumber"
                                {...register("contact", { required: true })} />
                        </div>

                        <div className="wrap-input100">
                            <input className="input100"
                                type="text" name="country"
                                placeholder="Country"
                                {...register("country", { required: true })} />
                        </div>
                        <div className="wrap-input100" >
                            <input className="input100"
                                type="text" name="language"
                                placeholder="Language"
                                {...register("language", { required: true })} />
                        </div>

                    </div>

                    {/* Second column div here */}
                    <div>
                        <div className="wrap-input100">
                            <input className="input100"
                                type="text" name="company"
                                placeholder="Company"
                                {...register("company", { required: true })} />

                        </div>
                        <div className="wrap-input100 ">
                            <input className="input100"
                                type="text" name="role"
                                placeholder="Role"
                                {...register("role", { required: true })} />

                        </div>
                        <div className="wrap-input100 ">
                            <textarea
                                // cols="100px"
                                id="career"
                                type="text" name="career"
                                className="input100"
                                placeholder="Add career interest here"
                                {...register("career", { required: true })}
                            />

                        </div>


                        <div className="container-login100-form-btn">
                            <h4>Upload a profession Head Shot.</h4>
                            <input
                                type="file"
                                name="mentorimage"
                                id="mentorimage"
                                onChange={ImageSelectorHandler} />

                            <button onClick={ImageUploadHandler} className="button-upload">Upload Image </button>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn"> Sign Up</button>
                        </div>
                    </div>
                </form>


            </div>

        </div>

    );
}

export default RegisterMentor;
