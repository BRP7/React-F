import { createRoot } from "react-dom/client"

function MainContent(){
  return(
    <h1>React Is Great.</h1>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(
  <MainContent/>
)

