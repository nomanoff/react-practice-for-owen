import MainPage from "./pages/MainPage";
import { Provider } from 'react-redux';
import "./App.css";
import App_router from "./routes/App_router";
import { store } from './redux/store';
import DetailPage from "./pages/DetailPage";

function App() {
  return (
  <Provider store = {store}>
    <App_router></App_router>
  </Provider>
  );
}

export default App;
