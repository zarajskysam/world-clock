import React from 'react';
import timeZone from '../data/timeZone';
import { nanoid } from 'nanoid';
import Clock from './Clock';

const DEFAULT_CLOCK = {
    title: '',
    zone: '',
    id: ''
}

class WorldClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clock: DEFAULT_CLOCK, clocks: [] };
    }

    changeSubmit(evt) {
        this.setState(prevState => ({
            clock: {                   
                ...prevState.clock,    
                title: evt.target.value,
            }
        }))
    }

    changeSubmitZone(evt) {
        if (evt.target.value === 'Выберите часовой пояс') return;
        let itemZone = timeZone.find(item => item.name === evt.target.value).zone;
        this.setState(prevState => ({
            clock: {                   
                ...prevState.clock,    
                zone: itemZone,
            }
        }))
    }

    addClock(evt) {
        evt.preventDefault();
        
        if (this.state.clock.title === '') {
            console.log('Введите корректное имя');
            return;
        }
        if (this.state.clock.zone === '') {
            console.log('Выберите корректную зону');
            return;
        }
        let oldClock = this.state.clock;
        let oldClocks = this.state.clocks;
        oldClock.id = nanoid();
        oldClocks.push(oldClock);
        
        this.setState({clocks: oldClocks});
    }

    deleteClock(id) {
        let oldClocks = this.state.clocks; 
        for (let i = 0; i < oldClocks.length; i++) {
            if (this.state.clocks[i].id === id) {
                oldClocks.splice(i, 1);
            }
        }        
        this.setState({clocks: oldClocks});
    }

    render() {
        return (
            <React.Fragment>
            <form className="clock-form" onSubmit={(evt) => this.addClock(evt)}>
                <input type="text" placeholder="Введите название часов" onChange={(evt) => this.changeSubmit(evt)}/>
                <select id="timezoneType" onChange={(evt) => this.changeSubmitZone(evt)}>
                    <option id={'none'} data-id={'none'}>Выберите часовой пояс</option>
                    {timeZone.map(item => (
                        <option key={item.id}>{item.name}</option>
                    ))}
                </select>
                <button>Добавить</button>
            </form>
            <ul className="clock-list">
                {this.state.clocks.map(item => (
                    <Clock title={item.title} zone={item.zone} deleteClock={(id) => this.deleteClock(id)} key={item.id} id={item.id}/>
                ))}
            </ul>
            </React.Fragment>
        )
    }
}

export default WorldClock
