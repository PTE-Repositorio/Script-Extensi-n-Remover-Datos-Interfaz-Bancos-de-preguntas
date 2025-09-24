   //Eliminar instrucción de la retroalimentación general de la pregunta

   
   //instrucción de la retroalimentación  pregunta correcta
    const nodos_13 = document.querySelectorAll("#correct_label");
        if (nodos_13.length > 0) {
            nodos_13.forEach(n => n.remove());
            console.log(`✅ instrucción de la retroalimentación   pregunta correcta Eliminados ${nodos_13.length} bloques`);}

            
   //instrucción de la retroalimentación  pregunta Errada

    const nodos_14 = document.querySelectorAll("#wrong_label");
        if (nodos_14.length > 0) {
            nodos_14.forEach(n => n.remove());
            console.log(`✅  instrucción de la retroalimentación  pregunta Errada Eliminados ${nodos_14.length} bloques`);}

  //instrucción de la retroalimentación  general

    const nodos_15 = document.querySelectorAll("#general_label");
        if (nodos_15.length > 0) {
            nodos_15.forEach(n => n.remove());
            console.log(`✅ instrucción de la retroalimentación  general Eliminados ${nodos_15.length} bloques`);}