import { useEffect } from 'react'
import Unity, { UnitContext } from 'react-unity-webgl'
const axios = require('axios')

const nfts = [];

const Player = ({address}) => {

  useEffect(() => {

    const config = {
      apiKey: {
        headers: {
          'X-API-Key': 'YPgigrH5sLD5BoN3a8uAVKCw2gPc1wUdTgSd8gbdqIpKNShD3sj4quvyUEQcb6dF',
        }
      },
      network: 'devnet',
      // * Used to check if the NFT is from the right collection.
      owner: '9YzzdYwvDwCLZMMkFUSpwuL7siZCT22yaaYYg7y9n64M',
      collection: 'Super Cyborgs'
    }

    // * Get NFTs
    axios.get(`https://solana-gateway.moralis.io/account/${config.network}/${address}/nft`, config.apiKey)
    .then((response) => {
      for (let nft of response.data) {
        // * Get metadata
        axios.get(`https://solana-gateway.moralis.io/nft/${config.network}/${nft.mint}/metadata`, config.apiKey)
        .then((metaResponse) => {

          // * Check if they are in collection
          let isOwner = false;
          for (let owner of metaResponse.data.metaplex.owners) {
            if (owner.address === config.owner) isOwner = true;
          }

          let isInCollection = false;
          let colName = '';
          let stop = false;
          for (let character of metaResponse.data.name) {
            if (character === '#') stop = true;

            if (!stop) {
              colName += character;
            }
          }
          colName = colName.substring(0, colName.length - 1)
          
          isInCollection = colName === config.collection;

          if (isOwner && isInCollection) {
            // * Get attributes
            axios.get(metaResponse.data.metaplex.metadataUri)
            .then((attrResponse) => {
              // * Put attributes and name into JS object
              const token = {
                name: attrResponse.data.name,
              }

              for (let attribute of attrResponse.data.attributes) {
                token[attribute.trait_type] = attribute.value
              }

              nfts.push(token)

            })
          }
        })
      }
    })

    console.log(nfts)

  }, [])


  return (
    <div>
        <h1>{address}</h1>
    </div>
  )
}

export default Player