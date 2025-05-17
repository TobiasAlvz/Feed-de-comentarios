import styles from "./CommentItem.module.css";

const CommentItem = ({ comment }) => {
  const formattedDate = new Date(comment.date).toLocaleString("pt-BR");

  return (
    <div className={styles.comment}>
      <p><strong>{comment.email}</strong></p>
      <p>Em {formattedDate}</p>
      <p>{comment.content}</p>
    </div>
  );
};

export default CommentItem;
