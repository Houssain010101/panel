const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    console.log('Toggle is ON');
    // Do something when toggle is ON
  } else {
    console.log('Toggle is OFF');
    // Do something when toggle is OFF
  }
});

// Username password 

function login() {
    const username = document.querySelector('.username').value;
    const password = document.querySelector('.password').value;
    const errorMessage = document.getElementById('error-message');
    const overlay = document.getElementById('overlay');

    if (password === '1K') {
        document.location.href = 'indexp2.html';
    } else {
        errorMessage.style.display = 'block';
        overlay.style.display = 'block';

        // تأخير إخفاء رسالة الخطأ بعد بضع ثواني
        setTimeout(function() {
            errorMessage.style.display = 'none';
            overlay.style.display = 'none';
        }, 3000); // 3000 مللي ثانية = 3 ثوانٍ
    }
}
