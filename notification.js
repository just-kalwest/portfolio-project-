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
