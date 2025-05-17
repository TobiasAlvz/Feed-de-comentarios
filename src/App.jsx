import { useState } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import styles from "./App.module.css";

export default function App() {
  const [comments, setComments] = useState([]);
  
  const addComment = (email, content) => {
    const newComment = {
      id: Date.now(),
      email,
      content,
      date: new Date().toISOString(),
    };
    setComments((prev) => [newComment, ...prev]);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Seção de Comentários</h2>
      <CommentForm onAddComment={addComment} />
      {comments.length === 0 ? (
        <p className={styles.empty}>Seja o primeiro a comentar!</p>
      ) : (
        <CommentList comments={comments} />
      )}
    </section>
  );
}