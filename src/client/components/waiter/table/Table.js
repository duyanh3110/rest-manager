import React, { Component } from 'react';
import './Table.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentTable, addcustomer } from '../../../actions/tableActions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: 0,
      table: null
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  selectTable(table) {
    this.setState({ table });
  }

  increasepeople = () => {
    if (this.state.people < 30) {
      this.setState({ people: this.state.people + 1 });
    }
  };

  decreasepeople = () => {
    if (this.state.people > 0) {
      this.setState({ people: this.state.people - 1 });
    }
  };

  onSubmit(e) {
    e.preventDefault();
  }

  addcustomer = () => {
    const tableData = {
      tableno: this.state.table,
      customerno: this.state.people
    };

    this.props.addcustomer(tableData);
  };

  componentDidMount() {
    this.props.getCurrentTable();
  }

  render() {
    const { table, loading } = this.props.table;
    let tableContent;

    if (table === null || loading) {
      tableContent = 'loading';
    } else if (Object.keys(table).length > 0) {
      tableContent = table.map(item => (
        <div
          className={this.state.table === item.tableno ? 'round-num selected' : 'round-num'}
          key={item.table_id}
          onClick={this.selectTable.bind(this, item.tableno)}
        >
          <p>{item.tableno}</p>
        </div>
      ));
    }
    return (
      <div className="container">
        <div className="main">
          <h5 className="title">Table</h5>
          <div className="table-num">{tableContent}</div>
          <div className="top-num top-nav table">
            <div className="tagNum">
              <p className="name-num">Customers</p>
            </div>
            <div className="tagNum">
              <div className="round-num" onClick={this.decreasepeople}>
                <p>-</p>
              </div>
              <input
                type="number"
                value={this.state.people}
                onChange={this.onChange}
                name="people"
              />
              <div className="round-num" onClick={this.increasepeople}>
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="formButton">
            <Link to="/categories" className="btn-grad btn-waiter" onClick={this.addcustomer}>
              Take Order
            </Link>
          </div>
          <Link to="/waiter" className="back red toscreen">
            Cancel
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  table: state.table
});

export default connect(
  mapStateToProps,
  { getCurrentTable, addcustomer }
)(Table);
