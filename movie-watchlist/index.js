document.addEventListener('DOMContentLoaded', () => {
    const threshold = 280;
    document.querySelectorAll('.movie-plot').forEach(plot => {
        const full = plot.textContent.trim()
       if(full.length <= threshold) return;
       const truncated = full.slice(0, threshold).trim() + '...';
       plot.dataset.full = full;
       plot.dataset.truncated = truncated
       plot.textContent = truncated
        const btnReadMore = document.createElement('button');
        btnReadMore.className = 'read-more-btn';
        btnReadMore.type = 'button';
        btnReadMore.setAttribute('aria-expanded', 'false');
        btnReadMore.textContent = 'Read more';
        plot.appendChild(btnReadMore);

        const modal = document.getElementById('plot-modal');
        const modalPlotContent = document.getElementById('modal-plot-content');

        function openModal(text) {
            modalPlotContent.textContent = text;
            modal.hidden = false;
            // save active element to return focus
            modal.dataset.previousFocus = document.activeElement ? document.activeElement.id || '' : '';
            // focus close button
            const closeBtn = modal.querySelector('[data-modal-close]');
            closeBtn && closeBtn.focus();
            document.addEventListener('keydown', onKeyDown);
        }

        function closeModal() {
            modal.hidden = true;
            document.removeEventListener('keydown', onKeyDown);
            // return focus
            const prevId = modal.dataset.previousFocus;
            if (prevId) document.getElementById(prevId)?.focus();
        }

        function onKeyDown(e) {
            if (e.key === 'Escape') closeModal();
        }

        // wire modal close buttons/overlay
        modal.querySelectorAll('[data-modal-close]').forEach(el => el.addEventListener('click', closeModal));

        btnReadMore.addEventListener('click', () => openModal(plot.dataset.full));
    })

    document.getElementById('search-btn').addEventListener('click', async () => {
        const searchValue = document.getElementById('search-query').value
        const response  = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5c00afea&s=${searchValue}&plot=full`)
        const data = await response.json()
        console.log(data)
        data.Search.map(movie => {
            const movieContainer = document.createElement('section')
            const moviePoster = document.createElement('img')
            // moviePoster.src = movie.Poster
            moviePoster.className = 'movie-poster'
            const movieDetails = document.createElement('div')
            movieDetails.className = 'movie-details'
            const titleRating = document.createElement('div')
            titleRating.className = 'title-rating'
            const movieTitle = document.createElement('div')
            movieTitle.className = 'movie-title'
            movieTitle.textContent = movie.Title
        })

    })
})

//  <section class="card-component">
//         <img src="/movie-watchlist/images/oppie-poster.jpg" class="movie-poster">
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
//             <p class="movie-parameters">Watchlist</p>
//           </div>
//           <div>
//             <p class="movie-plot">Physicist J. Robert Oppenheimer feels how the world transitions to a new chapter in its history,
//               by leading the Manhattan Project along fellow physicsts like Richard Feynman and Hans Bethe. Featuring Robert Downey Jr, 
//               Emily Blunt and Matt Damon.         
//               Physicist J. Robert Oppenheimer feels how the world transitions to a new chapter in its history,
//               by leading the Manhattan Project along fellow physicsts like Richard Feynman and Hans Bethe. Featuring Robert Downey Jr, 
//               Emily Blunt and Matt Damon.      
//             </p>
//             </p>
//           </div>
//         </div>
//       </section> 