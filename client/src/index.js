import React from "react";
import ReactDOM from "react-dom";
import "./Style/index.css";
import {createStore} from "redux"
import {Provider} from "react-redux"
import App from "./Components/App";
import reducer from "./Store/reducer"

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
