const mapper = {}

mapper.mapArtist = (artist, data) => {
  console.log({
    method: 'mapper',
    artist: artist,
    data: data,
  })

  let mapped = {
    albums: mapAlbums(data.artist, data.data),
  }
  console.log({ mapped: mapped })
  return mapped
}

let mapAlbums = (artist, data) => {
  let mappedAlbums = data.map((x) => {
    return {
      artist: x.artist.name,
      ...x.album, // puts everything that is in data.x.album in root
      duration: (x.duration / 60).toFixed(1),
      explicit: x.explicit_lyrics,
      id: x.id,
      title: x.title,
      shortTitle: x.title_short,
      type: x.type,
      rank: x.rank,
      link: x.link,
      md5Image: x.md5_image,
      preview: x.preview,
    }
  })
  return mappedAlbums
}

export default mapper
