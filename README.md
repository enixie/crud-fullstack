# Sistema CRUD de Usuários

Este repositório contém um sistema CRUD básico para gerenciar usuários, utilizando React para o frontend e Node.js com Express e MySQL para o backend. Abaixo, serão discutidos alguns pontos principais do código e seu aprendizado associado.

## Frontend (React)
O frontend é construído utilizando React, com componentes organizados em arquivos separados para modularidade e reutilização. Aqui estão alguns aspectos destacados:

### Componente Formulário (Form.js)
O componente `Form` utiliza styled-components para estilização e useRef para referenciar elementos do DOM. Isso facilita a construção de formulários dinâmicos e responsivos.

### Componente Principal (App.js)
O componente `App` gerencia o estado dos usuários e implementa funcionalidades CRUD básicas. Ele utiliza axios para fazer requisições HTTP ao backend, useEffect para carregar os usuários ao montar o componente e toastify para notificações.

### Componente de Tabela (Grid.js)
O componente `Grid` exibe os usuários em uma tabela responsiva, utilizando styled-components para estilização e ícones do react-icons. Ele permite a exclusão de usuários através de um ícone de lixeira.

## Backend (Node.js e Express)
O backend é construído com Node.js e Express, utilizando MySQL como banco de dados. Aqui estão os principais pontos:

### Configuração do Banco de Dados (db.js)
O arquivo `db.js` configura a conexão com o MySQL, definindo o host, usuário, senha e banco de dados a serem utilizados.

### Rotas de Usuários (users.js)
O arquivo `users.js` define as rotas para manipulação de usuários, implementando a rota GET para obter todos os usuários do banco de dados.

### Servidor Principal (index.js)
O arquivo `index.js` configura o servidor Express, definindo middlewares para tratar JSON e CORS, além de definir a rota principal para as operações de CRUD.

## Aprendizado Obtido
- Integração entre frontend e backend usando React e Node.js.
- Uso de styled-components para estilização CSS-in-JS, promovendo componentes visualmente coesos e reutilizáveis.
- Manipulação de estado e efeitos no React usando useState e useEffect.
- Comunicação HTTP assíncrona com axios para realizar operações CRUD.
- Configuração de um servidor Express para servir APIs RESTful.
- Conexão e operações básicas com um banco de dados MySQL.

Este projeto exemplifica a construção de uma aplicação full-stack simples, demonstrando boas práticas de desenvolvimento, como modularidade, reutilização de componentes e separação de responsabilidades entre frontend e backend.
