// Define the API endpoint URLs
const apiUrl = 'https://portfolio-backend-kj30.onrender.com/api/v1/profiles/{id}';
const searchUrl = `${apiUrl}/search`;
const notificationUrl = `${apiUrl}/notification`;
const uploadFileUrl = `${apiUrl}/upload-file`;
const saveDraftUrl = `${apiUrl}/save-draft`;
const continueUploadUrl = `${apiUrl}/continue-upload`;


const searchInput = document.getElementById('search-container-input');
const searchButton = document.getElementById('search-container-button');
const searchResults = document.getElementById('search-results');
const notificationBell = document.getElementById('notification-icon');
const notificationBadge = document.getElementById('badge');





// Get the buttons and file input
const cancelButton = document.getElementById('cancel');
const saveButton = document.getElementById('save');
const continueButton = document.getElementById('continue');
const fileInput = document.getElementById('fileInput');
const dragDropArea = document.getElementById('dragDropArea');
const fileList = document.getElementById('fileList');
const uploadStatus = document.getElementById('uploadStatus');

// searchButton
searchButton.addEventListener('click', search);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    search();
  }
});

async function search() {
  const query = searchInput.value.trim();
  if (query) {
    try {
      const response = await fetch(`/api/search?q=${query}`);
      const results = await response.json();
      renderResults(results);
    } catch (error) {
      console.error(error);
    }
  }
}

function renderResults(results) {
  searchResults.innerHTML = '';
  if (results.length > 0) {
    results.forEach((result) => {
       const resultElement = document.createElement('div');
      resultElement.textContent = result.title;
      searchResults.appendChild(resultElement);
    });
  } else {
    searchResults.textContent = 'No results found';
  }
}

const express = require('express');
const app = express();

app.get('/api/search', (req, res) => {
  const query = req.query.q;
  // Search your database or data source here
  const results = [
    { title: 'Result 1' },
    { title: 'Result 2' },
  ];
  res.json(results);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// Function to update the notification badge
function updateNotificationBadge(count) {
  notificationBadge.textContent = count;
  if (count > 0) {
    notificationBadge.style.display = 'inline-block';
  } else {
    notificationBadge.style.display = 'none';
  }
}

// Fetch notification count from backend API
async function fetchNotificationCount() {
  try {
    const response = await fetch('/api/notifications/count');
    const data = await response.json();
    updateNotificationBadge(data.count);
  } catch (error) {
    console.error(error);
  }
}

const socket = new WebSocket('ws://localhost:8080');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'notification') {
    updateNotificationBadge(data.count);
  }
};

// Fetch notification count on page load
fetchNotificationCount();

const express = require('express');
// const app = express();
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let notificationCount = 0;
app.get('/api/notifications/count', (req, res) => {
  res.json({ count: notificationCount });
});

// Update notification count and broadcast to clients
function updateNotificationCount(count) {
  notificationCount = count;
  wss.clients.forEach((client) => {
    client.send(JSON.stringify({ type: 'notification', count }));
  });
}

setInterval(() => {
  updateNotificationCount(Math.floor(Math.random() * 10));
}, 5000);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// upload-feild
let files = [];

// Add event listeners for drag and drop
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.style.border = '2px solid #007bff';
});

dropZone.addEventListener('dragleave', () => {
  dropZone.style.border = '';
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  files = e.dataTransfer.files;
  renderFileList();
});

// Add event listener for file input change
fileInput.addEventListener('change', (e) => {
  files = e.target.files;
  renderFileList();
});

// Render file list
function renderFileList() {
  fileList.innerHTML = 'fileInput';
  Array.from(files).forEach((file) => {
    const fileElement = document.createElement('div');
    fileElement.textContent = file.name;
    fileList.appendChild(fileElement);
  });
}




// Add event listeners to the buttons
cancelButton.addEventListener('click', () => {
  // Call API to cancel upload
  fetch(`${apiUrl}/cancel-upload`, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

saveButton.addEventListener('click', () => {
  // Call API to save draft
  const projectData = {
    // Add project data here
  };
  fetch(saveDraftUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projectData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

continueButton.addEventListener('click', () => {
  // Call API to continue upload
  fetch(continueUploadUrl, {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

// Add event listener to the file input
fileInput.addEventListener('change', (e) => {
  // Get the selected files
  const files = e.target.files;

  // Display the selected files
  const fileListHtml = Array.from(files).map((file) => {
    return `<div>${file.name}</div>`;
  }).join('');
  fileList.innerHTML = fileListHtml;

  // Upload the files to the API endpoint
  const formData = new FormData();
  Array.from(files).forEach((file) => {
    formData.append('files', file);
  });
  fetch(uploadFileUrl, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      uploadStatus.textContent = 'Files uploaded successfully!';
    })
    .catch((error) => {
      console.error(error);
      uploadStatus.textContent = 'Error uploading files!';
    });
});

// Add event listeners for drag and drop
dragDropArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  dragDropArea.classList.add('active');
});

dragDropArea.addEventListener('dragleave', () => {
  dragDropArea.classList.remove('active');
});

dragDropArea.addEventListener('drop', (e) => {
  e.preventDefault();
  dragDropArea.classList.remove('active');

  // Get the dropped files
  const files = e.dataTransfer.files;

  // Display the selected files
  const fileListHtml = Array.from(files).map((file) => {
    return `<div>${file.name}</div>`;
  }).join('');
  fileList.innerHTML = fileListHtml;

  // Upload the files to the API endpoint
  const formData = new FormData();
  Array.from(files).forEach((file) => {
    formData.append('files', file);
  });
  fetch(uploadFileUrl, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      uploadStatus.textContent = 'Files uploaded successfully!';
    })
    .catch((error) => {
      console.error(error);
      uploadStatus.textContent = 'Error uploading files!';
    });
});





