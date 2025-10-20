document.addEventListener('DOMContentLoaded', () => {
    const mainEl = document.getElementById('main-container')
    document.getElementById('search-btn').addEventListener('click', async () => {
        mainEl.innerHTML = ''
        const searchValue = document.getElementById('search-query').value
        const response  = await fetch(`http://www.omdbapi.com/?apikey=5c00afea&s=${searchValue}&plot=full`)
        const data = await response.json()
        let idMovies = []
        data.Search.map(movie => {
            return idMovies.push(movie.imdbID)
        })

        idMovies.forEach(async id => {
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
            if (movie.Plot.length >= 225){
                const fullPlot = movie.Plot
                const shortPlot = movie.Plot.slice(0, 225).trim() + '...'
                moviePlot.textContent = shortPlot
                const btnReadMore = document.createElement('button')
                btnReadMore.className = 'read-more-btn'
                btnReadMore.textContent = 'Read More'
                moviePlot.textContent += btnReadMore
            }
            moviePlotContainer.appendChild(moviePlot)
            movieDetails.appendChild(moviePlotContainer)

            movieContainer.appendChild(movieDetails)

            mainEl.appendChild(movieContainer)
            moviePoster.addEventListener('error', () => {
                mainEl.removeChild(movieContainer)
            })
           
        })
        // const threshold = 280;
        // document.querySelectorAll('.movie-plot').forEach(plot => {
        // const full = plot.textContent.trim()
        // if(full.length <= threshold) return;
        // const truncated = full.slice(0, threshold).trim() + '...';
        // plot.dataset.full = full;
        // plot.dataset.truncated = truncated
        // plot.textContent = truncated
        //     const btnReadMore = document.createElement('button');
        //     btnReadMore.className = 'read-more-btn';
        //     btnReadMore.type = 'button';
        //     btnReadMore.setAttribute('aria-expanded', 'false');
        //     btnReadMore.textContent = 'Read more';
        //     plot.appendChild(btnReadMore);

        //     const modal = document.getElementById('plot-modal');
        //     const modalPlotContent = document.getElementById('modal-plot-content');

        //     function openModal(text) {
        //         modalPlotContent.textContent = text;
        //         modal.hidden = false;
        //         // save active element to return focus
        //         modal.dataset.previousFocus = document.activeElement ? document.activeElement.id || '' : '';
        //         // focus close button
        //         const closeBtn = modal.querySelector('[data-modal-close]');
        //         closeBtn && closeBtn.focus();
        //         document.addEventListener('keydown', onKeyDown);
        //     }

        //     function closeModal() {
        //         modal.hidden = true;
        //         document.removeEventListener('keydown', onKeyDown);
        //         // return focus
        //         const prevId = modal.dataset.previousFocus;
        //         if (prevId) document.getElementById(prevId)?.focus();
        //     }

        //     function onKeyDown(e) {
        //         if (e.key === 'Escape') closeModal();
        //     }

        //     // wire modal close buttons/overlay
        //     modal.querySelectorAll('[data-modal-close]').forEach(el => el.addEventListener('click', closeModal));

        //     btnReadMore.addEventListener('click', () => openModal(plot.dataset.full));
        // })
    })  
})
// <!-- Modal for full plot -->
// <div id="plot-modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" hidden>
//   <div class="modal__overlay" data-modal-close></div>
//   <div class="modal__panel" role="document">
//     <header class="modal__header">
//       <h2 id="modalTitle">Plot</h2>
//       <button class="modal__close" aria-label="Close modal" data-modal-close>&times;</button>
//     </header>
//     <div class="modal__body">
//       <p id="modal-plot-content"></p>
//     </div>
//   </div>
// </div>


//  <section class="card-component">
//         <div class='poster-container'>
//            <img src="/movie-watchlist/images/oppie-poster.jpg" class="movie-poster">
//         </div>
//         <div class="movie-details">
//           <div class="title-rating">
//             <h3 class="movie-title">Oppenheimer</h3>
//             <img src="/movie-watchlist/images/star-icon.svg" class="rating-icon">
//             <p class="movie-rating">4.9</p>
//           </div>
//           <div class="duration-genre-watchlist">
//             <p class="movie-parameters">180 min</p>
//             <p class="movie-parameters">Physics, War, Love</p>
//             <img src="/movie-watchlist/images/add-icon.svg" class="add-icon-one">
//             <p class="movie-parameters">Add to Watchlist</p>
//           </div>
//           <div>
//             <p class="movie-plot">Physicist J. Robert Oppenheimer feels how the world transitions to a new chapter in its history,
//               by leading the Manhattan Project along fellow physicsts like Richard Feynman and Hans Bethe. Featuring Robert Downey Jr, 
//               Emily Blunt and Matt Damon.         
//
//             </p>
//           </div>
//         </div>
//       </section> 
