import React from "react";

class DashboardPage extends React.Component{

    render(){    
        return(
            <div class="dashboard"> 
                <div class="home-section">
                    <ul>
                        <li>Account</li>
                    </ul>   
                </div>   
                <div class="home-section">
                    <div class="main-section">
                        <span><img src="../../public/images/folder-icon.png"/></span>
                        <span><img src="public/images/file-icon.png"/></span>
                    </div>
                    <div class="main-section">
                        <h3>Empty list</h3> 
                        <h3>Add new list from the upper right hand corner</h3>
                    </div>    
                </div>          
            </div>

        );
    }        
        
}

export default DashboardPage;