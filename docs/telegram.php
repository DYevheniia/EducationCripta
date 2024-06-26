<?php
if ($_POST) {

    try {

        $userName = $_POST["userName"];
        $code = $_POST["activeCode"];
        $userPhone = $_POST["phone"];
        $userEmail = $_POST["userEmail"];
        $communication = $_POST["communication"];
        $sum = $_POST["sum"];

    } catch (\Throwable $th) {
        $code = "ERROR IN MESSAGE";
        $userPhone = "ERROR IN MESSAGE";
        $userName = "ERROR IN MESSAGE";
        $userEmail = "ERROR IN MESSAGE";
        $communication = "ERROR IN MESSAGE";
        $sum = "ERROR IN MESSAGE";
    }

   
    $token = "7112590922:AAEkTRN4YWw5TJ3nI5f_n9xJqK-YIJEt46I"; // api телеграм бота
    // $chat_id = "-1002230652746";
    $chat_id = "1483953355";

    $code = urlencode("$code");
    $userPhone = urlencode("$userPhone");
    $userName = urlencode("$userName");
    $userEmail = urlencode("$userEmail");
    $communication = urlencode("$communication");
    $sum = urlencode("$sum");

    // Оновлений фрагмент коду для відправки повідомлення з використанням HTML-підтримки
    $urlQuery = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" .
        "<b>Заявка: </b>%0A%0A" .
        "Ім'я замовника: <b>$userName</b>%0A" . "%0A" .
        "Телефон: <b>$code$userPhone</b>%0A" . "%0A" .
        "Email: <b>$userEmail</b>" . "%0A" .
        "<b>======Інші дані======</b>%0A%0A" .
        "Зручний спосіб звʼязку: <b>$communication</b>%0A" .
        "Депозит: <b>$sum</b>%0A" . "%0A";

    // Додано параметр parse_mode=HTML
    $urlQuery .= "&parse_mode=HTML"; 

    $result = file_get_contents($urlQuery);
}
header("Location: success.php");
    exit();
?>