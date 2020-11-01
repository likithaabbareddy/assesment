import React, { Component } from "react";
import axios from "axios";
import Repo from "./repo";
import NamesContainer from "./namesContainer";
import Name from "./name";


class Users extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      user: [],
      login_names: [],
      searchTerm : '',
      search: [],
      repoNames: []
    };
}

  //   login = this.state.user;
  componentDidMount() {
    axios
      .get("./users.json")
      .then((res) => {
        this.setState({ user: res.data });
        // console.log(res.data);
        res.data.map((data) => {
          // return data.login;
          this.setState({login_names: data.login});
        });
        // console.log(val);
        let val = res.data.map((data) => {
          return data.login;
        });
        this.state.search = val;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () =>{
    return this.state.search.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
  }
  
  handleClick = (e) =>{
    let val = e.target.text;
    // console.log(e.target.text);
    axios.get(`https://api.github.com/users/${val}/repos`).then((res) => {
    res.data.map((r) =>{
      var repo_names = [];
      repo_names = r.name;
      // console.log(r.name);
      this.setState({ repoNames: repo_names });
      console.log(this.state.repoNames);
    });
      // console.log(this.state.repoNames);
      // console.log(res.data);
      });
  }

  dataTable() {
    return this.state.user.map((data, i) => {
      return (
        <tbody className="one" key={data.id}>
          <tr>
            <td>
              <img
                src={data.avatar_url}
                alt={data.login}
                width={300}
                height={300}
                className="img-responsive"
              />
              <br />
              <a href="#" onClick={e => this.handleClick(e)} value={data.login}>
                {data.login}
              </a>
            </td>
          </tr>
        </tbody>
      );
    });
  }
  render() {
    //console.log(this.state.user[0]);
    return (
      <div style={{textAlign: 'center', paddingTop: '5vh' }}>
        <h1>User Details</h1>
        <div style={{textAlign: 'center', paddingTop: '10vh' }}>
          <label><h3>Search:&nbsp;&nbsp;&nbsp;</h3></label>
          <input type='text' value= {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name!' />
          <br/>
          <NamesContainer names={this.dynamicSearch()} />

        </div>
        <div style={{textAlign: 'center', paddingTop: '10vh' }}>
        <table className="table-hover">
          <thead>
            <tr>
              <th>
              </th>
            </tr>
          </thead>
          {this.dataTable()}
        </table>
        </div>
      </div>
    );
  }
}

export default Users;
