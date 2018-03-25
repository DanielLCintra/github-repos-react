import React, { Component } from 'react'
import { fetchRepos } from '../../service/repos-api'
import ReposList from './ReposList'
import { Row,Input,Navbar } from 'react-materialize'
import './ReposContainer.css';
class ReposContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
      username: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  //
  changeHandler(ev) {
    this.setState({ username: ev.target.value })
  }

  //
  submitHandler(ev) {
    ev.preventDefault()
    fetchRepos(this.state.username)
      .then(res => this.setState({ repos: res.data }))
  }

  //
  render() {
    return (
      <Row>
        <Navbar brand='Github Repositories' right></Navbar>
        <form action="#" onSubmit={this.submitHandler}>
          <Input 
            s={24} 
            type="text" 
            label="Usuario" 
            onChange={this.changeHandler} />
        </form>
        <ReposList repos={this.state.repos}></ReposList>
      </Row>
    )
  }
}

export default ReposContainer