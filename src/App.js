import { Row, Col } from "antd";
import ToDoList from "./components/ToDoList";
import "./styles/global.css";

function App() {
  return (
    <Row justify="center" align="top" className="App">
      <Col span={24}>
        <ToDoList />
      </Col>
    </Row>
  );
}

export default App;
