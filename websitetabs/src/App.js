//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <div>
      <Nav variant="tabs" className="flex-row">
          <Nav.Item>
            <Nav.Link eventKey="first">ELT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Tech Videos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Pdf Reader</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">Web Dev Video</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sixth">Tab 6</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <p>Easy Life Technology Ideas</p>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <p>Tech Videos for making life easy</p>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <p>Convert any pdf file to editable word or text by uploading the file</p>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <p>Web Development Ideas</p>
          </Tab.Pane>
          <Tab.Pane eventKey="fifth">
            <p>Content for Tab 5</p>
          </Tab.Pane>
          <Tab.Pane eventKey="sixth">
            <p>Content for Tab 6</p>

          </Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>
  );
}

export default App;