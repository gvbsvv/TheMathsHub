document.addEventListener("DOMContentLoaded", function () {
    // Existing collapsible code (if you still need it)
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }


    async function loadMarkdown(file, title) {
        try {
            const rawURL = `https://raw.githubusercontent.com/gvbsvv/TheMathsHub/main/${file}`;  // Corrected URL format
            const response = await fetch(rawURL);
            if (!response.ok) {
                throw new Error(`Error loading ${file}: ${response.status}`);
            }
            const text = await response.text();
            const converter = new showdown.Converter();
            document.getElementById("content-title").innerText = title;
            document.getElementById("content-box").innerHTML = converter.makeHtml(text);
        } catch (error) {
            console.error(error);
            document.getElementById("content-box").innerText = `Error loading ${file}.`;
        }
    }

    function addLinks(links, targetElementId) {
        const ul = document.getElementById(targetElementId);
        if (ul) {
            links.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = link.text;
                a.onclick = () => loadMarkdown(link.file, link.text); // Call loadMarkdown
                li.appendChild(a);
                ul.appendChild(li);
            });
        } else {
            console.error("Target element not found:", targetElementId);
        }
    }

    function toggleSection(sectionId) {
        const sections = ['math-intro', 'algebra-links', 'geometry-links', 'calculus-links', 'statistics-links', 'math6-links', 'math6plus-links', 'math7-links', 'math7plus-links', 'math8-links', 'math1-links', 'math2-links', 'math3-links']; // Include all sections
        sections.forEach(id => {
            document.getElementById(id).style.display = (id === sectionId && document.getElementById(id).style.display !== 'block') ? 'block' : 'none';
        });
    }

    window.addEventListener('DOMContentLoaded', () => {
        loadMarkdown('mathintro.md', 'Introduction to Maths'); // Initial load (important!)

        // ... (Your link arrays for all subjects - make sure they are ALL here) ...

        const math6Links = [ /* ... Math 6 Links */ ];
        const math6PlusLinks = [ /* ... Math 6 Plus Links */ ];
        const math7Links = [ /* ... Math 7 Links */ ];
        const math7PlusLinks = [ /* ... Math 7 Plus Links */ ];
        const math8Links = [ /* ... Math 8 Links */ ];
        const math1Links = [ /* ... Math 1 Links */ ];
        const math2Links = [ /* ... Math 2 Links */ ];
        const math3Links = [ /* ... Math 3 Links */ ];

        setTimeout(() => {
            addLinks(math6Links, 'math6-links');
            addLinks(math6PlusLinks, 'math6plus-links');
            addLinks(math7Links, 'math7-links');
            addLinks(math7PlusLinks, 'math7plus-links');
            addLinks(math8Links, 'math8-links');
            addLinks(math1Links, 'math1-links');
            addLinks(math2Links, 'math2-links');
            addLinks(math3Links, 'math3-links');

        }, 0);
    });

});
