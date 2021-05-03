import React from "react";
import FormHeader from "./FormHeader";
import Form1 from "./Form1";
import Form2 from "./Form2";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <div className="form-center">
        <FormHeader />
        <Switch>
          <Route exact path="/design">
            <Form1 />
          </Route>
          <Route exact path="/assign">
            <Form2 />
          </Route>
        </Switch>
        {/* <Form1 /> */}
        {/* <Form2 /> */}
      </div>
    </main>
  );
}

export default App;
