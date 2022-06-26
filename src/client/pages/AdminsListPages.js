import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions/";
import requireAuth from "../components/hocs/require-auth";

class AdminsListPages extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }
  renderAdmins() {
    return this.props.admins.map((admin) => (
      <li key={admin.id}>{admin.name}</li>
    ));
  }
  render() {
    return (
      <div>
        <h2>Protected page</h2>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPages)
  ),
};
