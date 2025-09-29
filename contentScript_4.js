
   //retroalimentación  

try {
 
    const nodos_13 = document.querySelectorAll(".question_comment");
        if (nodos_13.length > 0) {
            nodos_13.forEach(n => n.remove());
            console.log(`✅ la retroalimentación  Generales Eliminados ${nodos_13.length} bloques`);}
  else {
        console.warn("⚠️ No se encontraron elementos con la clase .question_comment");
    }
} catch (error) {
    console.error("❌ Error al intentar clickear los edit:", error);
}
