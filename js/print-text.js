var someText = "Это эксперементальные страницы для тестирования основ html/css/js.\nВ меню выше размещен ряд ссылок полезных ссылок, плюс ссылки на мини js-игры.\nИсходный код страницы:";
var getElement = document.getElementById("print");

function print(someText, getElement) {
    if(someText.length > 0) {
        getElement.innerHTML += someText[0];
        setTimeout(()=> {
            print(someText.slice(1), getElement);  
        }, 50);
    }
}

print(someText, getElement);