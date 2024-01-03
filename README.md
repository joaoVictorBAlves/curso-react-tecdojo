# Aula 03 - Criando um projeto em React

> Olá, seja bem vindo a mais uma aula do curso de React aqui da Tec Dojo

E com o nosso ambiente de desenvolvimento pronto, hoje vamos aprender a criar nossos projetos em React, além disso nessa aula eu pretendo te explicar a estrutura de um projeto react, o que a uma primeira vista pode parecer complexo, mas você vai entender que não é tão complicado assim.
> 

# Criando um projeto em React

1. Escolher um local nos arquivos do seu computador pra começar seu projeto
1. Tendo um local escolhido, abra o seu prompt de comando ou qualquer outro aplicativo de terminal de linha de comando
1. Digite o comando

```bash
npx create-react-app nome_do_projeto
```

E pronto, o seu projeto vai começar a ser criado;

# Entendendo um projeto React

### Uau que projeto grande?

![image](https://github.com/joaoVictorBAlves/curso-react-tecdojo/assets/86852231/81eebf23-af00-4b3f-8901-af9108c5349b)

Após limpar todos os arquivos desnecessários fica bem menor, não é, agora fica mais fácil entender o que cada arquivo e pasta representa para um projeto em React.

![image](https://github.com/joaoVictorBAlves/curso-react-tecdojo/assets/86852231/5a1c3de9-55c8-4a15-a6d3-07a8ed5f3d34)

## O que é cada coisa?

1. package.json - Define metadados que descrevem o projeto
1. package-look.json - Define metadados que definem as dependências de bilbiotecas
1. .gitignore - Define quais arquivos e pastas devem ser ignorados pelo git quando for subir o projeto para um repositório como o github ou gitlab
1. /node_module - Armazena os arquivs de cada bilbioteca instalada no projeto
1. /public - Define arquivos públicos do projeto, normalmente utilizado para colocar imagens, fontes e arquivos de uso global;
1. /src - Onde ficam todos os arquivos relacionados aos componentes React. Nele podemos organizar nossos componentes bem como seus estilos;
1. index.html - Página básica que possui uma div com a classe “root”
1. index.js - Define a div root do index como uma um objeto raiz do ReactDOM, ou seja, define que é na div root onde toda a aplicação será renderizada;
1. App.js - Define o componente App que é renderizado na root;

## Resultado?

![image](https://github.com/joaoVictorBAlves/curso-react-tecdojo/assets/86852231/55cfb118-8ac6-4f53-ab1d-1093e530c3e6)
