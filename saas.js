const form = document.querySelector(".form");
const button = document.querySelector(".submit");

// Create message element
const msg = document.createElement("p");
msg.id = "form-msg";
msg.style.marginTop = "10px";
form.appendChild(msg);

form.addEventListener("submit", function(e){
  e.preventDefault();

  const username = form.querySelector('input[type="email"]').value.trim();
  const password = form.querySelector('input[type="password"]').value.trim();

  // Clear previous message
  msg.textContent = "";
  msg.style.color = "red";

  // ✅ VALIDATION

  // Check empty fields
  if (username === "" || password === "") {
    msg.textContent = "Please fill in all fields.";
    return;
  }

  // Email validation (basic)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(username)) {
    msg.textContent = "Please enter a valid email address.";
    return;
  }

  // Password validation
  if (password.length < 6) {
    msg.textContent = "Password must be at least 6 characters.";
    return;
  }

  // ✅ PROCESSING STATE
  button.value = "Processing...";
  button.disabled = true;

  // Simulate server delay
  setTimeout(() => {

    // ✅ SUCCESS STATE
    button.value = "Success ✓";
    button.style.background =" #7c5cff";
    

    msg.style.color = "#7c5cff";
    msg.textContent = "Account created successfully!";

    // Reset after 2 seconds
    setTimeout(() => {
      form.reset();
      button.value = "Sign up";
      button.disabled = false;
      button.style.background = "";
      msg.textContent = "";
    }, 2000);

  }, 2000);
});


const track = document.getElementById('logos-track');

// Clone all logos to make a seamless loop
track.innerHTML += track.innerHTML;

let speed = 0.5; // px per frame
let x = 0;

function animate() {
  x -= speed;
  if (x <= -track.offsetWidth / 2) {
    x = 0; // reset to start
  }
  track.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animate);
}

animate();
