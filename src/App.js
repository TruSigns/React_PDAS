import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";
import CortanaImage from "./images/cortana.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <div>Personal Digital assistant</div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexia" handle="@Alexa99" img={AlexaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                img={SiriImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" img={CortanaImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
