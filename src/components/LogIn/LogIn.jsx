import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {setReload, logInUser, googleLogIn, githubLogIn} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        const currentUser = {email, pass}
        console.log(currentUser);

        logInUser(email, pass)
        .then(result=> {
            const signInUser = result.user;
            console.log(signInUser);
            form.reset();
            toast.success('Login successful!');
            setReload(true);
                navigate("/");
        })
        .catch(error=> {
            console.log(error.message);
            toast.error(error.message);
        })
    }

    const handleGoogleLogIn = () =>{
        googleLogIn()
        .then(result => {
            const googleSignInUser = result.user;
            console.log(googleSignInUser);
            toast.success('Login successful!');
            navigate("/");
        })
        .catch(error=> {
            console.log(error.message);
            toast.error(error.message);
        })
    }

    const handleGithubLogIn = () =>{
        githubLogIn()
        .then(result=> {
            const githubSignInUser = result.user;
            console.log(githubSignInUser);
            toast.success('Login successful!');
            navigate("/");
        })
        .catch(error => {
            console.log(error.message);
            toast.error(error.message);
        })
    }

    return (
        <div className="mt-10">
            <div className="hero min-h-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:p-6 lg:text-left">
                        <h1 className="text-5xl text-red-600 font-bold">Login now!</h1>
                        <p className="py-6">Explore the Art & Craft Collection Log in now and provide your information</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" id="email" className="input input-bordered" required />
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary text-white text-xl font-bold">Login</button>
                            </div>
                        </form>
                        <p className="mb-3 text-center text-base">Don`t have an account? <br /> <Link to="/register" className="text-red-500 text-xl font-bold">Register Now</Link></p>
                        <div>
                            <div className="text-center md:flex lg:flex justify-between p-2">
                                <button onClick={handleGoogleLogIn} className="btn btn-outline mt-2"><FaGoogle></FaGoogle>
                                    Login With Google
                                </button>
                                <button onClick={handleGithubLogIn} className="btn btn-outline my-2"><FaGithub></FaGithub>
                                    Login With Github
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;