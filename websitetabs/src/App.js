//import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Nav } from 'react-bootstrap';

import './App.css';



function App() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <div className='tabcolormain'>
      <Nav variant="tabs" className="flex-row tabscolor">
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
            <Nav.Link eventKey="fifth">Web Ideas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="sixth">Members Chat</Nav.Link>
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
            <p>Convert to EPub File</p>
          </Tab.Pane>
          <Tab.Pane eventKey="sixth">
            <p>Chat to members</p>

          </Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>
  );
}

export default App;