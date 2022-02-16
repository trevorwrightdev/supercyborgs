import { useEffect } from 'react'
const axios = require('axios')

const Player = ({address}) => {


  useEffect(() => {

    const config = {
      'X-API-Key': 'YPgigrH5sLD5BoN3a8uAVKCw2gPc1wUdTgSd8gbdqIpKNShD3sj4quvyUEQcb6dF',
      network: 'devnet',
    }

    // * Get NFTs
    axios.get(`https://solana-gateway.moralis.io/account/${config.network}/${address}/nft`, {
      headers: {
        'X-API-Key': config['X-API-Key'],
      }
    })
    .then((response) => {
      for (let nft of response.data) {
        // * Check NFT metadata
        axios.get(`https://solana-gateway.moralis.io/nft/${config.network}/${nft.mint}/metadata`, {
          headers: {
            'X-API-Key': config['X-API-Key'],
          }
        })
        .then((response) => {
          console.log(response.data.name)
        })

      }
    })

  }, [])


  return (
    <div>
        <h1>{address}</h1>
    </div>
  )
}

export default Player