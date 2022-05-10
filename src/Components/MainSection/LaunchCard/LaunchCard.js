import React from 'react';
import './LaunchCard.css';

const LaunchCard = ({ launch }) => {
    const {
        flight_number,
        mission_name,
        mission_id,
        launch_year,
        launch_success,
        rocket,
        links } = launch

    const { mission_patch_small } = links

    const {
        first_stage: {
            cores: [
                { land_success }
            ]
        },
    } = rocket

    return (
        <div className='launch-card'>
            <div className="project-image-container">
                <img src={mission_patch_small} className='project-image' alt="" />
            </div>
            <p className="project-name">
                {mission_name} #{flight_number}
            </p>
            <div className="mission-ids">
                <p className="mission-ids-heading">
                    Mission-IDs:
                </p>
                {mission_id.length > 0 ?
                    <li className='mission-id-list'>
                        {mission_id}
                    </li>
                    :
                    <li className='mission_id_list'>
                        Unavailable
                    </li>
                }
            </div>
            <p className="launch-year-details">
                Launch Year: <span className='launch-year-value'>{launch_year}</span>
            </p>
            <p className="successful-launch-details">
                Successful Launch: <span className='successful-launch-value'>{launch_success === true ? 'True' : 'False'}</span>
            </p>
            <p className="successful-landing-details">
                successful-landing: <span className='successful-landing-value'>{land_success === true ? 'True' : 'False'}</span>
            </p>
        </div>
    );
};

export default LaunchCard;