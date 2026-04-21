import { Route, Switch } from "wouter";
import Index from "./pages/index";
import HylandHelper from "./pages/hyland-helper";
import { Provider } from "./components/provider";

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/hyland-helper" component={HylandHelper} />
      </Switch>
    </Provider>
  );
}

export default App;