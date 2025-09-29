//Eliminar  la retroalimentación por pregunta

try {
 
 const retroalimentación_por_preg = document.querySelectorAll(".answer_comments");
        if (retroalimentación_por_preg.length > 0) {
            retroalimentación_por_preg.forEach(n => n.remove());
            console.log(`✅ Width ajustado input ${retroalimentación_por_preg.length} bloques`);

    } else {
        console.warn("⚠️ No se encontraron elementos con la clase .answer_comments");
    }
} catch (error) {
    console.error("❌ Error al intentar clickear los edit:", error);
}
