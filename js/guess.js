var answer = parseInt(Math.random() * 100);
var first = "";
var second = "";
var firstPlayerInGame = true;
var secondPlayerInGame = true;
var turn = 1;
  
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

function guess(){
    if(first==""){
        first = readInt();
        write("Приятно познакомиться, " + first + "!<br> Второй игрок, введите ваше имя: ");
        clearInp(); 
        return;
    }

    else if (second==""){
        second = readInt();
        write("Приятно познакомиться, " + second + "!<br> Игрок " + first + ", ваш ход!");
        clearInp(); 
        return;
    }

    else {

        if (firstPlayerInGame == true || secondPlayerInGame == true){

            if(turn == 1 && firstPlayerInGame == true){

                var userAnswer = readInt();                 
                
                if(parseInt(userAnswer) == answer){
                    switchTurn(2, secondPlayerInGame, "Поздравляю, " + first + " угадал число!<br> Ходит " + second + ":");
                    return;
                } 
                else if(parseInt(userAnswer) > answer){
                    switchTurn(2, secondPlayerInGame, first + " ввёл слишком большое число.<br> Ходит " + second + ":");
                    return;
                } 
                else if(parseInt(userAnswer) < answer){
                    switchTurn(2, secondPlayerInGame, first + " ввёл слишком маленькое число.<br> Ходит " + second + ":");
                    return;
                } 
                else if(userAnswer == "выход"){
                    switchTurn(2, secondPlayerInGame, first + " вышел из игры!<br> Ходит " + second + ":");
                    firstPlayerInGame = false;
                    first = second;
                    return;
                }
            }
            else if (turn == 2 && secondPlayerInGame == true){

                var userAnswer = readInt();
                
                if(parseInt(userAnswer) == answer){
                    switchTurn(1, firstPlayerInGame, "Поздравляю, " + second + " угадал число!<br> Ходит " + first + ":");
                    return;
                } 
                else if(parseInt(userAnswer) > answer){
                    switchTurn(1, firstPlayerInGame, second + " ввёл слишком большое число.<br> Ходит " + first + ":");
                    return;
                } 
                else if(parseInt(userAnswer) < answer){
                    switchTurn(1, firstPlayerInGame, second + " ввёл слишком маленькое число.<br> Ходит " + first + ":");
                    return;
                } 
                else if(userAnswer == "выход"){
                    switchTurn(1, firstPlayerInGame, second + " вышел из игры!<br> Ходит " + first + ":");
                    secondPlayerInGame = false;
                    second = first;
                    return;
                }
            }
        }
        else{
        write("Все игроки вышли!");
        return;
        }
    }
}