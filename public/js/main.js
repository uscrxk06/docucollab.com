const $targetEl = document.getElementById("navbar-sticky");
const $triggerEl = document.getElementById("triggerEl");
const options = {
  onCollapse: () => {
    console.log("element has been collapsed");
  },
  onExpand: () => {
    console.log("element has been expanded");
  },
  onToggle: () => {
    console.log("element has been toggled");
  },
};

$triggerEl.addEventListener("click", () => {
  $targetEl.classList.toggle("hidden");
  $triggerEl.firstElementChild.classList.toggle("hidden");
  $triggerEl.querySelector(".hamburger").classList.toggle("hidden");
  $triggerEl.querySelector(".cross").classList.toggle("hidden");
  if (!$targetEl.classList.contains("hidden")) {
    options.onExpand();
  } else {
    options.onCollapse();
  }
  options.onToggle();
});

const dropDownLinks = document.querySelectorAll(".drop-down");

dropDownLinks.forEach((link) => {
  let timeout;
  let isHovered = false;

  link.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    const dropdown = link.nextElementSibling;
    dropdown.classList.remove("hidden");
    dropdown.classList.add("active");
    isHovered = true;
  });

  link.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      if (!isHovered) {
        const dropdown = link.nextElementSibling;
        dropdown.classList.remove("active");
        dropdown.classList.add("hidden");
      }
    }, 200);
  });

  link.nextElementSibling.addEventListener("mouseenter", () => {
    isHovered = true;
  });

  link.nextElementSibling.addEventListener("mouseleave", () => {
    isHovered = false;
    timeout = setTimeout(() => {
      const dropdown = link.nextElementSibling;
      dropdown.classList.remove("active");
      dropdown.classList.add("hidden");
    }, 200);
  });
});
