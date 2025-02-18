let slideIndex = 1;
showSlides(slideIndex);

let slideInterval = setInterval(function() {
  plusSlides(1);
}, 10000); // Adjust the interval as needed
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Use class for multiple elements

  if (n > slides.length) {
    slideIndex = 1; // Wrap around to the first slide
  } else if (n < 1) {
    slideIndex = slides.length; // Wrap around to the last slide
  } else {
    slideIndex = n;  // Update slideIndex with the current value of n
  }
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
}

// Function to navigate slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Initialize the first slide
showSlides(slideIndex);












 document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate inputs
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate form submission
  alert(`Thank you, ${name}! Your message has been sent.`);
  document.getElementById('contact-form').reset();
});

// Helper function to validate email
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
} 























