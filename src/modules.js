document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.module-toggle');
  const modal = document.getElementById('moduleModal');
  const modalContent = document.getElementById('modalContent');
  const closeModal = document.getElementById('closeModal');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const details = btn.nextElementSibling;

      modalContent.innerHTML = details.innerHTML;
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});





