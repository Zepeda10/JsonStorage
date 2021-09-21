var friendList = [];

//creando json
function addFriendToSystem(pNombre, pApe, pTel, pEmail){

	var newFriend={
		nombre: pNombre,
		apellidos : pApe,
		telefono : pTel,
		email : pEmail
	};

	console.log(newFriend);
	friendList.push(newFriend);
	jsonStorageFriendlist(friendList);
}

function getFriendList(){

	var storedList = localStorage.getItem("localFriendlist");

	//consultamos en el localstorage si existe una lista llena o vacía
	if(storedList == null){
		friendList = [];
	}else{
		friendList = JSON.parse(storedList);//devuelve el formato que antes se convitió con json.stringify a su formato original
	}

	//nos traemos esto del localStorage
	return friendList;
}

//guardando lista en localStorage
function jsonStorageFriendlist(pList){
	localStorage.setItem("localFriendlist",JSON.stringify(pList)); // JSON.stringify convierte un objeto o valor de JavaScript en una cadena de texto JSON
}