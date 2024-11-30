import Page from './Components/Page.jsx'

function App(){
  return(
    <>      
    <img src='/vite.svg' />
    {/* <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png' /> */}
    <div className="main">
    <div className="background">
      {/* <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png' /> */}
      <img src='/vite.svg' />
    </div>
    <div className="history">
    <h1>History of React</h1>
      <p><strong>2013:</strong> React was created by <em>Jordan Walke</em> at Facebook and was initially released as an open-source library.</p>
      <p><strong>2015:</strong> React was released with <strong>React Native</strong>, allowing developers to build mobile applications for iOS and Android using the same codebase.</p>
      <p><strong>2016:</strong> React introduced the <strong>React Fiber</strong> architecture, improving the rendering process for better performance and updates.</p>
      <p><strong>2018:</strong> React launched <strong>React Hooks</strong>, allowing function components to manage state and side effects without needing class components.</p>
      <p><strong>2020:</strong> React 17 was released with a focus on making it easier for developers to upgrade and implement future updates without breaking the code.</p>
    </div>
    </div>
    <Page/>
    </>
  )
}

export default App
