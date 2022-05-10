import React, { useEffect, useContext } from 'react';
import LaunchCard from './LaunchCard/LaunchCard';
import Loading from '../Loading/Loading';
import './MainSection.css';
import { LaunchesContext } from '../../Context/LaunchesContext';

const MainSection = () => {
    const { loading, setLoading, launches, setLaunches, successLaunch, successLand, launchYear } = useContext(LaunchesContext)

    useEffect(() => {
        const path = 'https://api.spacexdata.com/v3/launches?limit=100'

        let search_text_concat = path.concat(
            successLaunch ? (successLaunch && `&launch_success=${successLaunch}`)
                : (!successLaunch && `&launch_success=${successLaunch}`)
        ).concat(
            successLand ? (successLand && `&land_success=${successLand}`)
                : (!successLand && `&land_success=${successLand}`)
        ).concat(
            launchYear ? `&launch_year=${launchYear}` : ''
        )

        const url = search_text_concat;
        console.log(url)
        fetch(`${url}`)
            .then(res => res.json())
            .then((result) => {
                setLaunches(result);
                setLoading(false)
            })
    }, [successLand, successLaunch, launchYear, setLoading, setLaunches])
    return (
        <div className='main-section'>
            {loading ?
                <div className="loading-section">
                    <Loading />
                </div> :
                <div className="card-section">
                    <div className="cards-container">
                        {
                            launches.map(launch => <LaunchCard
                                key={launch.flight_number}
                                launch={launch}
                            />
                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default MainSection;