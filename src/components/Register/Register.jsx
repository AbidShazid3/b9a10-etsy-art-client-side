import { useContext, useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {createUser, updateUserProfile, setReload} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const pass = form.password.value;
        const currentUser = {name, email, image, pass}
        console.log(currentUser);
        if(pass.length < 6){
            toast.error("Password should be at least 6 characters");
            return;
        }
        else if(!/[A-Z]/.test(pass)){
            toast.error("Password Must have an Uppercase letter");
            return;
        }
        else if(!/[a-z]/.test(pass)){
            toast.error("Password Must have a Lowercase letter");
            return;
        }

        createUser(email, pass)
        .then(result=> {
            const registerUser = result.user;
            console.log(registerUser);
            form.reset();
            toast.success('Login successful!');
            updateUserProfile(name, image)
            .then(()=>{
                setReload(true);
                navigate("/");
            })
        })
        .catch(error=> {
            console.log(error.message);
        })

    }

    return (
        <div className="mt-10">
            <div className="hero min-h-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:p-6 lg:text-left">
                        <h1 className="text-4xl text-red-600 font-bold">Register Now!</h1>
                        <p className="py-2 text-lg">Explore the Art & Craft Collection Log in now and provide your information</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" id="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" id="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="PhotoUrl" name="image" id="image" src="" alt="" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" id="password" className="input input-bordered w-full" required />
                                    <span onClick={() => setShowPassword(!showPassword)} className="absolute top-4 right-4">
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaRegEye ></FaRegEye>
                                        }
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <button className="text-xl btn btn-primary text-white">Register</button>
                            </div>
                        </form>
                        <p className="mb-3 text-center">Already have an account <br /><Link to="/logIn" className="text-red-600 text-xl font-bold">LogIn Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;