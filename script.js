document.querySelectorAll(".filetree .folder").forEach(folder => {

    folder.addEventListener("click", () => {

      // toggle folder class
      folder.classList.toggle("open");
      folder.classList.toggle("closed");

      // get child ul
      const list = folder.nextElementSibling;

      if (list) {
        list.classList.toggle("open");
        list.classList.toggle("closed");
      }

    });

  });