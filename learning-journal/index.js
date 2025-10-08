import { posts } from './posts/posts.js'

const bodyEl = document.getElementById('body')
const mainEl = document.getElementById('main-section')
const homeBtn = document.getElementById('home-section')
const aboutMeEl = document.getElementById('about-me-section')
const containerPosts = document.createElement('section')
const containerPostsTwo = document.createElement('section')


containerPosts.classList.add('column')
containerPostsTwo.classList.add('column')

const recentPost = document.createElement('div')
recentPost.innerHTML = `<div class="recent-post-wrapper" id=${posts[0].id}>
                            <img src="${posts[0].coverImg}" class="header-img" id=${posts[0].id}>
                            <div class="header-container" id=${posts[0].id}>
                                <p class="date" id=${posts[0].id}>${posts[0].date}</p>
                                <h1 class="header-text" id=${posts[0].id}>${posts[0].title}</h1>
                                <p class="intro" id=${posts[0].id}>${posts[0].intro}</p>
                            </div>
                        </div>`

mainEl.appendChild(recentPost)                       

let feedPosts = ''
const firstPosts = () => {
    posts.slice(0, 3).map(post => {
        return feedPosts += `<div class="post" id=${post.id}>
                                <img src="${post.coverImg}" class="post-image"  id=${post.id}>
                                <p class="date-two" id=${post.id}>${post.date}</p>
                                <h2 class="post-title" id=${post.id}>${post.title}</h2>
                                <p class="text" id=${post.id}>${post.intro}</p>
                            </div>`
    }) 
    containerPosts.innerHTML = feedPosts
    mainEl.appendChild(containerPosts)
}
 
firstPosts()

let remfeedPosts = ''
const renderRemPosts = () => {
    mainEl.removeChild(containerPosts)
    viewMoreBtn.style.display = 'none'
    posts.map(post => {
        return remfeedPosts += `<div class="post" id=${post.id}>
                                <img src="${post.coverImg}" class="post-image"  id=${post.id}>
                                <p class="date-two" id=${post.id}>${post.date}</p>
                                <h2 class="post-title" id=${post.id}>${post.title}</h2>
                                <p class="text" id=${post.id}>${post.intro}</p>
                             </div>`
    })
    containerPostsTwo.innerHTML = remfeedPosts
    mainEl.appendChild(containerPostsTwo)
   
}

containerPosts.innerHTML += `<button id="view-more">View More</button>`

const viewMoreBtn = document.getElementById('view-more')

viewMoreBtn.addEventListener('click', renderRemPosts)

const renderPost = (postId) => {
    const post = posts.find(p => p.id == postId)
    if (post) {
        mainEl.removeChild(recentPost)
        containerPosts.innerHTML = ''
        containerPosts.innerHTML += `<div class="post">
                                <p class="date-two">${post.date}</p>
                                <h2 class="post-title">${post.title}</h2>
                                <p class="text">${post.intro}</p>
                                <img src="${post.coverImg}" class='post-image'>
                                <p class="text-content">${post.content}</p>
                                <h3>Recent posts</h3>
                                </div>`
    }

    let otherFeedPosts = ''
    const otherPosts = posts.filter(p => p.id != postId)
    otherPosts.map(post => {
        return otherFeedPosts += `<div class="post" id=${post.id}>
                            <img src="${post.coverImg}" class="post-image">
                            <p class="date-two">${post.date}</p>
                            <h2 class="post-title">${post.title}</h2>
                            <p class="intro-feed">${post.intro}</p>
                        </div>`
    })

    containerPosts.innerHTML += otherFeedPosts
    
}

bodyEl.addEventListener('click', (e) => {
    renderPost(e.target.id)
})




