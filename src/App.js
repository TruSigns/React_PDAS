import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";
import CortanaImage from "./images/cortana.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>

      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
          Personal Digital assistant          
          </p>
        </div>
      </section>

    
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexia" 
              handle="@Alexa99" 
              img={AlexaImage} 
              description= "Alexa was create by amazon"/>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                img={SiriImage}
                description= "Siri was create by Apple"
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" img={CortanaImage} description= "Cortana was create by Microsoft" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
