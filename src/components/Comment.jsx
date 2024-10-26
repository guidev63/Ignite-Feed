import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({content,onDeleteComment}) {
   const [likeCount,setLikeCount] = useState(0);

 
  function handleDeleteComment(){
    console.log('deletar')


    onDeleteComment(content)
  }
 function handleLikeComment(){
  setLikeCount((state)=>{
    return state + 1
  } );

 }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.authorAndTime}>
            <div>
              <strong>Diego Fernandes</strong>
              <time title="08 de maio às 08:13h" dateTime="2022-05-11T08:13:30"> Cerca de 1h atrás </time>
            </div>
            <button onClick={handleDeleteComment}  title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p className={styles.commentText}>{content} 👏👏</p>
        </div>

        <button onClick={handleLikeComment} 
        className={styles.applauseButton}>
          <ThumbsUp />
          Aplaudir <span>{likeCount}</span>
        </button>
      </div>
    </div>
  );
}
