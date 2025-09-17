// Blog Editor Functionality - Recreated from scratch
document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor');
    const titleInput = document.getElementById('post-title');
    const saveBtn = document.getElementById('save-btn');
    const boldBtn = document.getElementById('bold-btn');
    const italicBtn = document.getElementById('italic-btn');
    const imageBtn = document.getElementById('image-btn');
    const videoBtn = document.getElementById('video-btn');

    // Toolbar functions
    boldBtn.addEventListener('click', function() {
        document.execCommand('bold');
    });

    italicBtn.addEventListener('click', function() {
        document.execCommand('italic');
    });

    imageBtn.addEventListener('click', function() {
        const url = prompt('Enter image URL:');
        if (url) {
            document.execCommand('insertImage', false, url);
        }
    });

    videoBtn.addEventListener('click', function() {
        const url = prompt('Enter video embed URL (e.g., YouTube embed):');
        if (url) {
            const videoHtml = `<iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen></iframe>`;
            document.execCommand('insertHTML', false, videoHtml);
        }
    });

    // Save post
    saveBtn.addEventListener('click', function() {
        const title = titleInput.value.trim();
        const content = editor.innerHTML.trim();

        if (!title || !content) {
            alert('Please enter a title and content.');
            return;
        }

        const post = {
            id: Date.now(),
            title: title,
            content: content,
            date: new Date().toISOString()
        };

        // Get existing posts
        let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.push(post);
        localStorage.setItem('blogPosts', JSON.stringify(posts));

        alert('Post saved!');
        // Redirect to blog or clear form
        titleInput.value = '';
        editor.innerHTML = '';
    });
});
