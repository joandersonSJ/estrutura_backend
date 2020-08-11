
# Back-end

### Iniciando

Requisitos: [Node.js](https://nodejs.org/en/download/)


Instale dependências do projeto.

``yarn``



Inicializa o projeto em modo de desenvolvimento.

``yarn dev``



Inicializa o projeto em modo de produção.

``yarn start``



Para quem não usa o editor de código vscode, o comando a seguir confere se o a sintaxe do código está escrito conforme a guia de estilo definida.

``yarn eslint
``



Caso você use o vscode siga esses passos:

- Instale a extensão [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no seu editor.

- Adicione ao seu arquivo **settings.json** o seguinte código para a funcionalidade de formatação automática sempre que salvarmos o arquivo ser habilitada:



```
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true
}
```


#



Banco de dados:

- Crie a ".env" semelhante à ".env.example" para ter acesso as variaveis de ambiente

- Tenha a certeza que existe um banco de dados com as informações que você definiu no arquivo ".env"

- Se estiver usando docker, use "docker-compose up -d", caso contrário coloque o usuário e senha que você tem no seu banco

- Acesse o terminal na raiz do projeto e rode o comando `yarn typeorm migration:run`

- Inicie o projeto com `yarn dev`
