import "./App.css";
import Noticia from "./components/Noticia";
import Navbar from "./components/Navbar";
import TextBlock from "./components/TextBlock";
import Form from "./components/Form";
import Lista from "./components/Lista";
import Cover from "./components/Cover";
import Grade from "./components/Grade";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover
        imgPath={
          "https://static.vecteezy.com/system/resources/previews/000/677/302/original/abstract-technology-banner-background.jpg"
        }
      />
      <div className="Content">
        <TextBlock
          titulo={"Redes de Computadores"}
          paragrafo={
            "Você já se perguntou como a internet funciona por trás dos panos? Quer mergulhar no fascinante universo das redes de computadores e desvendar os segredos por trás da comunicação digital? Então, o nosso Curso de Redes de Computadores é a sua porta de entrada para essa emocionante jornada tecnológica!"
          }
        />
        <Noticia
          imgPath={
            "https://www.napratica.org.br/wp-content/uploads/2020/11/cursos-online-com-certificado-696x464.jpg"
          }
          titulo={"Curso com maior aprovação no MEC"}
          subtitulo={
            "O curso de redes recebe a maior nota no MEC pela sua qualidade"
          }
          data={"12/12/24"}
        />
        <Lista />
        <Grade />
        <Noticia
          imgPath={"https://ber.adv.br/wp-content/uploads/2021/05/curso-geo-obras-1024x683.jpg"}
          titulo={"As inscrições do curso de redes vão até fevereiro!"}
          subtitulo={
            "Não perca a oportunidade de fazer o melhor curso da sua vida!"
          }
          data={"20/01/24"}
        />
        <TextBlock
          titulo={"Inscrições Abertas"}
          paragrafo={
            "Não perca a chance de se destacar no mundo da tecnologia! As inscrições para o Curso de Redes de Computadores estão abertas. Reserve o seu lugar agora e comece a trilhar o caminho para uma carreira de sucesso em redes de computadores."
          }
        />
        <Form />
      </div>
    </div>
  );
}

export default App;
