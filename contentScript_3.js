//Eliminar instrucción de la retroalimentación por pregunta

 const retroalimentación_por_preg = document.querySelectorAll("#comments_header");
        if (retroalimentación_por_preg.length > 0) {
            retroalimentación_por_preg.forEach(n => n.remove());
            console.log(`✅ Width ajustado input ${retroalimentación_por_preg.length} bloques`);}

