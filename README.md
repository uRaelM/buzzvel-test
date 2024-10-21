# buzzvel-test

Test for front end developer to Buzzvel

# Sollar - Aplicação React

## Descrição

Sollar é uma aplicação desenvolvida em React que apresenta uma interface de usuário responsiva, incluindo uma barra de navegação customizada. A aplicação é construída utilizando `react-helmet` para gerenciamento de meta tags e `styled-components` para estilização de componentes.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Para gerenciar rotas e navegação.
- **Styled Components**: Para estilização de componentes React.
- **React Helmet**: Para gerenciamento de meta tags no cabeçalho.

## Instalação

### Pré-requisitos

Certifique-se de que você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v20.11.1 ou superior)
- [npm](https://www.npmjs.com/) (v10.8.1 ou superior)

### Passos para instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/SEU_USUARIO/sollar.git
   cd sollar

   ```

2. Instale as dependências:

   ```bash
   npm install

   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

# Componentes

### Navbar

O componente Navbar é responsável pela barra de navegação da aplicação. Ele aceita as seguintes props:

    1. links: Um array de objetos que contém name e href para cada link na barra de navegação.
    2. logo: URL da imagem do logo.
    3. logoWidth: Largura do logo (padrão: 100px).
    4. logoHeight: Altura do logo (padrão: 50px).
    5. textColor: Cor do texto.
    6. backgroundColor: Cor de fundo da barra de navegação.
    7. numberTextColor: Cor do texto do número de telefone.
    8. callBtnColor: Cor do botão de chamada.
    9. callBtnHoverColor: Cor do botão de chamada ao passar o mouse.
