//script file

document.getElementById("btnSkill").addEventListener('click', ()=>{

  
    document.getElementById("imageUp").src = "./style/imagesDown.png";
    document.getElementById("showSkill").style.display = 'block';

   
});

document.getElementById("btnSkill1").addEventListener('click', ()=>{
    document.getElementById("imageUp1").src = "./style/imagesDown.png";
    document.getElementById("showSkill1").style.display = 'block'
})




const content = [
  { "title" :'Russia',"email" :'sara@gmail',"discriction" : "this is a ugugiugiutgugkbh uykjuy u7yoghn for tast", "img" : './galleryPics.html/th (1).jpg'},
  { "title":'US', "email" :'fateme@gmail', "discriction" : "this is anotppppher discription", "img" : "./galleryPics.html/th (3).jpg"},
  {"title":'Araq', "email" :'Ermiti@gmail', "discriction" : "this is anojjjjjjjjjther discription", "img" : "./galleryPics.html/th (4).jpg"},
  { "title":'test', "email" :'ali@gmail', "discriction" : "this is anothewwwwwwwwwwr discription", "img" : "./galleryPics.html/th (2).jpg"},
  {"title":'Arabic', "email" :'reza@gmail', "discriction" : "this is anotdddddddddddher discription", "img" : "./galleryPics.html/th (3).jpg"},
];

var doc = document.getElementById("main");
var doc1 = document.getElementById("counterDiv");
var docTop = document.getElementById("topPart");


const htmlDoc = content.map ((con, index)=>`



  <div class="abtMe mySlides">
            <img src="${con.img}" alt="" class="abtImg">
        <div class="points">
            <div class="numbers">
                <h1>${con.title}</h1>
                <p class="p">${con.discriction}</p>
                <button class="button" id="btn">Error magnam</button>
            </div>
          </div>
          <a class="prev" onclick="plusSlides(-1)">❮</a>
          
          <a class="next" onclick="plusSlides(1)">❯</a>
  </div>



`
).join('');
const countinu = content.map ((con, i)=>
`
<div class="btmPart-slider">
<p class="dot" onclick="currentSlide(${i + 1})" "text-align:center"></p>
</div>
`
).join('');

doc.innerHTML = htmlDoc;
doc1.innerHTML += countinu;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);

}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  

}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex - 1].style.display = "flex"; 
dots[slideIndex - 1].className += " active";

}


// Get the modal
var modal = document.getElementById("infoModul");
var editModal = document.getElementById("editModul");
var shadowModal = document.getElementById("shadowModal");


var card0 = document.getElementById("logo");
var card1 = document.getElementById("logo1");
var card2 = document.getElementById("logo2");

var show0 = document.getElementById("show0");
var show1 = document.getElementById("show1");
var show2 = document.getElementById("show2");


var editForm = document.getElementById("editForm");
editForm.addEventListener("submit", function(event){ 
event.preventDefault()
})


// Get the button that opens the modal
var btn = document.getElementById("button");
var btnBack = document.getElementById("back");
var btnCancel = document.getElementById("cancle");
var btnEdit = document.getElementById("editBtn");
var btnOk = document.getElementById("ok");



var h2test = document.getElementById("h2test")
var h2test1 = document.getElementById("h2test1");
var h2test2 = document.getElementById("h2test2");
var par = document.getElementById("par");
var par1 = document.getElementById("par1");
var par2 = document.getElementById("par2");



var showcardImg = document.getElementById("showcard-img");
var showcardTitle1 = document.getElementById("showcard-title1");
var showcardEmail = document.getElementById("showcard-email");
var showcardPar = document.getElementById("showcard-par");


var editArea = document.getElementById("edit-area");
var editTitle = document.getElementById("edit-title");
var editEmail = document.getElementById("edit-email");


function TitleCard1Loding( result,eleTitle, eleDiscription, eleLogo, i){
eleLogo.src = result[i].img;
eleTitle.innerHTML = result[i].title
eleDiscription.innerHTML = result[i].discriction
}

h2test.onload = TitleCard1Loding(content, h2test, par, card0 , 0)
h2test1.onload = TitleCard1Loding(content, h2test1, par1 , card1, 1)
h2test2.onload = TitleCard1Loding(content, h2test2, par2, card2, 2)
var editImg = document.getElementById("imgEdit");
var slidesHidden = document.getElementsByClassName("mySlides");

function changContent(result, i) { 

modal.style.display = "flex",
shadowModal.style.display = "flex",
showcardEmail.innerHTML = result[i].email,
showcardImg.src = result[i].img,
showcardTitle1.innerHTML = result[i].title,
showcardPar.innerHTML = result[i].discriction,
editEmail.value = result[i].email,
editTitle.value  = result[i].title,
editArea.innerHTML = result[i].discriction ,
 editImg.src= result[i].img
}

show0.addEventListener('click', ()=>
changContent(content, 0),

)
show1.addEventListener('click', ()=>
changContent(content, 1)
)
show2.addEventListener('click', ()=>
changContent(content, 2)
)

function preview_image(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('imgEdit');
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}


btnBack.onclick = function(){
  modal.style.display = 'none';
  shadowModal.style.display = "none"
  }
  btnEdit.onclick = function () {
      editModal.style.display = 'block'
      modal.style.display = 'none'
  }
  btnOk.onclick = function() {
    showcardPar.textContent = editArea.value;
    showcardImg.src = editImg.src;
    showcardTitle1.textContent = editTitle.value;
    showcardEmail .textContent = editEmail.value;
    modal.style.display = 'block'
    editModal.style.display = 'none'
    //shadowModal.style.display = "none"

  }
  btnCancel.onclick = function(){
    editModal.style.display = 'none';
    shadowModal.style.display = "none"
  }
  


  window.onclick = function(event) {
    if (event.target == shadowModal ) {
      modal.style.display = "none";
      shadowModal.style.display = "none";
    }
  }


