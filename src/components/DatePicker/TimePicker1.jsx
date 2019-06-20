import React from "react";
import { Row,Col,TimePicker} from 'antd';



import moment from 'moment';
const format = 'HH:mm';

function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }
 

class TimePick extends React.Component {
  render(){
    return (
     
      <Row >
      <Col span={3}><TimePicker defaultValue={moment('00:00', format)} format={format} minuteStep={30}/></Col>
      </Row>
    );
  }
}

export default TimePick;