// Load and display individual blog post
document.addEventListener('DOMContentLoaded', function() {
    const postTitle = document.getElementById('post-title');
    const postDate = document.getElementById('post-date');
    const postContent = document.getElementById('post-content');

    // Get post ID from URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (!postId) {
        postTitle.textContent = 'Post not found';
        return;
    }

    // Get posts from localStorage
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const post = posts.find(p => p.id == postId);

    if (!post) {
        postTitle.textContent = 'Post not found';
        return;
    }

    postTitle.textContent = post.title;
    postDate.textContent = new Date(post.date).toLocaleString();
    postContent.innerHTML = post.content;
});
