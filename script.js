document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll("nav a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      enlaces.forEach((item) => item.classList.remove("activo"));
      enlace.classList.add("activo");
    });
  });
});
