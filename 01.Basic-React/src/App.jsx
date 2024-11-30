import { createRoot } from "react-dom/client"
import { createElement } from "react";

function MainContent(){
  return(
    <h1>React Is Great.</h1>
  )
}

function createH1Element() {
  const h1 = document.createElement("h1");
  h1.className = "header";
  h1.textContent = "Hey";
  return h1;
}


let h1Element = createH1Element();
// h1Element.textContent = "Hey";//cannot modify virtual elemet like this need status and components 
// h1Element.classList.add = "header";
document.body.appendChild(h1Element);  

const root = createRoot(document.getElementById('root'));
root.render(
  <>
  <MainContent/>
  <CreateVirtualH1Element/>
  </>
)

function CreateVirtualH1Element() {
  // Create the virtual React element
  return createElement("h1", { className: "header" }, "Hey");
}
