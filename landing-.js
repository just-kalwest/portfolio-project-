const apiUrl = 'https://portfolio-backend-kj30.onrender.com/api/v1/profiles/{id}';
const searchUrl = `${apiUrl}/search`;
const notificationUrl = `${apiUrl}/notification`;

const searchInput = document.getElementById('search-container-input');
const searchButton = document.getElementById('search-container-button');
const searchResults = document.getElementById('search-results');
const notificationBell = document.getElementById('notification-icon');
const notificationBadge = document.getElementById('badge');



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

// Example notification update
setInterval(() => {
  updateNotificationCount(Math.floor(Math.random() * 10));
}, 5000);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});




// function updateBadgeCount(count) {
//   document.getElementById('badge').innerText = count;
// }

// // Fetch notification count from backend
// fetch('/api/notifications/count')
//   .then((response) => response.json())
//   .then((data) => updateBadgeCount(data.count))
//   .catch((error) => console.error(error));

