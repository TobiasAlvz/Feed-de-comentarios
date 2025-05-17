import styles from "./CommentList.module.css";

export default function CommentList({ comments }) {
  return (
    <ul className={styles.list}>
      {comments.map(({ id, email, content, date }) => (
        <li key={id} className={styles.comment}>
          <p className={styles.email}><strong>{email}</strong></p>
          <p className={styles.date}>
            Em {new Date(date).toLocaleString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>
          <p className={styles.content}>{content}</p>
        </li>
      ))}
    </ul>
  );
}
