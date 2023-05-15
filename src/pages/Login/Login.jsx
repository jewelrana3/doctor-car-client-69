import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Login = () => {



    const {singIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleLogin=event=>{
        event.preventDefault();
        const form = event.target;
       
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        singIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
           
           
            navigate(from, { replace: true })
           
        })
        .catch(error => console.log(error));
}


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mr-10">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='text-3xl font-bold'>Login</h2>
                        <form onSubmit={handleLogin}>
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
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                               
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <h2>Have an Already Account?
                            <Link className='text-orange-600' to='/signup'>Sign Up</Link>
                            <SocialLogin></SocialLogin>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;