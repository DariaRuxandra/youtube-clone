
let notificationIcon = document.querySelector(".notifications-icon-containter");
let popup = document.querySelector(".notification-bar")

notificationIcon.addEventListener("click", function () {
  popup.classList.toggle("openPopup")
});
