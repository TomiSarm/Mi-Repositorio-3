import styles from "./itemListContainer.module.css"

const ItemListContainer = ({ saludo }) => {
  return (
    <main>
        <h1 className={styles.Titulo}>{saludo}</h1>
    </main>
  )
}

export default ItemListContainer 