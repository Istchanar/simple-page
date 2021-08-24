<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/generate-pass.css">
    <title>js/genpass</title>
    <link rel="shortcut icon" href="images/genpasslogo.png">
    <script src="js/generate-pass.js"></script>
</head>
<body>
<?php include "header.php"?>
<div class="contentWrap">
    <div class="content">
        <div class="center">
            <h1>Генератор пароля</h1>
            <div class="box">
                <p id = "info">Длинна пароля ожидается от 5 до 15 символов.<br>Укажите длинну пароля: </p>
                <input type="text" id="passwordlength" placeholder="your length">

                <p>Пароль:</p>
                <input type="text" id="password" placeholder="your pass">
                <br>
                <a href="#" onClick="generatePass();">Ответить</a>
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