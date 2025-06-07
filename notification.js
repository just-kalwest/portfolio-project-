/*=====notification start====*/
const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      })
/*=====notification end====*/

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".mobile-toggle");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    sidebar.classList.toggle("close");
  });
});

let notificationCount = 0

function updateNotificationBadge() {
  const badge = document.getElementById('notificationBadge');
  if(badge){
    badge.textContent = notificationCount;
    badge.style.display = notificationCount > 0 ? 'inline': 'none';
  }
}

function receiveNotification(message) {
    notificationCount++;
    console.log("New notification:", message);
    updateNotificationBadge();
  }

/*   // Simulate incoming notifications every 5 seconds
  setInterval(() => {
    receiveNotification("You have a new message!");
  }); */

// Initialize
updateNotificationBadge();


// Polling function
function fetchNotifications() {
  fetch("https://your-api.com/notifications") // Replace with your real endpoint
    .then(response => response.json())
    .then(data => {
      // Assuming your API gives an array of unread notifications
      const unread = data.notifications.filter(n => !n.read);
      updateNotificationBadge(unread.length);
    })
    .catch(err => {
      console.error("Failed to fetch notifications:", err);
    });
}

// Start polling every 10 seconds
setInterval(fetchNotifications, 10000);

// Also fetch immediately on page load
fetchNotifications();