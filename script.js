const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const rememberMe = document.getElementById('rememberMe');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!validateEmail(email.value)) {
    alert('Invalid email!');
    return;
  }

  if (!checkPasswordStrength(password.value)) {
    alert('Password must be at least 8 characters long with a number.');
    return;
  }

  if (rememberMe.checked) {
    localStorage.setItem('rememberedEmail', email.value);
  } else {
    localStorage.removeItem('rememberedEmail');
  }

  alert('Login successful!');
});

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function checkPasswordStrength(pw) {
  return pw.length >= 8 && /\d/.test(pw);
}

// Auto-fill remembered email
document.addEventListener('DOMContentLoaded', () => {
  const savedEmail = localStorage.getItem('rememberedEmail');
  if (savedEmail) {
    email.value = savedEmail;
    rememberMe.checked = true;
  }
});