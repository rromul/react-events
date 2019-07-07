class EventLogger extends React.Component {
    constructor(props) {
        super(props);
        this.log("ctor");
        this.state = { timerStarted: false, currentTime: new Date(), counter: 0, show: true }
        this.hTimer = null;
        this.defaultProps = { interval: 2000 };
        this.launchTimer = this.launchTimer.bind(this);
    }

    log(...msg) {
        console.log("EventLogger", ...msg);
    }

    launchTimer() {
        if (this.state.timerStarted) {
            this.setState({ timerStarted: false });
            clearInterval(this.hTimer);
            this.hTimer = null;
        } else {
            this.setState({ timerStarted: true });
            this.hTimer = setInterval(() => 
                this.setState({ currentTime: new Date(), counter: this.state.counter + 1 }), 
                this.defaultProps.interval);
        }
    }

    render() {
        this.log("RENDER");
        if (this.state.show)
            return (
                <div style={{ border: '2px solid blue', margin: '5px', padding: '2px', margin: 'auto', width: '400px' }}>
                    <div style={{ borderBottom: '1px solid gray' }}>Event logger</div>
                    <div>
                        <label><input type="checkbox" name="show" id="show" checked onChange={e => this.setState({ show: e.target.checked })} /> Show</label>
                    </div>
                    <button onClick={this.launchTimer}>{this.state.timerStarted ? "Stop timer" : "Start timer"}</button>
                    <InnerStateless time={this.state.currentTime} counter={this.state.counter} />
                </div>
            )
        else
            return null;
    }


    /////////////////////////
    componentWillReceiveProps(props, state) {
        this.log("componentWillReceiveProps", props, state);
    }

    componentDidCatch() {
        this.log("componentDidCatch");
    }

    componentWillMount() {
        this.log("componentWillMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.log("shouldComponentUpdate", nextProps, nextState);
        return true;
    }


    componentWillUpdate() {
        this.log("componentWillUpdate");
    }

    componentDidUpdate() {
        this.log("componentDidUpdate");
    }

    componentWillUnmount() {
        this.log("componentWillUnmount");
    }
    /////////////////////////
}