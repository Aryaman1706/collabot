import React from 'react';

const TitleCard = () => {
    return (
        <div className="col s4" style={{height:"100%"}}><div className="card-panel" style={{overflow:"auto",padding:"10px", borderRadius:"10px", margin:"0px", borderStyle:"solid", borderColor:"rgb(1, 22, 39)", height:"100%", backgroundColor: "rgb(32, 164, 243)"}}>
            <p className="black-text" style={{marginTop:"5px", marginBottom:"5px"}}>Title</p>
            <h4 className="white-text" style={{fontFamily: 'Philosopher sans-serif', marginBottom:"5px", marginTop: "5px"}}>Project Title</h4>
            <p className="black-text" style={{marginTop:"5px", marginBottom:"5px"}}>Description</p>
            <p className="white-text" style={{marginTop:"5px", marginBottom:"5px",fontFamily: 'Philosopher sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop </p>
            <p className="black-text" style={{marginTop:"5px", marginBottom:"5px"}}>Refrences</p>
            <p className="white-text" style={{marginTop:"5px", marginBottom:"5px",fontFamily: 'Philosopher sans-serif'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop </p>
            
            <div className="row" style={{ margin:"0px", marginTop:"40px" }}>
                <a href="#!" className="white-text">Click to View Team<i className="material-icons left white-text">visibility</i></a>
                <a href="#!" className="white-text right">Click To Edit Project<i className="material-icons left white-text">edit</i></a>
            </div>
        </div></div>
    )
};

export default TitleCard
