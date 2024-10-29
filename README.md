# buzzvel-test

Test for front end developer to Buzzvel

# Soller - Aplicação React

## Descrição

Soller é uma aplicação desenvolvida em React que apresenta uma interface de usuário responsiva, incluindo uma barra de navegação customizada. A aplicação é construída utilizando `react-helmet` para gerenciamento de meta tags e `styled-components` para estilização de componentes, `former-motion` para animações.

## Componentes Parametrizados

Componentes como Navbar, MainSection, TextBigImage, ImageWithGrid, e Footer foram desenvolvidos de forma que qualquer texto, cor ou imagem do site pode ser modificada através de propriedades, trazendo facilidade para ajuste na paleta de cores, imagens e até mesmo estrututas

## Reutilização de Componentes

Componentes como o Balls, CallBtn e TextBigImage foram desenvolvidos para poderem ser utilizados em várias situações, podendo mudar as cores, imagens, textos posição dos textos e etc

## Responsividade

A aplicação contém responsividade para Large Desktops (1440px>) e para Smarthphones (480px<) (A responsividade pode não responder adequadamente ao inspecionar elemento, atualize as variaveis após mudar de dimensões)

## Funcionalidades Técnicas

Scroll Suave: Configuração de scroll animado e suave com Lenis para proporcionar uma experiência de rolagem intuitiva e imersiva.

SEO e Acessibilidade: Com Helmet, o title e as meta tags são gerenciados, garantindo otimização para mecanismos de busca e acessibilidade.

Flexibilidade Visual e Temática: O uso de componentes como Balls, que são elementos visuais independentes, e cores parametrizadas, permite temas visuais variados, alinhados com a identidade da marca.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Para gerenciar rotas e navegação.
- **Styled Components**: Para estilização de componentes React.
- **React Helmet**: Para gerenciamento de meta tags no cabeçalho.
- **Former Motion**: Para scroll capture e animações.

## Instalação

### Pré-requisitos

Certifique-se de que você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v20.11.1 ou superior)
- [npm](https://www.npmjs.com/) (v10.8.1 ou superior)

### Passos para instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/uRaelM/buzzvel-test
   cd Soller

   ```

2. Instale as dependências:

   ```bash
   npm install

   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```
