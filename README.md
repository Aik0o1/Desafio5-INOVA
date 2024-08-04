# Projeto de Site de Pontos Turísticos

Bem-vindo ao projeto de desenvolvimento de um site para pontos turísticos das cidades do Maranhão! Este README fornece informações sobre o projeto, instruções de instalação e uso, e detalhes sobre as principais funcionalidades implementadas.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Configuração do Ambiente](#configuração-do-ambiente)

## Visão Geral

Este projeto consiste em um site para exibir pontos turísticos das cidades do Maranhão. O site possui as seguintes características:

- **Mapas Interativos**: Integra a API do Google Maps para exibir mapas das cidades na homepage.
- **Formulário de Cadastro**: Permite aos usuários se cadastrarem e enviar dados para um banco de dados MongoDB usando React Hook Form e Zod.

## Funcionalidades

- **Página Inicial**: Exibe um mapa interativo de cada cidade e informações sobre pontos turísticos.
- **Formulário de Cadastro**: Coleta informações dos usuários e envia para o banco de dados MongoDB com validação usando Zod.

## Tecnologias Utilizadas

- **Frontend**: React, shadcn/ui, tailwindcss
- **Backend**: MongoDB, Node.js
- **Mapas**: API do Google Maps

## Configuração a API


1. **Clone o repositório:**

```bash
git clone git@github.com:Aik0o1/Desafio5-INOVA.git
cd api
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

    Crie um arquivo`.env` na raiz do diretório API e adicione suas credenciais da API do mongoDB.

```bash
DB_CONNECTION_STRING=<SUA_URI_MONGODB>
```

   **4. Inicie o servidor de desenvolvimento:**

    npm start

# Configurando o Front

```bash
cd front
```

1. **Instale as dependências:**

   ```bash
   npm install
   ```
2. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` na raiz do diretório front e adicione suas credenciais da API do google maps.

   ```bash
   REACT_APP_GOOGLE_MAPS_API_KEY=<SUA_URI_MAPS>
   ```
3. **Inicie o servidor**

   ```bash
   npm run dev
   ```
