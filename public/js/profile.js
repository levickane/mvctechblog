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

// document
//   .querySelector('.new-blog-form')
//   .addEventListener('submit', newFormHandler);

const submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', async function (e) {
  e.preventDefault();
  let comment_desc = document.getElementById('comment').value.trim();
  if (e.target.hasAttribute('data-id')) {
    const blogId = e.target.getAttribute('data-id');
    console.log(blogId);
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment_desc: comment_desc, blog_id: blogId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      console.log(`we did it`);
    } else {
      alert('failed to create comment');
    }
  }
  console.log(comment_desc);
});

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

// document
//   .querySelector('.blog-list')
//   .addEventListener('click', delButtonHandler);
