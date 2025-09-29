//Clickeamos el botón editar



try {

  const clic_editar = document.querySelectorAll(".edit_teaser_link");
  if (clic_editar.length > 0) {
    clic_editar.forEach(n => n.click());
    console.log(`✅ Clickeados ${clic_editar.length} botones`);
  }


  else {
    console.warn("⚠️ No se encontraron elementos con la clase .edit_teaser_link");
  }
} catch (error) {
  console.error("❌ Error al intentar clickear los edit:", error);
}
