const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#location-name').value.trim();
    const locationPhone = document.querySelector('#location-phone').value.trim();
    const locationAddress = document.querySelector('#location-address').value.trim();
    const locationURL = document.querySelector('#location-url').value.trim();
  
    if (name && locationPhone && locationAddress && locationURL) {
      const response = await fetch(`/api/locations`, {
        method: 'POST',
        body: JSON.stringify({ name, locationPhone, locationAddress, locationURL }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/addLocation');
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
        document.location.replace('/addLocation');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-location-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.location-list')
    .addEventListener('click', delButtonHandler);
  