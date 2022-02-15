

const MMO = () => {
  return (
    <div className='mmoContainer'>
      <div className='mmo'>
        <h1 className='mmoHeader'>MMO</h1>
        <p className='mmoDesc'>
          The Super Cyborgs MMO is an online social game that takes place in NEON CITY, the home of all Super Cyborgs.
          The game consists of a main open world, which is split into sectors. 
        </p>
        <h3 className='mmoTitle'>SECTORS</h3>
        <div className='mmoSectors'>
          <h3 className='sectorName'>HYPERNIA</h3>
          <p className='sectorDescription'>A rooftop metropolis located at the center of Neon City.</p>
          <h3 className='sectorName'>UTOPIA</h3>
          <p className='sectorDescription'>A wildlife preserve where structures are built to optimally coexist with nature.</p>
          <h3 className='sectorName'>TOKYO</h3>
          <p className='sectorDescription'>A recreation of present day Tokyo, for the future.</p>
          <h3 className='sectorName'>NEO ROME</h3>
          <p className='sectorDescription'>A city of beauty, where the ancient buildings of Rome are combined with contrasting futuristic technology.</p>
          <h3 className='sectorName'>CHASM</h3>
          <p className='sectorDescription'>A crime filled underground sector. </p>
        </div>
        <h3 className='mmoTitle'>LAND AIRDROPS</h3>
        <p className='mmoDesc'>
          Each sector consists of scarce land that can be owned by owning the corresponding NFT. These land NFTs will be <span id='white'>airdropped</span> to all
          Super Cyborgs holders during the &quot;Delegation&quot; phase on our roadmap. <span id='white'>At the minimum, all holders will receive a house NFT which
          will be located in a random sector during the delegation phase.</span> On top of this, active MMO players will receive airdrops for special land. For example,
          every shop, restaurant, club- every single part of the MMO&apos;s world will be airdropped to the players.
        </p>
        <h3 className='mmoTitle'>COMMUNITY STORY</h3>
        <p className='mmoDesc'>
          Super Cyborgs holders get exclusive access to work directly with the game developers to have a real and tangible effect on the MMO.
          Each Cyborg is a character in a branching story that the community hand-crafts. Furthermore, a holder of special land (shops, clubs, etc.)
          has permission to work with the developers to make changes to that area. <span id='white'>Neon City is something
          that will evolve and grow with our players for years to come.</span>
        </p>
      </div>
    </div>
      
  );
};

export default MMO;
