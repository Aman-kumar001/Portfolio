import MenuIcon from '@material-ui/icons/Menu';
const RightMobile = ({setMobleft}) => {
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
            <div id="mob">
                <p id="port1">Portfolio</p>
                <p id="port2">Portfolio</p>
            </div>
        </div>
     );
}
 
export default RightMobile;