import React, { useEffect, useState } from 'react';
import './Home.css';
import YearData from '.././../Data/Data.json'
import { Button } from 'react-bootstrap';
import LaunchCart from './LaunchCart/LaunchCart';


const Home = () => {
    const [launch, setLaunch] = useState([]);
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches?limit=100')
            .then(res => res.json())
            .then(data => setLaunch(data))
    }, []);

    const [year, setYear] = useState('');
    const test = year => {
        setYear(year.year);
    }

    const url = `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setLaunch(data))
    }, [year]);
    
    return (
        <div className='home'>
            <h3>Space-X Programs</h3>
            <div className="row">
                <div className="col-lg-3">
                    <h5>Filters</h5>
                    <div>
                        <h5 className='heading'>Launch Year</h5>
                        <div className="row g-2 year">
                            {
                                YearData.map(year =>
                                    <div className="col-6 text-center mb-2 pe-3">
                                        <Button onClick={() => { test(year) }}>{year.year}</Button>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div>
                        <h5 className='heading'>Successful Launch </h5>
                        <div className="row g-2 year">
                            <div className="col-6 text-center mb-2 pe-3">
                                <Button>True</Button>
                            </div>
                            <div className="col-6 text-center mb-2 pe-3">
                                <Button className='bg-gray'>False</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
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