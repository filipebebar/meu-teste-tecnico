## Description

Aplicação implementada e voltada para o desafio técnico

A aplicação foi pensada para rodar em docker, no qual a aplicação api e banco estão dentro do mesmo container e já em comunicação.

Os passos para rodar a aplicação estão abaixo.


## Installation and run locally

```bash
$ yarn install

$ yarn dev
```

## Running the app

```bash
# development
$ docker compose up -d
```
Acesse a aplicação: [Link de acesso após subir docker](http://127.0.0.1:3000/doc)

## Test

```bash
# unit tests
$ yarn run test

# test coverage
$ yarn run test:cov
```

Houve problemas ao ajustar os  teste do controller, no qual algum motivo sobre caminho dos arquivos não estava sendo encontrado, mesmo estando correto.
