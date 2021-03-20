import styles from '../styles/Home.module.css'
import Board from './Components/Board/Board'

export default function Home() {
  return (
    <div className={styles.container}>
      <Board />
    </div>
  )
}
