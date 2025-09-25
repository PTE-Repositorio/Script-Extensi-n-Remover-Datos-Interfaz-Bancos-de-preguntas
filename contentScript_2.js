
// Borrar los nodos de manera masiva con try...catch

try {
    const nodos = document.querySelectorAll(".multiple_choice_question_explanation.explanation");
    if (nodos.length > 0) {
        nodos.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 1", e); }

try {
    const nodos_2 = document.querySelectorAll(".tox-editor-header");
    if (nodos_2.length > 0) {
        nodos_2.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos_2.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 2", e); }

try {
    const nodos_3 = document.querySelectorAll(".equation_header");
    if (nodos_3.length > 0) {
        nodos_3.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos_3.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 3", e); }

try {
    const nodos_4 = document.querySelectorAll(".multi_answer_sets");
    if (nodos_4.length > 0) {
        nodos_4.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos_4.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 4", e); }

try {
    const nodos_5 = document.querySelectorAll(".answers_warning_alert_box");
    if (nodos_5.length > 0) {
        nodos_5.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos_5.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 5", e); }

try {
    const nodos_6 = document.querySelectorAll(".answer_selection_type");
    if (nodos_6.length > 0) {
        nodos_6.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos_6.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 6", e); }

try {
    const nodos_7 = document.querySelectorAll(".equation_answers");
    if (nodos_7.length > 0) {
        nodos_7.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos_7.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 7", e); }

try {
    const nodos_8 = document.querySelectorAll(".add_answer");
    if (nodos_8.length > 0) {
        nodos_8.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos_8.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 8", e); }

try {
    const nodos_9 = document.querySelectorAll(".button-container");
    if (nodos_9.length > 0) {
        nodos_9.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos_9.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 9", e); }

try {
    const nodos_10 = document.querySelectorAll(".question_points_holder");
    if (nodos_10.length > 0) {
        nodos_10.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos_10.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 10", e); }

try {
    const nodos_11 = document.querySelectorAll(".css-8qu8l9-view--flex-flex");
    if (nodos_11.length > 0) {
        nodos_11.forEach(n => n.remove());
        console.log(`✅ Eliminados ${nodos_11.length} bloques`);
    }
} catch (e) { console.error("❌ Error eliminando nodos 11", e); }

try {
    const right_side_wrapper = document.getElementById("right-side-wrapper");
    if (right_side_wrapper) {
        right_side_wrapper.remove();
        console.log("✅ Eliminado right_side_wrapper");
    } else {
        console.log("⚠️ No se encontró el elemento con ID right_side_wrapper");
    }
} catch (e) { console.error("❌ Error eliminando right_side_wrapper", e); }

//darle tamaño a los input de las respuestas
            
try {
    const nodos_12 = document.querySelectorAll(".disabled_answer");
    if (nodos_12.length > 0) {
        nodos_12.forEach(n => n.style.width = "1100px");
        console.log(`✅ Width ajustado input ${nodos_12.length} bloques`);
    }
} catch (e) { console.error("❌ Error ajustando ancho de inputs", e); }

//doble click al 
const elem = document.querySelectorAll(".edit_html");
try {
if (elem) {
    // Primer clic
    elem.click();

    // Segundo clic (medio segundo después)
    setTimeout(() => {
        elem.click();
        console.log("✅ Simulado doble barrido en .edit_html");
    }, 500);
}} catch (error) {
  console.error("❌ Error al intentar clickear los edit:", error);
}

//borrar porcentaje que aparece
try {
  const nodos = document.querySelectorAll(".answer_select");
  if (nodos.length > 0) {
    nodos.forEach(n => n.remove());
    console.log(`✅ Eliminados ${nodos.length} nodos con .answer_select`);
  } else {
    console.log("⚠️ No se encontraron nodos con .answer_select");
  }
} catch (error) {
  console.error("❌ Error al intentar eliminar los nodos:", error);
}

