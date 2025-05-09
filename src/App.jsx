import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/router";
import "./assets/styles/index.css";
import store from "./store";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </Provider>
);

export default App;