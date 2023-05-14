import styles from '../src/styles/Linha.module.css'
import StylesTabuleiro from "./StylesTabuleiro";

export default function Linha(props){
return(
    <div className={styles.Linha}>
        <StylesTabuleiro preta ={props.preta} />
        <StylesTabuleiro preta ={!props.preta} />
        <StylesTabuleiro preta ={props.preta} />
        <StylesTabuleiro preta ={!props.preta} />
        <StylesTabuleiro preta ={props.preta} />
        <StylesTabuleiro preta ={!props.preta} />
        <StylesTabuleiro preta ={props.preta} />
        <StylesTabuleiro preta ={!props.preta} />

    </div>
)
}