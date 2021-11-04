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
    msg = true;
	var newUser = localStorage.getItem("usuarioNew");
	var newPass = localStorage.getItem("contraNew");

	for(var i = 0; i < usuarios.length; i++) {
		if((username == usuarios[i].usuario && password == usuarios[i].contra) || (username == newUser && password == newPass)) {
            msg = false;
			window.location.replace("/index.html");
		}
	}
	if(i == usuarios.length && msg){
        alert("incorrect username or password");
    }
}