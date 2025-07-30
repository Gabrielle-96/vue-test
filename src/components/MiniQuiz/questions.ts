export interface Question {
 question: string
 alternatives: string[]
 answer: number
}

export const questions: Question[] = [
 {
  question: 'Qual extensão de arquivo é usada para componentes de página no Vue?',
  alternatives: ['.vue', '.js', '.html', '.ts'],
  answer: 0
 },
 {
  question: 'Qual destes métodos é usado para reagir a eventos no Vue?',
  alternatives: ['@click', 'v-on:click', 'onClick', 'Todos os anteriores'],
  answer: 3
 },
 {
  question: 'Qual diretiva do Vue é usada para condicionalmente renderizar elementos?',
  alternatives: ['v-if', 'v-show', 'v-for', 'v-bind'],
  answer: 0
 },
 {
  question: 'Qual destes é um framework CSS popular usado com Vue?',
  alternatives: ['Bootstrap', 'Tailwind CSS', 'Bulma', 'Todos os anteriores'],
  answer: 3
 },
 {
  question: 'Qual comando cria um novo projeto Vue usando o Vue CLI?',
  alternatives: [
   'vue create my-project',
   'npm init vue@latest',
   'vue new my-project',
   'npm create vue-app my-project'
  ],
  answer: 0
 },
 {
  question: 'Qual diretiva do Vue é usada para vincular atributos HTML?',
  alternatives: ['v-bind', 'v-model', 'v-on', 'v-if'],
  answer: 0
 },
 {
  question: 'Qual destes é um gerenciador de estado popular usado com Vue?',
  alternatives: ['Vuex', 'Redux', 'MobX', 'Todos os anteriores'],
  answer: 0
 },
 {
  question: 'Qual diretiva do Vue é usada para manipular classes CSS dinamicamente?',
  alternatives: ['v-class', 'v-bind:class', 'v-on:class', 'v-style'],
  answer: 1
 },
 {
  question: 'Quem criou o Vue.js?',
  alternatives: ['Evan You', 'Dan Abramov', 'Jordan Walke', 'Guido van Rossum'],
  answer: 0
 },
 {
  question: 'Qual diretiva do Vue é usada para renderizar listas?',
  alternatives: ['v-if', 'v-for', 'v-model', 'v-bind'],
  answer: 1
 },
 {
  question: 'Qual arquivo é usado para tipar variáveis em TypeScript?',
  alternatives: ['.js', '.ts', '.json', '.css'],
  answer: 1
 },
 {
  question: 'Qual destes é um recurso do Vue 3?',
  alternatives: ['Composition API', 'Options API', 'Teleport', 'Todos os anteriores'],
  answer: 3
 },
 {
  question: 'Qual diretiva do Vue é usada para vincular eventos?',
  alternatives: ['v-on', 'v-bind', 'v-model', 'v-if'],
  answer: 0
 },
 {
  question: 'Qual destes é um método de ciclo de vida do Vue?',
  alternatives: ['created', 'mounted', 'updated', 'Todos os anteriores'],
  answer: 3
 },
 {
  question: 'Como se chama o sistema de reatividade do Vue 3?',
  alternatives: ['Hooks', 'Refs', 'Reactivity API', 'Context'],
  answer: 2
 },
 {
  question: 'Qual diretiva do Vue é usada para mostrar ou esconder elementos?',
  alternatives: ['v-for', 'v-if', 'v-model', 'v-show'],
  answer: 1
 },
 {
  question: 'Qual palavra-chave define um tipo em TypeScript?',
  alternatives: ['type', 'interface', 'class', 'enum'],
  answer: 0
 },
 {
  question: 'Como você exporta uma função em TypeScript?',
  alternatives: [
   'export function minhaFuncao() {}',
   'function export minhaFuncao() {}',
   'export: function minhaFuncao() {}',
   'minhaFuncao export() {}'
  ],
  answer: 0
 },
 {
  question: 'Qual diretiva do Vue é usada para vincular dados bidirecionalmente?',
  alternatives: ['v-bind', 'v-on', 'v-model', 'v-if'],
  answer: 2
 },
 {
  question: 'Qual destes é um método de ciclo de vida do Vue 2?',
  alternatives: ['beforeCreate', 'created', 'mounted', 'Todos os anteriores'],
  answer: 3
 },
 {
  question: 'Qual diretiva do Vue é usada para renderizar conteúdo condicionalmente?',
  alternatives: ['v-if', 'v-show', 'v-for', 'v-bind'],
  answer: 0
 },
 {
  question: 'Qual destes é um framework de testes popular para Vue?',
  alternatives: ['Jest', 'Mocha', 'Cypress', 'Todos os anteriores'],
  answer: 3
 },
 {
  question: 'Qual diretiva do Vue é usada para vincular atributos HTML dinamicamente?',
  alternatives: ['v-bind', 'v-model', 'v-on', 'v-if'],
  answer: 0
 },
 {
  question: 'Qual destes é um plugin popular para Vue?',
  alternatives: ['Vue Router', 'Vuex', 'Axios', 'Todos os anteriores'],
  answer: 3
 },
 {
  question: 'Qual comando instala o Vue CLI?',
  alternatives: [
   'npm install -g vue',
   'npm install -g @vue/cli',
   'npm install vue-cli',
   'npm install vuejs'
  ],
  answer: 1
 },
 {
  question: 'Qual sintaxe é usada para interpolação de variáveis no template do Vue?',
  alternatives: ['{{ variable }}', '[[ variable ]]', '( variable )', '<% variable %>'],
  answer: 0
 },
 {
  question: 'Qual destes NÃO é um tipo primitivo do TypeScript?',
  alternatives: ['string', 'number', 'boolean', 'object'],
  answer: 3
 }
]
