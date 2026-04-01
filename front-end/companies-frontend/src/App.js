import "./App.css";
import { CompanyProvider } from "./context/CompanyContext";
import Filters from "./components/Filters";
import CompanyList from "./components/CompanyList";
import companyIcon from './assets/office-building.png';

function App() {
  return (
    <CompanyProvider>
      <div className="app">
        <h1 className="title">
          <img src={companyIcon} alt="Company Icon"/>
          Companies Directory
        </h1>
        <Filters />
        <CompanyList />
      </div>
    </CompanyProvider>
  );
}

export default App;