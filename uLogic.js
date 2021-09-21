
document.querySelector("#btnEnviar").addEventListener("click",saveFriend);
drawFriendsTable();

function saveFriend(){
	var sNombre = document.querySelector("#nombre").value;
	var sApe = document.querySelector("#apellidos").value;
	var sTel = document.querySelector("#telefono").value;
	var sEmail = document.querySelector("#email").value;

	addFriendToSystem(sNombre,sApe,sTel,sEmail);
	drawFriendsTable();
	limpiar();

}

function limpiar(){
    document.querySelector("#nombre").value="";
    document.querySelector("#apellidos").value="";
	document.querySelector("#telefono").value="";
	document.querySelector("#email").value="";
}

function drawFriendsTable(){
	var list = getFriendList();
	var tbody = document.querySelector("#friendsTable tbody");

	tbody.innerHTML="";

	for(var i=0;i<list.length; i++){
		var row = tbody.insertRow(i);

		var nombreCell = row.insertCell(0),
			apeCell = row.insertCell(1),
			telCell = row.insertCell(2),
			emailCell = row.insertCell(3);

		nombreCell.innerHTML = list[i].nombre;
		apeCell.innerHTML = list[i].apellidos;
		telCell.innerHTML = list[i].telefono;
		emailCell.innerHTML = list[i].email;

		tbody.appendChild(row);
	}
}