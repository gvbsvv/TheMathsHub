document.addEventListener("DOMContentLoaded", function () {
    const subjects = document.querySelectorAll(".subject");
    const contentFrame = document.getElementById("content-frame");

    subjects.forEach(subject => {
        subject.addEventListener("click", function () {
            const file = this.getAttribute("data-file");
            contentFrame.src = `view.html?file=${file}`;
        });
    });
});
