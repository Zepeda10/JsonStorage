$(document).ready(function() {

  document.querySelector("#btnEnviar").addEventListener("click",()=>{

  // Initialize form validation on the registration form.

  // It has the name attribute "registration"

  $("form[name='formu']").validate({

    // Specify validation rules

    rules: {

      // The key name on the left side is the name attribute

      // of an input field. Validation rules are defined

      // on the right side

      nombre: "required",
      apellidos: "required",
      telefono: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
    // Specify validation error messages
    messages: {

      nombre: "Por favor, introduzca su nombre",
      apellidos: "Por favor, introduzca su apellido",
      telefono: "Por favor, introduzca su número",
      email: "Por favor, introduce una dirección de correo electrónico válida"
    }
  }
   


  });

});
  });

