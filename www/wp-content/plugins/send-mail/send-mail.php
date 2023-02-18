<?php
/**
 * Plugin Name: SMTP Send mail
 * Plugin URI: http://sauri.pw/
 * Description: The plugin is designed to aggregate mail requests and send them to the specified email addresses
 * Version: 1.0
 * Author: Akinay Sau (Vladimir Mogilev) <akinay.sau@gmail.com>
 * Author URI: http://sauri.pw/
 * License: A "Slug" license name e.g. GPL2
 * Text Domain: send-mail
 * Domain Path: /l10n
 */

########################################################################################################################
use Sau\WP\Plugin\SendMail\Mailer;
use Sau\WP\Plugin\SendMail\SMTPConfigs;

include_once __DIR__.'/vendor/autoload.php';

define('SEND_MAIL_TRANSLATE_DOMAIN', 'send-mail');
define('SEND_MAIL_PLUGIN_DIR', __DIR__);
define('SEND_MAIL_REST_NAMESPACE', '/sau/send-mail/v1/');

__('SMTP Send mail');
__('The plugin is designed to aggregate mail requests and send them to the specified email addresses');

########################################################################################################################


//Enable Translate
add_action(
    'plugins_loaded',
    function () {
        load_plugin_textdomain(SEND_MAIL_TRANSLATE_DOMAIN, false, dirname(plugin_basename(__FILE__)).'/l10n/');
    }
);

$configs = new SMTPConfigs();
add_action(
    'init',
    function () use ($configs) {
        //Options registered
        $configs->registerOptions();
        //js variable for render in page header
        add_action(
            'wp_head',
            function () {
                $url = get_rest_url(null, SEND_MAIL_REST_NAMESPACE).'send';
                printf('<script type="text/javascript">window.send_mail_url = \'%s\';</script>', $url);
            }
        );

    }
);
add_action(
    'rest_api_init',
    function () use ($configs) {
        register_rest_route(
            SEND_MAIL_REST_NAMESPACE,
            'send',
            [
                [
                    'methods'  => WP_REST_Server::EDITABLE,
                    'callback' => function (WP_REST_Request $request){
                        try {

                            $data   = [
                                'request' => $request->get_params(),//$request->get_body_params(),
                            ];
                            $to = get_option('admin_email');
                            $subject = 'New message from site';
                            $from = 'info@homespadesign.ru';
                            
                            // To send HTML mail, the Content-type header must be set
                            $headers  = 'MIME-Version: 1.0' . "\r\n";
                            $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
                            
                            // Create email headers
                            $headers .= 'From: '.$from."\r\n".
                                'Reply-To: '.$from."\r\n" .
                                'X-Mailer: PHP/' . phpversion();
                            
                            // Compose a simple HTML email message
                            $message = '<html>
                            <style>
                            img {background-color: red;-webkit-mask: url(logo.svg) no-repeat center;mask: url(logo.svg) no-repeat center;}
                            .main_title{font-size:18px;font-weight:bolder;color:red;}
                            table tr{text-align:left;}
                            .prod_title { background-color: #F1F2F2;}
                            </style>
                            <body>';//.json_encode($request->get_body_params());
                            //$message .= json_encode($request->get_params());
                            $message .="<table>";
                                                        foreach ($request->get_params() as $key => $value) {
                                                            
                                                            $message .= sprintf("<tr class='main_title'><td>%s</td><td>%s</td></tr>", ucfirst($key), is_array($value) ? '' : $value);
                                                            if(is_array($value)){
                                                                foreach ( $value as $k => $v) {
                                                                    if(is_array($v)){
                                                                        foreach ( $v as $k1 => $v1) {
                                                                            if(is_array($v1)){
                                                                                $i = 1;
                                                                                foreach ( $v1 as $k2 => $v2) {
                                                                                    if(is_array($v2)){
                                                                                        foreach ( $v2 as $k3 => $v3) {
                                                                                            if(ucfirst($k3) == 'Img'){
                                                                                                $message .= sprintf('<tr><td>%s</td><td>%s</td></tr>', $i, "<img width='30' height='30' src='{$v3}'/>");
                                                                                                $i++;
                                                                                            } else if(ucfirst($k3) == 'Title') {
                                                                                                $message .= sprintf('<tr><td>%s</td><td>%s</td></tr>', '', $v3);
                                                                                            }
                                                                                            
                                                                                        }
                                                                                    } else {
                                                                                        $message .= sprintf("<tr><th>%s</th><td>%s</td></tr>", ucfirst($k2), $v2);
                                                                                    }
                                                                                }
                                                                            } else {
                                                                                $message .= sprintf("<tr class='prod_title'><th>%s</th><td>%s</td></tr>", ucfirst($k1), $v1);
                                                                            }
                                                                        }
                                                                    } else {
                                                                        //$prod_title = $key == 'Title' ? 'prod_title' : '';
                                                                        $message .= sprintf('<tr><th>%s</th><td>%s</td></tr>', ucfirst($k), $v);
                                                                    }
                                                                }
                                                            }
                                                        }
                            $message .="</table>";
                            $message .= '</body></html>';
                            
                            // Sending email
                            if(mail($to, $subject, $message, $headers)){
                                return new WP_REST_Response($data, 200);
                            } else{
                                return 'Error';
                            }

                            /*
                            $mailer = new Mailer($configs);
                            //$mailer->send($request);
                            $subject = sprintf(
                                '%1$s %2$s',
                                __('The message from the website:', SEND_MAIL_TRANSLATE_DOMAIN),
                                $_SERVER[ 'HTTP_HOST' ]
                            );
                            $subject = apply_filters('sau_send_mail__subject_messages', $subject);

                            //$message = $mailer->getMessage();
                            //$data = json_decode(file_get_contents('php://input'), true);

                            $output = '<table><tbody>';

                            foreach ($data as $key => $item) {
                                $output .= sprintf(
                                    '<tr><th>%s</th><td>%s</td></tr>', ucfirst($key), $item);
                            }
                            $output .= '</tbody></table>';
                            //$configs->getTo()
                            wp_mail('mail.websofter@gmail.com', $subject, $output);
                            */
                           
                        } catch (Exception $exception) {
                            return new WP_REST_Response(
                                [
                                    'error' => $exception->getMessage(),
                                    'trace' => $exception->getTrace(),
                                ], 400
                            );

                        }

                    },
                ],
            ]
        );

    }
);

add_filter(
    'wp_mail_from',
    function () use ($configs) {
        return $configs->getFromMail();
    }
);
add_filter(
    'wp_mail_from_name',
    function () use ($configs) {
        return $configs->getFromName();
    }
);

add_action(
    'phpmailer_init',
    function ($mail) use ($configs) {
        /** @var PHPMailer $mail */
        $mail->isSMTP();
        $mail->SMTPAuth   = true;
        $mail->SMTPSecure = $configs->getEncryption();
        $mail->Host       = $configs->getHost();
        $mail->Port       = $configs->getPort();
        $mail->Username   = $configs->getUser();
        $mail->Password   = $configs->getPassword();
    }
);


