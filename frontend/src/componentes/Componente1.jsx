import React from "react";

//function func1(){
// return <h1> PRIMEIRO COMPONENTE</h1>
//}
// export default func1

// export default () => <h1> Nosso componente Arrow</h1>

export default(props) =>
  <div>
      <h1>{props.valor} </h1>
      <h1>{props.soma} </h1>
  </div>




