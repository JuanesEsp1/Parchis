$(document).ready(function() {
    dbStatus();
});

const figurePlayer1 = '<div class="figurePlayer1"></div>';
const figurePlayer2 = '<div class="figurePlayer2"></div>';
const figurePlayer3 = '<div class="figurePlayer3"></div>';
const figurePlayer4 = '<div class="figurePlayer4"></div>';
let valueAnt = 0;

let generalPositio = {
    payer1: 0,
    payer2: 0,
    payer3: 0,
    payer4: 0,
}


const getNum = ()=>{
    return Math.floor(Math.random()*6)+1;
}

const crapsPush = () =>{
    getTurn();
}

const dbStatus = () => {

    let status = localStorage.getItem("status");
   
    if (status==null) {
        console.log('no se ha inicado el juego');
        startGame();
    } else {
        console.log('ya se inicio el juego');
    }

}

const startGame = () => {
    localStorage.setItem("status",true);
    localStorage.setItem("positionInitialPlayer1",0);
    localStorage.setItem("positionNowPlayer1",0);
    localStorage.setItem("positionAntPlayer1",0);
    localStorage.setItem("fieldNowPlayer1",0);
    localStorage.setItem("positionInitialPlayer2",51);
    localStorage.setItem("positionNowPlayer2",0);
    localStorage.setItem("positionAntPlayer2",0);
    localStorage.setItem("fieldNowPlayer2",0);
    localStorage.setItem("positionInitialPlayer3",34);
    localStorage.setItem("positionNowPlayer3",0);
    localStorage.setItem("positionAntPlayer3",0);
    localStorage.setItem("fieldNowPlayer3",0);
    localStorage.setItem("positionInitialPlayer4",17);
    localStorage.setItem("positionNowPlayer4",0);
    localStorage.setItem("positionAntPlayer4",0);
    localStorage.setItem("fieldNowPlayer4",0);
    localStorage.setItem("turn",1);
}

const getTurn = () => {
    let  turn  = parseInt(localStorage.getItem("turn"));
    switch (turn) {
        case 1:
            turnPlayer1();
            break;
        case 2:
            turnPlayer2();
            break;
        case 3:
            turnPlayer3();
            break;
        case 4:
            turnPlayer4();
            break;
    }
}

const renderImg = (elemet, num) =>{
    $("#dado"+elemet).attr("src","assets/img/dado"+num+".png")
}

const isPair = (num1,num2) =>{
    let value ;
    num1 === num2 ?  value = true : value =false;
    return value;
}



const turnPlayer1 = () =>{
    console.log("turno  player 1");
    localStorage.setItem("turn",2);
    let num1 =  getNum();
    let num2 =  getNum();
    renderImg(1,num1);
    renderImg(2,num2);
    let dados = num1+num2;
    console.log("==========================");
    console.log("valor de los dados: "+dados);
    let positionActual = parseInt(localStorage.getItem("positionNowPlayer1"));
    console.log("==========================");
    console.log("position actual: "+positionActual);
    let newPosition    =  positionActual+dados;
    console.log("==========================");
    console.log("nueva posicion: "+newPosition);
    $('[player1="'+positionActual+'"]').html('');
    $('[player1="'+newPosition+'"]').html(figurePlayer1);
    console.log("==========================");
    console.log("id nueva posicion: "+newPosition);
    let value = validatePosition(newPosition,1);
    localStorage.setItem("fieldNowPlayer1",value);
    localStorage.setItem("positionNowPlayer1",newPosition);
    comparationPlayer1();
    console.log("==========================");  
}

const turnPlayer2 = () =>{
    console.log("turno  player 2");
    localStorage.setItem("turn",3);
    let num1 =  getNum();
    let num2 =  getNum();
    renderImg(1,num1);
    renderImg(2,num2);
    let dados = num1+num2;
    console.log("==========================");
    console.log("valor de los dados: "+dados);
    let positionActual = parseInt(localStorage.getItem("positionNowPlayer2"));
    console.log("==========================");
    console.log("position actual: "+positionActual);
    let newPosition    =  positionActual+dados; 
    console.log("==========================");
    console.log("nueva posicion: "+newPosition);
    $('[player2="'+positionActual+'"]').html('');
    $('[player2="'+newPosition+'"]').html(figurePlayer2);
    let value = validatePosition(newPosition,2);
    localStorage.setItem("fieldNowPlayer2",value);
    localStorage.setItem("positionNowPlayer2",newPosition);
    comparationPlayer2();
    console.log("==========================");
}

