// * Component Imports
import Banner from "./components/Banner";
import Socials from "./components/Socials"
import Subsection from "./components/Subsection"

// * Image imports
import purpleCyborg from "./images/purplecyborg.png"
import pinkCyborg from "./images/pinkcyborg.png"

function App() {
  return (
    <div className='💪'>
      <Banner>
        <Socials />
        <h2>SUPER CYBORGS</h2>
      </Banner>
      <Subsection className='what' img={purpleCyborg}>
        <h2>What are <span id='gold'>Super Cyborgs?</span></h2>
        <p>
          Super Cyborgs are citizens of <span id='lime'>NEON CITY</span>, the most technologically advanced city
          in the whole galaxy. It is the year <span id='gold'>2099</span>, and people have started to become more machine than man. 
        </p>
      </Subsection> 
      <Subsection img={pinkCyborg}>
        <h2>What is the <span id='gold'>Super Cyborgs</span> <span id='red'>MMO</span>?</h2>
        <p>
          The Super Cyborgs <span id='red'>MMO</span> is a multiplayer video game that allows players to play as their one-of-a-kind NFT avatar
          and explore <span id='lime'>NEON CITY</span>. Every aspect of the city's open world will be owned
          by the community.
        </p>
      </Subsection>
    </div>
  );
}

export default App;
