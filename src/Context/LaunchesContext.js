import React, { useState, createContext } from 'react';

export const LaunchesContext = createContext();

export const LaunchesProvider = props => {
    const [launches, setLaunches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [launchYear, setLaunchYear] = useState();
    const [successLaunch, setSuccessLaunch] = useState();
    const [successLand, setSuccessLand] = useState();

    // &launch_success=true
    // &land_success=true
    // &launch_year=2014
    // &launch_success=true&land_success=true&launch_year=2014



    const value = { loading, setLoading, launches, setLaunches, launchYear, setLaunchYear, successLaunch, setSuccessLaunch, successLand, setSuccessLand }

    return (
        <LaunchesContext.Provider value={value}>
            {props.children}
        </LaunchesContext.Provider>
    );
}