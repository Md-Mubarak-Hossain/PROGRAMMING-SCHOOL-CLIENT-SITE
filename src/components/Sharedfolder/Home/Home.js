import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='p-4'>
            <div className="flex w-full border">
                <div className="grid w-3/12 flex-grow card  place-items-center ">
                    <h2>Sidebar</h2>
                    <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                        <li className="menu-title">
                        </li>
                        <li><Link to=''>Item 1</Link></li>
                        <li><Link to=''>Item 2</Link></li>
                        <li><Link to=''>Item 3</Link></li>
                        <li><Link to=''>Item 4</Link></li>
                        <li><Link to=''>Item 5</Link></li>
                        <li><Link to=''>Item 6</Link></li>
                    </ul>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="grid w-9/12 flex-grow card  place-items-center">content</div>
            </div >
        </div>
    );
};

export default Home;