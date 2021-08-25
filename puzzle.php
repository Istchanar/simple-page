<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/puzzle.css">
    <title>js/загадки</title>
    <link rel="shortcut icon" href="images/question.png">
    <script src="js/puzzle.js"></script>
</head>
<body>
<?php include "header.php"?>
<div class="contentWrap">
    <div class="content">
        <div class="center">
            <h1>Загадки</h1>
            <div class="box">
                <?php 
                    if(isset($_GET['userAnswer1']) && isset($_GET['userAnswer2']) && isset($_GET['userAnswer3']) && isset($_GET['userAnswer4'])){
                        $score = 0;
                        $userAnswer = $_GET["userAnswer1"];
                        if($userAnswer == "обед" || $userAnswer == "Обед" || $userAnswer == "ужин" || $userAnswer == "Ужин"){
                            $score++;
                        }

                        $userAnswer = $_GET["userAnswer2"];
                        if($userAnswer == "завтра" || $userAnswer == "Завтра"){
                            $score++;
                        }

                        $userAnswer = $_GET["userAnswer3"];
                        if($userAnswer == "шахматист" || $userAnswer == "Шахматист"){
                            $score++;
                        }

                        $userAnswer = $_GET["userAnswer4"];
                        if($userAnswer == "часы"|| $userAnswer == "Часы"){
                            $score++;
                        }

                        echo "Угадано " . $score . " из 4 загадок!";
                    }
                ?>
                <form method="GET">
                    <p>Что ты никогда не сможешь съесть на завтрак?</p>
                    <input class="input" type="text" name="userAnswer1" placeholder="your answer">

                    <p>Что все время приходит, но никак не придет?</p>
                    <input class="input" type="text" name="userAnswer2" placeholder="your answer">

                    <p>Кто может поднять и передвинуть и коня, и слона?</p>
                    <input class="input" type="text" name="userAnswer3" placeholder="your answer" >

                    <p>Что может в одно и то же время стоять и ходить,<br> висеть и стоять, ходить и лежать?</p>
                    <input class="input" type="text" name="userAnswer4" placeholder="your answer">
                    <br>

                    <input class="button" type="submit" value="Ответить" name="">
                </form>
            </div>
        </div>
    </div>
</div>
<div class="footer">
    istchanar@gmail.com
    <a href="https://github.com/Istchanar" target="_blank"><img src="images/github.png" alt="github"></a>
</div>
</body>
</html>