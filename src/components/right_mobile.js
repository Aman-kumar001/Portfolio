import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import AboutMobile from './about_mobile';
import ProjsMob from './projs_mobile';
import SkillsMobile from './skills_mobile';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import MoodIcon from '@material-ui/icons/Mood';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { makeStyles } from '@material-ui/core';

const styles=makeStyles({
    "@keyframes arrow":{
        "0%":{
            translate: "-10px"
        },
        "100%":{
            translate: "0px"
        }
    },
    arrow:{
        animation: "$arrow 0.5s ease-in-out infinite",
        color:"white",
        position:"absolute",
        top:"86.5vh",
        left:"80vw"
    },
    
})

const RightMobile = ({setMobleft,height,width}) => {
    const classes=styles();
    const [skills,setSkills]=useState(false);
    const [about,setAbout]=useState(false);
    const [projs,setProjs]=useState(false);
    const [button,setButton]=useState(false);
    const [main, setMain]=useState(true);
    const [nav,setNav]=useState(false);
    const [navClose,setNavClose]=useState(false);

    
    return ( 
        <div className="rightMobile">
            <PersonAddIcon 
                style={{
                    color:"white",
                    fontSize:"3rem",
                    position:"absolute",
                    left:"2%",
                    top:"2%",
                    cursor:"pointer",
                    zIndex:"100"
                }}

                onClick={()=>{setMobleft(true)}}
            />
            { (skills==true||projs==true||about==true) &&<MenuIcon
                style={{
                    color:"white",
                    fontSize:"3rem",
                    position:"absolute",
                    left:"85%",
                    top:"2%",
                    cursor:"pointer"
                }}
                onClick={()=>{
                    setNav(true)
                    setNavClose(false)
                }
                }
            />}
           

           {/* Temporary part */}

            { main==true &&
            <div>
                <div id="mob">
                    <p id="port1">Portfolio</p>
                    <p id="port2">Portfolio</p>
                </div>

                <div className="greetings">
                    {button==true? 
                    <p
                        className="fadeIn"
                        onClick={()=>{
                            setSkills(false)
                            setAbout(true)
                            setProjs(false)
                            setButton(false)
                            setMain(false)
                        }
                    }  
                    >About</p>:<p>Hello,</p>}
                    {button==true? 
                    <p
                    className="fadeIn"
                    onClick={()=>{
                        setSkills(true)
                        setAbout(false)
                        setProjs(false)
                        setButton(false)
                        setMain(false)
                    }
                 }
                    >Skills</p>:<p>Aman Kumar</p>}
                    {button==true? 
                    <p
                        className="fadeIn"
                            onClick={()=>{
                                setSkills(false)
                                setAbout(false)
                                setProjs(true)
                                setButton(false)
                                setMain(false)
                            }
                        }
                    >Projects</p>:<p>this Side.</p>}
                </div>
                {
                    <div id="mobLines">
                        <div className={button==true?"light":""}>

                        </div>
                        <div className={button==true?"light2":""}>

                        </div>
                    </div>

                }
                {/* {button==true && <svg className="bulbOn1 bulbOn" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="yellow"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/></svg>} */}
                {/* {button==true && <svg className="bulbOn2" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="yellow"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/></svg>} */}

                {/* {
                    button==false &&
                    <svg className="bulbOff1 bulbOff" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
                }
                {
                    button==false &&
                    <svg className="bulbOff2 bulbOff" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
                } */}

                {button==false && <ArrowRightIcon className={classes.arrow} />}

                {
                    button==false?
                    <RadioButtonUncheckedIcon 
                    style={{
                        color:"white",
                        fontSize:"3rem",
                        position:"fixed",
                        left:"85vw",
                        top:"85vh",
                        cursor:"pointer"
                    }}
                    onClick={()=>setButton(true)}
                    />:<RadioButtonCheckedIcon 
                    style={{
                        color:"white",
                        fontSize:"3rem",
                        position:"fixed",
                        left:"85vw",
                        top:"85vh",
                        cursor:"pointer",
                        zIndex:"100"
                    }}
                    onClick={()=>setButton(false)}
                    />
                }
            </div>
            }

            {/* COMPONENTS */}


            { about==true && <AboutMobile /> }
            { skills==true && <SkillsMobile/> }
            { projs==true && <ProjsMob/> }


            { main==true && <div className="trial1">
                <svg className="mobArcs">
                    <line x1={25} y1="0" x2={25} y2={0.5*height} stroke="gray" strokeWidth="3px"/>
                </svg>
                {
                    button==false &&
                    <svg className="Off1 bulbOff" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
                }
                {button==true && <svg className="On1 bulbOn" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="yellow"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/></svg>}
            </div>}
            { main==true && <div className="trial2">
                <svg className="mobArcs">
                    <line x1={25} y1="0" x2={25} y2={0.4*height} stroke="gray" strokeWidth="3px"/>
                </svg>
                {
                    button==false &&
                    <svg className="Off2 bulbOff" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
                }
                {button==true && <svg className="On2" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 0 24 24" width="50px" fill="yellow"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/></svg>}
            </div>}

            {/* NAVBAR */}
            
            <div id={(nav==true)?"navOpen":""} className={(navClose==true)?"navClose":""}>
                { nav==true && <CloseIcon
                style={{
                    color:"white",
                    fontSize:"3rem",
                    position:"absolute",
                    left:"85%",
                    top:"2%",
                    cursor:"pointer"
                }}
                   onClick={()=>{
                    setNav(false)
                    setNavClose(true)
                   }} 
                />}
                {nav==true && <div>
                <p
                    onClick={()=>{
                        setSkills(false)
                        setAbout(false)
                        setProjs(false)
                        setButton(false)
                        setMain(true)
                        setNav(false)
                        setNavClose(true)
                    }
                 }
                >Home</p>
                <p
                className={skills==true?"current":""}
                 onClick={()=>{
                        setSkills(true)
                        setAbout(false)
                        setProjs(false)
                        setButton(false)
                        setMain(false)
                        setNav(false)
                        setNavClose(true)
                    }
                 }
                >Skills</p>
                <p
                className={about==true?"current":""}
                    onClick={()=>{
                        setSkills(false)
                        setAbout(true)
                        setProjs(false)
                        setButton(false)
                        setMain(false)
                        setNav(false)
                        setNavClose(true)
                    }
                 }
                >About</p>

                <p
                className={projs==true?"current":""}
                    onClick={()=>{
                        setSkills(false)
                        setAbout(false)
                        setProjs(true)
                        setButton(false)
                        setMain(false)
                        setNav(false)
                        setNavClose(true)
                    }
                 }
                >Projects</p>
                </div>}
            </div>
            
        </div>
     );
}
 
export default RightMobile;