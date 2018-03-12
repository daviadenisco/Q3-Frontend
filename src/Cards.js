import React, { Component } from 'react';
import './Cards.css';
import { Button, Card, Row, Col, CardTitle, Icon } from 'react-materialize';
import Ionicon from 'react-ionicons'
import Bootstrap from 'react-bootstrap'

const style = {
  marginLeft: 3,
  marginBottom: 0,
  fontSize: 25
}

const styleImg = {
  borderLeft: '27px solid white',
  borderRight: '27px solid white',
  borderTop: '27px solid white',
  borderBottom: 'none',
  cursor: "default"
}

const styleReveal = {
  fontSize: 16
}

const styleIconSection = {
  paddingTop: 10
}

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
    const res = await fetch('https://q3-backend-dd.herokuapp.com/studentInfoTable');

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
            <CardTitle style={styleImg}
              image={student.headshot}
              waves='dark'
            />
          }
          title={<p className="fullName" style={style}>{student.fullName}</p>}
          reveal={
            <p style={styleReveal}>
              <br></br>
              <br></br>
              <br></br>

              {student.capstoneDesc}
            </p>
          }>
          <p className="iconSection" style={styleIconSection}>
            <a href={student.linkedIn} target="_blank">
                <i id="cardIcon" className="fab fa-linkedin fa-2x fa-fw"></i>
            </a>
            <a href={student.gitHub} target="_blank">
                <i id="cardIcon" className="fab fa-github fa-2x fa-fw" ></i>
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
