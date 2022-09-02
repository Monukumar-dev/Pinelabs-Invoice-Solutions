import React, { } from 'react';
import '../Overview/Overview.scss';
// import { PictureOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import downlonIcon from '../../images/icons/Download.svg';
import editIcon from '../../images/icons/Edit.svg';
import InvoiceLogo from '../../images/icons/PluralLogo.svg';
import {Row, Col, Form, Steps } from 'antd';
const { Step } = Steps;

const Overview = () => {


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

<Row gutter={16} justify="space-between" align="bottom" style={{marginBottom: "30px"}}>
      <Col className="gutter-row" span={18}>
          <Steps current={2}>
            <Step title="" subTitle="Customer Details" description="" />
            <Step title="" subTitle="Product List" description="" />
            <Step title="" subTitle="Overview" description="" />
          </Steps> 
      </Col>
      <Col className="gutter-row" span={6}>
        <div className='topActionBtn'>
          <p><img className='Edit' src={editIcon} alt="edit" /> Edit</p>
          <p><img className='Download' src={downlonIcon} alt="download" /> Download</p>
        </div>
      </Col>
    </Row> 

    <Row>
      <Col className="gutter-row" span={12}>
            <h2 className='primary-clr'>Invoice</h2>
            <div className='cusTable'>
                  <div>
                    <div>Invoice#</div>
                    <div>004</div>
                  </div>
                  <div>
                    <div>Invoice Date</div>
                    <div>June 19,2022</div>
                  </div>
                  <div>
                    <div>Due Date</div>
                    <div>June 28, 2022</div>
                  </div>
            </div>
      </Col>
      <Col className="gutter-row" span={12} align="end">
          <img className='InvoiceLogo' src={InvoiceLogo} alt="" />
      </Col>
    </Row>
    <Row>
      <Col className="gutter-row billedTo" span={12}>
            <h3 className='primary-clr m-0 bold'>Billed to</h3>
            <p className='bold m-0'>Sample Labs</p>
            <p className='m-0' style={{width : "80%"}}>46, Raghuveer Dhaam Society Surat, Gujarat, India - 395006</p>
            <p className='m-0'><span>GSTIN</span> GST12345678234</p>
            
      </Col>
    </Row>
    <Row>
      <Col className="gutter-row" span={24}>
      <table className="table overviewTable">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Description</th>
              <th scope="col">ID</th>
              <th scope="col">Qty.</th>
              <th scope="col">GST</th>
              <th scope="col">Taxable Amount</th>
              <th scope="col">SGST</th>
              <th scope="col">CGST</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>1234567890</td>
              <td>1</td>
              <td>GST</td>
              <td>₹ 20,000.00</td>
              <td>₹ 3240.00</td>
              <td>₹ 3240.00</td>
              <td>₹ 10,900.00</td>
            </tr>
            <tr>
              <td>Product 1</td>
              <td>1234567890</td>
              <td>1</td>
              <td>GST</td>
              <td>₹ 20,000.00</td>
              <td>₹ 3240.00</td>
              <td>₹ 3240.00</td>
              <td>₹ 10,900.00</td>
            </tr>
            <tr>
              <td>Product 1</td>
              <td>1234567890</td>
              <td>1</td>
              <td>GST</td>
              <td>₹ 20,000.00</td>
              <td>₹ 3240.00</td>
              <td>₹ 3240.00</td>
              <td>₹ 10,900.00</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
    <Row>
      <Col className="gutter-row" span={12}>
            <h3 className='primary-clr m-0 mt-4 bold'>Bank & Payment Details</h3>
            <table className="table table-borderless paymentDetailTable">
            <tbody>
              <tr>
                <td>Account Holder Name</td>
                <td>Sample Labs</td>
              </tr>
              <tr>
                <td>Account Number</td>
                <td>123456123456</td>
              </tr>
              <tr>
                <td>IFSC</td>
                <td>HDFC001815</td>
              </tr>
              <tr>
                <td>Account Type</td>
                <td>Savings</td>
              </tr>
              <tr>
                <td>Bank</td>
                <td>HDFC Bank</td>
              </tr>
              <tr>
                <td>UPI</td>
                <td>foobarlabs@okhdfc</td>
              </tr>
            </tbody>
          </table>
            
      </Col>
      <Col className="gutter-row" span={12}>
          <table className="table table-borderless invoiceDetailsTable">
            <tbody>
              <tr>
                <td>Invoice Amount</td>
                <td align="end">₹ 60,000</td>
              </tr>
              <tr>
                <td>CGST</td>
                <td align="end">₹ 3,600</td>
              </tr>
              <tr>
                <td>SGST</td>
                <td align="end">₹ 3,600</td>
              </tr>
              <tr>
                <td>Total Amount</td>
                <td className='price' align="end">₹ 67,200</td>
              </tr>
            </tbody>
          </table>
          <div className='amountInword'>
              <p className='m-0 bold'>Invoice Total  (in words)</p>
              <h3>Sixty seven Thousand two Hundred Rupees Only</h3>
          </div> 
      </Col>
    </Row>
    <Row>
      <Col className="gutter-row TermsConditions" span={16}>
            <h3 className='primary-clr m-0 bold'>Terms and Conditions</h3>
            <ol type="1">
              <li>Please pay within 15 days from the date of invoice, overdue interest @ 14%will be charged on delayed payments.</li>
              <li>Please quote invoice number when remitting funds.</li>
            </ol>
      </Col>
      <Col className="gutter-row AdditionalNotes" span={16}>
            <h3 className='primary-clr m-0 bold'>Additional Notes</h3>
            <p>
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout. The point of using Lorem Ipsum
              is that it has a more-or-less normal distribution of letters, as opposed to using
              "Content here, content here.
            </p>
            
      </Col>
    </Row>


    
    
 
    
    
    
    
 

     
    </Form>
  );
};

export default Overview;