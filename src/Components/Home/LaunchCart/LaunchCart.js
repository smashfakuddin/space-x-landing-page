import React from 'react';
import './LaunchCart.css';

const LaunchCart = ({ singleLaunch }) => {
    const { mission_name, flight_number, launch_year, launch_success } = singleLaunch;
    const { mission_patch } = singleLaunch.links;
    console.log(launch_success);

    return (
        <div className='col-lg-2 col-md-4 col-sm-9 col-10 cart'>
            <img className='img-fluid'  src={mission_patch} alt="" width='' />
            <h6 className='cart-heading'>{mission_name} # {flight_number}</h6>
            <h6> <strong> Misson Id:</strong> {singleLaunch.mission_id[0] }</h6>
            <h6><strong>Launch Year:</strong>   {launch_year}</h6>
            <h6><strong>Successful Launch:</strong>  {launch_success}</h6>
            <h6><strong>Successful Landing:</strong>  {launch_success}</h6>
        </div>
    );
};

export default LaunchCart;