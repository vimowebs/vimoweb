document.addEventListener('DOMContentLoaded', () => {
    const radius = 180; // radius of the circle-container
    const circle = document.querySelector('.spinner');
    const children = circle.querySelectorAll('#spinner-child');
    const angleStep = 360 / children.length; // angle between each child

    children.forEach((child, index) => {
        const angle = angleStep * index; // angle for the current child
        const x = radius + radius * Math.cos(angle * (Math.PI / 180)) - child.offsetWidth / 2;
        const y = radius + radius * Math.sin(angle * (Math.PI / 180)) - child.offsetHeight / 2;
        child.style.left = `${x}px`;
        child.style.top = `${y}px`;
    });
});