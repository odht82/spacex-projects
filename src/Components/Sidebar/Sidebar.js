import React, { useContext } from 'react';
import './Sidebar.css';
import { LaunchesContext } from '../../Context/LaunchesContext';

const Sidebar = () => {
    const { setLaunchYear, setSuccessLaunch, setSuccessLand } = useContext(LaunchesContext)

    const toggleLaunchSuccess = (e) => {
        if (e.target.value === 'true') {
            setSuccessLaunch(true)
        } else if (e.target.value === 'false') {
            setSuccessLaunch(false)
        }
        e.preventDefault()
    }

    const toggleLandSuccess = (e) => {
        if (e.target.value === 'true') {
            setSuccessLand(true)
        } else if (e.target.value === 'false') {
            setSuccessLand(false)
        }
        e.preventDefault()
    }
    const toggleLaunchYear = (e) => {
        setLaunchYear(e.target.value)
        e.preventDefault()
    }

    return (
        <div className='side-bar-container'>
            <div className='side-bar'>
                {/* filter heading */}
                <p className="side-bar-heading-text">
                    Filters
                </p>

                {/* Launch year filter section */}
                <div className="launch-year">
                    <p className="filter-heading">
                        Launch Year
                    </p>
                    <hr className='filter-heading-underline' />

                    <div className="filter-buttons-group">
                        <button className="filter-button year-filter-button" value={2006} onClick={toggleLaunchYear}>
                            2006
                        </button>
                        <button className="filter-button year-filter-button" value={2007} onClick={toggleLaunchYear}>
                            2007
                        </button>
                        <button className="filter-button year-filter-button" value={2008} onClick={toggleLaunchYear}>
                            2008
                        </button>
                        <button className="filter-button year-filter-button" value={2009} onClick={toggleLaunchYear}>
                            2009
                        </button>
                        <button className="filter-button year-filter-button" value={2010} onClick={toggleLaunchYear}>
                            2010
                        </button>
                        <button className="filter-button year-filter-button" value={2011} onClick={toggleLaunchYear}>
                            2011
                        </button>
                        <button className="filter-button year-filter-button" value={2012} onClick={toggleLaunchYear}>
                            2012
                        </button>
                        <button className="filter-button year-filter-button" value={2013} onClick={toggleLaunchYear}>
                            2013
                        </button>
                        <button className="filter-button year-filter-button" value={2014} onClick={toggleLaunchYear}>
                            2014
                        </button>
                        <button className="filter-button year-filter-button" value={2015} onClick={toggleLaunchYear}>
                            2015
                        </button>
                        <button className="filter-button year-filter-button" value={2016} onClick={toggleLaunchYear}>
                            2016
                        </button>
                        <button className="filter-button year-filter-button" value={2017} onClick={toggleLaunchYear}>
                            2017
                        </button>
                        <button className="filter-button year-filter-button" value={2018} onClick={toggleLaunchYear}>
                            2018
                        </button>
                        <button className="filter-button year-filter-button" value={2019} onClick={toggleLaunchYear}>
                            2019
                        </button>
                        <button className="filter-button year-filter-button" value={2020} onClick={toggleLaunchYear}>
                            2020
                        </button>
                    </div>
                </div>

                {/* Successful Launch filter section */}
                <div className="successful-launch">
                    <p className="filter-heading">
                        Successful Launch
                    </p>
                    <hr className='filter-heading-underline' />

                    <div className="successful-filter-buttons-group">
                        <button className="filter-button launch-filter-button" value={true} onClick={toggleLaunchSuccess}>
                            True
                        </button>
                        <button className="filter-button launch-filter-button" value={false} onClick={toggleLaunchSuccess}>
                            False
                        </button>
                    </div>
                </div>

                {/* Successful landing filter section */}
                <div className="successful-landing">
                    <p className="filter-heading">
                        Successful Landing
                    </p>
                    <hr className='filter-heading-underline' />

                    <div className="landing-filter-buttons-group">
                        <button className="filter-button land-filter-button"
                            value={true}
                            onClick={toggleLandSuccess}>
                            True
                        </button>
                        <button className="filter-button land-filter-button" value={false} onClick={toggleLandSuccess}>
                            False
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Sidebar;