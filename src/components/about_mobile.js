import CodeIcon from '@material-ui/icons/Code';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

const AboutMobile = () => {
    return ( 
    <div className="aboutMob">
        <p id="aboutHeader">About</p>
        <p id="aboutDesc" class>
            Hi, I am Aman Kumar student of Indian Institute of Information Technology Jabalpur, persuing B.Tech in Computer Science.
        </p>
        <br/>
        <p>
            Currently I am an Front-end enthusiast Specialised in ReactJS with a goal to be a Full-stack Developer.
        </p>
        <p id="icons">
            <p><CodeIcon style={{fontSize:"50px",color:"#ff6a6a"}}/> 
                <p className="iconsDsc">web developer</p>
            </p>
            <p><LibraryBooksOutlinedIcon style={{fontSize:"50px",color:"#ff6a6a"}}/>
                <p className="iconsDsc">Student<br/><br/></p>
            </p>
            <p><SportsSoccerIcon style={{fontSize:"50px",color:"#ff6a6a"}}/> 
            <p className="iconsDsc">Sports person</p>
            </p>
        </p>
    </div> 
    );
}
 
export default AboutMobile;