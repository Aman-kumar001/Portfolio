import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import AboutMobile from './about_mobile';
import ProjsMob from './projs_mobile';
import SkillsMobile from './skills_mobile';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


const RightMobile = ({setMobleft}) => {

    const [skills,setSkills]=useState(false);
    const [about,setAbout]=useState(false);
    const [projs,setProjs]=useState(false);
    const [button,setButton]=useState(false);
    const [main, setMain]=useState(true);

    return ( 
        <div className="rightMobile">
            <PermContactCalendarIcon 
                style={{
                    color:"white",
                    fontSize:"3rem",
                    position:"absolute",
                    left:"2%",
                    top:"2%",
                    cursor:"pointer"
                }}
                onClick={()=>setMobleft(true)}
            />
            { main==true &&
            <div>
                <div id="mob">
                    <p id="port1">Portfolio</p>
                    <p id="port2">Portfolio</p>
                </div>

                <div className="greetings">
                    <p>Hello,</p>
                    <p>Aman Kumar</p>
                    <p>this side.</p>
                </div>
            </div>
            }
            { about==true && <AboutMobile /> }
            { skills==true && <SkillsMobile/> }
            { projs==true && <ProjsMob/> }
            
            { button==true && <div id="afterButton" className="glass">
                <p
                    onClick={()=>{
                        setSkills(false)
                        setAbout(false)
                        setProjs(false)
                        setButton(false)
                        setMain(true)
                    }
                 }
                >Home</p>
                <p
                 onClick={()=>{
                        setSkills(true)
                        setAbout(false)
                        setProjs(false)
                        setButton(false)
                        setMain(false)
                    }
                 }
                >Skills</p>
                <p
                    onClick={()=>{
                        setSkills(false)
                        setAbout(true)
                        setProjs(false)
                        setButton(false)
                        setMain(false)
                    }
                 }
                >About</p>

                <p
                    onClick={()=>{
                        setSkills(false)
                        setAbout(false)
                        setProjs(true)
                        setButton(false)
                        setMain(false)
                    }
                 }
                >Projects</p>
            </div>}
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
     );
}
 
export default RightMobile;