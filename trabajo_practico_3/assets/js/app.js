let listaTareas = [];
function manejarTareas() {

  let opcionSeleccionada = 0;
  
  while (opcionSeleccionada !== 5) {
    opcionSeleccionada = Number(
      prompt(
        "1. Añadir tarea\n2. Eliminar tarea\n3. Ver tareas\n4. Actualizar tarea\n5. Salir\nElige una opción: "
      )
    );

    switch (opcionSeleccionada) {
      case 1: // Añadir tarea
        const nuevaTarea = prompt("Introduce la tarea a añadir: ");
        if (!nuevaTarea.trim()) {
          alert("La tarea no puede estar vacía.");
          break;
        }
        listaTareas.includes(nuevaTarea)
          ? alert(`La tarea '${nuevaTarea}' ya existe.`) : listaTareas.push(nuevaTarea) && alert(`Tarea '${nuevaTarea}' añadida.`);
        break;

      case 2: // Eliminar tarea
        const tareaAEliminar = prompt("Introduce la tarea a eliminar: ");
        const indice = listaTareas.indexOf(tareaAEliminar);

        indice > -1
          ? listaTareas.splice(indice, 1) &&
            alert(`Tarea '${tareaAEliminar}' eliminada.`) : alert(`Tarea '${tareaAEliminar}' no encontrada.`);
        break;

      case 3: // Ver tareas
        alert(
          "Tareas:\n" +
            listaTareas.map((tarea, i) => `${i + 1}. ${tarea}`).join("\n")
        );
        break;

      case 4: // Actualizar tarea
        const tareaActualizar = prompt("Introduce la tarea a actualizar: ");
        if (listaTareas.includes(tareaActualizar)) {
          const nuevaTareaActualizada = prompt("Introduce la nueva tarea: ");
          if (!nuevaTareaActualizada.trim()) {
            alert("La tarea no puede estar vacía.");
            break;
          }
          const indiceActualizar = listaTareas.indexOf(tareaActualizar);
          if (indiceActualizar > -1) {
            listaTareas[indiceActualizar] = nuevaTareaActualizada;
            alert(
              `Tarea '${tareaActualizar}' actualizada a '${nuevaTareaActualizada}'.`
            );
          }
        } else {
          alert(`La tarea '${tareaActualizar}' no existe.`);
        }
        break;

      case 5: // Salir
        alert("Saliendo del programa");
        break;

      default:
        alert("Opción no válida");
    }
  }
}
manejarTareas();
