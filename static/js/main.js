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

dropDownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const dropdown = link.nextElementSibling;
    dropdown.classList.toggle("hidden");
    dropdown.classList.toggle("active");
  });
});
