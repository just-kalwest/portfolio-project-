// Simulated login process
const userData = {
  firstName: "Adewale",
  lastName: "Austin",
  about: "I'm a UI UX Designer and also Frontend Developer",
  website: "https://yourwebsite.com",
  username: "AdewaleAustin"
};

// Save to localStorage
localStorage.setItem('profileData', JSON.stringify(userData));

const data = JSON.parse(localStorage.getItem('profileData'));

  if (data) {
    document.getElementById('firstn').value = data.firstName;
    document.getElementById('lastn').value = data.lastName;
    document.getElementById('about').value = data.about;
    document.getElementById('website').value = data.website;
    document.getElementById('username').value = data.username;
  } else {
    alert("No profile data found. Please login.");
    window.location.href = 'login.html';
  }

   function saveProfile() {
    const profile = {
      firstName: document.getElementById("firstn").value,
      lastName: document.getElementById("lastn").value,
      about: document.getElementById("about").value,
      website: document.getElementById("website").value,
      username: document.getElementById("username").value
    };

    // Save to localStorage
    localStorage.setItem("userProfile", JSON.stringify(profile));

    alert("Profile saved successfully!");

    // Optionally redirect to user page
    // window.location.href = "user.html";
  }

  // Pre-fill if already saved
  window.onload = function () {
    const saved = JSON.parse(localStorage.getItem("userProfile"));
    if (saved) {
      document.getElementById("firstn").value = saved.firstName || "";
      document.getElementById("lastn").value = saved.lastName || "";
      document.getElementById("about").value = saved.about || "";
      document.getElementById("website").value = saved.website || "";
      document.getElementById("username").value = saved.username || "";
    }
  };
  
   document.getElementById('menuToggle').addEventListener('click', function () {
    const drawer = document.getElementById('mobileDrawer');
    drawer.classList.toggle('open');
});

let notifCount = 3; // Example starting value
const notifBadge = document.getElementById('notifCount');

// Function to increase notification count
function addNotification() {
  notifCount++;
  notifBadge.textContent = notifCount;
  notifBadge.style.display = 'inline';
}