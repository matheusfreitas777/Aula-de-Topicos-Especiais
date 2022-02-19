import React from "react";
import ReactDom from "react-dom";
import Component1 from './componentes/Componente1'

const element = document.getElementById('root')

ReactDom.render(
    <div>
        <Component1/>
    </div>
,element
)