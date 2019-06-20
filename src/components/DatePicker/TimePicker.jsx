import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 

class TimePick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={30}
      dateFormat="h:mm aa"
      timeCaption="Time"
      />
    );
  }
}

export default TimePick;