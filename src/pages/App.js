import '../style/App.css';
import AboutFront from '../components /AboutFront';
import Team from '../components /Team'
import {Helmet} from "react-helmet";
import logo from '../images/logo.png'
import Problem from '../components /Problem'
import Solution from '../components /Solution'
import BlobEffect from '../components /BlobEffect'
import '../style/Blob.css'


function App() {
  return (
  
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>E-Telligence Capstone</title>
                <link rel="icon" type="image/png" href={logo} sizes="16x16" />
      </Helmet>
      <AboutFront/>
      <Team/>
      <Problem/>
      <Solution/>
    </div>
  );
}

export default App;