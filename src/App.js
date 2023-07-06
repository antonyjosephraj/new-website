// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MainCaption from './components/MainCaption';
import AIScriptWriter from './components/AIScriptWriter';
import RecordingAndProduction from './components/RecordingAndProduction';

// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
// import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {

  return (
    <div className="ai-website">
      <Header />
      <Home />
      <MainCaption />
		 <AIScriptWriter />
		{/* <RecordingAndProduction />  */}
      
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


