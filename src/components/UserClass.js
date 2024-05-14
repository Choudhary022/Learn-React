import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            count:0
        }
    }


    render() {

        const { name, location } = this.props;
        const {count}=this.state;
        return (<div className="User-container">
            <h2>Count : {count}</h2>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Count +</button>
            <div> Name : {name}  </div>
            <div>Location : {location}</div>
            <div>Contact: chakashk@gmail.com </div>

        </div>)

    }
}

export default UserClass;