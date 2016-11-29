import React, {Component} from 'react';
import "../styles/objective.css"
import $ from 'jquery';
// import '../styles/dailyForm.css';

class objective extends Component {
  constructor(props) {
    super(props);
    this.state={ data : 'Take the trash out', difficulty : 1, completed : 'false' };

//     setInterval(() => {
//      this.setState({difficulty: this.state.difficulty + 2})
//    },1000)
// this.handleclick = this.handleclick.bind(this);

  }
//   handleclick(){
// this.setState({data:"gotcha"})}
  render() {
    return (
      <div className="objectiveContainer">
<p><span>{this.state.difficulty}</span>"{this.state.data}"</p>

      </div>
    );
  }
}
export default objective;
