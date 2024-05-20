import React from "react";

class ProfileClassed extends React.Component {
  constructor(props) {
    super(props);

    //!  ceating state variables
    this.state={
     count:0,
    }
  }

  componentDidMount(){
     console.log("componentDidMount called");
  }

  render() {

     const {count} = this.state;
    return (
      <div>
        {this.props.value1}
        <br />
        {this.props.value2}
        <br />

        {/* //! accessing state variables */}
        {this.state.count}

        <h1>Class based Profile</h1>
        <button onClick={()=>{

          //! updating state variables
          this.setState({
               count:count+1,
          })
        }}>Increment</button>
      </div>
    );
  }
}

export default ProfileClassed;
