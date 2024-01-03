
// This is where it all goes :)
// moon function
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

// scroll
document.addEventListener("DOMContentLoaded", function() {
  const toTop = document.querySelector(".go-top-button");
  // console.log("toTop:", toTop);

  window.addEventListener("scroll", () => {
    // console.log("Window scrollY:", window.pageYOffset);

    if (toTop && window.pageYOffset > 60) {
      // console.log("Adding 'active' class");
      toTop.classList.add("active");
    } else if (toTop) {
      // console.log("Removing 'active' class");
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

// JS for typing
function TxtType(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.isDeleting = false;
  this.tick();
}

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

function initTypewriters() {
  const elements = document.getElementsByClassName('typewrite');
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-type');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
}

function injectCss() {
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid white}";
  document.body.appendChild(css);
}

window.onload = function() {
  setTimeout(function() {
    initTypewriters();
    injectCss();
  }, 1000);
};


// filter
function filterProjects(mainTech) {
  var cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {
    var cardMainTech = card.getAttribute('data-main');

    if (cardMainTech) {
      if (mainTech === 'All' || cardMainTech === mainTech) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    } else {
      card.style.display = 'none';
    }
  });
}
