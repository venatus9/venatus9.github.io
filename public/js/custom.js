function toggleMenu() {
	var x = document.getElementById("hamburgerPopout");
	var y = document.getElementById("hamburgerContainer");
	if (x.style.display === "flex") {
		x.style.display = "none";
		y.dataset.open = "false";
	} else {
		x.style.display = "flex";
		y.dataset.open = "true";
	}
}


function openSponsors(){
	window.location.href= "/sponsors";
}


document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // only animate once
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
