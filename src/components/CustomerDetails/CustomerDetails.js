import React, {} from 'react';
import '../CustomerDetails/CustomerDetails.css';
import { PictureOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import {Row,Col, Button, Checkbox, Form, Input,Switch,Upload,DatePicker,Tooltip,Steps    } from 'antd';
const { TextArea } = Input;
const { Step } = Steps;

const CustomerDetails = () => {
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

// const [current, setCurrent] = useState(0);

//   const onChange = (value) => {
//     console.log('onChange:', current);
//     setCurrent(value);
//   };

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
    <Row gutter={16}>
      <Col className="gutter-row" span={12}>
        <Form.Item name="">
            <label class="cusLabelInline" title="Customer Name">Generate  Payment Links</label>
            <Switch  />
        </Form.Item>
        <Form.Item name="">
            <label class="cusLabelInline" title="Customer Name">Accept Partial Payments</label>
            <Switch  />
        </Form.Item>
      </Col>
      <Col className="gutter-row" span={12}>
        <Upload>
            <Button className='AddBusinessLogo' icon={<PictureOutlined />}>Add Business Logo</Button>
            <div className='info'>
                <span>File should be less than 500 kb and more than 0 kb</span>
            </div>
        </Upload>
        
      </Col>
    </Row>
    <Row gutter={16}>
      <Col className="gutter-row" span={16}>
        <Form.Item
            name="CustomerName"
            label="Customer Name"
            rules={[
            {
                required: true,
                message: 'Please input your Customer Name!',
            },
            ]}
        >
            <Input />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
        <Col className="gutter-row" span={16}>
            <Form.Item
                name="CompanyName"
                label="Company Name"
                rules={[
                {
                    required: false,
                    message: 'Please input your Customer Name!',
                },
                ]}
            >
                <Input />
            </Form.Item>
        </Col>
    </Row>
    <Row gutter={16}>
        <Col className="gutter-row" span={16}>
            <Form.Item
                name="CompanyName"
                label="GSTIN (eg. 42ATGYD0500A1Z5) "
                rules={[
                {
                    required: false,
                    message: 'Please input your Customer Name!',
                },
                ]}
            >
                <Input />
            </Form.Item>
        </Col>
    </Row>
    <Row gutter={16}>
        <Col className="gutter-row" span={8}>
            <Form.Item
                name="InvoiceDate"
                label="Invoice Date"
                rules={[
                {
                    required: true,
                    message: 'Please input your Customer Name!',
                },
                ]}
            >
            <DatePicker />
            </Form.Item>
            <Form.Item
                name="HalfwayReminder"
                //valuePropName=""
                wrapperCol={{
                //offset: 16,
                //span: 16,
                }}
            >
             <Checkbox>Halfway Reminder</Checkbox>
             <Tooltip title="Note that the development build is not optimized" color="#fff">
                <InfoCircleTwoTone />
             </Tooltip>
            </Form.Item>

        </Col>
        <Col className="gutter-row" span={8}>
            <Form.Item
                name="ExpiryDate"
                label="Expiry Date"
                rules={[
                {
                    required: true,
                    message: 'Please input your Customer Name!',
                },
                ]}
            >
            <DatePicker />
            </Form.Item>
            <Form.Item
                name="FinalReminder"
                //valuePropName=""
                wrapperCol={{
                //offset: 16,
                //span: 16,
                }}
            >
             <Checkbox>Final Reminder</Checkbox>
             <Tooltip title="Note that the development build is not optimized" color="#fff">
                <InfoCircleTwoTone />
             </Tooltip>
            </Form.Item>
        </Col>
    </Row>
    <Row gutter={16}>
        <Col className="gutter-row" span={8}>
            <Form.Item
                name="Mobile"
                label="Mobile"
                rules={[
                {
                    required: true,
                    message: 'Please input your Mobile!',
                },
                ]}
            >
                <Input />
            </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
            <Form.Item
                name="Amount"
                label="Amount"
                rules={[
                {
                    required: true,
                    message: 'Please input your Amount!',
                },
                ]}
            >
                <Input />
            </Form.Item>
        </Col>
    </Row>
    <Row gutter={16}>
        <Col className="gutter-row" span={16}>
            <Form.Item
                name="Email"
                label="Email"
                rules={[
                {
                    required: true,
                    message: 'Please input your Email!',
                },
                ]}
            >
                <Input />
            </Form.Item>
        </Col>
        <Col className="gutter-row" span={16}>
            <Form.Item
                name="Address"
                label="Address"
                rules={[
                {
                    required: false,
                    message: 'Please input your Address!',
                },
                ]}
            >
                <Input />
            </Form.Item>
        </Col>
    </Row>
    <Row>
    <Col className="gutter-row" span={22}>
            <Form.Item
                name="TermsConditions"
                label="Terms & Conditions"
                rules={[
                {
                    required: false,
                    message: 'Please input your Terms & Conditions!',
                },
                ]}
            >
                <TextArea rows={4} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna molestie lectus volutpat facilisis proin vestibulum. Pulvinar ullamcorper molestie ultrices fames id accumsan imperdiet." />
            </Form.Item>
        </Col>
    </Row>
    <Row>
        <Col className="gutter-row" span={22}>
            <Form.Item
                name="AdditionalNotes"
                label="Additional Notes"
                rules={[
                {
                    required: false,
                    message: 'Please input your Additional Notes!',
                },
                ]}
            >
                <Input placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
            </Form.Item>
        </Col>
    </Row>
    <Row>
        <Col className="gutter-row" span={16}>
            <h3>Additional Attachments</h3>
            <p>Please choose a pdf file</p>

            <Upload>
                <Button>Choose a File</Button>
                <p>Max File Size: 1 MB</p>

            </Upload>
        </Col>
    </Row>
     
    </Form>
  );
};

export default CustomerDetails;