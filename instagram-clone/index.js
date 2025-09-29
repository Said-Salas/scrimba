const postsContainer = document.getElementById("post-section")

const posts = [
    {
        profile: "images/avatar-vangogh.jpg",
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        postImage: "images/post-vangogh.jpg",
        alt: "A painting by Vincent Van Gogh",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        profile: "images/avatar-ducreux.jpg",
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        postImage: "images/post-courbet.jpg",
        alt: "A painting by Gustave Courbet",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        profile: "images/avatar-courbet.jpg",
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        postImage: "images/post-ducreux.jpg",
        alt: "A self-portrait by Joseph Ducreux",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

posts.forEach(post => {

    let i = 0
    function likes(){
        if (i === 0){
             post.likes += 1
            likesEl.innerHTML = `${post.likes} likes`
            i += 1
            heartButton.src = "images/liked-heart.svg"
            
        }
        else {
            post.likes -= 1
            likesEl.innerHTML = `${post.likes} likes`
            i -= 1
            heartButton.src = "images/unliked-heart.svg"
        }
    }

    const postSection = document.createElement("section")

    const divOne = document.createElement("div")
    divOne.classList.add("sub-cont-one")
    
    const profilePhoto = document.createElement("img")
    profilePhoto.classList.add("profile-photo")
    profilePhoto.src = post.profile

    divOne.appendChild(profilePhoto)

    const divSubOne = document.createElement("div")
    divSubOne.classList.add("sub-sub-cont-one")

    const accountName = document.createElement("h1")
    accountName.classList.add("account-name")
    accountName.innerHTML = post.name

    const accountLocation = document.createElement("h2")
    accountLocation.classList.add("account-location")
    accountLocation.innerHTML = post.location

    divSubOne.appendChild(accountName)
    divSubOne.appendChild(accountLocation)

    divOne.appendChild(divSubOne)

    postSection.appendChild(divOne)

    const postImage = document.createElement("img")
    postImage.classList.add("img-post")
    postImage.src = post.postImage
    postImage.alt = post.alt

    postImage.addEventListener("click", likes)

    postSection.appendChild(postImage)

    const divTwo = document.createElement("div")
    divTwo.classList.add("sub-cont-two")

    const divSubTwo = document.createElement("div")
    divSubTwo.classList.add("sub-sub-cont-two")

    let heartButton = document.createElement("img")
    heartButton.classList.add("img-btns")
    heartButton.src = "images/unliked-heart.svg"
    
    heartButton.addEventListener("click", likes)
    

    const commentButton =  document.createElement("img")
    commentButton.classList.add("img-btns")
    commentButton.src = "images/icon-comment.png"

    const dmButton = document.createElement("img")
    dmButton.classList.add("img-btns")
    dmButton.src = "images/icon-dm.png"

    divSubTwo.appendChild(heartButton)
    divSubTwo.appendChild(commentButton)
    divSubTwo.appendChild(dmButton)

    divTwo.appendChild(divSubTwo)

    const likesEl = document.createElement("p")
    likesEl.classList.add("likes-el")
    likesEl.innerHTML = `${post.likes} likes`


    divTwo.appendChild(likesEl)

    const commentEl = document.createElement("p")
    commentEl.classList.add("comment-el")
    commentEl.innerHTML = `<span class="user-el">${post.username} </span> ${post.comment}`

    divTwo.appendChild(commentEl)

    postSection.appendChild(divTwo)

    const mainContainer = document.getElementById("home-page")
    mainContainer.appendChild(postSection)
    
})



/* <section>
                <div class="sub-cont-one">
                    <img src="images/avatar-vangogh.jpg" alt="Profile photo of Vincent Van Gogh" class="profile-photo">
                    <div class="sub-sub-cont-one">
                        <h1 class="account-name">Vincent Van Gogh</h1>
                        <h2 class="account-location">Zundert, Netherlands</h2>
                    </div>
                </div>
                <img src="images/post-vangogh.jpg" alt="A paint of Vincent Van Gogh" class="img-post">
                <div class="sub-cont-two">
                    <div class="sub-sub-cont-two">
                        <img src="images/icon-heart.png" class="img-btns">
                        <img src="images/icon-comment.png" class="img-btns">
                        <img src="images/icon-dm.png" class="img-btns">
                    </div>
                    <p class="likes-el">21, 492 likes</p>
                    <p class="comment-el"><span class="user-el">vincey1853 </span>just took a few mushrooms lol</p>
                </div>
</section> */