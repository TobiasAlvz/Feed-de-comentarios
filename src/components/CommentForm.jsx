import { useState } from "react";
import styles from "./CommentForm.module.css";

export default function CommentForm({ onAddComment }) {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !comment.trim()) {
      setError("Preencha todos os campos.");
      return;
    }
    setError("");
    onAddComment(email.trim(), comment.trim());
    setEmail("");
    setComment("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
      />

      <label htmlFor="comment">Comentário</label>
      <textarea
        id="comment"
        placeholder="Escreva seu comentário aqui..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
      />

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={styles.button}>
        Enviar comentário
      </button>
    </form>
  );
}
