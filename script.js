// Petites animations sans base de données : le site reste 100% statique.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.bottom-nav a').forEach(a => a.style.color = '');
  });
});
