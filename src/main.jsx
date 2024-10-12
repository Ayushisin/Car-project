import React from 'react';
 import App from './App'

 import { createRoot } from 'react-dom/client';
createRoot(document.getElementById("root")).render(<App/>)


// import note:- 1st start the json-server code on this project terminal (json-server --watch backend/db.json --port=4500)