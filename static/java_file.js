
// MENU BAR STICKY
let index=document.getElementById('navbar');
window.addEventListener('scroll',function(){
    if(window.pageYOffset>=100){
        index.classList.add('sticky');
    }else{
        index.classList.remove('sticky');
    }
})



// PROJECTS CLICK EVENT
let contenor=document.getElementById('contenor')
let movie=document.getElementById('movie');
let human=document.getElementById('human');
let player=document.getElementById('player');
let irish=document.getElementById('irish_classification');
let titanic=document.getElementById('titanic');
let sale=document.getElementById('sale');
let number_predic=document.getElementById('number_prediction');
let keras_image_prediction=document.getElementById('keras_image_prediction');
function remov(){
    human.classList.remove('display_all');
    player.classList.remove('display_all');
    irish.classList.remove('display_all');
    movie.classList.remove('display_all');
    titanic.classList.remove('display_all');
    sale.classList.remove('display_all');
    number_predic.classList.remove('display_all');
    keras_image_prediction.classList.remove('display_all');

    human.classList.remove('display_none');
    player.classList.remove('display_none');
    irish.classList.remove('display_none');
    movie.classList.remove('display_none');
    titanic.classList.remove('display_none');
    sale.classList.remove('display_none');
    number_predic.classList.remove('display_none');
    keras_image_prediction.classList.remove('display_none');
}
function all_project(){
    remov();
    human.classList.add('display_all');
    player.classList.add('display_all');
    irish.classList.add('display_all');
    movie.classList.add('display_all');
    titanic.classList.add('display_all');
    sale.classList.add('display_all');
    number_predic.classList.add('display_all');
    keras_image_prediction.classList.add('display_all');
}


function machine_learning_Project(){
    remov();
    human.classList.add('display_none');
    player.classList.add('display_none');
    irish.classList.add('display_none');
    number_predic.classList.add('display_none');
    keras_image_prediction.classList.add('display_none');
}

function github_project(){
    remov();
    movie.classList.add('display_none');
    titanic.classList.add('display_none');
    sale.classList.add('display_none');
}
function other(){
    remov();
    titanic.classList.add('display_none');
    sale.classList.add('display_none');
    human.classList.add('display_none');
    player.classList.add('display_none');
    irish.classList.add('display_none');
    number_predic.classList.add('display_none');
    keras_image_prediction.classList.add('display_none');
}



// NGO IMAGE SLIDER
let flage=2;
let content=document.getElementsByClassName('image');

content[0].style.display='none';
content[1].style.display='none';
content[2].style.display='none';
content[3].style.display='none';
content[4].style.display='none';
content[5].style.display='none';
content[6].style.display='none';
content[7].style.display='none';
content[8].style.display='none';
content[0].style.display='block';
let y=1;
function prev(){
    if(y<=8&y>0){
        
        content[0].style.display='none';
        content[1].style.display='none';
        content[2].style.display='none';
        content[3].style.display='none';
        content[4].style.display='none';
        content[5].style.display='none';
        content[6].style.display='none';
        content[7].style.display='none';
        content[8].style.display='none';
        y=y-1;
        content[y].style.display='block';
      return y;
     }

}

function next(){
    if(y>=0&y<8){

        content[0].style.display='none';
        content[1].style.display='none';
        content[2].style.display='none';
        content[3].style.display='none';
        content[4].style.display='none';
        content[5].style.display='none';
        content[6].style.display='none';
        content[7].style.display='none';
        content[8].style.display='none';
        y=y+1;
        content[y].style.display='block';
    }
}


 function feature_image(x){
     feature_p=document.getElementsByClassName('feature_p');
     feature_p[x].style.display='none';
 }
 function feature_image1(x){
     feature_p=document.getElementsByClassName('feature_p');
     feature_p[x].style.display='block';
 }
 function next_page(){
     window.location='../templates/index2.html';
 }


// form email sender js
 function mail(){

     let sub=document.getElementById('sub1');
     let name=document.getElementById('name');
     let email=document.getElementById('email');
     let phone=document.getElementById('phone');


      Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sameerkhan1ssk1@gmail.com",
    Password : "8DC460A9C8806313C7E02FB799EF103874C0",
    To : 'sameerkhan2ssk2@gmail.com',
    From : "sameerkhan1ssk1@gmail.com",
    Subject : "mail from portfolio",
    Body : "Name : " +name.value +"<br/>user email : "+email.value +"<br/>phone : "+phone.value +"<br/>subject : "+sub.value
  }).then(
  message => alert(message)
  );
 }