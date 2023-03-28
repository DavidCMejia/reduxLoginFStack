import {
  Button,
} from 'antd';
import axios from 'axios';

export default function Dashboard() {
  const getProfile = async () => {
    const res = await axios.get('api/profile');
    console.log('🚀 ~ res:', res);
  };
  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={() => getProfile()}>Get Profile</Button>
    </>
  );
}
