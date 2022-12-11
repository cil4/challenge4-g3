export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    
  
    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML ='';
        console.log
        
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
  
  
  
    }
  }
      const tipoDeErrores = [
          "valueMissing",
          "typeMismatch",
          "patternMismatch",
          
        ];
  
        const mensajesDeError = {
          nombre: {
            valueMissing: "El campo nombre no puede estar vacío",
          },
          email: {
            valueMissing: "El campo correo no puede estar vacío",
            typeMismatch: "El correo no es válido",
          },
          password: {
            valueMissing : "El campo contraseña no puede estar vacío",
            patternMismatch: "Debe contener al menos 8 caracteres, máximo 12, un número, una letra minúscula, una letra mayúscula, un caracter especial"
        },
          mensaje: {
              valueMissing: "Este campo mensaje no puede estar vacío",
              patternMismatch: "El mensaje debe contener entre 30 a 120 caracteres.",
            }
      }
  
      function mostrarMensajeDeError(tipoDeInput, input){
        let mensaje ='';
        tipoDeErrores.forEach(error =>{
            
            if(input.validity[error]){
                console.log(tipoDeInput, error);
                console.log(input.validity[error]);
                console.log(mensajesDeError[tipoDeInput][error]);
                mensaje = mensajesDeError[tipoDeInput][error];
            }
        })
    
    
        return mensaje;
    }

