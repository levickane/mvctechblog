const submitBtn = document.getElementById('submitButton');
submitBtn.addEventListener('click', async function (e) {
  e.preventDefault();
  let comment_desc = document.getElementById('comment').value.trim();
  if (e.target.hasAttribute('data-id')) {
    const blogId = e.target.getAttribute('data-id');
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment_desc: comment_desc, blog_id: blogId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      window.location.reload();
    } else {
      alert('failed to create comment');
    }
  }
});
