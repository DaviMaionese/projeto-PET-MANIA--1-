 document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Usuário e senha fictícios para verificaçãoconst correctUsername = "usuario";
    const correctPassword = "senha123";

    if (username === correctUsername && password === correctPassword) {
        alert("Login bem-sucedido!");
        // Redirecionar ou executar outra ação    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
        errorMessage.style.display = "block";
    }
});
 