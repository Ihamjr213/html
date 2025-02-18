// Check for a success message in the URL
const urlParams = new URLSearchParams(window.location.search);
const success = urlParams.get('success');

if (success === '1') {
    document.getElementById('message').textContent = 'Sign up successful!';
}