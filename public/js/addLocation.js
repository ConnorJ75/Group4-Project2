const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#location-name').value.trim();
  const phone = document.querySelector('#location-phone').value.trim();
  const address = document.querySelector('#location-address').value.trim();
  const url = document.querySelector('#location-url').value.trim();

  if (name && phone && address && url) {
    const response = await fetch(`/api/locations`, {
      method: 'POST',
      body: JSON.stringify({ name, phone, address, url }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/locations/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.location-list')
  .addEventListener('click', delButtonHandler);
document
  .querySelector('.new-location-form')
  .addEventListener('submit', newFormHandler);

  

