//Copy Button
var copyButton = document.getElementById('copyButton');
const copiedAlert = document.getElementById('myTooltip');

//Kopyalama butonuna tıklandığında çalışacak kodlar
copyButton.addEventListener('click', function(){
  //Kopyalayacağımız yazıyı alalım
  var copyText = document.getElementById('txtPassword');
  //Yazıyı seçelim
  copyText.select();
  //Selection Range'ini uzatalım
  copyText.setSelectionRange(0, 99999);
  //Yazıyı panoya kopyalayalım
  navigator.clipboard.writeText(copyText.value);
  //Eğer dönen yazı boş ise kopyalandı alarmını çıkarmayalım
  if(document.getElementById('txtPassword').value == "")
  {
    copiedAlert.style.visibility = "hidden";
    copiedAlert.style.opacity = "0";
  }
  //Eğer dönen yazı boş değil ise kopyalandı alarmını gösterelim
  else{
    copiedAlert.style.visibility = "visible";
    copiedAlert.style.opacity = "1";
  }
});

//Slider
var slider = document.getElementById("myRange");
//Slider değerinin yazılacağı label
var output = document.getElementById("lengthText");

//Labela değeri atayalım
output.innerHTML = slider.value;

//Slider değerini alalım
slider.oninput = function() {
  output.innerHTML = this.value;
};


//Generate Password
var generateButton = document.getElementById('createPassword');
// Butona tıklandığında çalışacak kodlar
generateButton.addEventListener('click', function(){
    //Şifre oluşturmak için gerekli listeleri oluşturalım
    var characters = [
            "A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","R","r","S","s","T","t","U","u","V","v","Y","y","Z","z","W","w","Q","q","X","x","1","2","3","4","5","6","7","8","9","0","!","^","+","%","*","-","_","#",">",".",","
          ];
    var characters_symbols = [
      "A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","R","r","S","s","T","t","U","u","V","v","Y","y","Z","z","W","w","Q","q","X","x","!","^","+","%","*","-","_","#",">",".",","
    ];
    //Şifreyi yazdırmak için bir değişken tanımlayalmım
    let password = "";
    //Rastgele sayıyı yazdırmak için (number) ve bir tane de döngü işlemi için (i) int değerler oluşturalım
    var number,i=0;
    //Slider değerini almak için bir değişken oluşturalım
    let num = Number(slider.value);
    //Eğer hem numaralar hem de semboller seçili ise 
    if (document.getElementById('numbers').checked == true && document.getElementById('symbols').checked == true){
      //Bir döngü oluşturalım
      while (i < num){
        //Number değişkenine characters listesindeki değerlerin hepsini alalım
        number = Math.floor(Math.random() * 72); 
        //Ve bu oluşan değeri döngü sonlanana kadar her seferinde password değişkenine tanımlyalım
        password += characters[number];
        //i yi de döngüyü sonlandırmak için bir arttıralım
        i++;
      }
    }
    //Eğer sadece semboller seçili ise 
    else if (document.getElementById('numbers').checked == false && document.getElementById('symbols').checked == true){
      //Bir döngü oluşturalım
      while (i < num){
        //Number değişkenine characters_symbols listesindeki değerlerin hepsini alalım
        number = Math.floor(Math.random() * 63); 
        //Ve bu oluşan değeri döngü sonlanana kadar her seferinde password değişkenine tanımlyalım
        password += characters_symbols[number];
        //i yi de döngüyü sonlandırmak için bir arttıralım
        i++;
      }
    }
    //Eğer sadece numaralar seçili ise 
    else if (document.getElementById('numbers').checked == true && document.getElementById('symbols').checked == false){
      //Bir döngü oluşturalım
      while (i < num){
        //Number değişkenine characters listesindeki değerlerin numaraların bittiği kısma kadar hepsini alalım
        number = Math.floor(Math.random() * 62); 
        //Ve bu oluşan değeri döngü sonlanana kadar her seferinde password değişkenine tanımlyalım
        password += characters[number];
        //i yi de döngüyü sonlandırmak için bir arttıralım
        i++;
      };
    }
    //Eğer semboller ve numaralar seçili değil ise
    else if (document.getElementById('numbers').checked == false && document.getElementById('symbols').checked == false){
      //Bir döngü oluşturalım
      while (i < num){
        //Number değişkenine characters listesindeki değerlerin harflerin bittiği kısma kadar hepsini alalım
        number = Math.floor(Math.random() * 52); 
        //Ve bu oluşan değeri döngü sonlanana kadar her seferinde password değişkenine tanımlyalım
        password += characters[number];
        //i yi de döngüyü sonlandırmak için bir arttıralım
        i++;
      };
    };
    //Oluşan şifreyi şifre textboxına atayalım
    document.getElementById('txtPassword').value = password;
    //Daha önceden oluşturulmuş bir şifre varsa yeni şifre oluşturulduğunda kopyalama alertını kaldıralım
    copiedAlert.style.visibility = "hidden";
    copiedAlert.style.opacity  = "0";
});