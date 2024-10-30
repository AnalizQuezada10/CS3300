<?php


require_once 'usercontroller.php';
$requesturi = $_SERVER['REQUEST_URI'];
$userConroller = new UserController();
if($requesturi === '/users') {
    $userController->getUsersJson();
} else {
    $userController->showUsersPage();
}
}