const turnPlayer3 = () =>{
    console.log("turno  player 3");
    localStorage.setItem("turn",4);
    let num1 =  getNum();
    let num2 =  getNum();
    renderImg(1,num1);
    renderImg(2,num2);
    let dados = num1+num2;
    console.log("==========================");
    console.log("valor de los dados: "+dados);
    let positionActual = parseInt(localStorage.getItem("positionNowPlayer3"));
    console.log("==========================");
    console.log("position actual: "+positionActual);
    let newPosition    =  positionActual+dados; 
    console.log("==========================");
    console.log("nueva posicion: "+newPosition);
    $('[player3="'+positionActual+'"]').html('');
    $('[player3="'+newPosition+'"]').html(figurePlayer3);
    let value = validatePosition(newPosition,3);
    localStorage.setItem("fieldNowPlayer3",value);
    localStorage.setItem("positionNowPlayer3",newPosition);
    comparationPlayer3();
    console.log("==========================");
}

const turnPlayer4 = () =>{
    console.log("turno  player 4");
    localStorage.setItem("turn",1);
    let num1 =  getNum();
    let num2 =  getNum();
    renderImg(1,num1);
    renderImg(2,num2);
    let dados = num1+num2;
    console.log("==========================");
    console.log("valor de los dados: "+dados);
    let positionActual = parseInt(localStorage.getItem("positionNowPlayer4"));
    console.log("==========================");
    console.log("position actual: "+positionActual);
    let newPosition    =  positionActual+dados; 
    console.log("==========================");
    console.log("nueva posicion: "+newPosition);
    $('[player4="'+positionActual+'"]').html('');
    $('[player4="'+newPosition+'"]').html(figurePlayer4);
    let value = validatePosition(newPosition,4);
    localStorage.setItem("fieldNowPlayer4",value);
    localStorage.setItem("positionNowPlayer4",newPosition);
    comparationPlayer4();
    console.log("==========================");
}

const validatePosition = (newPosition, value) => {
    let id = $('[player'+value+'="'+newPosition+'"]').attr('id');
    return id;
}

const comparationPlayer1 = () => {

    if(localStorage.getItem("fieldNowPlayer1") == localStorage.getItem("fieldNowPlayer2")){

        localStorage.setItem("positionInitialPlayer2",51);
        localStorage.setItem("positionNowPlayer2",0);
        localStorage.setItem("positionAntPlayer2",0);
        localStorage.setItem("fieldNowPlayer2",0);
        console.log("player1 comio a player2");
        let audio = $("#audio")[0];
        audio.play();
 
    }else if(localStorage.getItem("fieldNowPlayer1") == localStorage.getItem("fieldNowPlayer3")){

        localStorage.setItem("positionInitialPlayer3",34);
        localStorage.setItem("positionNowPlayer3",0);
        localStorage.setItem("positionAntPlayer3",0);
        localStorage.setItem("fieldNowPlayer3",0);
        console.log("player1 comio a player3");
        let audio = $("#audio")[0];
        audio.play();

    }else if(localStorage.getItem("fieldNowPlayer1") == localStorage.getItem("fieldNowPlayer4")){

        localStorage.setItem("positionInitialPlayer4",17);
        localStorage.setItem("positionNowPlayer4",0);
        localStorage.setItem("positionAntPlayer4",0);
        localStorage.setItem("fieldNowPlayer4",0);
        console.log("player1 comio a player4");
        let audio = $("#audio")[0];
        audio.play();

    }else{

    }
}

