// * Component Imports
import Banner from "./components/Banner";
import Socials from "./components/Socials"
import Subsection from "./components/Subsection"

// * Image imports
import purpleCyborg from "./images/purplecyborg.png"

function App() {
  return (
    <div className='💪'>
      <Banner title='SUPER CYBORGS'>
        <Socials />
      </Banner>
      <Subsection img={purpleCyborg}>
        <h2>What are <span>Super Cyborgs?</span></h2>
        <p>
          Super Cyborgs are citizens of <span>HYPERNIA</span>, the most technologically advanced city
          in the whole galaxy. The year is 3099. 
        </p>
      </Subsection> 
    </div>
  );
}

export default App;
