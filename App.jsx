import Header from "./components/Header";
import Student from "./components/Student";
import Eligibilty from "./components/Eligibilty";
import Placementstatus from "./components/Placementstatus";
import Companyoffer from "./components/Companyoffer";
import Skillprogress from "./components/Skillprogress";
import Footer from "./components/Footer";
function App()
{
  return(
    <div className="container">
      <Header/>
      <Student/>
      <Eligibilty/>
      <Placementstatus/>
      <Companyoffer/>
      <Skillprogress/>
      <Footer/>
    </div>
  );
}
export default App;
