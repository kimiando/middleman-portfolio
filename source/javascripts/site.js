@import url('https://fonts.googleapis.com/css2?family=Kalnia:wght@200;300&family=La+Belle+Aurore&display=swap');
// This is where it all goes :)
function switchMode() {
  let moon = document.getElementById ("moon");
    if(moon.className=="moon"){
      moon.className="sun";
      document.body.style.backgroundColor = "#141D26";
      document.body.style.color = "#fff";
    }
  else {
    moon.className ="moon";
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
}
//
// document.addEventListener("DOMContentLoaded", function() {
//   window.addEventListener("scroll", checkHeight);

//   console.log("Scroll position:", window.scrollY);

//   function checkHeight() {
//     const goTopBtn = document.querySelector(".go-top-button");
//     console.log("Button element:", goTopBtn);

//     if (goTopBtn) {
//       if (window.scrollY < 200) {
//         goTopBtn.style.display = "flex";
//       } else {
//         goTopBtn.style.display = "none";
//       }
//     }
//   }
// });
document.addEventListener("DOMContentLoaded", function() {
  const toTop = document.querySelector(".go-top-button");
  console.log("toTop:", toTop);

  window.addEventListener("scroll", () => {
    console.log("Window scrollY:", window.pageYOffset);

    if (toTop && window.pageYOffset > 60) {
      console.log("Adding 'active' class");
      toTop.classList.add("active");
    } else if (toTop) {
      console.log("Removing 'active' class");
      toTop.classList.remove("active");
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  if (toTop) {
    toTop.addEventListener("click", scrollToTop);
  }
});
