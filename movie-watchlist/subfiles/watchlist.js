const watchlistEl = document.getElementById('watchlist-container')
const messageTwoContainer = document.getElementById('message-two-container')
let rawData
let savedMovies
if (localStorage.getItem('savedMovies')){
    rawData = localStorage.getItem('savedMovies')
    savedMovies = rawData.trim().startsWith('[') ? JSON.parse(rawData) : rawData.split(',').map(string => string.trim())
}
// localStorage.clear()

const renderWatchlist = savedMovies => {
    watchlistEl.removeChild(messageTwoContainer)
    savedMovies.forEach(async id => {
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

            const removeMovieFromWatchlist = document.createElement('img')
            removeMovieFromWatchlist.className = 'remove-icon'
            removeMovieFromWatchlist.src = '/movie-watchlist/images/remove-icon.svg'

            const watchlistText = document.createElement('p')
            watchlistText.className = 'movie-parameters'
            watchlistText.textContent = 'Remove from watchlist'

            durationGenreWatchlist.appendChild(movieDuration)
            durationGenreWatchlist.appendChild(movieGenres)
          
            durationGenreWatchlist.appendChild(removeMovieFromWatchlist)
            durationGenreWatchlist.appendChild(watchlistText)
            
            movieDetails.appendChild(durationGenreWatchlist)

            const moviePlotContainer = document.createElement('div')

            const moviePlot = document.createElement('p')
            moviePlot.className = 'movie-plot'
            if (movie.Plot === 'N/A'){
                movie.Plot = 'Not available'
            }
            moviePlot.textContent = movie.Plot

            if (movie.Plot.length >= 200){
                const fullPlot = movie.Plot
                const shortPlot = movie.Plot.slice(0, 225).trim() + '...'
                moviePlot.textContent = shortPlot
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

            watchlistEl.appendChild(movieContainer)
            moviePoster.addEventListener('error', () => {
                watchlistEl.removeChild(movieContainer)
            })

            const removeFromWatchlist = () => {
                    watchlistEl.removeChild(movieContainer)
                    const index = savedMovies.indexOf(movie.imdbID)
                    savedMovies.splice(index, 1)
                    localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
                    emptyWatchlist()
            }
            removeMovieFromWatchlist.addEventListener('click', removeFromWatchlist)            
    })
    const emptyWatchlist = () => {
        if (savedMovies.length === 0){
            const emptyWatchlistContainer = document.createElement('div')
            emptyWatchlistContainer.className = 'message-two-container'
            
            const emptyWatchlistMessage = document.createElement('p')
            emptyWatchlistMessage.className = 'message-one'
            emptyWatchlistMessage.textContent = 'Your watchlist is looking a little empty...'
            emptyWatchlistContainer.appendChild(emptyWatchlistMessage)
    
            const emptyWatchlistSuggestionContainer = document.createElement('div')
            emptyWatchlistSuggestionContainer.className = 'add-movies-prompt'
    
            const backToSearchPageBtn = document.createElement('img')
            backToSearchPageBtn.className = 'add-icon-two'
            backToSearchPageBtn.src = '/movie-watchlist/images/add-icon.svg'
            backToSearchPageBtn.addEventListener('click', () => {
                window.location.href = '/movie-watchlist/index.html'
            })
            emptyWatchlistSuggestionContainer.appendChild(backToSearchPageBtn)
    
            const backToSearchPageMessage = document.createElement('p')
            backToSearchPageMessage.className = 'message-two'
            backToSearchPageMessage.textContent = 'Let\'s add some movies'
            backToSearchPageMessage.addEventListener('click', () => {
                window.location.href = '/movie-watchlist/index.html'
            })
            emptyWatchlistSuggestionContainer.appendChild(backToSearchPageMessage)
    
            emptyWatchlistContainer.appendChild(emptyWatchlistSuggestionContainer)
            watchlistEl.appendChild(emptyWatchlistContainer)
        }
    }
    emptyWatchlist()
}



document.addEventListener('DOMContentLoaded', () => {
    const addToWatchlistBtn = document.getElementsByClassName('add-icon-two')[0]
    const addToWatchlistMessage = document.getElementsByClassName('message-two')[0]
    const goToSearchPage = document.getElementById('watchlist-to-search')
    addToWatchlistBtn.addEventListener('click', () => {
        window.location.href = '/movie-watchlist/index.html'
    })
    addToWatchlistMessage.addEventListener('click', () => {
        window.location.href = '/movie-watchlist/index.html'
    })
    goToSearchPage.addEventListener('click', () => {
        window.location.href = '/movie-watchlist/index.html'
    })
    if(savedMovies){
        renderWatchlist(savedMovies)
    }
    
})
