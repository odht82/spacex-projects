import React from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar'
import MainSection from '../../Components/MainSection/MainSection'
import { LaunchesProvider } from '../../Context/LaunchesContext';

const Home = () => {

    return (
        <LaunchesProvider>
            <div className='home-page'>
                <div className='nav'>
                    <h3 className='page-heading'>SpaceX Launch Programs</h3>
                </div>
                <div className='content-section'>
                    <Sidebar />
                    <MainSection />
                </div>
            </div>
        </LaunchesProvider>
    );
};

export default Home;