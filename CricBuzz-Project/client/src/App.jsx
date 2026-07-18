import React from "react";
import AppRoute from "./routes/AppRoute";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/queryClient";
import { store } from "./lib/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AppRoute />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
