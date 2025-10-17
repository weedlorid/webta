import { Button, Space,Drawer  } from 'antd';
import React, { useState } from 'react';
import { Card } from 'antd';
const App = () => { 
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const showLoading = () => {
    setOpen(true);
    setLoading(true);
    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  
  return (
    <>
      <Button type="dashed" onClick={showLoading}>
        Open Drawer
      </Button>
      <Drawer
        closable
        destroyOnHidden
        title={<p>đây là drawer</p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        <Button type="primary" style={{ marginBottom: 16 }} onClick={showLoading}>
          Reload
        </Button>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default App;