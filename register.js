var usuarios = [
	{
		usuario: "Nico",
		contra: "Coder123"
	},
	{
		usuario: "Vero",
		contra: "Coder123"
	},
]

function getInfo() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	
	localStorage.setItem("usuarioNew", username);
	localStorage.setItem("contraNew", password);

	window.location.replace("/index.html");
}