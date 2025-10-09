import { posts } from './posts/posts.js'

const bodyEl = document.getElementById('body')
const mainEl = document.getElementById('main-section')
const containerPosts = document.createElement('section')
const containerPostsTwo = document.createElement('section')
const containerPostsThree = document.createElement('section')
let postContainer = document.createElement('section')

containerPosts.classList.add('column')
containerPostsTwo.classList.add('column')
containerPostsThree.classList.add('column')
postContainer.classList.add('column')

let feedPosts = ''
let recentPost = ''
const firstPosts = () => {
    
    recentPost = document.createElement('div')
    recentPost.innerHTML = `<div class="recent-post-wrapper" id=${posts[0].id}>
                            <img src="${posts[0].coverImg}" class="header-img" id=${posts[0].id}>
                            <div class="header-container" id=${posts[0].id}>
                                <p class="date" id=${posts[0].id}>${posts[0].date}</p>
                                <h1 class="header-text" id=${posts[0].id}>${posts[0].title}</h1>
                                <p class="intro" id=${posts[0].id}>${posts[0].intro}</p>
                            </div>
                        </div>`

    mainEl.appendChild(recentPost) 

    posts.slice(0, 3).map(post => {
        return feedPosts += `<div class="post" id=${post.id}>
                                <img src="${post.coverImg}" class="post-image"  id=${post.id}>
                                <p class="date-two" id=${post.id}>${post.date}</p>
                                <h2 class="post-title" id=${post.id}>${post.title}</h2>
                                <p class="text" id=${post.id}>${post.intro}</p>
                            </div>`
    }) 
    containerPosts.innerHTML = feedPosts
    containerPosts.innerHTML += `<button id="view-more">View More</button>`
    mainEl.appendChild(containerPosts)
    return recentPost
}
 
firstPosts()

let remfeedPosts = ''
const renderRemPosts = () => {
    if (mainEl.contains(recentPost)){
        remfeedPosts = ''
        mainEl.removeChild(containerPosts)
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
    else {
        remfeedPosts = ''
        mainEl.removeChild(containerPostsThree)
        otherPosts.map(post => {
            return remfeedPosts += `<div class="post" id=${post.id}>
                                        <img src="${post.coverImg}" class="post-image"  id=${post.id}>
                                        <p class="date-two" id=${post.id}>${post.date}</p>
                                        <h2 class="post-title" id=${post.id}>${post.title}</h2>
                                        <p class="text" id=${post.id}>${post.intro}</p>
                                    </div>`
        })
        containerPostsThree.innerHTML = remfeedPosts
        mainEl.appendChild(containerPostsThree)
    }
    
}

let postDisplay = ''
let otherFeedPosts = ''
let otherPosts = []
const renderPost = (postId) => {
    const post = posts.find(p => p.id == postId)
    if (post) {
        postDisplay = ''
        otherFeedPosts = ''
        if (mainEl.contains(recentPost)){
                    mainEl.removeChild(recentPost)

                    if (mainEl.contains(containerPosts)){
                        mainEl.removeChild(containerPosts)
                    }
                    else if ( mainEl.contains(containerPostsTwo)){
                        mainEl.removeChild(containerPostsTwo)
                    }
                    postDisplay += `<div class="post">
                                            <p class="date-two">${post.date}</p>
                                            <h2 class="post-title">${post.title}</h2>
                                            <p class="text">${post.intro}</p>
                                            <img src="${post.coverImg}" class='post-image'>
                                            <p class="text-content">${post.content}</p>
                                            <h3>Recent posts</h3>
                                            </div>`

                    otherPosts = posts.filter(p => p.id != postId)
                    otherPosts.slice(0,3).map(post => {
                        return otherFeedPosts += `<div class="post" id=${post.id}>
                                                <img src="${post.coverImg}" class="post-image"  id=${post.id}>
                                                <p class="date-two" id=${post.id}>${post.date}</p>
                                                <h2 class="post-title" id=${post.id}>${post.title}</h2>
                                                <p class="intro-feed" id=${post.id}>${post.intro}</p>
                                            </div>`
                        }) 
                    postContainer.innerHTML = postDisplay
                    mainEl.appendChild(postContainer)
                    containerPostsThree.innerHTML = otherFeedPosts
                    containerPostsThree.innerHTML += `<button id="view-more">View More</button>`
                    mainEl.appendChild(containerPostsThree)  
                }    
        else    {
                    mainEl.removeChild(postContainer)
                    mainEl.removeChild(containerPostsThree)
        
                    postDisplay += `<div class="post">
                    <p class="date-two">${post.date}</p>
                    <h2 class="post-title">${post.title}</h2>
                    <p class="text">${post.intro}</p>
                    <img src="${post.coverImg}" class='post-image'>
                    <p class="text-content">${post.content}</p>
                    <h3>Recent posts</h3>
                    </div>`

                    otherPosts = posts.filter(p => p.id != postId)
                    otherPosts.slice(0,3).map(post => {
                        return otherFeedPosts += `<div class="post" id=${post.id}>
                                                <img src="${post.coverImg}" class="post-image" id=${post.id}>
                                                <p class="date-two" id=${post.id}>${post.date}</p>
                                                <h2 class="post-title" id=${post.id}>${post.title}</h2>
                                                <p class="intro-feed" id=${post.id}>${post.intro}</p>
                                            </div>`
                        }) 
                    postContainer.innerHTML = postDisplay
                    mainEl.appendChild(postContainer)
                    containerPostsThree.innerHTML = otherFeedPosts
                    containerPostsThree.innerHTML += `<button id="view-more">View More</button>`
                    mainEl.appendChild(containerPostsThree) 
        }               
    }
    return otherPosts
}

let aboutMeInfo = ''
const aboutMe = () => {
    aboutMeInfo = `<img src="./images/said-salas.jpg"} class="profile-pic">
                    <h2 class="post-title">Hi! My name is Said and welcome to my journal</h2>
                    <p class="text">I'm a passionate developer who loves to share insights about web development,
                     programming, and anything tech-related. This journal is where I document my learning journey 
                     and share interesting articles and tutorials.</p>`

                     containerPosts.innerHTML = aboutMeInfo
                     mainEl.append(containerPosts)
}

bodyEl.addEventListener('click', (e) => {
    if (e.target.id === 'view-more') {
        renderRemPosts()
    } else if (e.target.id === 'home-section' || e.target.id === 'title-btn') {
        mainEl.innerHTML = '' // Clear existing content
        feedPosts = '' // Reset feedPosts
        firstPosts() // Re-render initial posts
    }else if (e.target.id === 'about-me-section') {
        mainEl.innerHTML = ''
        aboutMe()
    }
    else {
        renderPost(e.target.id)
    }
})




