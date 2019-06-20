import React from "react";
import { Row,Col,DatePicker,TimePicker} from 'antd';
import DatePick from "../components/DatePicker/DatePicker";

import '../components/css/Position.css'
import PlannedGinRequestForm from "../components/Form/PlannedGinRequestForm";

 
class GinRequestForm extends React.Component{
    render(){
        console.log(this.props.title);
        return (
      <div className = "pos">
        
         <PlannedGinRequestForm />
         <br /> 
      </div>
        
        );
    }
}

export default GinRequestForm;