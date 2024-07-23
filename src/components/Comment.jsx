import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.authorAndTime}>
            <div>
              <strong>Diego Fernandes</strong>
              <time title="08 de maio às 08:13h" dateTime="2022-05-11T08:13:30"> Cerca de 1h atrás </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p className={styles.commentText}>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <button className={styles.applauseButton}>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </div>
    </div>
  );
}
