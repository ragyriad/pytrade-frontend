import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";
import "./assets/styles/index.css";
import store from "./store";

const queryClient = new QueryClient();

const App = () => (
  console.log(import.meta.env),
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </Provider>
);

export default App;