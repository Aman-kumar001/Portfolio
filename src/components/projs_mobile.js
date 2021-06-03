import challenge from "./media/chllange.jpg"
import simon from "./media/simon.jpg"
import phc from "./media/phc.jpg"
import weather from "./media/weather.jpeg"
import notes from "./media/notes.jpg"
import todo from "./media/todo.jpg"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Button, makeStyles } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const styles=makeStyles({
    button:{
        fontFamily:"Lufga",
        marginRight:"5px",
        marginBottom:"3vw"
    },
    live:{
        fontFamily:"Lufga",
        marginLeft:"5px",
        marginBottom:"3vw"
    }
})



const ProjsMob = () => {
    const classes = styles()
    return ( 
    <div className="projsMob">
        <p id="projHeader">Projects</p>
        <div className="cardsMob" data-aos="fade-right">
            <div className="box" >
                <img src={phc} alt="" className="picMob"/>
                <div className="projMobDsc">
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
        </div>
        <div className="cardsMob" data-aos="fade-left">
            <div className="box">
            <img src={weather} alt="" className="picMob"/>
            <div className="projMobDsc">
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
        </div>
        <div className="cardsMob" data-aos="fade-right">
            <div className="box">
            <img src={phc} alt="" className="picMob"/>
            <div className="projMobDsc">
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
        </div>
        <div className="moreMob">
            <a target=" " href="https://github.com/Aman-kumar001" >
            <Button
            className={classes.button}
            variant="outlined" color="inherit">More Projects <ArrowRightIcon/></Button>
            </a>
        </div>
    </div> 
    );
}
 
export default ProjsMob;