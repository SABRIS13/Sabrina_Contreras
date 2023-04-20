<?php 
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$asunto = $_POST['subject'];
	$mensaje = "Nombre: ".$nombre."<br> Email: $email<br> Mensaje:".$_POST['mensaje'];


	if(mail('sabriscon1307@gmail.com', $asunto, $mensaje)){
		echo "Correo enviado";
	}
   ?>