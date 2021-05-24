import { Drawer, makeStyles, Typography } from "@material-ui/core"
import pic from "./media/pic.jpg"
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import DraftsIcon from '@material-ui/icons/Drafts';
import { useState } from "react";


const drawerWidth=300;
const styles=makeStyles({
    drawer:{
        width:drawerWidth
    },
    paper:{
        width:drawerWidth,
        background:"#a3a3a3"
    },
    typo:{
        textAlign:"center",
        fontFamily:"Lufga",
        fontWeight:700,
        fontStyle:"normal",
        color:"white"
    }

})
const Left = () => {

    const [mail,set_mail]=useState(false);

    const classes=styles();
    return ( 
        <div className="left">
            <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper:classes.paper}}
            >
                <img src={pic} alt="Me" className="dp"/>
                
                <div 
                className="mail-icon"
                onMouseEnter={()=>{set_mail(true)}}
                onMouseLeave={()=>{set_mail(false)}}
                >
                    {mail==false && <MailIcon className="mail" style={{fontSize:50}}/>}
                    {mail==true && <DraftsIcon className="mail"style={{fontSize:50}}/> }

                </div>
                <Typography 
                className={classes.typo}
                variant="h6"
                >
                    <a href="mailto:2019200@iiitdmj.ac.in" style={{textDecoration:"none", color:"black"}}>2019200@iiitdmj.ac.in</a>
                </Typography>
                <Typography 
                className={classes.typo}
                variant="h6"
                >
                    <a href="mailto:2019200@iiitdmj.ac.in" style={{textDecoration:"none", color:"black"}}>2019200@iiitdmj.ac.in</a>
                </Typography>
                {/* <div className="contact">
                    <p></p>
                </div> */}
                <div className="links">
                    <a href="https://www.linkedin.com/in/aman-kumar-316848192/" className="linkdin">
                        <LinkedInIcon fontSize="large"/>
                    </a>
                    <a href="https://github.com/Aman-kumar001">
                        <GitHubIcon fontSize="large"/>
                    </a>
                    <a href="#">
                        <InstagramIcon 
                        fontSize="large"
                        />
                    </a>
                </div>
            </Drawer>
        </div>
     );
}
 
export default Left;