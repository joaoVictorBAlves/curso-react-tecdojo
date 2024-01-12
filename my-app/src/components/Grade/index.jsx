import React from "react";

const Grade = () => {
  return (
    <div>
      <h3>Grade Curricular do Curso</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Carga Horária</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Introdução à Computação</td>
            <td>60 horas</td>
          </tr>
          <tr>
            <td>Estruturas de Dados</td>
            <td>80 horas</td>
          </tr>
          <tr>
            <td>Redes de Computadores</td>
            <td>70 horas</td>
          </tr>
          {/* Adicione mais disciplinas conforme necessário */}
        </tbody>
      </table>
    </div>
  );
};

export default Grade;
