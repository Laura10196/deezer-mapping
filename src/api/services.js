import deezer from './deezer'

const services = {}

services.findArtist = (params) => {
  return new Promise((resolve, reject) => {
    let findArtist = deezer.findArtist

    findArtist(params)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
  })
}

export default services
