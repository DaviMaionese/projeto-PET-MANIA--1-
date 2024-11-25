function goBack() {
    window.history.back();
  }
  
  function goToRegister() {
    // Redireciona para a página de registro
    window.location.href = "register.html"; // Substitua "register.html" pela URL da página de registro
  }
  
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Login efetuado com sucesso!");
  });
  
