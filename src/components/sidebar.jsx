import { PencilLine } from 'phosphor-react';
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=400&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D" 
        alt="Cover" 
      />
      <div className={styles.profile}>
        <img  
          className={styles.avatar} 
          src="https://avatars.githubusercontent.com/u/130418882?v=4" 
          alt="Avatar" 
        />
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
