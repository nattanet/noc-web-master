import React from "react";
import { Row,Col,DatePicker,TimePicker} from 'antd';
import DatePick from "../components/DatePicker/DatePicker";
import GinBoardTable from "../components/Table/GinBoardTable";
import '../components/css/Position.css'
import TimePick from "../components/DatePicker/TimePicker1";
 
class GinBoard extends React.Component{
    render(){
        return (
      <div className = "pos">
         <Row>
            <Col span={9}> <label className="black-text" >GIN open date start: </label></Col>
            <Col span={7}> <label className="black-text" > GIN open date end </label></Col>
            <Col span={7}> <label className="black-text" > Search </label></Col>
         </Row>
         <Row>
            <Col span={2}><DatePick /></Col>
            <Col span={7}><TimePick /></Col>

            <Col span={2}><DatePick /></Col>
            <Col span={10}><TimePick /></Col>
            
           
         </Row>
         <GinBoardTable />
         <br /> 
      </div>
        
        );
    }
}

export default GinBoard;