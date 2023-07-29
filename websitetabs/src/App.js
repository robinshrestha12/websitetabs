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
            <Nav.Link eventKey="first">Tab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Tab 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Tab 3</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
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
            <p>Content for Tab 1</p>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <p>Content for Tab 2</p>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <p>Content for Tab 3</p>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <p>Content for Tab 4</p>
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