document.addEventListener("DOMContentLoaded", function () {
  function closeAlert() {
    var alertContainer = document.getElementById("alert-container");
    alertContainer.style.display = "none";
  }

  function toggleContent() {
    var content = document.querySelector(".collapse-content");
    content.style.display = content.style.display === "none" ? "block" : "none";
  }

  (function scrollNavHorizontally() {
    const nav = document.querySelector("header nav");
    nav.addEventListener("wheel", (e) => {
      e.preventDefault();
      nav.scrollLeft += e.deltaY;
    });
  })();

  // Add .in-view class to the first section immediately
  const homeSection = document.querySelector('#home');
  if (homeSection) {
    setTimeout(() => {
      homeSection.classList.add('in-view');
    }, 100);
  }
  
  // Add header scroll effect
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
    
    if (currentScrollY > lastScrollY) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
    
    lastScrollY = currentScrollY;
  });
    
 const scrollTopBtn = document.querySelector('.scroll-top-btn');
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  
  // Add intersection observer for sections
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
          }
      });
  }, {
      threshold: 0.1
  });
    
  sections.forEach(section => {
      observer.observe(section);
  });
});

function closeAlert() {
  var alertContainer = document.getElementById("alert-container");
  alertContainer.style.display = "none";
}

function toggleContent() {
  var content = document.querySelector('.collapse-content');
  if (content.style.display === 'block' || content.style.display === '') {
      content.style.display = 'none';
  } else {
      content.style.display = 'block';
      content.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  }
}

function toggle_me_info() {
  var content = document.querySelector('.collapse-me-info');
  if (content.style.display === 'block') {
      content.style.display = 'none';
  } else {
      content.style.display = 'block';
      content.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  }
}
