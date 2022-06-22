//Darkmode butonuna tıklandığında eklentiyi 'dark' veya 'light' moda çevirmek
document.getElementById('modeBtn').addEventListener('click', () =>{
  document.body.classList.toggle('dark');
  localStorage.setItem('mode', document.body.classList);
});

//Darkmode özelliğini her uygulamayı açıp kapattığımızda kontrol etmek ve ona göre 'light' ya da 'dark' modda başlatmak için
if (localStorage.getItem('mode') != ''){
  document.body.classList.add(localStorage.getItem('mode'));
  document.getElementById('modeBtn').checked = true;
};