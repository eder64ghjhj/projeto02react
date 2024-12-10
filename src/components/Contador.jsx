import { useState } from "react";
//Gerenciador de Estado, React  Hooks


function Contador(){

    const[ contador, setContador] = useState(0);

    //aero function, funcao anonima, vai chamar ela pela própria constante
    const incrementar = () => {
        setContador(contador + 1);
    }
    const decrementar = () => {
        setContador(contador - 1);
    }
    
    return(
        <>
        <h2>Contador</h2>
        <p>Valor: {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>

        </>
    )

}

export default Contador