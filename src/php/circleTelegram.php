<?php
if ($_POST) {

    try {

        $nameCircle = $_POST["nameCircle"];
        $code = $_POST["activeCode"];
        $userPhone = $_POST["phone"];
        $textForm = $_POST["textForm"];

    } catch (\Throwable $th) {
        $code = "ERROR IN MESSAGE";
        $userPhone = "ERROR IN MESSAGE";
        $nameCircle = "ERROR IN MESSAGE";
        $textForm = "ERROR IN MESSAGE";
    }

   
    $token = "7112590922:AAEkTRN4YWw5TJ3nI5f_n9xJqK-YIJEt46I"; // api телеграм бота
    $chat_id = "-1002230652746";
    // $chat_id = "1483953355";

    $code = urlencode("$code");
    $userPhone = urlencode("$userPhone");
    $nameCircle = urlencode("$nameCircle");
    $textForm = urlencode("$textForm");

    // Оновлений фрагмент коду для відправки повідомлення з використанням HTML-підтримки
    $urlQuery = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" .
        "<b>Заявка: </b>%0A%0A" .
        "Ім'я замовника: <b>$nameCircle</b>%0A" . "%0A" .
        "Телефон: <b>$code$userPhone</b>%0A" . "%0A" .
        "<b>======Запитання======</b>%0A%0A" .
        "<b>$textForm</b>" . "%0A" .

    // Додано параметр parse_mode=HTML
    $urlQuery .= "&parse_mode=HTML"; 

    $result = file_get_contents($urlQuery);
}
header("Location: success.php");
    exit();
?>