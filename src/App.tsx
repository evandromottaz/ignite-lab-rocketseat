import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { GlobalContext } from "./global/GlobalContext"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {
	return (
		<ApolloProvider client={client}>
			<GlobalContext>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</GlobalContext>
		</ApolloProvider>
	)
}

export default App
