(() => {
  const refs = {
    openModalBtn: document.querySelector("[ open-modal]"),
    closeModalBtn: document.querySelector("[close-modal]"),
    modal: document.querySelector("[modal]"),

    openMenuBtn: document.querySelector("[ open-menu]"),
    closeMenuBtn: document.querySelector("[close-menu]"),
    menu: document.querySelector("[menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);

  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }

  refs.openMenuBtn.addEventListener("click", toggleMenu);

  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }
})();
