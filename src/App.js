import logo from './logo.svg';
import Navigationbar from './Components/NavigationBar.js'

import './App.css';

import background from "./images/assets/banner.png"
import mission from "./images/assets/mission.png"
import img1 from "./images/assets/img1.png"
import img2 from "./images/assets/img2.png"
import img3 from "./images/assets/img3.png"
import img4 from "./images/assets/img4.png"

import linkedin from "./images/assets/linkedin-black.png"
import twitter from "./images/assets/twitter-black.png"

import wtwitter from "./images/assets/twitter-white.png"
import wlinkedin from "./images/assets/linkedin-white.png"
import wfacebook from "./images/assets/facebook-white.png"


function App() {
  return (
    <div className="App">
      <div class="mynavtop" style={{ backgroundImage: `url(${background})` ,
    height: `500px`}}>
              <Navigationbar/>

    <div class="mydescription">
  <h1 class="mb-3 h2">We make your future</h1>

  <p>
    jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb
  </p>


  <button class="btn  my-2 my-sm-0 rounded-pill mydescriptionbutton" type="submit">Découvrir</button>

  </div>

       </div>

      <div class="mywebpage">

      <div class="container">
          <div class="row mygreybackground" style={{ border: `none` ,
        background: `#E3E7ED`}} >
          <div class="col-md-6 mymissiontext" >
          <h1>Our Mission</h1>
          <p>    jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb
          </p>
          </div>
          <div class="col-sm-6 col-md-6 col-xs-12 image-container">
          <img class="mymissionimg" src={mission}  />
          </div>
          </div>
      </div>
      <div class="container2">
          <div class="" style={{ border: `none` ,
        background: `#CBECEE`}} >
          <div class="leaderstext" >
          <h1>Meet Our Leaders</h1>
          <p>    jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb jasvajhag avhjjhsva u guayghagsb 
          </p>
          </div>
          <div class="">
            <div class="container">
              <div class="row">
                <div class="card jon"><img class="mycardimg rounded-circle" src={img1}  /> <h4>Jonathan Warner</h4><p>CEO</p>              
                <div class="row">
                <div class="social"><img class="" src={linkedin}  /></div>
                <div class="social"><img class="" src={twitter}  /></div>

                </div>
              </div>
                <div class="card "><img class="mycardimg rounded-circle" src={img2}  /> <h4>Tammy Johnson</h4><p>CEO</p>
                <div class="row">
                <div class="social"><img class="" src={linkedin}  /></div>
                <div class="social"><img class="" src={twitter}  /></div>

                </div>
                </div>
                <div class="card"><img class="mycardimg rounded-circle" src={img4}  /> <h4>David Hackett</h4><p>CEO</p>
                <div class="row">
                <div class="social"><img class="" src={linkedin}  /></div>
                <div class="social"><img class="" src={twitter}  /></div>

                </div>
                </div>
                <div class="card"><img class="mycardimg rounded-circle" src={img3}  /> <h4>Pamela Wagner</h4><p>CEO</p>
                <div class="row">
                <div class="social"><img class="" src={linkedin}  /></div>
                <div class="social"><img class="" src={twitter}  /></div>

                </div>
                </div>
              </div>

            </div>

 
            
          </div>

          <button class="btn btn-light mysearchbutton viewteam" type="submit">view the team</button>
          </div>

          

      </div>
      <div class="myfooter">
        <div class="row myfooterlinks" >

            <a class="nav-link" href="#">Solutions</a>

            <a class="nav-link" href="#">About</a>

            <a class="nav-link" href="#">Pricing</a>
  
        </div>
        <br></br><br></br><br></br>
        <div class="joinus">
          <p>Rejoignez-nous</p>
          <div class="row myfooterlinks" >

            <div class="row sfl">
                    <div class="social sf"><img class="" src={wfacebook}  /></div>
                    <div class="social sf"><img class="" src={wtwitter}  /></div>
                    <div class="social sf"><img class="" src={wlinkedin}  /></div>

            </div>

    
          </div>
          
        </div>
          
      </div>

      </div>


    </div>
  );
}

export default App;
