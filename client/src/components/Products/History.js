import React from 'react';

class History extends React.Component{
    constructor(props){
        super(props)
        this.setState({

        })
        this.getOrders()
    }

    getOrders(){
        console.log("getting orders here!")
    }

    render(){
        return (
            <div><p>Hi!</p></div>
        )
    }
}

export default History;