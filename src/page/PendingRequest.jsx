import React from "react";
import { Row,Col,DatePicker,TimePicker} from 'antd';
import PendingRequestTable from "../components/Table/PendingRequestTable";
import '../components/css/Position.css'
 
class PendingRequest extends React.Component{
    render(){
        return (
            <div className = "pos">
                <PendingRequestTable />
                <br /> 
            </div>
      
        
        );
    }
}

export default PendingRequest;