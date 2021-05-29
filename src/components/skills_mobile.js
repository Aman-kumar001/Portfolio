const SkillsMobile = () => {
    return ( 
        <div className="skills_mob">
            <p id="skillsHeader">Skills</p>
            <div id="bar">
            
                <div class="mobContainer">    
                <p>Html / Css / JS</p>
                    <div class="progress2 progress-moved">
                        <div class="progress-bar2" >
                        </div>                       
                    </div> 
                </div>
                <div class="mobContainer">    
                <p>ReactJS</p>
                    <div class="progress2 progress-moved">
                        <div class="progress-bar2 reactMob" >
                        </div>                       
                    </div> 
                </div>
                <div class="mobContainer">    
                <p>C++</p>
                    <div class="progress2 progress-moved">
                        <div class="progress-bar2 cppMob" >
                        </div>                       
                    </div> 
                </div>
                <div class="mobContainer">    
                <p>Problem Solving</p>
                    <div class="progress2 progress-moved">
                        <div class="progress-bar2 probMob" >
                        </div>                       
                    </div> 
                </div>
            </div>
        </div>
     );
}
 
export default SkillsMobile;