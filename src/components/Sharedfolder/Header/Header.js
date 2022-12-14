import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import { useState } from 'react';
import { darkTheme, lightTheme } from '../../DarkLight/theme';
import { GlobalStyles } from '../../DarkLight/global';
import { ThemeProvider } from 'styled-components'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {

        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))

    }
    return (

        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* item-1 */}
                        <li><Link to='/' className="btn btn-ghost normal-case text-xl hover:text-warning">Home</Link>
                            <Link to='/' className="btn btn-ghost normal-case text-xl hover:text-warning">Courses</Link> </li>
                        {/* item-1 end */}
                        <li tabIndex={0}>
                            {/* parent  */}
                            <span className="justify-between flex-col">
                                <Link to='/faq' className="btn btn-ghost normal-case text-xl hover:text-warning">FAQ</Link>
                                <Link to='/blog' className="btn btn-ghost normal-case text-xl hover:text-warning">Blog</Link>
                                <Link to='/about' className="btn btn-ghost normal-case text-xl hover:text-warning">About</Link>
                            </span>
                            {/* parent end */}
                        </li>
                        {/* item-3 */}
                        <li> {
                            user?.email ?
                                <Link to='/' className="btn btn-ghost normal-case text-xl hover:text-warning"><button onClick={handleLogOut}>Log out</button></Link>

                                :
                                <Link to='/login' className="btn btn-ghost normal-case text-xl hover:text-warning">Log in</Link>
                        }

                            <Link to='/signup' className="btn btn-ghost normal-case text-xl hover:text-warning">Sign Up</Link></li>
                        {/* item-3 end */}
                    </ul>
                </div>
                <div className='flex'>
                    <div className='rounded-full'>
                        <Link>
                            <img className='rounded-full w-12 h-12 ' src=' https://www.kindpng.com/picc/m/4-41409_developer-png-png-download-developer-png-no-background.png' alt='logo' />

                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="btn btn-ghost normal-case "><span className=' lg:text-xl uppercase text-warning lg:font-extrabold'>Programming School</span></Link>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {/* item-1 */}
                    <li><Link to='/' className="btn btn-ghost normal-case text-xl hover:text-warning">Home</Link>
                        <Link to='/' className="btn btn-ghost normal-case text-xl hover:text-warning">Courses</Link></li>
                    {/* item-1 end */}
                    <li tabIndex={0}>
                        {/* parent */}
                        <Link to='/faq' className="btn btn-ghost normal-case text-xl hover:text-warning">FAQ</Link>
                        <Link to='/blog' className="btn btn-ghost normal-case text-xl hover:text-warning">Blog</Link>
                        <Link to='/about' className="btn btn-ghost normal-case text-xl hover:text-warning">About</Link>
                    </li>
                    {/* parent end */}
                    {/* item-3 */}
                    <li> {
                        user?.email ?
                            <Link to='/' className="btn btn-ghost normal-case text-xl hover:text-warning"><button onClick={handleLogOut}>Log out</button></Link>

                            :
                            <Link to='/login' className="btn btn-ghost normal-case text-xl hover:text-warning">Log in</Link>
                    }

                        <Link to='/signup' className="btn btn-ghost normal-case text-xl hover:text-warning">Sign Up</Link></li>
                    {/* item-3 end */}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/profile' className="justify-between btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full text-xl text-green-700 text-bold">
                        <img src={user?.photoURL} alt='user' title={user?.displayName} />
                    </div>
                </Link>
                <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme} >
                    <input onClick={toggleTheme} type="checkbox" className="toggle toggle-sm " />
                    <GlobalStyles />
                </ThemeProvider >
            </div>
        </div >
    );
};

export default Header;