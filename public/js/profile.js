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

const delButtonHandler = async (event) => {
  if (
    event.target.hasAttribute('data-id') &&
    event.target.classList.contains('delete')
  ) {
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

const editButtonHandler = async (event) => {
  if (
    event.target.hasAttribute('data-id') &&
    event.target.classList.contains('edit')
  ) {
    const editForm = document.querySelectorAll('.edit-div');
    const id = event.target.getAttribute('data-id');
    editForm.forEach((div) => {
      let divId = div.dataset.id;
      if (divId == id) {
        div.style.display = 'block';
      }
    });
  }
};

const updateBlogHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id');
  const name = document.getElementsByClassName('edit-blog-name').value.trim();
  const description = document
    .getElementsByClassName('edit-blog-desc')
    .value.trim();
  console.log(id);
  if (id && name && description) {
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
    if (response.ok) {
      document.location.replace(`/blogs/${id}`);
    } else {
      alert('Failed to UPDATE blog');
    }
  }
};

document
  .querySelector('.new-blog-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', delButtonHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', editButtonHandler);

document.querySelector('.update').addEventListener('click', updateBlogHandler);
