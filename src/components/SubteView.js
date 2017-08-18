import React, { Component,PropTypes } from 'react';

export default class SubteView extends Component {

  static propTypes = {
    data: PropTypes.array
  };
  constructor(){
  super();
   //this.fetchData();
  }

  render() {
    const {data} = this.props;
    console.log('PUTA', data);
    return (
      <div>
        {
        (data)?
        <div>
          <table className='table'>
            <thead>
              <tr className='row header center'>
                <th>Linea</th>
                {data.map((item, i) => ( (<td className={item.LineName} key={item.LineName + i}>  <img src={`http://www.metrovias.com.ar/images/subwayContent/linea_${item.LineName}.png`} /></td>)))}
              </tr>
            </thead>
            <tbody>
              <tr className='row'>
                <td>Estado</td>
                {data.map((item, i) => ( (<td key={item.LineStatus + i}> {item.LineStatus}</td>)))}
              </tr>
              <tr className='row'>
                <td>Frecuencia</td>
                {data.map((item, i) => ( (<td key={item.LineFrequency + i}> {Math.round(item.LineFrequency/60)} min</td>)))}

              </tr>
            </tbody>
          </table>
        </div>

        : null
        }
      </div>
    );
  }
}
