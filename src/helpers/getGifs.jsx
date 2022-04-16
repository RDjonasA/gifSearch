const getGifs =  async(categories) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vbfL3chieTWz9KG6cMztFvQijD2w50sn&q=${encodeURI(categories)}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()
    console.log(data)
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
   return gifs
}

export default  getGifs