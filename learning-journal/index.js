import { posts } from './posts/posts.js'

const mainEl = document.getElementById('main-section')
const homeBtn = document.getElementById('home-section')
const aboutMeEl = document.getElementById('about-me-section')

const recentPost = document.createElement('div')
recentPost.innerHTML = `<div class="recent-post-wrapper">
                            <img src="${posts[0].coverImg}" class="header-img">
                            <div class="header-container">
                                <p class="date">${posts[0].date}</p>
                                <h1 class="header-text">${posts[0].title}</h1>
                                <p class="intro">${posts[0].intro}</p>
                            </div>
                        </div>`
mainEl.appendChild(recentPost)

const containerPosts = document.createElement('section')
containerPosts.classList.add('column')

let feedPosts = ''
posts.map(post => {
    return feedPosts += `<div class="post">
                    <img src="${post.coverImg}" class="post-image">
                    <p class="date-two">${post.date}</p>
                    <h2 class="post-title">${post.title}</h2>
                    <p class="intro-feed">${post.intro}</p>
                  </div>`
})

containerPosts.innerHTML = feedPosts
mainEl.appendChild(containerPosts)





