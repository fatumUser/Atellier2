let headerBurger1 = document.getElementById('header__burger-1');
let headerBurger2 = document.getElementById('header__burger-2');
let headerNavMob = document.getElementById('header__nav-mob');
let header = document.getElementById("header");

headerBurger1.addEventListener('click', function() {
  headerBurger1.style.display = 'none';
  headerBurger2.style.display = 'block';
  headerNavMob.style.display = 'grid';
  header.style.background = "#EFE5E1"
});

headerBurger2.addEventListener('click', function() {
  headerBurger1.style.display = 'block';
  headerBurger2.style.display = 'none';
  headerNavMob.style.display = 'none';
  header.style.background = "#ffffff00"
});