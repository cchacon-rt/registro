const formulario = document.
getElementById("formulario");

formulario.addEventListener(
    "submit",function(event){
        event.preventDefault();

        const nombre = document.getElementById("name").value.trim();
        const edad = document.getElementById("age").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
    
    //Elementos de error
        const errorName = document.getElementById("errorName");
        const errorAge = document.getElementById("errorAge");
        const errorEmail = document.getElementById("errorEmail");
        const errorPhone = document.getElementById("errorPhone");

        const mensaje = document.getElementById("message");


    //Tecnica del Centinela
        let valido = true; //ponemos una variable booleana
        if(nombre === ""){
            errorName.textContent = "El nombre es obligatorio";
            valido = false;
        }else{
            errorName.textContent = "";
        }

            if(edad === "" || (edad<18 || edad>45)){
        //if((edad<18 || edad>45)){
            errorAge.textContent = "La edad es obligatoria y debe estar en el rango de 18 a 45";
            valido = false;
        }else{
            errorAge.textContent = "";
        } 

        if (email === ""){
            errorEmail.textContent = "El correo es obligatorio";
            valido = false;
        }else{
            errorEmail.textContent = "";
        }

        if (phone === ""){
            errorPhone.textContent = "El numero de telefono es obligatorio";
            valido = false;
        }else{
            errorPhone.textContent = "";
        }

      ///////////  
        if(valido) {
            mensaje.textContent = "Registro correcto";
        }else{
            mensaje.textContent = "";
        }
        
    }
);
