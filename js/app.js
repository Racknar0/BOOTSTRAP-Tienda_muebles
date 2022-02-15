'use strict'

 //seleccionar el obejto mediante el ID
  const modalImagen = document.querySelector("#modal-imagen");

if (modalImagen) {
  /* ABRIR EL MODAL */
  //asignar un listener show.bs.modal que viene en bootstrap ya
  modalImagen.addEventListener("show.bs.modal", function (event) {
    const enlace = event.relatedTarget; //relatedTarget genera en una variable toda la etiqueta del objeto seleccionado
    const rutaImagen = enlace.getAttribute("data-PropiedadCustom"); //getAttribute selecciona un atributo "data-PropiedadCustom"

    //construir la imagen
    const imagen = document.createElement("IMG");
    imagen.src = `img/${rutaImagen}.jpg`;
    imagen.classList.add("img-fluid"); //agregar clase Bootstrap con api Bootstrap .classList.add('image-fluid')
    imagen.alt = "Imagen Galeria";

    const contenidoModal = document.querySelector(".modal-body");
    contenidoModal.appendChild(imagen);
  });

  /* CERRAR EL MODAL */
  modalImagen.addEventListener("hidden.bs.modal", function () {
    const contenidoModal = document.querySelector(".modal-body");
    contenidoModal.textContent = "";
  });
}




// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {

  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



