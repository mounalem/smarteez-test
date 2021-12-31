import React from 'react';

class NavigationBar extends React.Component{
    render(){
        return(
            
            <nav class="navbar transparent navbar-expand-xl mynav">


            <ul class="navbar-nav">

                <li class="nav-item">
                <a class="nav-link" href="#">Solutions</a>
                </li>
                <li class="nav-item myabout">
                <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
                </li>

            </ul>
            <form class="form-inline ml-auto mysearchform" >
            <button class="btn btn-light mysearchbutton" type="submit">Login</button>
            <button class="btn btn-light mysearchbutton" type="submit">Get Started</button>
            </form>

            </nav>
);
    }


}

export default NavigationBar;