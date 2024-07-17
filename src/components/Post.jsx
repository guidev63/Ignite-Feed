import styles from "./Post.module.css";

export function Post(props) {
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/diego3g.png"
            alt="Avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="08 de maio às 08:13h" dateTime="2022-05-11T08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 jane.design/doctorcare</p>
        <p>#novoprojeto #nlw #rocketseat</p>
        <p>Deixe seu feedback</p>
        <p>Nossa, adorei amigo! Parabéns!</p>
      </div>
    </article>
  );
}
