<h1 align="center">ClassTube</h1>
<p>Projeto criado no evento Ignite-lab da Rocketseat, porém com muitas modificações e features implementadas.<p>

<h2>Instalação</h2>
Clone o repositório utilizando o terminal
	
	git clone https://github.com/evandromottaz/ignite-lab-rocketseat.git

Entre na pasta e rode o comando

	npm install

---

<h2>Tecnologias usadas</h2>

&#9881; Vite

	npm create vite@latest

&#127912; Tailwind

	npm i tailwindcss postcss autoprefixer -D
	npx tailwindcss init -p
	
&#128452; Apollo GraphQL

	npm i @apollo/client graphql

&#9989; Phosphor

	npm i phosphor-react

&#128197; Date-fns

	npm i date-fns

🖌️ Classnames

	npm i classnames

	ex de uso:
	className={
		classNames('text-blue-200 text-sm', {'text-bold': isBold})
	}

🗺️ REACT ROUTER

	npm i react-router-dom

🎦 Vime

	npm i @vime/core

---

<h2>Extensões instaladas</h2>
Tailwind
- PostCSS
- GraphQL

---

<h2>Estrutura de pastas</h2>

    /src
		/assets
		...
    	/components
    		....
		/global
			MenuContext.tsx
    	/lib
    		apollo.ts
    	/pages
    		Event.tsx
			Home.tsx
    	/styles
    		global.css
		App.tsx
		main.tsx
		Router.tsx

<h2>Sites úteis</h2>

Tranformar svg em component: https://svg2jsx.com/

<h2>Docs</h2>

- Phosphor - [https://phosphoricons.com/](https://github.com/phosphor-icons/phosphor-home#phosphor-icons)

- graphCMS - https://app.graphcms.com/

- Apollo - https://www.apollographql.com/docs/react/data/queries

- Date-fns - https://date-fns.org/v2.28.0/docs/format

---

<h2>Conceitos aprendidos em aula</h2>

aula 3

aspect-video - 16/9 screen

react-router-dom

	BrowserRouter
		App
	BrowserRouter

- Router.tsx
	Routes
		Route path="/:id" element={Component}
	Routes

- Component


Tailwind
agrupar elementos para ter o efeito hover.
	elemento pai className="group"
		filho className="group-hover:text-green-100"


Desafios
- Responsive [x]
- Criar componente de botão [x]
- Redirecionar o usuário para a primeira aula na página de event [x]
- Criar componente de loading [x]
- Home toda desk e mobile [x]
- Menu mobile com useContext [x]

Problemas resolvidos
- Typescript
consegui criar um tipo que aceita object literals.
https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

Children props https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc
useContext props;
Permissão de busca de aulas no graphCMS;


Aula 4
<h3 id=mutation>GraphCMS Mutation</h3>

	API Playground
		Add new [Mutation] click "+"

		ex:
		mutation CreateSubscriber($name: String!, $email: String!) {
			createSubscriber(data: {name: $name, email: $email}) {
				id
			}
		}

	Home.tsx
		handleSubmit {
			createSubscriber({
				variables: {
					name,
					email
				}
			})
		}

	

Para fazer método POST no graphCMS, é recomendado criar um token
Criar o token:

	Project Settings
		Public Content API
			Create Token

Para não permitir que o front crie novos campos da tabela

	Management API
		No i'll configure....

Permite a leitura de todos os dados

	Content API
		Yes..

Criar cadastros na subscriber

	+ Create Permission
		Model Subscriber
			[x] Create

Pegar o token criado

	Value
		inserir no appolo.ts

Criar variáveis de ambiente
crie um arquivo .env.local na raiz com nome

	VITE_QUALQUER_COISA

para importar

	import.meta.env.QUALQUERCOISA

useMutation retorna um array

	[posição1: função, posição2: data]

Para usar <a href=#mutation>mutations</a>

Code error:

	403:
		Erro acontece porque a função createSubscriber está apenas criando em rascunho e por isso, não tem permissão de receber o data (id)

		Para resolver, precisar uma nova permissão de leitura:
			Project Settings
				Edite o projeto criado em "Permanent Auth Tokens"
				Create Permission
					Model Subscriber
					[x] Read
						Stages Draft (rascunho)

- Typescript
props de evento de formulário

	FormEvent