import React from 'react';

const LaunchCart = ({ singleLaunch }) => {
    const { mission_name, flight_number, launch_year, launch_success } = singleLaunch;
    const { mission_patch } = singleLaunch.links;

    return (
        <div className='col-lg-3'>
            <img src={mission_patch} alt="" width='125' />
            <h6>{mission_name} # {flight_number}</h6>
            <h6>Misson Id: { }</h6>
            <h6>Launch Year:{launch_year}</h6>
        </div>
    );
};

export default LaunchCart;