//Clickeamos el botón editar

  const clic_editar = document.querySelectorAll(".edit_teaser_link");
        if (clic_editar.length > 0) {
            clic_editar.forEach(n => n.click());
            console.log(`✅ Clickeados ${clic_editar.length} botones`);
        }