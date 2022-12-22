import axios from 'axios'
import mapper from './mapper'

const deezer = {}

deezer.findArtist = async (artist) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
      params: { q: `${artist}` },
      headers: {
        'X-RapidAPI-Key': process.env.VUE_APP_DEEZER,
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    }
    axios(options)
      .then((res) => {
        console.log({
          method: 'deezer.findArtist',
          artist: artist,
          data: res.data,
        })
        resolve(mapper.mapArtist(artist, res.data))
      })
      .catch((err) => reject(err.message))
  })
}

export default deezer
