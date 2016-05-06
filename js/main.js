(function(){
    // Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tarea"),
        btnNuevaTarea = document.getElementById("agregar");

    var agregarTarea = function(){
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            caja = document.createElement("span")
            chkbox = document.createElement('input'),
            contenido = document.createTextNode(tarea);
            removeButton = document.createElement('button');

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");

            return false;
        }


        total++;
        caja.id ='item' + total;
        enlace.setAttribute("href", "#");
        enlace.appendChild(chkbox);
        enlace.appendChild(caja);
        caja.appendChild(contenido);
        nuevaTarea.appendChild(removeButton);
        
        chkbox.type = 'checkbox';

        removeButton.className = 'removeMe'; // CSS
        removeButton.innerHTML = "<i class='fa fa-times right'></i>";
        removeButton.onclick = eliminartarea;
        // checkbox intento
        chkbox.onclick = actualizar;
        chkbox.id = 'cb' + total;

        caja.innertext = "itemtext";
        //li
        nuevaTarea.appendChild(enlace);
    
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";

    };
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    var eliminartarea = function(){
        var parent = this.parentElement;
        parent.parentElement.removeChild(parent);
    };
    // tachado
    function actualizar() {
        var cbid = this.id.replace("cb", "");
        var itemtext = document.getElementById("item"+ cbid);
        if(this.checked){
            itemtext.className="tachar";
        }
        else{
            itemtext.className="none";
        }
    }
    // variable para contador del ciclo de tachar
    var total = 0;

    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

}());

