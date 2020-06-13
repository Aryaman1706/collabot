import React, { Fragment } from 'react';

import Profile from '../Profile/Profile';
import ProjectCollection from '../Project/ProjectCollection';
import Navbar from '../Components/Navbar';

const Home = () => {
    return (
        <Fragment>
            <div style={{height:"100vh"}}>
            <Navbar />
                <div className="row" style={{marginTop:"20px", marginBottom:"20px", height: "85%"}}>
                    <Profile />
                    <ProjectCollection />
                </div>
            </div>
        </Fragment>
    )
}

export default Home
