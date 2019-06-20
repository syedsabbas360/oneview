import React from 'react';
import tableData from '../api/tableData';

import { connect } from 'react-redux';


class Table extends React.Component {

  componentDidMount(){
    this.onTableLoad();
  }

  onTableLoad = async data => {
    const response = await tableData.get('/', {
    })
    this.props.dispatch({
      type: 'GET_TABLE_DATA',
      payload: response
    })
  };


  render() {

    const row = this.props.tableData && this.props.tableData.data.map( person => {
          console.log(person, 'person')
          return (
            <tr key={person.id} >
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.address.city}</td>
              <td>{person.company.name}</td>
            </tr>
          )
      })

    return(

      <table className="ui celled table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          { row }
        </tbody>
      </table>
    )
  }

}

const mapStateToProps = state => {

  return{
    tableData: state.currentData
  }
}

export default connect(mapStateToProps)(Table);
