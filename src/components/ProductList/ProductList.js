import React, { } from 'react';
import '../ProductList/ProductList.scss';
import { PictureOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import {Radio, Form, Steps } from 'antd';
const { Step } = Steps;

const ProductList = () => {


  return (
    <Form
      layout="vertical"
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >
     <Steps current={1} style={{marginBottom: "30px"}}>
        <Step title="" subTitle="Customer Details" description="" />
        <Step title="" subTitle="Product List" description="" />
        <Step title="" subTitle="Overview" description="" />
    </Steps> 

    <Form.Item
            name="Tax"
            label="Tax"
            wrapperCol={{
                span: 24,
              }}
            rules={[
            {
                required: false,
                message: 'Please select Tax!',
            },
            ]}
        >
            <Radio.Group>
                <Radio value={1}>Exclusive</Radio>
                <Radio value={2}>Inclusive</Radio>
            </Radio.Group>
     </Form.Item>
     <Form.Item
            name="Type"
            label="Type"
            wrapperCol={{
                span: 24,
              }}
            rules={[
            {
                required: false,
                message: 'Please select Type!',
            },
            ]}
        >
            <Radio.Group>
                <Radio value={1}>IGST</Radio>
                <Radio value={2}>CGST/SGST</Radio>
            </Radio.Group>
     </Form.Item>
    
 
    
    
    
    
 

     
    </Form>
  );
};

export default ProductList;