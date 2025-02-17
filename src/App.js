import logo from './logo.svg';
import './App.css';
import BirthdayForm from './birthdayreminder/BirthdayForm';
import BdayHome from './birthdayreminder/BdayHome';
import Music from './musicplayer/Music';
import Ddl from './nodetrial/Ddl';
import NodeCrud from './nodetrial/NodeCrud';
import MultilevelDDL from './nodetrial/MultilevelDDL';
import Login from './REDUX/Login';
import Home from './REDUX/Home';
import Main from './REDUX/Main';
import { Provider } from 'react-redux';
import Store from './store/Store';
import MailApp from './MailApp';
import RegexpPractice from './Regexp/RegexpPractice';
import Signaturepad from './signaturepad/Signaturepad';
import Empty from './Empty';
import WhatsupHome from './whatsapp/WhatsupHome';
import CustomElementWithShadowDOM from './CustomElementWithShadowDOM';
import Trial1 from './swintrw/Trial1';
import PortfolioHome from './portfolio/PortfolioHome';
import HomePagePortfolio from './portfolio/HomePagePortfolio';
import HoneyHome from './HoneyApp/HoneyHome';
import Counter from './counterRedux/counter';
import counterStore from './counterRedux/counterStore';
import TodoComp from './TodoRedux/todoComp';
import todoStore from './TodoRedux/todoStore';
import HomeCrud from './crudRedux/homeCrud';
import crudStore from './crudRedux/crudStore';
import HomeRoteCrud from './crudRedux/homeRoteCrud';
import HomeCards from './HRMS/homeCards';
import UploadFile from './HRMS/UploadFile';
import Formcomponent from './Formcomponent';


function App() {
  return (
    <div className="App">
    {/*  style={{ backgroundColor: "lightgoldenrodyellow", height: '100vh',display:'flex'}} */}
     
      {/* <BdayHome/> */}
      {/* <BirthdayForm/> */}
      {/* <Music/> */}
      {/* <Ddl/> */}
      {/* <NodeCrud/> */}
      {/* <MultilevelDDL/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <Provider store={Store}>
      <Main/>
      </Provider> */}
      {/* <RegexpPractice/> */}

      {/* <MailApp/> */}
      {/* <Empty/> */}
      {/* <Signaturepad /> */}
      {/* <WhatsupHome/> */}
      {/* <CustomElementWithShadowDOM/> */}
      {/* <Trial1/> */}
      {/* <PortfolioHome/> */}
      {/* <HomePagePortfolio/> */}
      {/* <HoneyHome/> */}
      {/* <Provider store={counterStore}>
      <Counter/>
      </Provider> */}
      {/* <Provider store={todoStore}>
      <TodoComp/>
      </Provider> */}
      {/* <Provider store={crudStore}>
      <HomeRoteCrud/>
      </Provider>
      */}
   {/* <HomeCards/> */}
   {/* <UploadFile/> */}
   <Formcomponent/>
    </div>
  );
}

export default App;
