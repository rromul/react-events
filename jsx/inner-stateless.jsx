class InnerStateless extends React.Component{
    constructor(props){
        super(props);
        this.log("ctor");
    }

    log(...msg){
        console.log("InnerStateless", ...msg);
    }



    /////////////////////////
    componentWillReceiveProps(props, state){
        this.log("componentWillReceiveProps", props, state);
    }

    componentDidCatch(){
        this.log("componentDidCatch");
    }

    componentWillMount(){
        this.log("componentWillMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.log("shouldComponentUpdate", nextProps, nextState);
        return true;
    }


    componentWillUpdate(){
        this.log("componentWillUpdate");
    }

    componentDidUpdate(){
        this.log("componentDidUpdate");
    }

    componentWillUnmount(){
        this.log("componentWillUnmount");
    }
    /////////////////////////

    render(){
        this.log("render");
        return (
            <div>
                <div><b>Time:</b> {this.props.time.toTimeString()}</div>
                <div><b>Counter:</b> {this.props.counter}</div>
            </div>
        )
    }
}