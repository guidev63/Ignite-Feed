import { Header } from "./components/header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/sidebar"; // Corrigido a capitalização

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, veritatis ipsam. Temporibus quos tenetur animi voluptatem, dolores quaerat, praesentium, laudantium vero eum dolor ratione. Ab voluptates repellat quisquam voluptatibus recusandae."
          />
          <Post author="Gabriel Buzzi" content="um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
