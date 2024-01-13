import { useEffect } from "react";

function f1() {
  console.log("F1");
}
function f2() {
  console.log("F2");
}
function f3() {
  console.log("F3");
}

const Componente = ({ estado }) => {
  f3();

  useEffect(() => {
    f1();
  }, []);

  useEffect(() => {
    f2();
  }, [estado]);

  return (
    <>
      <h1>Componente</h1>
      <p>{estado ? "Verdadeiro" : "Falso"}</p>
    </>
  );
};

export default Componente;
