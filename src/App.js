import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Router from './routes/router';
import './App.css';
import Snowfall from 'react-snowfall';
import { isMobile } from "react-device-detect";

function App() {
  return (
    <>
      {
        !isMobile && <Snowfall
          radius={[1, 4]}
        />
      }
      <Router />
    </>
  );
}

export default App;
