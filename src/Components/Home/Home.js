import React, { useEffect, useState } from 'react';
import './Home.css';
import YearData from '.././../Data/Data.json';
import StatusData from '../../Data/landingStatusData.json';
import { Button } from 'react-bootstrap';
import LaunchCart from './LaunchCart/LaunchCart';


const Home = () => {
    const [launch, setLaunch] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100')
            .then(res => res.json())
            .then(data => setLaunch(data))
    }, []);

// function one
    const [year, setYear] = useState('');
    const detectYear = year => {
        setYear(year.year);
    }

    const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setLaunch(data))
    }, [year]);

// function two
    const [status, setStatus] = useState('');
    const test = st => {
        setStatus(st.status);
    }
    const url2=`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${status}`
    useEffect(() => {
        fetch(url2)
            .then(res => res.json())
            .then(data => setLaunch(data))
    }, [status]);

// function three

    const [anotherStatus, setAnotherStatus] = useState('');
    const anotherTest = sta => {
        setAnotherStatus(sta.status);
    }
    const url3=`https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${anotherStatus}`
    useEffect(() => {
        fetch(url3)
            .then(res => res.json())
            .then(data => setLaunch(data))
    }, [anotherStatus]);


    return (
        <div className='home'>
            <h3>Space-X Programs</h3>
            <div className="row ">
                <div className="col-lg-2 mt-5">
                    <h5>Filters</h5>
                    <div>
                        <h5 className='heading'>Launch Year</h5>
                        <div className="row g-2 year">
                            {
                                YearData.map(year =>
                                    <div className="col-6 text-center mb-2 pe-3">
                                        <button className='customButton' onClick={() => { detectYear(year) }}>{year.year}</button>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div>
                        <h5 className='heading'>Successful Launch </h5>
                        <div className="row g-2 year">
                            {
                                StatusData.map(st =>
                                    <div className="col-6 text-center mb-2 pe-3">
                                        <button className='customButton' onClick={() => { test(st) }}>{st.status}</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div>
                        <h5 className='heading'>Successful Landing </h5>
                        <div className="row g-2 year">
                            {
                                StatusData.map(sta =>
                                    <div className="col-6 text-center mb-2 pe-3">
                                        <button className='customButton' onClick={() => { anotherTest(sta) }}>{sta.status}</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 ">
                    <div className="row justify-content-md-center mt-5">
                        {
                            launch.map(singleLaunch => <LaunchCart singleLaunch={singleLaunch} />)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;