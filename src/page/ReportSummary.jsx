import React from "react";
import OverallTable from "../components/Table/ReportSummary/OverallTable";
import GinSummaryTable from "../components/Table/ReportSummary/GinSummaryTable";

 
class ReportSummary extends React.Component{
    render(){
        return (
      <div className = "pos">
          <label style={{fontSize: 25, color : 'black' ,marginLeft: 300}}>Report Summary</label>
          <br/>
          <br/>
          <label style={{fontSize : 20,color : 'black' ,marginLeft: 300}}>Overall</label>
         <OverallTable />
         <br /> 
         <label style={{fontSize : 20,color : 'black' ,marginLeft: 300}}>GIN Summary</label>
         <GinSummaryTable/>
      </div>
        
        );
    }
}

export default ReportSummary ;