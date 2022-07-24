const alertBtn = document.getElementById('alert');
const confirm = document.getElementById('confirm');
const prompt = document.getElementById('prompt');
const safe_prompt = document.getElementById('safe_prompt');

alertBtn.addEventListener('click', function() {
    window.alert('Alert!');
});