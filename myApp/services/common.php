<?php

class common{


    public function __construct(){

    }

    public static function _encryptData($notEncryptedValue){
      return base64_encode(openssl_encrypt($notEncryptedValue,'aes-256-cbc','Nd1UNÑÆÍÙ|†t‰Óa',0,'$$ppœþ†ÄÏƒ'));
    }

    public static function _decryptData($encryptedValue){
      return openssl_decrypt(base64_decode($encryptedValue),'aes-256-cbc','Nd1UNÑÆÍÙ|†t‰Óa',0,'$$ppœþ†ÄÏƒ');
    }
}
