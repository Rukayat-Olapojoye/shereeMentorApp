import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../components/stateprovider';
import './Registermentor.css';
import DefaultLayout from '../../layouts/default-layout';
import { toast } from 'react-toastify';

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
    const ImageUploadHandler = async () => {

        const formData = new FormData();
        //console.log(formData);
        formData.append("file", context.state.imageSelected);
        formData.append("upload_preset", "sheree_mentor");


        // saving image on cloudinary space into the wtf_mentors folder

        const response = await Axios.post(
            "https://api.cloudinary.com/v1_1/ddg54qg6i/image/upload", formData)
        console.log(response);
        if (response.status === 200) {
            return response.data.url;
        }
        return null;


    };

    //Fucntion for the user registartion handler
    function registerMentor({ fullname, email, password, confirmpassword, contact, hobbies, country, language, company, role, career, expertise }) {

        // Ensuring user provides all inputs
        if (!email) {
            return toast.error("Please provide an email");
        }
        if (!password) {
            return toast.error("please provide a Password");
        }

        if (password !== confirmpassword) {
            return toast.error("passwords don't match");
        }


        let storage = localStorage.getItem('mentor-list');
        let mentorListInStorage = storage ? JSON.parse(storage) : [];
        let userFound = mentorListInStorage.findIndex(_mentor => _mentor.email === email) >= 0;
        if (userFound) {
            return toast.success("This user email with " + email + " has already been registered, Please log in");
        }

        ImageUploadHandler().then((imageUrl) => {

            const newMentor = {
                id: Date.now(),
                name: fullname,
                country: country,
                company: company,
                role: role,
                expertise: expertise,
                advice: career,
                hobbies: hobbies,
                contact: contact,
                image: imageUrl,
                languages: language,
                email: email,
                password: password

            };

            // save the users data for accessing later
            localStorage.setItem('mentor-list', JSON.stringify([newMentor, ...mentorListInStorage]))
            toast.success("Thank you for coming onboard, your profile has been created!");


            // dispatch for REGISTER_MENTOR carrying the newMentor Object
            context.dispatch({
                type: 'REGISTER_MENTOR',
                payload: {
                    mentorUser: newMentor,
                },
            });
            userHistory.push('/login');

        })

    }

    // Register form template
    return (
        <DefaultLayout>
            <div className="container-div">
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
                                    {...register("email")} />
                            </div>
                            <div className="wrap-input100">
                                <input className="input100"
                                    type="password" name="pass"
                                    id="password"
                                    placeholder="Password"
                                    {...register("password")} />

                            </div>
                            <div className="wrap-input100">
                                <input className="input100"
                                    type="password" name="Confirmpassword"
                                    id="confirmpassword"
                                    placeholder="Confirm Password"
                                    {...register("confirmpassword")} />
                            </div>

                            <div className="wrap-input100">
                                <input className="input100"
                                    type="tel"
                                    name="contact"
                                    id="phonenumber"
                                    placeholder="Phonenumber"
                                    {...register("contact")} />
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
                                <input className="input100"
                                    type="text" name="expertise"
                                    placeholder="Expertise"
                                    {...register("expertise", { required: true })} />

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
                                <h4>Upload a professional Head Shot.</h4>
                                <input
                                    type="file"
                                    name="mentorimage"
                                    id="mentorimage"
                                    onChange={ImageSelectorHandler} />

                                {/* <button type="button"
                                    onClick={ImageUploadHandler}
                                    className="button-upload">Upload Image </button> */}
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn"> Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </DefaultLayout>
    );
}

export default RegisterMentor;
