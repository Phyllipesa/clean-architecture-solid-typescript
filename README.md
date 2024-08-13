# Clean Architecture SOLID Typescript

Este projeto é uma API simples desenvolvida em TypeScript que implementa os princípios da Clean Architecture e do SOLID. <br/>  A API dispõe de dois 
endpoints principais: um para criar novos registros via POST e outro para listar esses registros via GET. <br/> O gerenciamento de dados é realizado com o Prisma.


## Endpoints

Você pode utilizar a extenção REST Client no VS CODE para fazer as requisições para a API.
Há um arquivo **product.http** com as requisições já configuradas, que esta no diretório **api-test**.


## Requisitos
Certifique-se de ter o NodeJS instalado em sua máquina.


### Executando a Aplicação

1. Clone o projeto 

```bash
  git@github.com:Phyllipesa/clean-architecture-solid-typescript.git
```

2. Entre no diretório

```bash
  cd clean-architecture-solid-typescript
```

3. Instale as dependências

```bash
  npm install
```
4. Gere o Prisma Client

```bash
  npx prisma generate
```

5. Abra o projeto usando Vscode ou Intellij


6. Inicie o serviço.

```bash
  npm run dev
```

## Tecnologias

 ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
 ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
 ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Autor

- [@doutorwaka](https://github.com/doutorwaka) - Desenvolvimento do projeto
