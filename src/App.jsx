import reactLogo from './assets/react.svg'
import gitlabLogo from './assets/gitlab.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://gitlab.com" target="_blank">
          <img src={gitlabLogo} className="logo" alt="GitLab logo" />
        </a>
      </div>
      <h1>Learn GitLab CI/CD</h1>
      <div className="card">
        <h2>Welcome to the GitLab CI/CD world.</h2>
        <p>
          Dive into the world of continuous integration and continuous delivery (CI/CD) by deploying this simple app with GitLab.
        </p>
        <p>
          Hint: Edit <code>src/App.jsx</code> to make changes to this page.
        </p>
      </div>
      <p className="read-the-docs">
        Application version: 1
      </p>
    </>
  )
}

export default App
