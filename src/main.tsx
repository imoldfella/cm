import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
import { EditorView, basicSetup } from "codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { oneDark } from "./theme/one-dark"

let editor = new EditorView({
  extensions: [basicSetup,
    oneDark,
    javascript()],
  parent: document.body
})