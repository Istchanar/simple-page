var score = 0;

function check(id, answers){
    var userAnswer = document.getElementById(id).value;
    var userAnswer = userAnswer.toLowerCase();
    if(score >= 4){score = 0}
    for(var i = 0; i< answers.length; i++){
        if(userAnswer==answers[i])
        {score++; break}
    }
}

function checkAnswer(){
    check("userAnswer1", ["обед", "Обед", "ужин", "Ужин"]);
    check("userAnswer2", ["завтра","Завтра"]);
    check("userAnswer3", ["шахматист"]);
    check("userAnswer4", ["часы","Часы"]);
    alert("Вы ответили на " + score + " загадки!");
} 