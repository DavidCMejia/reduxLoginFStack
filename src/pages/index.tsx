import {
  Button, Form, Input, Checkbox, Row, Col,
} from 'antd';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectCounter } from '../../selectors/initialSelectors';
import { decrement, increment } from '../../slices/counterSlice';

export default function Home() {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const res = await axios.post('api/auth/login', values);
    console.log('🚀 ~ res:', res);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row>
      <Col lg={{ span: 6, offset: 9 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <center>
            <h1> Iniciar sesión</h1>
          </center>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <br />
        <h1>El contador esta en {count}</h1>
        <br />
        <br />
        <Button type="primary" onClick={() => dispatch(increment())}>
          Aumentar
        </Button>
        <Button type="default" onClick={() => dispatch(decrement())}>
          Disminuir
        </Button>
      </Col>
    </Row>
  );
}
