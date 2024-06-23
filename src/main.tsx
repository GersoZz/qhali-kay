import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@aws-amplify/ui-react/styles.css";
/* import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);
 */

import { Amplify } from 'aws-amplify';
/* import { generateClient } from 'aws-amplify/api';
 */import config from './amplifyconfiguration.json';
Amplify.configure(config);

/* const client = generateClient(); */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
