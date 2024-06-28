document.getElementById('yes-button').addEventListener('click', function() {
    alert('Yay! I am so happy! 💖');
});

document.getElementById('no-button').addEventListener('mouseover', function() {
    const button = document.getElementById('no-button');
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const newTop = Math.random() * (containerRect.height - buttonRect.height);
    const newLeft = Math.random() * (containerRect.width - buttonRect.width);

    button.style.top = `${newTop}px`;
    button.style.left = `${newLeft}px`;
});
