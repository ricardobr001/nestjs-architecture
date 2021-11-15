## Descrição

Nesta etapa, iremos criar os arquivos necessários para recuperar a letra de uma música do serviço [Vagalume](https://www.vagalume.com.br/). Sendo assim iremos criar a camada de aplicação, domínio, infraestrutura e controller.

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

Para testar, tente chamar essa rota pelo insomnia, postman ou o próprio browser, você deverá ver uma frase `Hello World!`

## Próximo passo

Iremos adicionar o teste automatizado no nosso `SongService` para continuar troque a branch do projeto para a `03-adding-tests` com o comando abaixo, ou você pode navegar para a próxima branch clicando [aqui](https://github.com/ricardobr001/nestjs-architecture/tree/03-adding-tests).

```bash
$ git checkout 03-adding-tests
```
