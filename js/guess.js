var answer = parseInt(Math.random() * 100);
var first = "";
var second = "";
var firstPlayerInGame = true;
var secondPlayerInGame = true;
var turn = 1;
var tryCountFirst = 0;
var tryCountSecond = 0;
var maxTryCount = 2;
  
//Читает строку из инпута;
function readInt(){
    return document.getElementById("userAnswer").value;
}

//Чистит инпут;
function clearInp(){
    return document.getElementById("userAnswer").value = "";
}

//Пишет текст;
function write(text){
    document.getElementById("info").innerHTML= text;
}

//Принимает номер хода, статус игрока, сообщение;
function switchTurn(turnNow, playerStatus, message){
    write(message);
        if(playerStatus==true){
        turn = turnNow;
        }
    clearInp();
}

function hide(id){
    document.getElementById(id).style.display = "none"
}

function guess(){
    if(first==""){
        first = readInt();
        write("Приятно познакомиться, " + first + "!<br> Второй игрок, введите ваше имя: ");
        clearInp();
    }

    else if (second==""){
        second = readInt();
        write("Приятно познакомиться, " + second + "!<br> Игрок " + first + ", ваш ход!");
        clearInp();
    }

    else {

        if (firstPlayerInGame == true || secondPlayerInGame == true){

            if(turn == 1 && firstPlayerInGame == true){
                tryCountFirst++;
                var userAnswer = readInt();                 
                
                if(parseInt(userAnswer) == answer){
                    switchTurn(2, secondPlayerInGame, "Поздравляю, " + first + " угадал число!<br> Ходит " + second + ":");
                } 
                else if(tryCountFirst > maxTryCount)
                {
                    if(tryCountSecond>maxTryCount){
                        switchTurn(2, secondPlayerInGame, "Игрок, " + first + " проиграл(");
                        hide("userAnswer");
                    }
                    else{
                    switchTurn(2, secondPlayerInGame, "Игрок, " + first + " проиграл(<br> Ходит " + second + ":");
                    }
                    firstPlayerInGame = false;
                    first = second;
                }
                else if(parseInt(userAnswer) > answer){
                    switchTurn(2, secondPlayerInGame, first + " ввёл слишком большое число. " + tryCountFirst + " <br> Ходит " + second + ":");
                } 
                else if(parseInt(userAnswer) < answer){
                    switchTurn(2, secondPlayerInGame, first + " ввёл слишком маленькое число. " + tryCountFirst + "<br> Ходит " + second + ":");
                } 
                else if(userAnswer == "выход"){
                    switchTurn(2, secondPlayerInGame, first + " вышел из игры!<br> Ходит " + second + ":");
                    firstPlayerInGame = false;
                    first = second;
                }
            }
            else if (turn == 2 && secondPlayerInGame == true){
                tryCountSecond++;
                var userAnswer = readInt();
                
                if(parseInt(userAnswer) == answer){
                    switchTurn(1, firstPlayerInGame, "Поздравляю, " + second + " угадал число!<br> Ходит " + first + ":");
                } 
                else if(tryCountSecond > maxTryCount)
                {
                    if(tryCountFirst>maxTryCount){
                        switchTurn(2, firstPlayerInGame, "Игрок, " + second + " проиграл(");
                        hide("userAnswer");
                    }
                    else{
                    switchTurn(2, secondPlayerInGame, "Игрок, " + second + " проиграл(<br> Ходит " + first + ":");
                    }
                    secondPlayerInGame = false;
                    second = first;
                }
                else if(parseInt(userAnswer) > answer){
                    switchTurn(1, firstPlayerInGame, second + " ввёл слишком большое число.<br> Ходит " + first + ":");
                } 
                else if(parseInt(userAnswer) < answer){
                    switchTurn(1, firstPlayerInGame, second + " ввёл слишком маленькое число.<br> Ходит " + first + ":");
                } 
                else if(userAnswer == "выход"){
                    switchTurn(1, firstPlayerInGame, second + " вышел из игры!<br> Ходит " + first + ":");
                    secondPlayerInGame = false;
                    second = first;
                }
            }
        }
        else{
        write("Все игроки вышли!");
        hide("userAnswer");
        }
    }
}