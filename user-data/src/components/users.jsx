import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = {
    user: [],
    size: 4,
  };

  //   login = this.state.user;
  componentDidMount() {
    axios
      .get("https://api.github.com/users?since=<page number>")
      .then((res) => {
        this.setState({ user: res.data });
        // console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  dataTable() {
    return this.state.user.map((data, i) => {
      return (
        <tbody>
          <tr>
            {/* <td>{data.login}</td> */}
            <td>
              <img
                src={data.avatar_url}
                alt={data.login}
                width={300}
                height={300}
                className="img-responsive"
              />
              <br />
              <h2>{data.login}</h2>
            </td>
          </tr>
        </tbody>
      );
    });
  }
  render() {
    //console.log(this.state.user[0]);
    return (
      <div>
        {/* <h2>Users</h2> */}
        <table className="table table-hover">
          <thead>
            <tr>
              {/* <th>User Name</th> */}
              <th>
                <h1>User Details</h1>
              </th>
            </tr>
          </thead>
          {this.dataTable()}
        </table>
      </div>
    );
  }
}

export default Users;
