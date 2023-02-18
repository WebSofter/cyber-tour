<?php
header("Access-Control-Allow-Origin: *");
//
//$mail_array = array(
//    'roefto@yandex.ru'
//);
//
//mailsend($mail_array);
//
//function mailsend($in_mail = array(), $fields = '')
//{
//    require 'PHPMailerAutoload.php';
//    $thm = "Feedback from " . $_SERVER['SERVER_NAME'];
//    $data = json_decode(file_get_contents('php://input'), true);
//    $body = [];
//    foreach ($data as $key => $val) {
//        $fields .= '<tr>
//                <td style="text-align: right;width: 30%; padding-top: 5px;padding-bottom: 5px; vertical-align: top;">
//                    <span style="font-size: 14px; color: #999999;padding-right: 20px; display:block;">' . $key . ':</span>
//                </td>
//                <td style="text-align:left;width: 70% ; padding-top: 5px;padding-bottom: 5px; vertical-align: top;">
//                    <span style="font-size: 18px; color: #000000">' . $val . '</span>
//                </td>
//            </tr>';
//        $body[] = $key . ': ' . $val;
//    }
//    $body = implode(', ', $body);
//
//    $msg = '<table style="width: 600px; margin:0 auto;background-image: url(http://tutmee.ru/images/main-bg.jpg);background-repeat:repeat-y ;background-position: top center; border-spacing: 0; " cellspacing="0" cellpadding="0">
//            <tr>
//                <td style="font-family:tahoma;">
//                    <table style="width: 600px; margin: 0 auto" cellspacing="0" cellpadding="0">
//                        <tr>
//                            <td>
//                                <table style=" margin: 0 auto;width: 179px;" cellspacing="0" cellpadding="0">
//                                    <tr>
//                                        <td style="text-align: center; padding-top: 30px">
//                                            <img alt="' . $_SERVER['SERVER_NAME'] . '" src="http://' . $_SERVER['SERVER_NAME'] . '/images/logo.png" />
//                                        </td>
//                                    </tr>
//                                </table>
//                            </td>
//                        </tr>
//                    </table>
//                </td>
//            </tr>
//            <tr>
//                <td>
//                    <table style="margin: 0 auto; width: 600px; border-bottom: 1px solid #C7C7C7;font-family: Tahoma" cellspacing="0" cellpadding="0">
//                        <tr>
//                            <td style="text-align: center; font-size: 30px;font-weight: 100; text-transform: uppercase;padding-top: 40px;">
//                                <span>Request</span>
//                            </td>
//                        </tr>
//                        <tr>
//                            <td style="text-align: center; font-size: 18px;font-weight: 100;padding-bottom: 12px">
//                                <span></span>
//                            </td>
//                        </tr>
//                    </table>
//                </td>
//            </tr>
//            <tr>
//                <td>
//                    <table style="font-family: Tahoma;border-top: 1px solid #ffffff;margin: 0 auto;width: 600px;" cellspacing="0" cellpadding="0">
//                        ' . $fields;
//    $msg .= '
//                    </table>
//                </td>
//            </tr>
//        </table>
//        <table style="width: 600px; margin: 0 auto;background-image: url(http://tutmee.ru/images/t2-bg.jpg);background-repeat:  no-repeat; height: 100px;background-position: bottom center;" cellspacing="0" cellpadding="0" >
//            <tr>
//                <td style="vertical-align: top;">
//                    <table style="width: 600px; border-bottom:1px solid #C7C7C7;margin: 0 auto; height: 1px" cellspacing="0" cellpadding="0" ></table>
//                </td>
//            </tr>
//            <tr>
//                <td style="vertical-align: top">
//                    <table style="width: 600px; border-top:1px solid #ffffff;margin: 0 auto;" cellspacing="0" cellpadding="0">
//                        <tr>
//                            <td style="vertical-align: top;text-align: center; padding-top: 12px;">
//                                <a href="http://tutmee.ru/" style="text-align: left; font-size: 12px; font-family: Arial;color: #AAAAAA;text-decoration: none;display: inline-block;">
//                                    <img src="http://tutmee.ru/images/dev-logo.png" alt="TutMee Создание дизайна и разработка сайтов LTD Tutmee.ru"><br/>
//                                </a>
//                            </td>
//                        </tr>
//                    </table>
//                </td>
//            </tr>
//        </table>
//        ';
//
//    $mail = new PHPMailer();
//    $mail->IsHTML(true);
//    $mail->CharSet = "utf-8";
//
//    foreach ($in_mail as $value) {
//        $mail->addAddress($value);
//    }
//    $mail->Subject = $thm;
//    $mail->Body = $body;
//    $mail->msgHTML($msg);
//    $nameFile = 'files';
//    if (isset($_FILES[$nameFile]['name'])) {
//        for ($k = 0; $k < count($_FILES[$nameFile]['name']); $k++) {
//            if ($_FILES[$nameFile]['name'][$k]['error'] == 0) {
//                $mail->AddAttachment($_FILES[$nameFile]['tmp_name'][$k], $_FILES[$nameFile]['name'][$k]);
//            } else {
//                $msg .= "Ошибка при отправке файла" . $_FILES[$nameFile]['error'][$k];
//            }
//        }
//    }
//    if (!$mail->Send()) {
//        die('Mailer Error: ' . $mail->ErrorInfo);
//    }
//    print 'true';
//}
echo 1;