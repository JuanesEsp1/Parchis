$(document).ready(function() {
    dbStatus();
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
    getTurn();
    
    /*
    let element = $('[player1="2"]');
    element.html('xxx');
    let id = element.attr('id');
    console.log(id);
    */
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
    localStorage.setItem("positionNowPlayer1",false);
    localStorage.setItem("positionInitialPlayer2",51);
    localStorage.setItem("positionNowPlayer2",false);
    localStorage.setItem("positionInitialPlayer3",34);
    localStorage.setItem("positionNowPlayer3",false);
    localStorage.setItem("positionInitialPlayer4",17);
    localStorage.setItem("positionNowPlayer4",false);
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

    localStorage.setItem("positionNowPlayer1",parseInt(localStorage.getItem("positionInitialPlayer1"))+num1+num2);

    $("#field"+parseInt(localStorage.getItem("positionNowPlayer1"))).html(figurePlayer1);
    $("#field"+valueAnt).html(valueAnt);
    valueAnt=parseInt(localStorage.getItem("positionNowPlayer1"));
    localStorage.setItem("positionInitialPlayer1",parseInt(localStorage.getItem("positionNowPlayer1")));
    
    console.log(valueAnt);
    
}

const turnPlayer2 = () =>{
    console.log("turno  player 2");
    localStorage.setItem("turn",3);

    let num1 =  getNum();
    let num2 =  getNum();

    renderImg(1,num1);
    renderImg(2,num2);

    localStorage.setItem("positionNowPlayer2",parseInt(localStorage.getItem("positionInitialPlayer2"))+num1+num2);

    $("#field"+parseInt(localStorage.getItem("positionNowPlayer2"))).html(figurePlayer2);
    $("#field"+valueAnt).html(valueAnt);
    valueAnt=parseInt(localStorage.getItem("positionNowPlayer2"));
    localStorage.setItem("positionInitialPlayer2",parseInt(localStorage.getItem("positionNowPlayer2")));

    console.log(valueAnt);
}

const turnPlayer3 = () =>{
    console.log("turno  player 3");
    localStorage.setItem("turn",4);

    let num1 =  getNum();
    let num2 =  getNum();

    renderImg(1,num1);
    renderImg(2,num2);

    localStorage.setItem("positionNowPlayer3",parseInt(localStorage.getItem("positionInitialPlayer3"))+num1+num2);

    $("#field"+parseInt(localStorage.getItem("positionNowPlayer3"))).html(figurePlayer3);
    $("#field"+valueAnt).html(valueAnt);
    valueAnt=parseInt(localStorage.getItem("positionNowPlayer3"));
    localStorage.setItem("positionInitialPlayer3",parseInt(localStorage.getItem("positionNowPlayer3")));

    console.log(valueAnt);
}

const turnPlayer4 = () =>{
    console.log("turno  player 4");
    localStorage.setItem("turn",1);

    let num1 =  getNum();
    let num2 =  getNum();

    renderImg(1,num1);
    renderImg(2,num2);

    localStorage.setItem("positionNowPlayer4",parseInt(localStorage.getItem("positionInitialPlayer4"))+num1+num2);

    $("#field"+parseInt(localStorage.getItem("positionNowPlayer4"))).html(figurePlayer4);
    $("#field"+valueAnt).html(valueAnt);
    valueAnt=parseInt(localStorage.getItem("positionNowPlayer4"));
    localStorage.setItem("positionInitialPlayer4",parseInt(localStorage.getItem("positionNowPlayer4")));

    console.log(valueAnt);
}