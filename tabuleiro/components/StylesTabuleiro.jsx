import styles from "../src/styles/StylesTabuleiro.module.css"

export default function StylesTabuleiro(props){
    return(
    <div
    style={{backgroundColor: props.preta ? "#000":"#fff"}}
    className={styles.subdivisao}></div>
    )

}