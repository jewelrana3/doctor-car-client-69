import { Link } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { createContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const SignUp = () => {

    const {createUser} = createContext(AuthContext)

    const handleSignup=event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(user=>{
            const result = user.result
            console.log(result)
        }).catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mr-10">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-3xl font-bold'>Sign Up</h2>
                        <form onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6"> 
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <h2>New cars doctors Account?
                        <Link className='text-orange-600' to='/login'>Login</Link>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;