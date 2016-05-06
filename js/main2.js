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

        removeButton.className = 'removeMe'; // Add class to button for CSS
  // removeButton.innerHTML = ' DONE!'; // Add text to the remove button
        // removeButton.setAttribute('onclick', 'eliminartarea'); 
  // Very important! Builds the onclick event that will trigger when a task is clicked. (We will create this function 'removeMe(this) later'
        removeButton.innerHTML = "<i class='fa fa-times right'></i>";
        removeButton.onclick = eliminartarea;
        // checkbox intento
        chkbox.onclick = actualizar;
        chkbox.id = 'cb' + total;
        // cierre intento
        caja.innertext = "itemtext";
        //lii
        nuevaTarea.appendChild(enlace);
    
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";

        // for (var i = 0; i <= lista.children.length -1; i++) {
        //     lista.children[i].addEventListener("click", function(){
        //         this.parentNode.removeChild(this);
        //         // marca error, identificar que...al corregir no funciona :( 
        //     });
        // }

        // for (var i = 0; i <= lista.children.length -1; i++) {
        //     lista.children[i].addEventListener("click", eleminarTarea);
        // }

     function removeMe(item){
      var parent = item.parentElement;
      parent.parentElement.removeChild(parent);
    }
        // inteno añadir lista tachado

        // 
        // fin del intento
    };
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    var eliminartarea = function(){
        var parent = this.parentElement;
        parent.parentElement.removeChild(parent);
    };
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
    var total = 0;
    // Eventos

    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

    // Borrando Elementos de la lista
    // for (var i = 0; i <= lista.children.length -1; i++) {
    //     lista.children[i].addEventListener("click", eleminarTarea);
    // }
}());













// (function(){
//     // variables
//     var lista = document.getElementById("lista"),
//         tarea = document.getElementById("tarea"),
//         agregar = document.getElementById("agregar");
//     // funciones
//     var agregartarea = function(){
//         var cont = tarea.value,
//             nuevatarea= document.createElement("li"),
//             enlace = document.createElement("a"),
//             chkbox = document.createElement('input'),
//             contenido=document.createTextNode(cont);
//             tache = document.createElement("i")

//         if (cont==="") {
//             tarea.setAttribute("placeholder", "Agrega una tarea valida");
//             return false;
//         }

//         chkbox.type = 'checkbox';
//         tache.classList.toggle('fa', 'fa-times', 'right');
//        enlace.appendChild(chkbox); 
//        enlace.appendChild(contenido);
//         enlace.setAttribute("href", "#");
//         enlace.appendChild(tache)
//         nuevatarea.appendChild(enlace);
//         lista.appendChild(nuevatarea);


//         tarea.value = "";

// // checfk
//         var elim = function(){
//                 this.parentNode.removeChild(this);
//             };

//         for (var i = 0; i >= lista.children.length - 1; i++) {
//             lista.children[i].addEventListener("click", elim);
//         }
//     };
//     var testimput = function(){
//         tarea.className ="";
//         tarea.setAttribute("placeholder", "Agregar nueva tarea");
//     };


//     var eliminartarea = function(){
//         this.parentNode.removeChild(this);
//     };
//     // eventos
//     agregar.addEventListener("click", agregartarea);

//     // ERROR
//     tarea.addEventListener("click", testimput);

//     for (var i = 0; i >= lista.children.length - 1; i++) {
//         lista.children[i].addEventListener("click", eliminartarea);
//     }
// }());

















// function newTask(text) {
//   var li = document.createElement('li');
//   var chkbox = document.createElement('input');
//   var span = document.createElement('span');

//   chkbox.type = 'checkbox';
//   span.appendChild(document.createTextNode(text));
//   li.appendChild(chkbox);
//   li.appendChild(span);

//   return li;
// }

// function addTask() {
//   var taskInput = document.getElementById('taskInput');
//   var taskTxt = taskInput.value.trim();
//   var taskList = document.getElementById('taskList');

//   if (taskTxt === '') { return; }
//   taskList.appendChild(newTask(taskTxt));
//   taskInput.value = '';
// }

// document.getElementById('lista').addEventListener('click', function (evt) {
//   var element = evt.target;

//   if (element.type !== 'checkbox') { return; }
//   element.nextSibling.classList.toggle('strikeOut');
// });

// document.getElementById('cmdNewTask').addEventListener('click', addTask);

// document.getElementById('form').addEventListener('submit', function (evt) {
//   evt.preventDefault();
// });
// function newTask(text) {
//   var li = document.createElement('li');
//   var chkbox = document.createElement('input');
//   var span = document.createElement('span');

//   chkbox.type = 'checkbox';
//   span.appendChild(document.createTextNode(text));
//   li.appendChild(chkbox);
//   li.appendChild(span);

//   return li;
// }

// function addTask() {
//   var taskInput = document.getElementById('tarea');
//   var taskTxt = taskInput.value.trim();
//   var taskList = document.getElementById('lista');

//   if (taskTxt === '') { return; }
//   taskList.appendChild(newTask(taskTxt));
//   taskInput.value = '';
// }

// document.getElementById('lista').addEventListener('click', function (evt) {
//   var element = evt.target;

//   if (element.type !== 'checkbox') { return; }
//   element.nextSibling.classList.toggle('tachar');
// });

// document.getElementById('agregar').addEventListener('click', addTask);

// // document.getElementById('list').addEventListener('submit', function (evt) {
// //   evt.preventDefault();
// // });
