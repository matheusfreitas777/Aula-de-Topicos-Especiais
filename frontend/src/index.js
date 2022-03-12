import React from "react";
import ReactDom from "react-dom";
//import Component1 from './componentes/Componente1'
//import { CompA, CompB as B} from "./componentes/DoisComponentes";
//import MultiElementos from "./componentes/MultiElementos";
//import {Teste1, Teste2, Teste3 } from "./componentes"
import Familia from "./componentes/Familia";
import Nome from "./componentes/Nome";
import ComponenteComFuncao from "./componentes/ComponenteComFuncao";


const element = document.getElementById('root')

ReactDom.render(
    <div>
        {/*<Component valor="Olá pessoal "soma={3+4}/>*/}
        {/* <CompA valor = Primeiro componente "/> */}
        {/* <B valor = Segundo componente "/> */}
        {/* <Teste1"/>
        <Teste2/>
        <Teste3/>*/}
        {/*<FamiliaGomes/>*/}
        <Familia sobrenome="Silva" endereco= "Rua Tal " numero= "n° 111 " cidade="Franca" estado="SP">
        
            <Nome nome="João" />
            <Nome nome="Alexandre"/>
            <Nome nome="Sergio"/>
        </Familia>
        {/* <Familia>
          <Nome nome="Joyce" sobrenome="Silva"/>
          <Nome nome="Josimara" sobrenome="Silva"/>
          <Nome nome="Janaina" sobrenome="Silva"/>
        </Familia>
        <FamiliaGomes sobrenome="Gomes"/> */}
     </div> 
    , element
    )