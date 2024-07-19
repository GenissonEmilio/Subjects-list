document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelectorAll('input').forEach(input => {
    const checked = localStorage.getItem(input.id) === "true";
    input.checked = checked;
  });

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener("change", () => {
      localStorage.setItem(input.id, input.checked);
    });
  });
});
