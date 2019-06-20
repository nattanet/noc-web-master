import React from "react";
import { Row,Col,DatePicker,TimePicker} from 'antd';
import DatePick from "../components/DatePicker/DatePicker";

import '../components/css/Position.css'
import GinNumberForm from "../components/Form/GinNumberForm";
 
class GinNumber extends React.Component{
    render(){
        console.log(this.props.title);
        return (
      <div className = "pos">
        
         <GinNumberForm />
         <br /> 
      </div>
        
        );
    }
}

export default GinNumber;