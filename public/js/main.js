const deleteButtons = document.querySelectorAll('.delete-entry');

deleteButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    const entryId = button.getAttribute('data-entry-id');

    if (confirm('Are you sure you want to delete this entry?')) {
      fetch(`/entry/${entryId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        location.reload()
      })
      .catch(error => {
        console.error('Error deleting entry:', error);
      });
    }
  });
});
