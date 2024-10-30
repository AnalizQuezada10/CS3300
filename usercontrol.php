<?php>

require_once "userModel.php";
    class UserController {
        public function showUsersPage() {
            include 'viewws/Users.html';

        }
        public function getUsersJson() {
            $userModel = new UserModel();
            header('Content Type: application/Json');
            echo json_encode($userModel ->getAllUsers());
            
        }
    }
</php>