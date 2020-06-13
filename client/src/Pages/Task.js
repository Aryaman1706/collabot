import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar'
import TitleCard from '../Task/TitleCard';
import TaskTeamCollection from '../Task/TaskTeam/TaskTeamCollection';

const Task = () => {
    return (
        <Fragment>
            <div style={{height:"100vh"}}>
                <Navbar backTo={"Title of open project"} link={"/project"} />
                <div className="row" style={{marginTop: "20px", marginBottom: "20px", height:"85%"}}>
                    <TitleCard />
                    <TaskTeamCollection />
                </div>
            </div>
        </Fragment>
    )
};

export default Task