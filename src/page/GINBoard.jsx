import React from "react";
import { Row,Col,DatePicker,TimePicker} from 'antd';
import DatePick from "../components/DatePicker/DatePicker";
import GinBoardTable from "../components/Table/GinBoardTable";
import '../components/css/Position.css'
 
class GinBoard extends React.Component{
    render(){
        return (
      <div className = "pos">
         <Row>
            <Col span={9}> <label className="black-text" >GIN open date start: </label></Col>
            <Col span={7}> <label className="black-text" > GIN open date end </label></Col>
         </Row>
         <Row>
            <Col span={9}><DatePick></DatePick></Col>
            <Col span={10}><DatePick></DatePick></Col>
         </Row>
         <GinBoardTable />
         <br /> 
      </div>
        
        );
    }
}

export default GinBoard;