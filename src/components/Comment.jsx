import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img  src="https://github.com/diego3g.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                <header className={styles.authorAndTime}>

                </header>

                </div>

                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>
            <footer>
                Aplaudir
            </footer>
        </div>
    );
}
