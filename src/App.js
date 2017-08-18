import React, { Component } from 'react';
import CurrencyView from './components/SubteView';
import { connect } from 'react-redux';
import { requestExchangeCurrency } from './redux/actions/ExchangeCurrencyActions';
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(){
  super()
  this.state = {
    data: null,
  }
   this.fetchData();
}

static defaultProps = {
  data2: null,
}

componentDidMount(){
  this.props.requestExchangeCurrency();
}

fetchData () {
  fetch('http://www.metrovias.com.ar/Subterraneos/Estado?site=Subterraneos')
  .then(function (response) {
    console.log('response',response)
    return response.json();
  })
  .then(function (json) {
    this.setState({ data: json });
  }.bind(this))
.catch(function (ex) {
    console.log('parsing failed', ex);
  });
}

  render() {
    const { data } = this.state;
    const { data2 } = this.props;

    return (
      <div className="App">
        <CurrencyView className="App" data={data}/>
      </div>
    );
  }
}

function mapStateToProps({exchangeCurrencyData}) {
  return {
    data2: exchangeCurrencyData,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestExchangeCurrency: requestExchangeCurrency,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
