const getMovies = async (url) => {
    return new Promise((res, rej) => {
        fetch(url)
            .then(res => res.json())
            .then(response => { res(response) })
            .catch(error => error = error)
    })
}

export { getMovies }