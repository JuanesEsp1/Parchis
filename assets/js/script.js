$(document).ready(function() {
    console.log('la pagina ya cargo');
});

const figurePlayer1 = '<div class="figurePlayer1"></div>';
const figurePlayer2 = '<div class="figurePlayer2"></div>';
const figurePlayer3 = '<div class="figurePlayer3"></div>';
const figurePlayer4 = '<div class="figurePlayer4"></div>';
let valueAnt = 0;
const getNum = ()=>{
    return Math.floor(Math.random()*6)+1;
}

const crapsPush = () =>{
   let num1 =  getNum();
   let num2 =  getNum();
    let ant = num1;

   renderImg(1,num1);
   renderImg(2,num2);

   $("#fiel"+num1).html(figurePlayer3);
   $("#fiel"+valueAnt).html(valueAnt);
   valueAnt = num1;
   
   console.log(isPair(num1,num2));

}

const renderImg = (elemet, num) =>{
    $("#dado"+elemet).attr("src","assets/img/dado"+num+".png")
}

const isPair = (num1,num2) =>{
    let value ;
    num1 === num2 ?  value = true : value =false;
    return value;
}

