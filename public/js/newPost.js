const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#postTitle').value.trim();
    const body = document.querySelector('#postBody').value.trim();
    console.log(title, body)

    if (title && body) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('failed to post')
        }
    }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostHandler);