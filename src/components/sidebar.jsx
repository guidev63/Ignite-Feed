import { PencilLine } from 'phosphor-react';
import styles from "./Sidebar.module.css";
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://github.com/diego3g.png" 
        alt="Cover" 
      />
      <div className={styles.profile}>
        <Avatar hasBorder={true}  src="https://avatars.githubusercontent.com/u/130418882?v=4" />
        <strong>Guilherme Augusto</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
