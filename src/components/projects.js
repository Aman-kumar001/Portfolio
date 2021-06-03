
import { Button, makeStyles } from "@material-ui/core";
import Fade from 'react-reveal/Fade';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Tilt from 'react-vanilla-tilt';
import challenge from "./media/chllange.jpg"
import simon from "./media/simon.jpg"
import phc from "./media/phc.jpg"
import weather from "./media/weather.jpeg"
import notes from "./media/notes.jpg"
import todo from "./media/todo.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const styles=makeStyles({
    button:{
        fontFamily:"Lufga",
        marginRight:"5px"
    },
    live:{
        fontFamily:"Lufga",
        marginLeft:"5px"
    }
})

const Projects = () => {
    const classes=styles();

    return ( 
        <div className="projs">
            <p className="heading">Projects</p> 
            <div className="row" data-aos="fade-right">
                <Tilt max="35" style={{color:"black"}}>
                <div className="card">
                    <img src={phc} alt="p1" height="300px" className="pic"/>
                    <div className="proj-dsc">
                        <p>PHC Management System</p>
                        <p>A Full-Stack Project done with a idea to automate the functioning of PHC.</p>
                        <a target=" " href="https://github.com/Aman-kumar001/PHC-Administration-Covid-19">
                        <Button
                        className={classes.button} 
                        variant="outlined"
                        color="inherit"
                        >CODE</Button>
                        </a>
                    </div>
                </div>
                </Tilt>
                <Tilt max="35" style={{color:"black"}}>
                <div className="card">
                    <img src={notes} alt="p1" height="300px" className="pic"/>
                    <div className="proj-dsc">
                        <p>Notes & Blogs</p>
                        <p>A platform whuch uses JSON server to create a Back-End space which stores articles written by user.</p>
                        <a target=" " href="https://github.com/Aman-kumar001/Blogging-page">
                        <Button 
                        className={classes.button}
                        variant="outlined"
                        color="inherit"
                        >CODE</Button>
                        </a>
                    </div>
                </div>
                </Tilt>
            </div>
            <div className="row" data-aos="fade-left">
                <Tilt max="35" style={{color:"black"}}>
                <div className="card">
                    <img src={weather} alt="p1" height="300px" className="pic"/>
                    <div className="proj-dsc">
                        <p>Weather App</p>
                        <p>A weather app which uses a open-weather api to fetch weather details.</p>
                        <a target=" " href="https://github.com/Aman-kumar001/weather-app">
                        <Button 
                        className={classes.button}
                        variant="outlined"
                        color="inherit"
                        >CODE</Button>
                        </a>
                        <a target=" " href="https://aman-kumar001.github.io/weather-app">
                        <Button 
                        className={classes.live}
                        variant="outlined"
                        color="inherit"
                        >LIVE</Button>
                        </a>
                    </div>
                </div>
                </Tilt>
                <Tilt max="35" style={{color:"black"}}>
                <div className="card">
                    <img src={simon} alt="p1" height="300px" className="pic"/>
                    <div className="proj-dsc">
                        <p>Simon's Game</p>
                        <p>Game to test Memory power built with  the help of JS,HTML, CSS and JQuery.</p>
                        <a target=" " href="https://github.com/Aman-kumar001/Simon-Game">
                        <Button 
                        className={classes.button}
                        variant="outlined"
                        color="inherit"
                        >CODE</Button>
                        </a>
                        <a target=" " href="https://aman-kumar001.github.io/Simon-Game">
                        <Button 
                        className={classes.live}
                        variant="outlined"
                        color="inherit"
                        >LIVE</Button>
                        </a>
                    </div>
                </div>
                </Tilt>
                
            </div>
            <div className="row" data-aos="fade-right">
                <Tilt max="35" style={{color:"black"}}>
                <div className="card">
                    <img src={challenge} alt="p1" height="300px" className="pic"/>
                    <div className="proj-dsc">
                        <p>Front-End Challenges</p>
                        <p>Front-End Mentor: A great platform to test your front end Skills with different challenges.</p>
                        <a target=" " href="https://github.com/Aman-kumar001/frontend-mentor-challenges">
                        <Button 
                        className={classes.button}
                        variant="outlined"
                        color="inherit"
                        >CODE</Button>
                        </a>
                        <a target=" " href="https://aman-kumar001.github.io/frontend-mentor-challenges">
                        <Button 
                        className={classes.live}
                        variant="outlined"
                        color="inherit"
                        >LIVE</Button>
                        </a>
                    </div>
                </div>
                </Tilt>
                <Tilt max="35" style={{color:"black"}}>
                <div className="card">
                    <img src={todo} alt="p1" height="300px" className="pic"/>
                    <div className="proj-dsc">
                        <p>To-Do list</p>
                        <p>Created Using ReactJs and Json Server specially for users with small devices like Smartphones.</p>
                        <a target=" " href="https://github.com/Aman-kumar001/To-Do-2.0">
                        <Button 
                        className={classes.button}
                        variant="outlined"
                        color="inherit"
                        >CODE</Button>
                        </a>
                    </div>
                </div>
                </Tilt>
                
            </div>
            <div className="moreProjs">
                <a target=" " href="https://github.com/Aman-kumar001" >
                <Button
                className={classes.button}
                variant="outlined" color="inherit">More Projects <ArrowRightIcon/></Button>
                </a>
            </div>
        </div>         
    );
    
}
 
export default Projects;