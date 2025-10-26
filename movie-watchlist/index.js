const selectedMovies = []
let watchlistMovies = []
const mainEl = document.getElementById('main-container')
// localStorage.clear()

const renderMovies = (arrayMovies) => {
    arrayMovies.forEach(async id => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=5c00afea&i=${id}&plot=full`)
            const movie = await response.json()

            const movieContainer = document.createElement('section')
            movieContainer.className = 'card-component'

            const moviePosterContainer = document.createElement('div')
            moviePosterContainer.className = 'poster-container'
            const moviePoster = document.createElement('img');
            moviePoster.className = 'movie-poster';
            moviePoster.src = movie.Poster
            moviePosterContainer.appendChild(moviePoster)
            movieContainer.appendChild(moviePosterContainer)
    
            const movieDetails = document.createElement('div')
            movieDetails.className = 'movie-details'
            const titleRating = document.createElement('div')
            titleRating.className = 'title-rating'
            const movieTitle = document.createElement('h3')
            movieTitle.className = 'movie-title'
            movieTitle.textContent = movie.Title  
            const ratingIcon = document.createElement('img')  
            ratingIcon.src = '/movie-watchlist/images/star-icon.svg'
            ratingIcon.className = 'rating-icon'
            const ratingValue = document.createElement('p')
            ratingValue.className = 'movie-rating'
            // console.log(movie.Ratings[0].Value)
            const rawRatingValue = movie.Ratings[0].Value
            const finalRatingValue = (rawRatingValue.split('/')[0])/2
            // console.log(finalRatingValue)
            ratingValue.textContent = finalRatingValue
            titleRating.appendChild(movieTitle)
            titleRating.appendChild(ratingIcon)
            titleRating.appendChild(ratingValue)
            movieDetails.appendChild(titleRating)
            
            const durationGenreWatchlist = document.createElement('div')
            durationGenreWatchlist.className = 'duration-genre-watchlist'
            const movieDuration = document.createElement('p')
            movieDuration.className = 'movie-parameters'
            if (movie.Runtime === 'N/A'){
                movie.Runtime = 'Not available'
            }
            movieDuration.textContent = movie.Runtime 
            const movieGenres = document.createElement('p')
            movieGenres.className = 'movie-parameters'
            movieGenres.textContent = movie.Genre

            const addMovieToWatchlist = document.createElement('img')
            addMovieToWatchlist.className = 'add-icon-one'
            addMovieToWatchlist.src = '/movie-watchlist/images/add-icon.svg'

            const watchlistText = document.createElement('p')
            watchlistText.className = 'movie-parameters'
            watchlistText.textContent = 'Add to watchlist'

            durationGenreWatchlist.appendChild(movieDuration)
            durationGenreWatchlist.appendChild(movieGenres)
          
            durationGenreWatchlist.appendChild(addMovieToWatchlist)
            durationGenreWatchlist.appendChild(watchlistText)
            
            movieDetails.appendChild(durationGenreWatchlist)

            const moviePlotContainer = document.createElement('div')

            const moviePlot = document.createElement('p')
            moviePlot.className = 'movie-plot'
            if (movie.Plot === 'N/A'){
                movie.Plot = 'Not available'
            }
            moviePlot.textContent = movie.Plot

            if (movie.Plot.length >= 100){
                const updatePlot = () => {
                    if (window.innerWidth <= 1040){
                        moviePlot.textContent = movie.Plot.slice(0, 100).trim() + '...'
                    }
                    else {
                        moviePlot.textContent = movie.Plot.slice(0, 450).trim() + '...'
                    }
                }
                window.addEventListener('resize', () => {
                    updatePlot()
                })
                updatePlot()
                const fullPlot = movie.Plot
                const btnReadMore = document.createElement('button')
                btnReadMore.className = 'read-more-btn'
                btnReadMore.textContent = 'Read More'
                moviePlot.appendChild(btnReadMore)

                const modalContainer = document.createElement('div')
                modalContainer.className = 'modal'
                modalContainer.hidden = true

                const modalOverlay = document.createElement('div')
                modalOverlay.className = 'modal-overlay'
                modalContainer.appendChild(modalOverlay)

                const modalPanel = document.createElement('div')
                modalPanel.className = 'modal-panel'

                const modalHeader = document.createElement('header')
                modalHeader.className = 'modal-header'

                const modalTitle = document.createElement('h2')
                modalTitle.textContent = 'Plot'

                const btnCloseModal = document.createElement('button')
                btnCloseModal.className = 'modal-close'
                btnCloseModal.textContent = 'X'

                modalHeader.appendChild(modalTitle)
                modalHeader.appendChild(btnCloseModal)

                modalPanel.appendChild(modalHeader)

                const modalBody = document.createElement('div')
                modalBody.className = 'modal-body'

                const modalPlotContent = document.createElement('p')
                modalPlotContent.className = 'modal-plot-content'
                modalBody.appendChild(modalPlotContent)

                modalPanel.appendChild(modalBody)

                modalContainer.appendChild(modalPanel)

                document.body.appendChild(modalContainer)

                const openModal = () => {
                    modalPlotContent.textContent = fullPlot
                    modalContainer.hidden = false
                }
                btnReadMore.addEventListener('click', openModal)

                const closeModal = () => {
                    modalContainer.hidden = true
                }
                btnCloseModal.addEventListener('click', closeModal)
                modalOverlay.addEventListener('click', closeModal)
            }

            moviePlotContainer.appendChild(moviePlot)
            movieDetails.appendChild(moviePlotContainer)

            movieContainer.appendChild(movieDetails)

            mainEl.appendChild(movieContainer)
            moviePoster.addEventListener('error', () => {
                mainEl.removeChild(movieContainer)
            })

            const addToWatchlist = () => {
                if(!selectedMovies.includes(movie.imdbID)) {
                    selectedMovies.push(movie.imdbID)
                    addToLocalStorage(selectedMovies)
                }
                addMovieToWatchlist.classList.remove('pulse')
                void addMovieToWatchlist.offsetWidth
                addMovieToWatchlist.classList.add('pulse')
            }
            addMovieToWatchlist.addEventListener('click', addToWatchlist)
        }) 
    }

const addToLocalStorage = newMovies => {
    if(localStorage.getItem('savedMovies')){   
        watchlistMovies = JSON.parse(localStorage.getItem('savedMovies'))
        const filteredMovies = [...watchlistMovies, ...newMovies.filter(movies => !watchlistMovies.includes(movies))]
        localStorage.setItem('savedMovies', JSON.stringify(filteredMovies))
    }
    else {
        localStorage.setItem('savedMovies', JSON.stringify(newMovies))
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-btn').addEventListener('click', async () => {
        mainEl.innerHTML = ''
        const searchValue = document.getElementById('search-query').value
        const response  = await fetch(`http://www.omdbapi.com/?apikey=5c00afea&s=${searchValue}&plot=full`)
        const data = await response.json()

        if (data.Response === 'False') {
            const noResultsMessageContainer = document.createElement('div')
            const noResultsMessage = document.createElement('p')
            noResultsMessage.className = 'message-one'
            noResultsMessage.textContent = 'Unable to find what you\'re looking for. Please try another search.'
            noResultsMessageContainer.appendChild(noResultsMessage)
            mainEl.appendChild(noResultsMessageContainer)
        }
        else {
            let idMovies = []
            data.Search.map(movie => {
                return idMovies.push(movie.imdbID)
            })
            renderMovies(idMovies)
        }
    })

    const goToWatchlist = document.getElementById('search-to-watchlist')
    if (goToWatchlist) {
        goToWatchlist.addEventListener('click', () => {
            window.location.href = '/movie-watchlist/subfiles/watchlist.html'
        })
    }
})
