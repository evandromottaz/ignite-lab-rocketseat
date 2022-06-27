import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { MenuContext } from "./global/MenuContext"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {
	return (
		<ApolloProvider client={client}>
			<MenuContext>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</MenuContext>
		</ApolloProvider>
	)
}

export default App
