<?php

require 'resources/phpmailer/PHPMailer.php';
require 'resources/phpmailer/SMTP.php';
require 'resources/phpmailer/Exception.php';

$title = "Тема письма";

$c = true;


$title = "Заголовок письма";
foreach ( $_POST as $key => $value ) {
  if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
    $body .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width:100%;'>$body</table>";

// Настройки PhpMailer

$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  $mail->Host       = 'smtp.mail.ru';
  $mail->Username   = 'test_my_mail_21@mail.ru';
  $mail->Password   = 'FQd2ep4fhzsDfxmTXwZ2';
  $mail->SMTPSecure = 'ssl';
  $mail->Port   = 465;

  $mail->setFrom('test_my_mail_21@mail.ru', 'Тест sdp');
  $mail->addAddress('test_my_mail_21@mail.ru');
  $mail->addAddress('al_zzz@mail.ru');

  //Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();

} catch (Exception $e) {
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}