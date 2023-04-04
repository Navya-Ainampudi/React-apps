
import './App.css';
import Greeting from './Greeting.js'
import Person from './Person';
import Trial from './Triallist';
import Login from './Login';
import Counter from './Counter';
import SelectName from './selectName';
import Home from './practice/Main';
import NameList from './practice/NameList';
import Objlists from './practice/ObjListKeys';
import EventClick from './practice/Events';
import Greeting1 from './practice/Conditionals';
import Forms from './practice/Forms';
import FormsClass from './practice/FormsClass';
import Form from './practice/Classcomp';
import Classforms from './practice/Classforms';
import Csspractice from './practice/csspractice';
import Apps from './practice/practiceLive';
import PracticeLifecycle from './practice/PracticeLifecycle';
import Shouldupdate from './practice/Shouldupdate';
import Axiospractice from './practice/Axiospractice';
import Axiostrial from './practice/axiostrial';
import Axios2 from './practice/Trialaxios1';
import Formsubmittask from './practice/Formsubmittask';
import ContextPractice from './practice/ContextPractice';
import TaskUseRef from './practice/TaskUseRef';
import ReducerTask from './practice/ReducerTask';
import LiftingStateup from './practice/LiftingStateup';
import UseEffect from './Dailyprctice/UseEffect';
import Usecontext from './Dailyprctice/Usecontext';
import Todolists from './Dailyprctice/Todolists';
import ConditionalPractice from './Dailyprctice/ConditionalPractice';
import Propspractice from './Dailyprctice/Propspractice';
import UsestatePractice from './Dailyprctice/UsestatePractice';
import TrialuseCallback from './Dailyprctice/TrialuseCallback';
import PracticeUseEffect from './Dailyprctice/PracticeUseEffect';
import PracticeRef from './Dailyprctice/PracticeRef';
import Practicelive from './Dailyprctice/Practicelive';
import Number from './Dailyprctice/PracticeReducer';
import PracticeContext from './Dailyprctice/PracticeContext';


function App() {
  return (
    <div className="App">
      <h1 className="test">React</h1>
      <p>hi navya </p>
      <Greeting/>
      <Greet1 name='navya'/> 
      <Person name ='Navya'/>
      
 
    </div>
  );
}

 
function Greet (props){
  return <div><Greeting/>{props.name}</div>
}
function Greet1 (props){
  return <div><Greeting name={props.name}></Greeting></div>
}
function Person1(props){
  return <div> Name is {props.name}</div>
}

function Winner(){
  return (
<>
{/* <h2>React <Person1 name={'Navya'}/></h2> */}
{/* <p> list of persons <Person/> </p>
<Login1/>
<Logout/>
<Trial/>
<Login isLogIn={false}/>
< Counter/>
<SelectName/>
<Home name="Navya" tech= "react"/>
<NameList />
<Objlists />
<EventClick/>
<Greeting1 isLogedin={true}/> */}
{/* <Forms/> */}
{/* <FormsClass/> */}
{/* <Form/> */}
{/* <Classforms/> */}
{/* <Csspractice/> */}
{/* <EventClick/>
<Apps name="navya"/> */}
{/* <PracticeLifecycle/>
<Shouldupdate/> */}
<Axiospractice/>
{/* <Axiostrial/> */}
{/* <Axios2/> */}
{/* <Formsubmittask/>
<ContextPractice/>
<TaskUseRef/>
<ReducerTask/>
<LiftingStateup/> */}
{/* <UseEffect/>
<Usecontext/> */}
{/* <Todolists/> */}
{/* <ConditionalPractice islogin={false}/> */}
{/* <Propspractice name="navya"/> */}
{/* <UsestatePractice/> */}
{/* <TrialuseCallback/> */}
{/* <PracticeUseEffect/> */}
{/* <PracticeRef/>  */}
 {/* <Practicelive/> */}
{/* <Number/> */}
{/* <PracticeContext/> */}

</>)
}
function Login1(props){
  return (
    <button onClick={"props.onClick"}>Login</button>
  );
}
function Logout(props){
  return(
    <button onChange={'props.onClick'}> Logout</button>
  );
}
export default Winner;