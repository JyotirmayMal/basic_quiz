// Get the form element and feed container element
const form = document.querySelector('form');
const feedContainer = document.querySelector('#feed-container');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
	// Prevent the form from submitting
	event.preventDefault();

	// Get the values of the name and message fields
	const name = document.querySelector('#name').value;
	const message = document.querySelector('#message').value;

	// Create a new feed item element and add it to the feed container
	const feedItem = document.createElement('div');
	feedItem.classList.add('feed-item');
	feedItem.innerHTML = `
		<h3>${name}</h3>
		<p>${message}</p>
		<small>${new Date().toLocaleString()}</small>
	`;
	feedContainer.appendChild(feedItem);

	// Save the feed item to local storage
	saveToLocalStorage(name, message);
});

// Load the saved feed items from local storage
loadFromLocalStorage();

// Function to save a feed item to local storage
function saveToLocalStorage(name, message) {
	// Get the existing feed items from local storage
	let feedItems = JSON.parse(localStorage.getItem('feedItems')) || [];

	// Add the new feed item to the array
	feedItems.push({
		name: name,
		message: message,
		date: new Date().toLocaleString()
	});

	
// Check if there are any saved posts in local storage
let savedPosts = JSON.parse(localStorage.getItem('posts'));
if (!savedPosts) {
  savedPosts = [];
}

// Function to display saved posts on page load
function displayPosts() {
  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = '';

  savedPosts.forEach((post) => {
    const postElement = `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      </div>
    `;
    postsContainer.innerHTML += postElement;
  });
}

// Function to add a new post
function addPost(event) {
  event.preventDefault();

  // Get values from form
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // Create post object and add to saved posts
  const newPost = { title, content };
  savedPosts.push(newPost);

  // Save posts to local storage
  localStorage.setItem('posts', JSON.stringify(savedPosts));

  // Clear form inputs
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';

  // Display new post on page
  displayPosts();
}

// Call displayPosts function on page load
window.addEventListener('load', displayPosts);

// Add event listener to form submit button
const postForm = document.getElementById('post-form');
postForm.addEventListener('submit', addPost);
}