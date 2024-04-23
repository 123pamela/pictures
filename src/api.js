

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=w5--aaF4N6t4wmrWh3XfDzV9zI2uQst509DgHGUimJ0'
    const response = await axios .get(url, {
params: {
    query: term
}
        
})
    console.log(term)
    console.log(response.data.results)

    return response.data.results
}
export default searchImage