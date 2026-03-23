// Smooth scroll behavior for the navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Ghost button functionality
document.getElementById("enterButton").addEventListener("click", function() {
    const ghost = document.getElementById("ghost");
    ghost.style.display = "block";
    ghost.classList.add("float");
    setTimeout(() => {
        alert("You have entered the haunted house...");
    }, 2000);
});


function mypopup2() {
    mywindow = window.open("popup2.html", "mywindow", "location=1,status=1,scrollbars=1,  width=600,height=700");
    mywindow.moveTo(0, 0);
}