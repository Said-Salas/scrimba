const postsContainer = document.getElementById("post-section")

const posts = [
    {
        profile: "images/avatar-vangogh.jpg",
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        profile: "images/avatar-ducreux.jpg",
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        profile: "images/avatar-courbet.jpg",
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

posts.forEach(post => {
    const postSection = document.createElement("section")

    const divOne = document.createElement("div")
    divOne.classList.add("sub-cont-one")
    
    const profilePhoto = document.createElement("img")
    profilePhoto.src("images/avatar-vangogh.jpg")
    profilePhoto.alt("Profile photo of Vincent Van Gogh")
    profilePhoto.classList.add("profile-photo")
    divOne.appendChild("profilePhoto")
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