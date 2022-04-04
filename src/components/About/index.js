import React from "react";
import profileImage from '../../assets/img/profile.jpg'


function About() {
  return (
    <div>
      <p className="content is-medium">Research Professional Specialized In Data Science</p>
      <hr />
      <img src={profileImage} className="my-2" style={{ height: "60%", width: "60%" }} alt="cover" />
      <p className="content mt-4">
        I am a Research Consultant in the Center for Clinical and Translational Science at The Ohio State University Wexner Medical Center.
        My resposibilities inlcude managing two funding programs; The CCTS Voucher Award Program and The CCTS Pilot Translational and
        Clinical Studies awards. The goal of both these programs is to award investigators funding for conducting research at OSU. Additionally
        I track and manage the metrics of 16 progras within our department to inform continous iprovement projects and demonstrate the value of 
        our department to the National Center for Advancing Translational Sciences and support our continued grant renewal efforts. I regularly 
        use my skills in data science and statistics to communicate data in meaninful ways to a wide variety of stakeholders.   
      </p>
      <p className="content">
        I have two Bachelor's degrees, one in Biology and one in Bioinformatics, along with a Master's degree in Epidemiology. The study of infectious 
        disease has always been my favorite and I've spent my entire educational career atempting to understand the mechanisms of infection. I am 
        currently looking for a career that will more closely align with my education and provide me the opportunity to continue studying infectious disease.
        I am an avid outdoorsman and enjoy hiking, camping, backpacking, rock climbing, and hunting. I love to run and lift weight and enjoy cooking and trying 
        new recipes in my free time.
      </p>
    </div>
  );
}

export default About;