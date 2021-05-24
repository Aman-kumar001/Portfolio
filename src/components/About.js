import { makeStyles } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

const About = () => {
    return ( 
        <div className="about">
            <p className="heading">About Me</p>
            <div className="para">
                <p>
                    Hi, I am Aman Kumar student of <a href="https://www.iiitdmj.ac.in/">Indian Institute of Information Technology Jabalpur</a>, persuing BTech in Computer Science.<br/>
                    <br/>
                    Currently I am an Front-end enthusiast  Specialised in ReactJS with a goal to be a Full-stack Developer.<br/>
                </p>
            </div>
            <hr/>
            <div>
                <p className="icons">
                    <CodeIcon 
                    style={{color:"#ff6a6a", fontSize:"90px"}}
                    />
                    <LibraryBooksOutlinedIcon 
                    style={{color:"#ff6a6a", fontSize:"90px"}}
                    />
                    <SportsSoccerIcon 
                    style={{color:"#ff6a6a", fontSize:"90px"}}
                    />
                </p>
                <p className="label">
                    <h2>Web Developer</h2>
                    <h2>Student</h2>
                    <h2>Sportsperson</h2>
                </p>
            </div>
        </div>
     );
}
 
export default About;