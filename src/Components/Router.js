// eslint-disable-next-line
import react from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

const router = () => (
  <Router>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
);

export default router;
