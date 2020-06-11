import React, { useRef, useState } from 'react';
import { Square } from 'plant-fiber-ui';
import { Canvas, useFrame } from 'react-three-fiber';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const App = (props) => {
  return (
    <Row style={{ padding: 30 }}>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <div style={{ textAlign: 'center' }}>
          <h1>Box</h1>
        </div>
        <code style={{ padding: 20 }}>
        {`<Box
            position={[-1.2, 0, 0]}
            useRef={useRef} 
            useState={useState} 
            useFrame={useFrame} 
          />`}
        </code>
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Square position={[0, 0, 3]} useRef={useRef} useState={useState} useFrame={useFrame} />
        </Canvas>
      </Col>
    </Row>
  );
}

export default App;
