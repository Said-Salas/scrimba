import { posts } from './posts/posts.js'

const bodyEl = document.getElementById('body')
const mainEl = document.getElementById('main-section')
const containerPosts = document.createElement('section')
const containerPostsTwo = document.createElement('section')
const containerPostsThree = document.createElement('section')
let postContainer = document.createElement('section')
let aboutMeContainer = document.createElement('section')

containerPosts.classList.add('column')
containerPostsTwo.classList.add('column')
containerPostsThree.classList.add('column')
postContainer.classList.add('post-box')
aboutMeContainer.classList.add('grid-container')

let feedPosts = ''
let recentPost = ''
const firstPost = () => {
    
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
    return recentPost
}

const firstFeed = () => {
    feedPosts = ''
    posts.slice(0, 3).map(post => {
        return feedPosts += `<div class="post" id=${post.id}>
                                <img src="${post.coverImg}" class="post-image"  id=${post.id}>
                                <p class="date-two" id=${post.id}>${post.date}</p>
                                <h2 class="post-title" id=${post.id}>${post.title}</h2>
                                <p class="text" id=${post.id}>${post.intro}</p>
                            </div>`
    }) 
    containerPosts.innerHTML = feedPosts
    containerPosts.innerHTML += `<div></div>` // Placeholder to push button to the second column
    containerPosts.innerHTML += `<button id="view-more">View More</button>`
    mainEl.appendChild(containerPosts)
}
 
firstPost()
firstFeed()

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
    else if(mainEl.contains(containerPostsThree)){
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
    else {
        mainEl.removeChild(containerPosts)
        remfeedPosts = ''
        posts.map(post => {
            return remfeedPosts += `<div class="post" id=${post.id}>
                                        <img src="${post.coverImg}" class="post-image"  id=${post.id}>
                                        <p class="date-two" id=${post.id}>${post.date}</p>
                                        <h2 class="post-title" id=${post.id}>${post.title}</h2>
                                        <p class="text" id=${post.id}>${post.intro}</p>
                                    </div>`
        })
        containerPosts.innerHTML = remfeedPosts
        mainEl.appendChild(containerPosts)
    }
}

let postDisplay = ''
let otherFeedPosts = ''
let otherPosts = []
const renderPost = (postId) => {
    const post = posts.find(p => p.id == postId)
    if (post) {
        window.scrollTo(0, 0);
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
                                            <img src="${post.coverImg}" class='inside-post-image'>
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
                    containerPostsThree.innerHTML += `<div></div>`
                    containerPostsThree.innerHTML += `<button id="view-more">View More</button>`
                    mainEl.appendChild(containerPostsThree)  
                }    
        else if (mainEl.contains(postContainer)) {
                    mainEl.removeChild(postContainer)
                    mainEl.removeChild(containerPostsThree)
        
                    postDisplay += `<div class="post">
                    <p class="date-two">${post.date}</p>
                    <h2 class="post-title">${post.title}</h2>
                    <p class="text">${post.intro}</p>
                    <img src="${post.coverImg}" class='inside-post-image'>
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
                    containerPostsThree.innerHTML += `<div></div>`
                    containerPostsThree.innerHTML += `<button id="view-more">View More</button>`
                    mainEl.appendChild(containerPostsThree) 
        }
        
        else {  
                    mainEl.removeChild(aboutMeContainer)
                    mainEl.removeChild(containerPosts)
                    postDisplay += `<div class="post">
                    <p class="date-two">${post.date}</p>
                    <h2 class="post-title">${post.title}</h2>
                    <p class="text">${post.intro}</p>
                    <img src="${post.coverImg}" class='inside-post-image'>
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
                    containerPostsThree.innerHTML += `<div></div>`
                    containerPostsThree.innerHTML += `<button id="view-more">View More</button>`
                    mainEl.appendChild(containerPostsThree) 
        }
    }
    return otherPosts
}

let aboutMeInfo = ''
const aboutMe = () => {
    aboutMeInfo = `<img src="./images/said-salas.jpg"} class="profile-pic">
                    <div class="about-title-intro">
                        <h2 class="about-title">Hi! My name is Said and welcome to my journal</h2>
                        <p class="about-text-one">I'm a passionate developer who loves to share insights about web development,
                        programming, and anything tech-related. This journal is where I document my learning journey 
                        and share interesting articles and tutorials.</p>
                     </div>
                     <h3 class="subtitle-one">The Architecture of Innovation</h3>
                     <p class="about-text-two">As a software engineer, I'm constantly amazed by the intricate architectures we build. It's 
                     not just about writing code; it's about designing systems that are robust, scalable, and efficient. Every decision,
                      from choosing a database to structuring microservices, feels like laying a brick in a grand digital edifice. Seeing
                       these complex systems hum along, powering applications that millions use, is incredibly rewarding.</p>
                     <h3 class="subtitle-two">Collaborative Code, Shared Success</h3>
                     <p class="about-text-three">My journey in software engineering has taught me the immense power of collaboration. While individual contributions are vital, the truly remarkable projects are born from teams working in harmony. Code reviews, pair programming, and lively discussions about design patterns aren't just tasks; they're opportunities to learn, grow, and collectively elevate the quality of our work. The shared success of shipping a feature or fixing a critical bug as a team is a feeling I deeply cherish.</p>
                     
                     <h3 class="subtitle-three">Recent posts</h3>`

                     aboutMeContainer.innerHTML = aboutMeInfo
                     mainEl.append(aboutMeContainer)
                     firstFeed()
}

bodyEl.addEventListener('click', (e) => {
    if (e.target.id === 'view-more') {
        renderRemPosts()
    } else if (e.target.id === 'home-section' || e.target.id === 'title-btn') {
        mainEl.innerHTML = '' // Clear existing content
        feedPosts = '' // Reset feedPosts
        firstPost()
        firstFeed() // Re-render initial posts
    }else if (e.target.id === 'about-me-section') {
        mainEl.innerHTML = ''
        aboutMe()
    }
    else {
        renderPost(e.target.id)
    }
})




