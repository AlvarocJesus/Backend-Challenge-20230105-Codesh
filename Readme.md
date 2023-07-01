# Codesh Backend Challenge 20230105

Este projeto é um teste prático para a candidatura na vaga de Desenvolvedor Back-End na Codesh para Teddy Open finance. Que visa dar suporte a nutricionistas para que possam de maneira rápida revisar informações nutricionais dos pacientes pelo aplicativo celular.

<p align="center">
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#Funcionalidades">Funcionalidades</a> •
 <a href="#Desenvolvimento">Desenvolvimento</a>
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[Node.JS](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[MockAPI](https://mockapi.io/)**
- **[Fetch](https://nodejs.org/dist/latest-v18.x/docs/api/globals.html#fetch)**
- **[DotEnv](https://github.com/motdotla/dotenv)**

## Funcionalidades

- [x] Listar todos os usuários com seus endereços e contatos
- [x] Listando um único usuário
- [x] Listando todos os endereços de um único usuário
- [x] Listando todos os contatos de um único usuário

## Variáveis de ambiente

Para o correto funcionamento do projeto, será preciso adicionar a seguinte variável de ambiente ao arquivo `.env` do projeto.

```.env
BASE_URL=https://62151ae9cdb9d09717adf48c.mockapi.io/api/v1
```

## Desenvolvimento

```bash
$ cd "diretório de sua preferencia"

# Para fazer o download do projeto rode o comando abaixo
$ git clone https://github.com/AlvarocJesus/Backend-Challenge-20230105-Codesh.git

# Acesse a pasta do projeto
$ cd Desafio_Tecnico_LinkApi

# Para instalar as dependências que serão usadas
$ npm i ou npm init

# Para fazer o projeto funcionar, rode o comando abaixo
$ npm run start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/api>
```

## Screen Shots

- Fluxograma do projeto

![Fluxograma](./doc/image/fluxograma.png)

- Listando todos os dados dos usuários

![Fluxograma](./doc/image/listAllUsers.png)

- Listando um único usuário

![Fluxograma](./doc/image/listOneUser.png)

- Listando todos os endereços de um único usuário

![Fluxograma](./doc/image/listUserAddress.png)

- Listando todos os contatos de um único usuário

![Fluxograma](./doc/image/listUserContact.png)

```This is a challenge by Coodesh```