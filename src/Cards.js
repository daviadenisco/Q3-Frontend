import React, { Component } from 'react';
import './Cards.css';
import { Button, Card, Row, Col, CardTitle, Icon } from 'react-materialize';
import Ionicon from 'react-ionicons'

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
      <div className="col s6 m6 l4" key={index}>
          <Card header={
            <CardTitle reveal
              image={student.headshot}
              waves='light'
            />
          }
          title={student.fullName}
          reveal={
            <p>
              <br></br>
              {student.capstoneDesc}
            </p>
          }>
          <p>
            <a href={student.gitHub} target="_blank">
                <i id="cardIcon" className="fab fa-github fa-2x fa-fw" ></i>
            </a>
            <a href={student.linkedIn}>
                <i id="cardIcon" className="fab fa-linkedin fa-2x fa-fw"></i>
            </a>
            <a href={student.email}>
              <i id="cardIcon" className="fas fa-envelope-square fa-2x fa-fw"></i>
            </a>
          </p>
        </Card>
    </div>
    )
  }
}

export default Cards;