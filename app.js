var inputText = document.getElementById("inputText");
var ekle = document.getElementById("ekle");
var deleteAll = document.getElementById("sil");
var resultClass = document.querySelector(".result");

function myEkle() {
  if (inputText.value != "") {
    //------class ve p elemeni oluşturuyoruz.--------
    var newClass = document.createElement("div");
    const paragraf = document.createElement("p");

    //----------input oluşturup type özelliğini checkbox yapıyoruz----
    const newInput = document.createElement("input");
    newInput.type = "checkbox";

    //----------button oluşturup innerHTML sine fontawsome ekliyoruz----
    const newButton = document.createElement("button");
    newButton.innerHTML = "<i  class='fa-solid fa-trash-can' id='fontAw' ></i>";

    //--------oluşturduğumuz element ve classları üst classlara atıyoruz.
    // oluşturulan p, input ve button elementleri yeni oluşturulan newClassın
    //alt elemanı olarak ekliyoruz.
    newClass.appendChild(newInput);
    newClass.appendChild(paragraf);
    newClass.appendChild(newButton);
    //newClassı da saha önce HTML de oluşturduğumuz baba classa bağlıyoruz.
    resultClass.appendChild(newClass);
    //---class ve elementlere css de düzenlemek için class atıyoruz
    newClass.classList.add("newClass");
    paragraf.classList.add("paragraf");
    newInput.classList.add("newInput");
    newButton.classList.add("newButton");
    //p elementinin içine inputun value sini akliyoruz.
    paragraf.innerHTML = inputText.value;

    // inputun her value girişinden sonra tekrar sıfırlanması gerektiği için bu kodu yazıyoruz
    inputText.value = "";

    //----------checkbox------------------------------
    var sec = document.querySelector("body");
    sec.addEventListener("click", uygula);

    function uygula() {
      if (newInput.checked == true) {
        paragraf.style.textDecoration = "line-through";
        paragraf.style.color = "white";
        newClass.style.backgroundColor = "red";
        paragraf.style.backgroundColor = "red";
      } else if (newInput.checked == false) {
        paragraf.style.textDecoration = "none";
        paragraf.style.color = "black";
        paragraf.style.backgroundColor = "rgb(247, 186, 105)";
        newClass.style.backgroundColor = "rgb(247, 186, 105)";
      }
    }
    //---------------- tek tek silme fonksiyonu--------------------------

    newButton.addEventListener("click", function () {
      newClass.remove();
    });

    //------------------------------------------

    //toplu silen fonksiyon

    deleteAll.addEventListener("click", mySil);
    function mySil() {
   
      newClass.remove();
    }
  
  }
}

