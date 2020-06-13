import React from 'react'

import ProjectItem from './ProjectItem';

const ProjectCollection = () => {
    return (
        <div className="col s9" style={{height:"100%"}}><div className="card-panel" style={{overflow:"auto",padding:"10px", borderRadius:"10px", margin:"0px", height:"100%", backgroundColor:"rgb(1, 22, 39)"}}>
            <div className="row" style={{margin:"0px"}}>
                <h4 className="left" style={{color:"rgb(32, 164, 243)", fontFamily: 'Philosopher sans-serif'}}>Projects</h4>
                <a href="#!" className="right" style={{marginTop:"25px"}}>Click to Add Projects<i className="material-icons left">add</i></a>
            </div>
            <div className="row" style={{margin:"0px"}}>
                <ProjectItem />
            </div>
        </div></div>
    )
}

export default ProjectCollection;