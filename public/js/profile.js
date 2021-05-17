const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#blog-name').value.trim();
  const description = document.querySelector('#blog-desc').value.trim();

  if (name && description) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create blog');
    }
  }
};

const commentButtonHandler = async (event, comment_desc) => {
  event.preventDefault();
  console.log(comment_desc);
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete blog');
    }
  }
};

// document
//   .querySelector('.new-blog-form')
//   .addEventListener('submit', newFormHandler);

const submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', async function (e) {
  e.preventDefault();
  let comment_desc = document.getElementById('comment').value.trim();
  if (e.target.hasAttribute('data-id')) {
    const id = e.target.getAttribute('data-id');
    console.log(id);
    if (comment_desc) {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'POST',
        body: JSON.stringify(comment_desc),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
  console.log(comment_desc);
  //   commentButtonHandler(comment_desc);
});

// document
//   .querySelector('.blog-list')
//   .addEventListener('click', delButtonHandler);
