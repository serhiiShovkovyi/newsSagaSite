import React, {Component} from 'react';
import './loading-progress.css'



class LoadingIndicator extends Component{
    state = {
        width: 0
    };

    componentDidMount() {
        setInterval(()=>{
            let width = this.state.width;
            if (width!== 100){
                width+=20;
                this.setState({width: width})
            }
        },1)
    }

    render(){
        return(
            <div className="big-div position-absolute">
                <div className="center-block">
                    <div className="min-progress-bar">
                        <div className="min-progress" style={{"width":this.state.width + '%'}}></div>
                    </div>
                </div>
            </div>
        );
    }
};
export default LoadingIndicator