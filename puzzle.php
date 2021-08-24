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
                <p>Что ты никогда не сможешь съесть на завтрак?</p>
                <input type="text" id="userAnswer1" placeholder="your answer">

                <p>Что все время приходит, но никак не придет?</p>
                <input type="text" id="userAnswer2" placeholder="your answer">

                <p>Кто может поднять и передвинуть и коня, и слона?</p>
                <input type="text" id="userAnswer3" placeholder="your answer" >

                <p>Что может в одно и то же время стоять и ходить,<br> висеть и стоять, ходить и лежать?</p>
                <input type="text" id="userAnswer4" placeholder="your answer">
                <br>
                <a href="#" onClick="checkAnswer();">Ответить</a>
            </div>
        </div>
    </div>
</div>
<div class="footer">
    <?php echo date("Y");?> istchanar@gmail.com
    <a href="https://github.com/Istchanar" target="_blank"><img src="images/github.png" alt="github"></a>
</div>
</body>
</html>