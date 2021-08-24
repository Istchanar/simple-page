<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/git-help.css">
    <link rel="shortcut icon" href="images/gitlogo.png">
    <title>git-help</title>
</head>
<body>
<?php include "header.php"?>
<div class="content">

    <h1><img src="images/git.png">git-help</h1>
    <div class="text_git">
            <p>Базовая работа с настройками удаленного репозитория:</p>

                <p><b>ssh-keygen</b> - генерация ssh-ключа;<br>
                <b>git push -u origin "branch"</b> - запушить локальную ветку в удаленный репозиторий и устанавливает удаленную ветку для текущей локальной ветки;<br>
                <b>git remote -v</b> - список соединений;<br>
                <b>git remote add origin http://dev</b> - устанавливает подключение к удаленному репозиторию dev;<br>
                <b>git checkout -b "branch" "fromBranch"</b> - переключение и создание новой ветки "branchName" на основе "fromBranch", если не указывать "fromBranch" - создастся на основе текущей;</p>
        
            <p>Базовая работа с настройками удаленного репозитория:</p>

                <p><b>git cherry-pick hash</b> - забрать определенный коммит с хэшом hash в свою ветку, если вместо хэша указать "branch" - возьмётся самый последний коммит, если .."branch" - переносятся все коммиты;<br>
                <b>git commit -am "commit message"</b> - одновременно проиндексировать и закоммитить изменения с сообщением commit message;</p>

            <p>Отмена изменений:</p>

                <p><b>git reset --hard hash</b> - откатывание всех изменений до указанного коммита hash;<br>
                <b>git revert hash</b> - откатывает изменения до указанного коммита, создавай новый коммит с отмененными изменениями;</p>

            <p>Вывод логов, конфига:</p>

                <p><b>git config --list</b> - показывает записи в гит-конфиге;<br>
                <b>git log --oneline</b> - вывод коммитов в текущей ветке; --all - во всех;<br>
                <b>git reflog</b>  - позволяет увидеть больше изменений, чем log, тем самым открывая доступ к восстановлению удалённых коммитов с помощью reset, --amend, и т.д.;</p>

            <p>Мержи, сквоши:</p>

                <p><b>git rebase -i HEAD~N</b>  - ребейз в своей же ветке в интереактивном режиме, на N коммита вниз, тем самым сквошает коммиты. Скорей всего, придётся делать git push --force при пуше в ветку в удаленный репозиторий;<br>
                <b>git merge "branch" --squash</b> - сквош при мерже;<br>
                <b>git commit --amend</b> - вместо создания нового коммита перезапись последнего;<br>
                <b>git merge "branch1" "branch2"</b> - мержит по порядку две ветки, отменить процесс мержа можно выполнив git merge --abort, для продолжения после исправления конфликтов git commit;</p>

            <p>Работа с тегами:</p>

                <p><b>git tag 1.0.0</b> - коммиту присваивается тег, -d перед версией - удаление тега;<br>
                <b>git tag --list</b> - списко тегов (версий);<br>
                <b>git push --tags</b> - пуш тегов в удаленный репозиторий;<br>
                <b>git push --delete origin 1.0.0</b> - удаление тега в удаленном репозитории.</p>
    </div>
</div>
<div class="footer">
    <?php echo date("Y");?> istchanar@gmail.com
    <a href="https://github.com/Istchanar" target="_blank"><img src="images/github.png" alt="github"></a>
</div>
</body>
</html>