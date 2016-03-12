import React from 'react';

class PhoneCall extends React.Component {
    render() {
        return (
            <div className="phone-call">
                <h4 className="call-SID">
                    {"Call SID: " + this.props.callSid}
                </h4>
                <h4 className="to-number">
                    {"TO : " + this.props.to}
                </h4>
                <h4 className="from-number">
                    {"From: " + this.props.fromNumber}
                </h4>
                <h4 className="date-updated">
                    {"Call Status: " + this.props.callStatus}
                </h4>
            </div>
        );
    }
}

export default PhoneCall;

import ReactDOM from 'react-dom';
ReactDOM.render(<PhoneCall callSid='123456789' to=' 19999999999' fromNumber=' 18888888888'
                           callStatus='completed'/>, document.getElementById('phone-calls'));