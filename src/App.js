import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import NevBar from './components/NevBar/NevBar'
import GinBoard from './page/GINBoard'
import AiBoard from './page/AiBoard'
import Escalations from './page/Escalations'
import PendingRequest from './page/PendingRequest';
import GinNumberForm  from './components/Form/GinNumberForm';
import GinNumber from './page/GinNumber';
import ReportSummary from './page/ReportSummary';
import GinRequestForm from './page/GinRequestForm';
import AiForm from './components/Form/AiForm';





class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
        <div className="App">
       <NevBar />
          
          <Route path='/ginboard' component={GinBoard} />
          <Route path='/aiboard' component={AiBoard} />
          <Route path='/escalations' component={Escalations} />
          <Route path='/pendingrequest' component={PendingRequest} />
          <Route path='/ginnumform' component={GinNumber}/>
          <Route path='/reportsummary' component={ReportSummary}/>
          <Route path='/GinRequestForm' component={GinRequestForm}/>
          <Route path='/AIForm' component={AiForm}/>

          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;