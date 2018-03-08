import React, { Component } from 'react';
import './Cards.css';
import { Button, Card, Row, Col, CardTitle, Icon } from 'react-materialize';

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      studentInfoTableArr: []
    }
    this.getStudentInfo = this.getStudentInfo.bind(this)
    // this.renderStudentInfo = this.renderStudentInfo.bind(this)
  };

  async getStudentInfo() {
    const res = await fetch('http://localhost:8082/studentInfoTable');

    const json = await res.json();

    this.setState({
      studentInfoTableArr: json
    })
  }

  componentDidMount() {
    this.getStudentInfo();
  }

  render() {
    return this.state.studentInfoTableArr.map((student, index) =>
      <div key={index}>
          <Card  className="col s6 m6 l4" header={
            <CardTitle reveal
              image={student.headshot}
              waves='light'
            />
          }
          title={student.fullName}
          reveal={
            <p>{student.capstoneDesc}</p>
          }>
          <p>
            <a href={student.gitHub}><Icon></Icon></a>
          </p>
        </Card>
    </div>
    )
  }
}

export default Cards;
