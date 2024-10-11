// Get a reference to the file input element
const inputElement = document.querySelector('input[type="file"]');

// Create a FilePond instance
const pond = FilePond.create(inputElement, {
  storeAsFile: true,
  maxFiles: 3,
  maxParallelUploads: 3,
  maxFileSize: '2MB',
  maxTotalFileSize: '2MB',
  acceptedFileTypes: ['image/gif', 'image/png', 'image/jpeg'],
});
