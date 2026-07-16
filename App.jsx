
function App()
{
  return (
    <div>
      <h1>Welcome to MERN STACK Development</h1>
      <p>radhika 17</p>
    </div>
  );
}
export default App


function App()
{
  const emp = "radha";
  const dept = "IT";
  const sal = 50000;
  return(
    <div>
      <h1>Employee Details</h1>
      <p>Name : {emp}</p>
      <p>Department : {dept}</p>
      <p>Salary : ₹{sal}</p>
    </div>
  );
}
export default App

function App(){
  const studentName = "radha";
  const totalClasses = 60;
  const attendedClasses = 54;
  const attendance = (attendedClasses / totalClasses) * 100;
  return(
    <div>
      <h1>Attendance Dashboard</h1>
      <hr />
      <p>Name : {studentName}</p>
      <p>Total Classes : {totalClasses}</p>
      <p>Classes Attendence : {attendedClasses}</p>
      <p>Attendance : {attendance.toFixed(2)}%</p>
      <h3>
        Status : { attendance >= 75? " Eligible for Exam" : " Not Eligible" }
      </h3>
    </div>
  );
}
export default App

function App(){
  const maths = 85;
  const sci = 90;
  function calculate(mark1, mark2) {return mark1 + mark2}
  return(
    <div>
      <h1>Student Marks</h1>
      <hr />
      <p>Mathematics Marks : {maths}</p>
      <p>Science Marks : {sci}</p>
      <hr />
      <h2>Total Marks : {calculate(maths, sci)}</h2>
     <h3>radhika 17</h3>
    </div>
  );
}
export default App

function App(){
  const currentDate = new Date();
  return(
    <div>
      <h1>Current Date and Time</h1>
      <hr />
      <p>Date : {currentDate.toLocaleDateString()}</p>
      <p>Time : {currentDate.toLocaleTimeString()}</p>
      <h4>radhika 17</h4>
    </div>
  );
}
export default App

import "./App.css";
function App(){
  return(
    <div className="container">
      <h1>Student Dashboard</h1>
      <hr />
      <p>Name : Asmitha </p>
      <p>Roll No : 102</p>
      <p>Course : B.Sc.IT</p>
      <p>Semester : V</p>
      <button>View Result</button>
    </div>
  );
}
export default App;



import Header from "./components/Header";
import Student from "./components/Student";
import Attendance from "./components/Attendance";
import Result from "./components/Result";
import Footer from "./components/Footer";

function App(){
  return(
    <div>
      <Header />
      <Student />
      ----------------------------------------------
      <Attendance />
      ----------------------------------------------
      <Result />
      <Footer />
    </div>
  );
}
export default App;

//pract 4a
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
