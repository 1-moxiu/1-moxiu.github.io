document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a');
    const body = document.body;

    // Function to handle link clicks
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default anchor behavior

            const href = link.getAttribute('href'); // Get the href of the clicked link

            // Start loading animation
            body.classList.add('fade-out');

            // Wait for the fade-out transition to finish
            setTimeout(() => {
                window.location.href = href; // Redirect to the new link
            }, 300); // Duration should match the CSS transition time
        });
    });
});
