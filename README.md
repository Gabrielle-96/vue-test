## Vue-Test 🧪 

Este projeto é um laboratório prático para explorar e aprender testes unitários em componentes Vue 3, utilizando TypeScript e Vitest.

Inclui exemplos reais de componentes interativos, como uma Lista de Tarefas e um Mini Quiz, com cobertura de testes e boas práticas.

## ✨ Tecnologias Utilizadas
 - Vue 3 — Framework progressivo para interfaces web
 - TypeScript — Tipagem estática para JavaScript
 - Vite — Bundler rápido para desenvolvimento moderno
 - Vitest — Testes unitários rápidos e integrados ao Vite
 - Pinia — Gerenciamento de estado para Vue
 - Vue Router — Roteamento SPA para Vue

## ✅ Requisitos e Instalação de pacotes

- Node.js 18+
- npm 9+

Para instalar as dependências utilize esse comando no terminal de sua preferência: 

```sh
npm install
```

## 🚀 Scripts

- `npm run dev` — Inicia o servidor de desenvolvimento Vite.
- `npm run build` — Gera a build de produção.
- `npm run preview` — Visualiza a build de produção localmente.
- `npm run test:unit` — Executa os testes unitários com Vitest.
- `npm run type-check` — Verifica os tipos TypeScript.
- `npm run lint` — Executa o ESLint para análise de código.
- `npm run format` — Formata o código com Prettier.

## 🗂️  Estrutura do Projeto

```
src/
  __tests__/      # Testes unitários com Vitest
  assets/         # Arquivos estáticos e CSS
  components/     # Componentes Vue (HomeView, ToDoList)
  router/         # Configuração do Vue Router
  App.vue         # Componente raiz
  main.ts         # Ponto de entrada da aplicação
```

🧩 Componentes
  - ToDoList — Lista de tarefas interativa, com testes cobrindo adição, remoção e marcação de tarefas.
  - MiniQuiz — Quiz de perguntas e respostas, com lógica de pontuação e testes de fluxo.

🕵️‍♀️ Testes

 - Testes escritos em TypeScript usando Vitest.
 - Cobertura de cenários positivos e negativos.
 - Exemplos de boas práticas para testes Vue.

Os testes unitários estão em `src/__tests__` e cobrem os principais componentes da aplicação.  

Execute todos os testes com:

```sh
npm run test:unit
```

## 🧹 Lint e Formatação

Padronize o código com:

```sh
npm run lint
npm run format
```

## 💡 Sugestões e Contribuições

Sinta-se à vontade para abrir issues ou pull requests com sugestões, dúvidas ou melhorias!

Se quiser adicionar mais exemplos de componentes ou cenários de teste, basta criar novos arquivos em 
`src/components` e `src/__tests__`.
