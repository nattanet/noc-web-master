import React from "react";
import { Row,Col,DatePicker,TimePicker} from 'antd';
import AiBoardTable from "../components/Table/AiBoardTable";
import '../components/css/Position.css'
 
class AiBoard extends React.Component{
    render(){
        return (
            <div className = "pos">
                <AiBoardTable />
                <br /> 
            </div>
        );
    }
}

export default AiBoard;