const comparationPlayer2 = () => {

    if(localStorage.getItem("fieldNowPlayer2") == localStorage.getItem("fieldNowPlayer1")){

        localStorage.setItem("positionInitialPlayer1",0);
        localStorage.setItem("positionNowPlayer1",0);
        localStorage.setItem("positionAntPlayer1",0);
        localStorage.setItem("fieldNowPlayer1",0);
        console.log("player2 comio a player1");
        let audio = $("#audio")[0];
        audio.play();
 
    }else if(localStorage.getItem("fieldNowPlayer2") == localStorage.getItem("fieldNowPlayer3")){

        localStorage.setItem("positionInitialPlayer3",34);
        localStorage.setItem("positionNowPlayer3",0);
        localStorage.setItem("positionAntPlayer3",0);
        localStorage.setItem("fieldNowPlayer3",0);
        console.log("player2 comio a player3");
        let audio = $("#audio")[0];
        audio.play();

    }else if(localStorage.getItem("fieldNowPlayer2") == localStorage.getItem("fieldNowPlayer4")){

        localStorage.setItem("positionInitialPlayer4",17);
        localStorage.setItem("positionNowPlayer4",0);
        localStorage.setItem("positionAntPlayer4",0);
        localStorage.setItem("fieldNowPlayer4",0);
        console.log("player2 comio a player4");
        let audio = $("#audio")[0];
        audio.play();

    }else{

    }
}

const comparationPlayer3 = () => {

    if(localStorage.getItem("fieldNowPlayer3") == localStorage.getItem("fieldNowPlayer1")){

        localStorage.setItem("positionInitialPlayer1",0);
        localStorage.setItem("positionNowPlayer1",0);
        localStorage.setItem("positionAntPlayer1",0);
        localStorage.setItem("fieldNowPlayer1",0);
        console.log("player3 comio a player1");
        let audio = $("#audio")[0];
        audio.play();
 
    }else if(localStorage.getItem("fieldNowPlayer3") == localStorage.getItem("fieldNowPlayer2")){

        localStorage.setItem("positionInitialPlayer2",51);
        localStorage.setItem("positionNowPlayer2",0);
        localStorage.setItem("positionAntPlayer2",0);
        localStorage.setItem("fieldNowPlayer2",0);
        console.log("player3 comio a player2");
        let audio = $("#audio")[0];
        audio.play();

    }else if(localStorage.getItem("fieldNowPlayer3") == localStorage.getItem("fieldNowPlayer4")){

        localStorage.setItem("positionInitialPlayer4",17);
        localStorage.setItem("positionNowPlayer4",0);
        localStorage.setItem("positionAntPlayer4",0);
        localStorage.setItem("fieldNowPlayer4",0);
        console.log("player3 comio a player4");
        let audio = $("#audio")[0];
        audio.play();

    }else{

    }
}

const comparationPlayer4 = () => {

    if(localStorage.getItem("fieldNowPlayer4") == localStorage.getItem("fieldNowPlayer1")){

        localStorage.setItem("positionInitialPlayer1",0);
        localStorage.setItem("positionNowPlayer1",0);
        localStorage.setItem("positionAntPlayer1",0);
        localStorage.setItem("fieldNowPlayer1",0);
        console.log("player4 comio a player1");
        let audio = $("#audio")[0];
        audio.play();
 
    }else if(localStorage.getItem("fieldNowPlayer4") == localStorage.getItem("fieldNowPlayer2")){

        localStorage.setItem("positionInitialPlayer2",51);
        localStorage.setItem("positionNowPlayer2",0);
        localStorage.setItem("positionAntPlayer2",0);
        localStorage.setItem("fieldNowPlayer2",0);
        console.log("player4 comio a player2");
        let audio = $("#audio")[0];
        audio.play();

    }else if(localStorage.getItem("fieldNowPlayer4") == localStorage.getItem("fieldNowPlayer3")){

        localStorage.setItem("positionInitialPlayer3",34);
        localStorage.setItem("positionNowPlayer3",0);
        localStorage.setItem("positionAntPlayer3",0);
        localStorage.setItem("fieldNowPlayer3",0);
        console.log("player4 comio a player3");
        let audio = $("#audio")[0];
        audio.play();

    }else{

    }
}

