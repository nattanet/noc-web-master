import React from "react";
import OverallTable from "../components/Table/ReportSummary/OverallTable";
import GinSummaryTable from "../components/Table/ReportSummary/GinSummaryTable";

 
class ReportSummary extends React.Component{
    render(){
      const font = {fontSize: 25, color : 'black' }
        
        return (
      <div className = "pos">
          <label style={font}>Report Summary</label>
         <OverallTable/>
         <br /> 
         <GinSummaryTable/>
      </div>
        
        );
    }
}

export default ReportSummary ;