import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import AboutMobile from './about_mobile';
import SkillsMobile from './skills_mobile';
const RightMobile = ({setMobleft}) => {

    const [skills,setSkills]=useState(false);
    const [about,setAbout]=useState(false);
    const [projs,setProjs]=useState(false);

    return ( 
        <div className="rightMobile">
            <MenuIcon 
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
            <div>
                <div id="mob">
                    <p id="port1">Portfolio</p>
                    <p id="port2">Portfolio</p>
                </div>
            </div>
            { about==false && <AboutMobile /> }
            { skills==false && <SkillsMobile/> }
            
        </div>
     );
}
 
export default RightMobile;