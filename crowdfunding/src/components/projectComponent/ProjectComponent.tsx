import React from "react";

function ProjectComponent() {
  return (
    <div className="project-container">
      <div className="project-description">
        <h3>About this project</h3>

        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand. <br/><br/>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk space
            below your computer to allow notepads, pens, and USB sticks to be
            stored under the stand.</p>
      </div>

      <div className="project_container">

      <div className="project">
        <div className="title-project-box">
          <h3>Bamboo Stand</h3>
          <p>
          Pledge $25 or more
          </p>
        </div>
        <div className="description">
          <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
          you’ll be added to a special Backer member list.</p>
        </div>
        <div className="reward-container">
          <span>
            <h1> 101</h1>
            <p>left</p>
          </span>
          <button>Select Reward</button>
        </div>
      </div>

      <div className="project">
        <div className="title-project-box">
          <h3>Black Edition Stand</h3> <p>Pledge $75 or more</p>
        </div>
        <div className="description">
          <p> You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
          member list. Shipping is included.</p>
        </div>

        <div className="reward-container">
          <span>
            <h1>  64 </h1>
            <p> left</p>
          </span>
          <button>Select Reward</button>
        </div>
      </div>

      <div className="project-finished">
        <div className="title-project-box-finished">
          <h3>  Mahogany Special Edition</h3> <p>Pledge $200 or more</p>
        </div>
        <div className="description-finished">
        <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included.</p>
        </div>
        
        <div className="reward-container-finished">
          <span>
            <h1>0 </h1>
            <p>left</p>
          </span>
          <button>Select Reward</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
