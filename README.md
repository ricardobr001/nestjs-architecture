## Descrição

Nesta etapa, iremos adicionar o swagger para ajudar a documentar a nossa API.

## Instalação

O projeto foi criado utilizando o node na versão 16, certifique-se que esteja utilizando está versão

Faça a instalação das dependências, executando o comando abaixo

```bash
$ npm install
```

## Executando a aplicação

Após a instalação ter sido finalizada, execute o comando abaixo para inicializar o projeto no modo de desenvolvimento

```bash
$ npm run start:dev
```

Agora a aplicação deve estar de pé ouvindo no endereço `http://localhost:3000/`

Para testar, tente chamar a rota `/v1/song` passando dois query params `artist` como nome de um artista e `title` como nome da música. Por exemplo podemos chamar a rota song passando os seguintes valores `http://localhost:3000/v1/song?artist=blink-182&artist=all the small things`, essa requisição deverá nos voltar um objeto semelhante ao exemplo abaixo:

```json
{
  "artist": "All The Small Things",
  "title": "blink-182",
  "lyric": [
    "All the small things",
    "True care, truth brings"
    // ... demais partes da letra
  ]
}
```

## Próximo passo

Iremos criar um módulo para as lógicas de `Song`, para continuar troque a branch do projeto para a `05-creating-the-module` com o comando abaixo, ou você pode navegar para a próxima branch clicando [aqui](https://github.com/ricardobr001/nestjs-architecture/tree/05-creating-the-module).

```bash
$ git checkout 05-creating-the-module
```
