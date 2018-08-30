import React from "react";

interface ClockProps {}

interface ClockState {
  date: Date;
}

export class Clock extends React.Component<ClockProps, ClockState> {
  constructor(props: ClockProps) {
    super(props);
    this.state = {
      date: new Date()
    };
    setInterval(this.updateTime, 1000);
  }
  updateTime = () => {
    this.setState({
      date: new Date()
    });
  };
  render() {
    return <div>Time: {this.state.date.toLocaleTimeString()}</div>;
  }
}
