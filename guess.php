<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/guess.css">
    <title>js/угадай число</title>
    <script src="js/guess.js"></script>
    <link rel="shortcut icon" href="images/number.png">
</head>
<body>
<?php include "header.php"?>
<div class="contentWrap">
    <div class="content">
        <div class="center">
            <h1>Угадай число</h1>
            <div class="box">
                <p id="info">Угадайте число от 1 до 100. Всего <b>5</b> попыток.<br>Для выхода введите: выход.<br> Первый игрок, введите ваше имя: </p>
                <input type="text" id="userAnswer" placeholder="your answer">
                <br>
                <a href="#" onClick="guess();" id="button">Ответить</a>
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