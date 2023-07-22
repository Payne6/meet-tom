document.addEventListener("DOMContentLoaded", () => {

    // scroll animation of text
    const boxes = document.querySelectorAll(".h2-split");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("appear", entry.isIntersecting);

            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0,
        rootMargin: "-180px",
    });


    boxes.forEach(box => {
        observer.observe(box);
    });




});


