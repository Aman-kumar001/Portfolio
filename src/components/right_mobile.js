import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import AboutMobile from './about_mobile';
import ProjsMob from './projs_mobile';
import SkillsMobile from './skills_mobile';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import MoodIcon from '@material-ui/icons/Mood';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const RightMobile = ({setMobleft,height,width}) => {

    const [skills,setSkills]=useState(false);
    const [about,setAbout]=useState(false);
    const [projs,setProjs]=useState(false);
    const [button,setButton]=useState(false);
    const [main, setMain]=useState(true);
    const [nav,setNav]=useState(false);
    const [navClose,setNavClose]=useState(false);

    const str1="M"+Math.floor(0.9 * width+7)+" "+Math.floor(0.9 * height)+" A"+Math.floor(0.6 * width)+" "+Math.floor(0.5*height)+" 0 0 0 "+(0.4 * width)+" "+(0.35*height + 0.1*width -5 );

    console.log(str1)

    const str2="M"+Math.floor(0.9*width+7)+" "+Math.floor(0.9*height)+" A"+Math.floor(0.62*width)+" "+Math.floor(0.53*height)+" 0 0 0 "+(0.4* width)+" "+(0.41*height+0.1*width);

    const str3="M"+Math.floor(0.9*width+7)+" "+Math.floor(0.9*height)+" A"+Math.floor(0.6*width)+" "+Math.floor(0.6*height)+" 0 0 0 "+(0.4 * width)+" "+(0.47*height+0.11*width);
    
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
                {button==true && 
                    <div id="mobLines">
                        <svg className="mobArcs">
                            <path stroke="#ff6a6a"  strokeWidth="3px" fillOpacity="0" d={str1}/>
                        </svg>
                        <svg className="mobArcs">
                            <path stroke="#ff6a6a"  strokeWidth="3px" fillOpacity="0" d={str2}/>
                        </svg>
                        <svg className="mobArcs">
                            <path stroke="#ff6a6a"  strokeWidth="3px" fillOpacity="0" d={str3}/>
                        </svg>
                    </div>

                }


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