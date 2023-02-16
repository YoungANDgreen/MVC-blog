// New Post Form Handler
const newFormHandler = async (event) => {
  event.preventDefault();

  // Get the post title and post text from the form
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const postText = document
    .querySelector('textarea[name="post-text"]')
    .value.trim();

  // user id is added
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content: postText,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // if the response is okay, reload the page.
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

// Event Listener for the new post submit button
document
  .querySelector('.create-form')
  .addEventListener('submit', newFormHandler);
