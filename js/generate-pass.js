var allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//Читает инпут;
function readInp(id){
    return document.getElementById(id).value;
}

//Чистит инпут;
function clearInp(id){
    return document.getElementById(id).value = "";
}

//Пишет в инпут;
function writeInp(id, text){
    return document.getElementById(id).value = text;
}

//Пишет текст;
function write(id, text){
    document.getElementById(id).innerHTML = text;
}

function generatePass(){
    if(readInp("password").length != 0){
        clearInp("password");
    }

    var length = +readInp("passwordlength");
    clearInp("passwordlength");
    var text = "";

    if(length < 5 || length > 15){
        write("info", "Длинна пароля не подходит. Укажите длинну пароля: ");
    }
    else{
        write("info", "Длинна пароля ожидается от 5 до 15 символов.<br>Укажите длинну пароля: ");
        for (var i = 0; i < length; i++){
            text += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
        writeInp("password", text);
    }
}