import React from 'react';
import Count from './components/counter/counter';
import SettingContext from './components/counter/counter-context';

export default class App extends React.Component {
  render() {
    return (
      <SettingContext>
        <Count />
      </SettingContext>
    );
  }
}
