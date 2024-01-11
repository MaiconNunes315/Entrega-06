# Projeto de API para Destinos de Agência de Viagem
## Descrição do Projeto

Este projeto consiste em uma API desenvolvida em C# que oferece operações CRUD (Create, Read, Update, Delete) para gerenciar destinos de uma agência de viagem. A API fornece endpoints para cada operação, permitindo que usuários realizem ações como adicionar novos destinos, visualizar informações existentes, atualizar dados e excluir destinos.

Além disso, para facilitar a interação com a API, foi desenvolvida uma interface de usuário utilizando React e Next.js. Essa interface permite que os usuários consumam a API de maneira intuitiva, realizando operações CRUD de forma fácil e eficiente.

## Funcionalidades da API

- **Listagem de Destinos:** Endpoint para obter a lista completa de destinos disponíveis.
- **Consulta de Destino por ID:** Endpoint para obter informações detalhadas de um destino específico com base no seu ID.
- **Adição de Novo Destino:** Endpoint para adicionar um novo destino à lista.
- **Atualização de Destino:** Endpoint para modificar as informações de um destino existente.
- **Remoção de Destino:** Endpoint para excluir um destino com base no seu ID.

## Tecnologias Utilizadas
### API (Backend)
- **C#:** Linguagem de programação utilizada para desenvolver a lógica da API.
- **ASP.NET Core:** Framework utilizado para a criação de APIs web em C#.
- **Entity Framework Core:** ORM (Object-Relational Mapping) para interagir com o banco de dados.
- **Swagger:** Ferramenta para documentação da API.

## Interface de Usuário (Frontend)
- **React:** Biblioteca JavaScript para a construção de interfaces de usuário.
- **Next.js:** Framework React para aplicativos web com funcionalidades adicionais.
- **Axios:** Biblioteca para realizar requisições HTTP.

## Como Utilizar

1. Clone o repositório para o seu ambiente local.

```bash
Copy code
git clone https://github.com/seu-usuario/seu-repositorio.git
```
Navegue para o diretório da API (backend) e execute o projeto C#.

```bash
cd backend
dotnet run
```
Navegue para o diretório da Interface de Usuário (frontend) e inicie a aplicação React.

```bash

cd frontend
npm install
npm start
```

Acesse a interface de usuário no navegador http://localhost:3000.

Explore e interaja com a API para gerenciar destinos de viagem.

Documentação da API
A documentação da API pode ser encontrada no Swagger, que estará disponível após iniciar a aplicação. Acesse a documentação em http://localhost:5000/swagger/index.html.

Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, sugerir melhorias ou enviar pull requests.