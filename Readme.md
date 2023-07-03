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

- [x] Importar dados dos arquivos apos buscar ele no endpoint
- [x] Exibir status do sistema
- [x] Exibir detalhes de um produto
- [x] Atualizar dados de um produto
- [x] Mudar status do produto para ``trash``
- [x] Exibir todos os produtos

## Variáveis de ambiente

Para o correto funcionamento do projeto, será preciso adicionar a seguinte variável de ambiente ao arquivo `.env` do projeto.

```.env
DB_USER=ooteualy
DB_HOST=postgres://ooteualy:opo5-JqpS2LtUu5M5HSLXCLf3Qv1TZEG@silly.db.elephantsql.com/ooteualy
DB_PASSWORD=opo5-JqpS2LtUu5M5HSLXCLf3Qv1TZEG
DB_DATABASE=ooteualy
DB_PORT=5432
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

# Para fazer o build do projeto funcionar, rode o comando abaixo
$ npm run start:build

# Para fazer o projeto funcionar, rode o comando abaixo
$ npm run start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000/api>
```

## Vídeo apresentação do desafio e código
[![Watch the video](image.png)](https://www.loom.com/share/9095fb1c7e7b404c9d8b42dc5411ee0a)

```This is a challenge by Coodesh```