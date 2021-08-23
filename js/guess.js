var answer = parseInt(Math.random() * 100);
var first = "";
var second = "";

//Cостояние игроков и очерёдность хода;
var firstPlayerInGame = true;
var secondPlayerInGame = true;
var turn = 1;

//Очерёдность игроков;
var tryCountFirst = 0;
var tryCountSecond = 0;
var maxTryCount = 5;
  
//Читает строку из инпута;
function readInp(){
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
        first = readInp();
        write("Приятно познакомиться, " + first + "!<br> Второй игрок, введите ваше имя: ");
        clearInp();
    }

    else if (second==""){
        second = readInp();
        write("Приятно познакомиться, " + second + "!<br> Игрок " + first + ", ваш ход!");
        clearInp();
    }

    else {

        if (firstPlayerInGame == true || secondPlayerInGame == true){

            if(turn == 1 && firstPlayerInGame == true){
                tryCountFirst++;
                var userAnswer = readInp();                 
                
                if(parseInt(userAnswer) == answer){
                    switchTurn(2, secondPlayerInGame, "Поздравляю, " + first + " угадал число!");
                    hide("userAnswer");
                    firstPlayerInGame = false;
                    secondPlayerInGame = false;
                } 
                else if(tryCountFirst >= maxTryCount)
                {
                    if(secondPlayerInGame==false){
                        switchTurn(2, secondPlayerInGame, first + " проиграл( Осталось <b>" + (maxTryCount - tryCountFirst) + "</b> попыток.");
                        hide("userAnswer");
                    }
                    else{
                        switchTurn(2, secondPlayerInGame, first + " проиграл( Осталось <b>" + (maxTryCount - tryCountFirst) + "</b> попыток. <br> Ходит " + second + ":");
                    }
                    firstPlayerInGame = false;
                    first = second;
                }
                else if(parseInt(userAnswer) > answer){
                    switchTurn(2, secondPlayerInGame, first + " ввёл слишком большое число. Осталось <b>" + (maxTryCount - tryCountFirst) + "</b> попыток. <br> Ходит " + second + ":");
                } 
                else if(parseInt(userAnswer) < answer){
                    switchTurn(2, secondPlayerInGame, first + " ввёл слишком маленькое число.  Осталось <b>" + (maxTryCount - tryCountFirst) + "</b> попыток. <br> Ходит " + second + ":");
                } 
                else if(userAnswer == "выход"){
                    if(secondPlayerInGame==false){
                        switchTurn(2, secondPlayerInGame, first + " вышел из игры!");
                        hide("userAnswer");
                    }
                    else{
                        switchTurn(2, secondPlayerInGame, first + " вышел из игры!<br> Ходит " + second + ":");
                    }
                    firstPlayerInGame = false;
                    first = second;
                }
            }
            else if (turn == 2 && secondPlayerInGame == true){
                tryCountSecond++;
                var userAnswer = readInp();
                
                if(parseInt(userAnswer) == answer){
                    switchTurn(1, firstPlayerInGame, "Поздравляю, " + second + " угадал число!");
                    hide("userAnswer");
                    firstPlayerInGame = false;
                    secondPlayerInGame = false;
                } 
                else if(tryCountSecond >= maxTryCount)
                {
                    if(firstPlayerInGame==false){
                        switchTurn(2, firstPlayerInGame, second + " проиграл( Осталось <b>" + (maxTryCount - tryCountFirst) + "</b> попыток.");
                        hide("userAnswer");
                    }
                    else{
                        switchTurn(2, secondPlayerInGame, second + " проиграл( Осталось <b>" + (maxTryCount - tryCountFirst) + "</b> попыток. <br> Ходит " + first + ":");
                    }
                    secondPlayerInGame = false;
                    second = first;
                }
                else if(parseInt(userAnswer) > answer){
                    switchTurn(1, firstPlayerInGame, second + " ввёл слишком большое число. Осталось <b>" + (maxTryCount - tryCountFirst) + "</b> попыток. <br> Ходит " + first + ":");
                } 
                else if(parseInt(userAnswer) < answer){
                    switchTurn(1, firstPlayerInGame, second + " ввёл слишком маленькое число. Осталось <b>" + (maxTryCount - tryCountFirst) + "</b> попыток. <br> Ходит " + first + ":");
                } 
                else if(userAnswer == "выход"){
                    if(firstPlayerInGame==false){
                        switchTurn(1, firstPlayerInGame, second + " вышел из игры!");
                        hide("userAnswer");
                    }
                    else{
                        switchTurn(1, firstPlayerInGame, second + " вышел из игры!<br> Ходит " + first + ":");
                    }
                    secondPlayerInGame = false;
                    second = first;
                }
            }
        }
        else{
        write("Игра окончена.");
        hide("userAnswer");
        hide("button");
        }
    }
}