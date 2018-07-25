import React, { Component } from 'react';
import './App.css';
import {AppProvider, Page, Card, Button} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppProvider>
    <Page title="Example app">
      <Card sectioned>
        <Button onClick={() => alert('Button clicked!')}>Example button</Button>
      </Card>
    </Page>
  </AppProvider>
      </div>
    );
  }
}

export default App;
