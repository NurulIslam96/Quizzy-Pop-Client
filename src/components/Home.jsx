import React from 'react';
import Topics from './Topics';

const Home = () => {
    return (
        <div>
            <div className='flex'>
                Hello
                <img src="https://merakiui.com/images/header-image.svg" className='w-1/3' alt="" />
            </div>
            <Topics></Topics>
        </div>
    );
};

export default Home;