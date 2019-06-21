import React from "react";
import { Row,Col,DatePicker,TimePicker} from 'antd';
import TimePick from '../DatePicker/TimePicker'


import moment from 'moment';
const format = 'HH:mm';

function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }
 

class DatePick extends React.Component {
  render(){
    return (
     
      <DatePicker />
      
    );
  }
}

export default DatePick;