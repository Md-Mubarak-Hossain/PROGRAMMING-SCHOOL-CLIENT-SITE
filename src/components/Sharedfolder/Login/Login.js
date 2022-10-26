import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.from?.state?.pathname || '/';
    const { signIn, logOut } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
                <h1 className="text-4xl font-extrabold text-primary uppercase">Please Login now!</h1>
                <form onSubmit={handleSubmit} className="card flex w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <h1><small>Haven't account?</small><Link to='/signup'><button className='btn btn-active btn-link'>Sign Up</button></Link></h1>
                        </div>
                    </div>

                </form>
            </div>
        </div >
    );
};

export default Login;