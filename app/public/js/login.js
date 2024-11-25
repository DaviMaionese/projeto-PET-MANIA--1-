document.getElementById('upload-photo').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('profile-pic').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById('edit-name-btn').addEventListener('click', function() {
    const newName = prompt("Digite seu novo nome:");
    if (newName) {
      document.getElementById('user-name').textContent = newName;
    }
  });
  
  document.getElementById('info-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Informações salvas com sucesso!");
  });
  
  function goBack() {
    // Redireciona para a página anterior
    window.history.back();
  }
  