import { Route, Switch } from "react-router-dom";
import { Form } from "./Form";
import { Home } from "./Home";
import { Success } from "./Success";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/join" component={Form} />
      <Route exact path="/success" component={Success} />
    </Switch>
  );
};
