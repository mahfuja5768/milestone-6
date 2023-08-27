function showPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => allPosts(data))
}

function allPosts(posts){
    const postItems = document.getElementById('posts');
    for(const post of posts){
     const postItem = document.createElement('li');
     postItem.innerHTML= `<h2 class="title">${post.title}</h2> <p class="text">${post.body}</p>`;
     postItems.appendChild(postItem);
   }
}

//comments
function showComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => allComments(data))
}

function allComments(comments){
    const commentItems = document.getElementById('comments');
    for(const comment of comments){
     const commentItem = document.createElement('li');
     commentItem.innerHTML= `<h2 class="title">${comment.name}</h2> <h3 class="title">${comment.email}</h3> <p class="text">${comment.body}</p>`;
     commentItems.appendChild(commentItem);
   }
}