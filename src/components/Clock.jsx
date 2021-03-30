import React from 'react'
import PropTypes from 'prop-types'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.moment(), 1000
        );
    }

    moment() {
        this.setState({time: new Date()});
    }

    getGrinwichTime() {
        return new Date(this.state.time.getTime() + (this.state.time.getTimezoneOffset() + this.props.zone * 60) * 60 * 1000);
    } 
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {
        return (        
            <li className='clock-item' id={this.props.id}>
                <div className='clock-delete' onClick={() => {this.props.deleteClock(this.props.id)}}>╳</div>
                <div className='clock-title'>{this.props.title}</div>
                <div className='clock-time'>{this.getGrinwichTime().toLocaleTimeString()}</div>
            </li>
        )
    }
}

export default Clock