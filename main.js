document.addEventListener("DOMContentLoaded", function() {
  // Array com os IDs dos checkboxes
  const checkboxes = ["as1", "as2", "as3", "as4", "as5", "as6", "as7", "as8", "as9", "as10", "as11"];

  // Carregar o estado dos checkboxes do localStorage
  checkboxes.forEach((id) => {
    const checkbox = document.getElementById(id);
    const checked = localStorage.getItem(id) === "true";
    checkbox.checked = checked;
  });

  // Salvar o estado dos checkboxes no localStorage
  checkboxes.forEach(function(id) {
    const checkbox = document.getElementById(id);
    checkbox.addEventListener("change", function() {
      localStorage.setItem(id, checkbox.checked);
    });
  });
});
