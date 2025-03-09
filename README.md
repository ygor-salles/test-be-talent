# Projeto Vite + React + TypeScript

Este é um projeto desenvolvido com [Vite](https://vitejs.dev/) utilizando React e TypeScript.  
Ele conta com um servidor JSON (`json-server`) para popular a tabela de dados.

## 📌 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [pnpm](https://pnpm.io/) (caso não tenha, instale com `npm install -g pnpm`)

## 🚀 Como rodar o projeto

### 1️⃣ Instale as dependências

```sh
pnpm install
```

### 2️⃣ Inicie o servidor JSON

O projeto utiliza o `json-server` para simular uma API local.  
Antes de rodar a aplicação, inicie o servidor com o comando:

```sh
pnpm db
```

Isso iniciará o `json-server`, que servirá os dados para a aplicação.

### 3️⃣ Rode a aplicação

Após iniciar o servidor JSON, execute o comando abaixo para iniciar o ambiente de desenvolvimento:

```sh
pnpm dev
```

A aplicação será aberta em: [http://localhost:5173](http://localhost:5173)

## 📦 Scripts disponíveis

- `pnpm install` – Instala as dependências do projeto
- `pnpm db` – Inicia o `json-server` para fornecer dados à aplicação
- `pnpm dev` – Inicia o servidor de desenvolvimento do Vite
- `pnpm build` – Gera a versão final para produção
- `pnpm preview` – Visualiza o build da aplicação

## 📄 Licença

Este projeto está sob a licença MIT.
