import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Repo from "./repo";
import NamesContainer from "./namesContainer";
import Name from "./name";
import Modal from "./modal-data";


class Users extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      user: [],
      login_names: [],
      searchTerm : '',
      search: [],
      repoNames: [],
      followers: [],
      pageNumber: 1,
      items: 4,
      hasMore: true
    };
}

  //   login = this.state.user;
  componentDidMount() {
    axios
      .get("./users.json?since=${this.state.pageNumber}")
      .then((res) => {
        this.setState({ 
          //updating the data
          user: [...this.state.user, ...res.data],
          //updating page numbers
          pageNumber: this.state.pageNumber + 1 
        });
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
      if(!this.state.repoNames){
        return <Modal login={this.state.repoNames}></Modal>;
      }
  }

  getFollowers = (e) =>{
    let val = e.target.text;
    // console.log(e.target.text);
    axios.get(`https://api.github.com/users/${val}/followers`).then((res) => {
    res.data.map((r) =>{
      var follower_names = [];
      follower_names = r.login;
      // console.log(r.name);
      this.setState({ followers: follower_names });
      console.log(this.state.followers);
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
              
              <a href="" onClick={e => this.handleClick(e)} value={data.login} target="_blank">
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
    // console.log(this.state.repoNames);
    return (
      <div style={{textAlign: 'center', paddingTop: '5vh' }}>
        <h1>User Details</h1>
        <div style={{textAlign: 'center', paddingTop: '10vh' }}>
          <label><h3>Search:&nbsp;&nbsp;&nbsp;</h3></label>
          <input type='text' value= {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a name!' />
          <br/>
          {/* <NamesContainer names={this.dynamicSearch()} /> */}

        </div>
        <div style={{textAlign: 'center', paddingTop: '10vh' }}>
        <table className="table-hover">
          <thead>
            <tr>
              <th>
              </th>
            </tr>
          </thead>
          <InfiniteScroll
          dataLength={this.state.user.length} next={this.fetchData} hasMore={this.state.hasMore} loader={<h4>Loading...</h4>}>
          {this.dataTable()}
          </InfiniteScroll>
        </table>
        </div>
      </div>
    );
  }
}

export default Users;
