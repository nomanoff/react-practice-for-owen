import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./routes/App_router";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
