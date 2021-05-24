import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import About from "./About";
import Projects from "./projects";
import Skills from "./skills";


const styles=makeStyles({
    navbar:{
        width:"100%",
        backgroundColor:"white",
        backgroundColor:"black",
        height:"100px",
        color:"black",
        textAlign:"end",
        fontFamily:"Lufga-Light",
        fontWeight:"lighter"
    },
    span:{
        // backgroundColor:"white",
        backgroundColor:"black",
        fontSize:"35px",
        marginRight:"30px",
        // border:"1px solid black",
        color:"white",
        position:"relative",
        top:"50%",
        cursor:"pointer"
    },
    top:{
        backgroundColor:"black",
        fontSize:"80px",
        // border:"1px solid black",
        color:"white",
        position:"absolute",
        top:"2%",
        left:"25%",
        cursor:"pointer"
    },
    span1:{
        // backgroundColor:"white",
        backgroundColor:"black",
        fontSize:"35px",
        marginRight:"30px",
        // border:"1px solid black",
        color:"white",
        position:"relative",
        top:"50%",
        cursor:"pointer"
    },
    
    "@media (min-width: 960px)":{
        span:{
            // backgroundColor:"white",
            backgroundColor:"black",
            fontSize:"33px",
            marginRight:"30px",
            // border:"1px solid black",
            color:"white",
            position:"relative",
            top:"50%",
            cursor:"pointer"
        },
        span1:{
            // backgroundColor:"white",
            backgroundColor:"black",
            fontSize:"33px",
            marginRight:"30px",
            // border:"1px solid black",
            color:"white",
            position:"relative",
            top:"50%",
            cursor:"pointer"
        },
    },
    "@media (min-width:1285px)":{
        span:{
            // backgroundColor:"white",
            backgroundColor:"black",
            fontSize:"40px",
            marginRight:"30px",
            // border:"1px solid black",
            color:"white",
            position:"relative",
            top:"50%",
            cursor:"pointer"
        },
        span1:{
            // backgroundColor:"white",
            backgroundColor:"black",
            fontSize:"40px",
            marginRight:"30px",
            // border:"1px solid black",
            color:"white",
            position:"relative",
            top:"50%",
            cursor:"pointer"
        },
    },
    "@media (min-width:1500px)":{
        span:{
            // backgroundColor:"white",
            backgroundColor:"black",
            fontSize:"40px",
            marginRight:"40px",
            // border:"1px solid black",
            color:"white",
            position:"relative",
            top:"50%",
            cursor:"pointer"
        },
        span1:{
            // backgroundColor:"white",
            backgroundColor:"black",
            fontSize:"40px",
            marginRight:"120px",
            // border:"1px solid black",
            color:"white",
            position:"relative",
            top:"50%",
            cursor:"pointer"
        },
    },

})

const Right = () => {

    // onclick events
    const [about,set_about]=useState(false);
    const [skills,set_skills]=useState(false);
    const [projects,set_projects]=useState(false);

    // onhover events
    const [hoverAbout,setHoverAbout]=useState(false);
    const [hoverSkills,setHoverSkills]=useState(false);
    const [hoverProjs,setHoverProjs]=useState(false);

    const classes=styles();


    return ( 
        <div className="right">
            <div className={classes.navbar}>
                {(about==true||projects==true||skills==true) && 
                    <span
                        className={classes.top}
                        onClick={()=>{
                            set_about(false);
                            set_skills(false);
                            set_projects(false);
                        }}
                    >
                        Portfolio
                    </span>}
                <span 
                    className={classes.span}
                    onClick={()=>{
                        set_about(true);
                        set_skills(false);
                        set_projects(false);
                    }}
                    onMouseEnter={()=>{setHoverAbout(true)}}
                    onMouseLeave={()=>{setHoverAbout(false)}}
                >
                    About.
                </span>
                <span 
                    className={classes.span}
                    onClick={()=>{
                        set_about(false);
                        set_skills(true);
                        set_projects(false);
                    }}
                    onMouseEnter={()=>{setHoverSkills(true)}}
                    onMouseLeave={()=>{setHoverSkills(false)}}
                >
                    Skills.
                </span>
                <span 
                    className={classes.span1}
                    onClick={()=>{
                        set_about(false);
                        set_skills(false);
                        set_projects(true);
                    }}
                    onMouseEnter={()=>{setHoverProjs(true)}}
                    onMouseLeave={()=>{setHoverProjs(false)}}
                >
                    Projects.
                </span> 
            </div>


            { (skills===false && projects===false && about===false) && 
            <div className="landing">
                <div className="hello">
                <div className="portfolio">
                    <p className="first_one">Portfolio</p>
                    <p className="sec_one">Portfolio</p>
                </div>
                <div className="intro">
                    { hoverAbout===false &&
                    <div id={hoverSkills==true?"hovered":""} className={(hoverSkills===true||hoverProjs==true)?"prev-move1":"prev"}>
                        Hello,
                    </div>
                    }    
                    {hoverAbout ===true && 
                        <div id="about_hover" className="next first">
                            About
                        </div>
                    }  
                    { hoverSkills ===false && 
                    <div id="ak" className={(hoverAbout===true||hoverProjs==true)?"prev-move2":"prev"}>
                        Aman Kumar
                    </div>
                    }   
                    {hoverSkills===true &&
                        <div id="skills_hover" className="next middle">
                            Skills
                        </div>
                    }
                    { hoverProjs===false &&
                    <div id="side" className={(hoverSkills===true||hoverAbout==true)?"prev-move3":"prev"}>
                        this side.
                    </div>
                    }   
                    {hoverProjs===true &&
                        <div id="projs_hover"  className="next last">
                            Projects
                        </div>
                    }
                </div>
                </div>
                <div className="svgs">
                    <svg  height="300px" 
                    className={hoverAbout==true?"svg1-up":(hoverProjs==true||hoverSkills==true)?"svg1-down":""
                        }>
                        <path stroke={hoverAbout===true?"#ff6a6a":"white"} strokeWidth="1px" fillOpacity="0"
                            d="M230 20 A210 210 0 0 1 0 230"
                        />
                    </svg>
                    <svg height="360px" width="500px" 
                    className={hoverSkills==true?"svg2-up":(hoverProjs==true||hoverAbout==true)?"svg2-down":""
                        }>
                        <path stroke={hoverSkills===true?"#ff6a6a":"white"} strokeWidth="1px" fillOpacity="0" 
                        d="M360 20 A330 330 0 0 1 0 340"
                        />
                    </svg>
                    <svg width="510px"
                    className={hoverProjs==true?"svg3-up":(hoverAbout==true||hoverSkills==true)?"svg3-down":""
                        }>
                        <path stroke={hoverProjs===true?"#ff6a6a":"white"} strokeWidth="1px" fillOpacity="0"
                        d="M500 20 A450 450 0 0 1 0 440"
                        />
                    </svg>
                </div>
            </div>
            
            }

                

            {/* onclick events */}

            {about==true && <About /> }
            {skills==true && <Skills /> }
            {projects==true && <Projects />}



        </div>
     );
}
 
export default Right;