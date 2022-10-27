import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        // // <div className="dropdown dropdown-end">
        // //     <label className="btn btn-ghost btn-circle avatar">
        // //         <div className="w-10 rounded-full">
        // //             <img src="https://placeimg.com/80/80/people" alt='user' />
        // //             <span className="badge">New</span>
        // //         </div>
        // //     </label>
        // //     <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        // //         <li>
        // //         </li>
        // //         <li><Link>Settings</Link></li>
        // //         <li><Link>Logout</Link></li>
        // //     </ul>
        // </div >
        <div className=' w-full'>
            <form className="card flex-shrink-0   shadow-2xl mx-auto">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" defaultValue={user?.displayName} className=" input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" defaultValue={user?.photoURL} placeholder="PhotoURL" name="photoURL" className=" input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder="email" name="email" className=" input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" />
                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>



    );
};

export default Profile;