import React from "react";
import { Row,Col,DatePicker,TimePicker} from 'antd';
import EscalationsTable from "../components/Table/EscalationsTable";
import '../components/css/Position.css'
 
class Escalations extends React.Component{
    render(){
        return (
            <div className = "pos">
                <EscalationsTable />
                <br /> 
            </div>
      
        
        );
    }
}

export default Escalations;