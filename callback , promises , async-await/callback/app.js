// ! Callback hell

function getProfile(username, cb) {
    setTimeout(() => {
        console.log("Fetching profile data.......");
        cb({ _id: 120, username: username, age: 19, email: "yograj@gmail.com" });
    }, 2000);
}

function FetchPosts(id, cb) {
    console.log("Fetching posts.......");
    setTimeout(() => {
        cb({ _id: id, posts: ["Post 1", "Post 2", "Post 3"] });
    }, 3000);
}

function GetLikedPosts(id, cb) {
    console.log("Fetching all liked posts..........");
    setTimeout(() => {
        cb({ _id: id, story: ["Story 1", "Story 2", "Story 3"] });
    }, 3500);
}

getProfile("yograj", function (data) {
    console.log(data);
    FetchPosts(data._id, function (posts) {
        console.log(posts);
        GetLikedPosts(data._id, function (saved) {
            console.log(saved);
        })
    })
})