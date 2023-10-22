<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['email'];
$website = $_POST['website'];
$message = $_POST['message'];

if(!empty($email) && !empty($message)){

    if(filter_var($email, FILTER_VALIDATE_EMAIL)){

        $reciver = "alielasfoury12@gmail.com";//email reciver
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nPhone:$phone\nWebsite: $website\n\nMessage: $message\n\nRegards,\n$name";
        $sender = "From: $email";
        
        if(mail($reciver,$subject,$body,$sender)){

          echo 'Your message has been sent';

        }else{

          echo 'Sorry, failed to send your message';

        }

    }else {

      echo 'Enter a vaild email adress!';
    }

}else{

  echo 'Email and Message field is required';
}
?>