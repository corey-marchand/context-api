import React from 'react';

export const SettingsContext = React.createContext();

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      increment: this.add,
      decrement: this.subtract,
    }
  }

  add = () => {
    const count = this.state.counter;
    this.setState({counter: count +1});
    console.log(this.state.counter);
  }

  subtract = () => {
    const count = this.state.counter;
    this.setState({count: count -1});
  }
  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default Content;