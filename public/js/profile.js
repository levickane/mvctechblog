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

// const commentButtonHandler = async (event, comment_desc) => {
//   event.preventDefault();
//   console.log(comment_desc);
// };

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

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

//

// const response = (param1, param2) => {
//   fetch('/api/comments', {
//     method: 'POST',
//     body: JSON.parse({ comment_desc: param1, blog_id: param2 }),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then((data) => {
//     if (data) {
//       console.log('HELLO', data);
//       //   document.location.reload();
//     } else {
//       alert('Failed to comment blog');
//     }
//   });
// };

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);
