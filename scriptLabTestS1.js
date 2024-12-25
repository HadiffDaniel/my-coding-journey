/*
Muhammad Hadiff Daniel bin Syarul Azley
2310771
Section 1
*/

const blogPosts = [];

document.getElementById("blogForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Capture input values from user
    const blogTitle = document.getElementById("blogTitle").value;
    const blogContent = document.getElementById("blogContent").value;

    // Store blog post in JSON
    const newPost = {
        title: blogTitle,
        content: blogContent,
    };
    blogPosts.push(newPost);

    displayBlogPosts();

    // Reset the form
    document.getElementById("blogForm").reset();
});

function displayBlogPosts() {
    const blogContainer = document.getElementById("blogContainer");
    blogContainer.innerHTML = ""; // Clear existing posts

    blogPosts.forEach((post) => {
        const blogPost = document.createElement("div");
        blogPost.className = "blog-post";

        const titleElement = document.createElement("h3");
        titleElement.textContent = post.title;

        const contentElement = document.createElement("p");
        contentElement.textContent = post.content; // Fixed the case issue

        blogPost.appendChild(titleElement);
        blogPost.appendChild(contentElement);
        blogContainer.appendChild(blogPost);
    });
}