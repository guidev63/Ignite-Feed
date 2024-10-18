import { format, set } from "date-fns";  

import styles from "./Post.module.css";
import { Comment } from './Comment';
import { Avatar } from "./Avatar";
import { useState } from "react";





// estado = variáveis   que eu quero  que o componente  monitore 
export function Post({ author, publishedAt, content }) {
   
const [Comments,setComments] = useState([
  
    'Post muito Bacana,hein?!'

])
   const [newCommentText,setNewCommentText] = useState ('')


  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt);

 function handleCreateNewComment(){

  event.preventDefault()

  const newCommentText = event.target.comment.value

console.log()
  setComments([...Comments, newCommentText]);
   setNewCommentText('');
 }
  function handleCreateNewCommentChange(){
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="08 de maio às 08:13h" dateTime="2022-05-11T08:13:30">
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
        })}
        <p> Fala Galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p className={styles.greenText}>👉 jane.design/doctorcare</p>
        <p className={styles.greenText}>#novoprojeto #nlw #rocketseat</p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleCreateNewCommentChange}

        />
        <footer> 
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {Comments.map((comment, index) => {
          return <Comment  content ={comment}  />
        })}
      </div>
    </article>
  );
}
