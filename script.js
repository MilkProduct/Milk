function toggleLoginMethod() {
  const isEmail = document.getElementById('toggle-input').checked;
  document.getElementById('phone-section').classList.toggle('hidden', isEmail);
  document.getElementById('email-section').classList.toggle('hidden', !isEmail);
  document.getElementById('otp-section').classList.add('hidden');
}

function sendOTP() {
  const isEmail = document.getElementById('toggle-input').checked;
  const input = isEmail ? document.getElementById('email').value : document.getElementById('phone').value;

  if (!input) {
    alert(`Please enter your ${isEmail ? 'email' : 'phone number'}`);
    return;
  }

  // Simulate sending OTP
  alert(`OTP sent to ${input}`);
  document.getElementById('otp-section').classList.remove('hidden');
  startTimer();
}

function verifyOTP() {
  const otp = document.getElementById('otp').value;
  if (otp === "123456") {
    alert("OTP Verified!");
  } else {
    alert("Invalid OTP");
  }
}

let countdown;
function startTimer() {
  let timeLeft = 30;
  const timerEl = document.getElementById('timer');
  const resendBtn = document.getElementById('resend-btn');
  
  resendBtn.disabled = true;
  timerEl.textContent = `Resend OTP in ${timeLeft}s`;

  countdown = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Resend OTP in ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerEl.textContent = "Didn't get OTP?";
      resendBtn.disabled = false;
    }
  }, 1000);
}

function sendOTP() {
  const isEmail = document.getElementById('toggle-input').checked;
  const input = isEmail ? document.getElementById('email').value : document.getElementById('phone').value;

  if (!input) {
    alert(`Please enter your ${isEmail ? 'email' : 'phone number'}`);
    return;
  }

  alert(`OTP sent to ${input}`);

  const otpSection = document.getElementById('otp-section');
  otpSection.classList.remove('hidden');
  otpSection.classList.add('animated');

  // Restart animation if shown again
  setTimeout(() => {
    otpSection.classList.remove('animated');
  }, 500);

  startTimer();
}

