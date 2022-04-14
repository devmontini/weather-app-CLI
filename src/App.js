import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="bg-black w-screen h-screen text-slate-300">
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
