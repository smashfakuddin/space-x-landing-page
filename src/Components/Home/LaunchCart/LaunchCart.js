import React from 'react';
import './LaunchCart.css';

const LaunchCart = ({ singleLaunch }) => {
    const { mission_name, flight_number, launch_year, launch_landing } = singleLaunch;
    const { mission_patch } = singleLaunch.links;
    console.log(singleLaunch.launch_success);

    return (
        <div className='col-lg-2 col-md-6 cart'>
            <img  src={mission_patch} alt="" width='' />
            <h6>{mission_name} # {flight_number}</h6>
            <h6>Misson Id: { }</h6>
            <h6>Launch Year:{launch_year}</h6>
            <h6>Successful Launch: {launch_landing}</h6>
        </div>
    );
};

export default LaunchCart;