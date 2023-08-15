document.getElementById('submit-btn').addEventListener('click',function(){
    // console.log('clicked')
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    
    // Danger: Don't use this method. Do not verify email password on the client side
    // step-4: verify Email and Pass
    if (email === 'sontan1@baap.com' && password === 'Boropola') {
        // console.log('valid User');
        window.location.href = 'bank.html'
    }
    else{
        alert('Invalid User');
    }
})