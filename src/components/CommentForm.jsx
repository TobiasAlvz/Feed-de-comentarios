import { useState } from "react";
import styles from "./CommentForm.module.css";

const CommentForm = ({ onAddComment }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !comment) return;

    onAddComment(email, comment);

    setEmail("");
    setComment("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label htmlFor="comment">Comentário</label>
      <textarea
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />

      <button type="submit">Enviar comentário</button>
    </form>
  );
};

export default CommentForm;
