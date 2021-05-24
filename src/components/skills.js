
const Skills = () => {
    return ( 
        <div className="skills">
            <p className="heading">Skills</p>
            <div className="meter">
                <div className="wrapper">
                    <div className="left-circle"></div>
                    <div className="right-circle"></div>
                    <div className="mask"></div>
                    <div className="divider html"></div>
                </div>
                <div className="wrapper">
                    <div className="left-circle"></div>
                    <div className="right-circle"></div>
                    <div className="mask"></div>
                    <div className="divider react"></div>
                </div>
                <div className="wrapper">
                    <div className="left-circle"></div>
                    <div className="right-circle"></div>
                    <div className="mask"></div>
                    <div className="divider cpp"></div>
                </div>
                <div className="wrapper">
                    <div className="left-circle"></div>
                    <div className="right-circle"></div>
                    <div className="mask"></div>
                    <div className="divider problem"></div>
                </div>
            </div>
            <div className="label">
                <div><p>HTML, CSS,<p> JS</p></p></div>
                <div><p>React</p></div>
                <div><p>C++</p></div>
                <div><p>Problem <p>Solving</p></p></div>
            </div>
            <div className="per-age">
                <div><h1>80%</h1></div>
                <div><h1>70%</h1></div>
                <div><h1>60%</h1></div>
                <div><h1>75%</h1></div>
            </div>
            {/* <div className="meter second">
                <div className="wrapper">
                    <div className="left-circle"></div>
                    <div className="right-circle"></div>
                    <div className="mask"></div>
                    <div className="divider cpp"></div>
                </div>
                <div className="wrapper">
                    <div className="left-circle"></div>
                    <div className="right-circle"></div>
                    <div className="mask"></div>
                    <div className="divider react"></div>
                </div>
            </div>
            <div className="label row2">
                
                <div><p>UI / UX </p></div>
                <div><p>Backend <p>PHP / MySQL</p> </p></div>
            </div>
            <div className="per-age">
                <div><h1>60%</h1></div>
                <div><h1>70%</h1></div>
            </div> */}
        </div>
     );
}
 
export default Skills;