document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    // You can switch content based on tab text here
  });
});

let notifCount = 3; // Example starting value
const notifBadge = document.getElementById('notifCount');

// Function to increase notification count
function addNotification() {
  notifCount++;
  notifBadge.textContent = notifCount;
  notifBadge.style.display = 'inline';
}

// Function to reset (e.g., when the bell is clicked)
document.querySelector('.notification-container').addEventListener('click', () => {
  notifCount = 0;
  notifBadge.textContent = '';
  notifBadge.style.display = 'none';
});
function goToEditPage() {
  window.location.href = "edituser.html";
}

// When page loads, get profile data
window.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("userName");
  const role = localStorage.getItem("userRole");

  if (name) document.querySelector("h2").textContent = name;
  if (role) document.querySelector(".sidebar p").textContent = role;
});

 document.getElementById('menuToggle').addEventListener('click', function () {
    const drawer = document.getElementById('mobileDrawer');
    drawer.classList.toggle('open');
});

document.getElementById('logoutBtn').addEventListener('click', function () {
    window.location.href = 'login.html';

  });



