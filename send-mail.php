<?php
    $message = ""; 
    if($_SERVER['REQUEST_METHOD'] == "POST"){

        $to = "sajibprodhan@gmail.com";
        $name = $_POST['name'];
        $from = $_POST['email'];
        $phone = $_POST['phone'];
        $message = "<!DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
        <table rules='all' border='1' style='border-color: #666;' cellpadding='10'>
        <tr style='background: #eee;'><td colspan='2'><strong>Contact Form Details</strong> </td></tr>
        <tr>
            <td><strong>Name:</strong></td>
            <td>".$_POST['name']."</td>
        </tr>
        <tr>
            <td><strong>Mobile:</strong></td>
            <td>".$_POST['phone']."</td>
        </tr>
        <tr>
            <td><strong>Email:</strong></td>
            <td>".$_POST['email']."</td>
        </tr>
        <tr>
            <td><strong>Message:</strong></td>
            <td>".$_POST['message']."</td>
        </tr>
        </table>
        </body>
        </html>";
        
        $subject = "Contact Form Details";
        
        // Set content-type header for sending HTML email 
        $headers = "MIME-Version: 1.0" . "\r\n"; 
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        
        $headers .= "From:" . $from . "\r\n";

        $result = mail($to,$subject,$message,$headers);


        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
        $serverName = $_SERVER['HTTP_HOST'];
        $homePageURL = $protocol . "://" . $serverName;

        if ($result) {
            echo '<script type="text/javascript">confirm("Your Message was sent Successfully!");</script>';
            echo '<script type="text/javascript">window.location.href = "' . $homePageURL . '";</script>';
        }else{
            echo '<script type="text/javascript">confirm("Sorry! Message was not sent, Try again Later.");</script>';
            echo '<script type="text/javascript">window.location.href = "' . $homePageURL . '";</script>';
        }
        // header('Location: contact.php');
    }
