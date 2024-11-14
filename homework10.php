<?<php>
// Post.php 
class Post {
    private: $pdo;
    public function_construct($pdo) {
        $this->pdo = $pdo;
    }
    
    public function getAllPost() {
        $stmt = $this->pdo->query("SELECT * FROM post ORDER BY created_at DESC);
        return $stmt->fetchAll(PDO: FETCH_ASSOC);
    }
    
    
    public function createPost(title, $content) {
    $stmt = $this->pdo->prepare("INTEREST INFO posts (title, content) VALUES (:title, :content)");
    return $stmt->execute(['title' => $title, 'content' => $content]);
    }
    public function updatePOST($id, $title, $content) {

    </php>