import '../styles/globals.css'
import { ApolloProvider } from "@apollo/client";
import {clientSpacex} from "../lib/apollo-client";

function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={clientSpacex}>
            <Component {...pageProps} />
        </ApolloProvider> 
}

export default MyApp
