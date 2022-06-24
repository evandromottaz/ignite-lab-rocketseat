<h1 align="center">ClassTube</h1>
<p>Projeto criado no evento Ignite-lab da Rocketseat<p>

<p>Em construção...</p>

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
---

<h2>Extensões instaladas</h2>
Tailwind
- PostCSS
- GraphQL

---

<h2>Estrutura de pastas</h2>

    /src
    	/components
    		Header.tsx
    		Lesson.tsx
    		Logo.tsx
    		Sidebar.tsx
    		Video.tsx
    	/lib
    		apollo.ts
    	/pages
    		Event.tsx
    	/styles
    		global.css

<h2>Sites úteis</h2>

Tranformar svg em component: https://svg2jsx.com/

<h2>Docs</h2>

- Phosphor - [https://phosphoricons.com/](https://github.com/phosphor-icons/phosphor-home#phosphor-icons)

- graphCMS - https://app.graphcms.com/

- Apollo - https://www.apollographql.com/docs/react/data/queries

- Date-fns - https://date-fns.org/v2.28.0/docs/format


aula 3

aspect-video - 16/9 screen
React Youtube
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
- responsive
- Criar componente de botão [x]
- Redirecionar o usuário para a primeira aula se não tiver o slug
- Criar componente de loading

Conquistas
- Typescript
consegui criar um tipo que aceita object literals.
https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures

Resolvido children props https://stackoverflow.com/questions/71788254/react-18-typescript-children-fc