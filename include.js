
document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('.btn-search');
  const searchPopup = document.getElementById('searchPopup');

  // Toggle popup when clicking search icon
  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = searchPopup.style.display === 'block';
    searchPopup.style.display = isVisible ? 'none' : 'block';
  });

  // Close popup when clicking outside
  document.addEventListener('click', (e) => {
    if (!searchPopup.contains(e.target) && !searchBtn.contains(e.target)) {
      searchPopup.style.display = 'none';
    }
  });

  // Optional form submission
  document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = this.querySelector('input').value.trim();
    if (query) {
      console.log("Searching for:", query);
    }
  });
});

    

      fetch("header.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("header").innerHTML = data;

        // ✅ Place this code inside the fetch callback
        const searchBtn = document.querySelector('.btn-search');
        const searchPopup = document.getElementById('searchPopup');

        // Toggle popup on button click
        searchBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isVisible = searchPopup.style.display === 'block';
          searchPopup.style.display = isVisible ? 'none' : 'block';
        });

        // Hide popup on outside click
        document.addEventListener('click', (e) => {
          if (!searchPopup.contains(e.target) && !searchBtn.contains(e.target)) {
            searchPopup.style.display = 'none';
          }
        });

        // Optional: form submission logic
        document.getElementById('searchForm').addEventListener('submit', function (e) {
          e.preventDefault();
          const query = this.querySelector('input').value.trim();
          if (query) {
            console.log("Searching for:", query);
          }
        });
      });
      

        fetch("body.html")
      .then(res => res.text())
      .then(data => {
        document.getElementById("body").innerHTML = data;
      });

   // Fetch and insert footer content dynamically
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("backToTop");
 
  if (backToTop) {
    // Show the button when scrolled more than 300px down
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    });
 
    // Smooth scroll to the top when button is clicked
    backToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});


 
  const nextBtn = document.getElementById("HBP-next");
const prevBtn = document.getElementById("HBP-prev");
const cards = document.querySelector(".HBP-cards");
 
let currentIndex = 0;
const totalCards = cards.children.length;
const visibleCards = 3;
 
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    cards.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
  }
});
 
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    cards.style.transform = `translateX(-${currentIndex * (100 / visibleCards)}%)`;
  }
});