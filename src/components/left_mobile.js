import CloseIcon from '@material-ui/icons/Close';
import pic  from './media/pic.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import {makeStyles, Typography } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';

const styles=makeStyles({
    typo:{
        textAlign:"center",
        fontFamily:"Lufga",
        fontWeight:700,
        fontStyle:"normal",
        color:"white"
    }

})

const LeftMobile = ({setMobleft}) => {
    const classes=styles();
    return ( 
        <div className="leftMobile">
            <div id="main_panel">
                <CloseIcon 
                onClick={()=>(setMobleft(false))}
                style={{ color:"white",fontSize:"3rem",position:"absolute",left:"2%",top:"2%",cursor:"pointer",zIndex:"2" }}
                />

                <img src={pic} alt="" id="dpMobile"/>

                <MailIcon className="mail" style={{fontSize:50,display:"block",marginTop:"7vh"}}/>


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

                <div className="links" id="mobile_links">
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
                </div>
                <div className="sliding s1"></div>
                <div className="sliding s2"></div>
                <div className="sliding s3"></div>
                <div className="sliding s4"></div>
                <div className="sliding s5"></div>
        </div>
     );
}
 
export default LeftMobile;