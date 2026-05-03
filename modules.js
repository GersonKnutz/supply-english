document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.module-toggle');
  const modal = document.getElementById('moduleModal');
  const modalContent = document.getElementById('modalContent');
  const closeModal = document.getElementById('closeModal');

  // Abrir modal
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const details = button.nextElementSibling;

      // Garante que existe conteúdo
      if (!details) return;

      // Injeta conteúdo no modal
      modalContent.innerHTML = details.innerHTML;

      // Mostra modal com classe (melhor que display direto)
      modal.classList.add('active');

      // trava scroll do body
      document.body.style.overflow = 'hidden';
    });
  });

  // Fechar botão X
  closeModal.addEventListener('click', close);

  // Fechar clicando fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      close();
    }
  });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      close();
    }
  });

  function close() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});





