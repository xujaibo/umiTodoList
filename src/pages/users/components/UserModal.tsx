import { Modal, Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';

const UserModal = (props) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [form]         = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(props.isVisible);
  }, [props.isVisible]);
  return (
    <div>
      <Modal title={props.title} visible={props.isVisible} onOk={props.handleOk} onCancel={props.handleOk}>
        <Form
          form={form}
          labelCol={{ span: 4 }}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="创建时间"
            name="create_time"
            rules={[{ required: true, message: 'Please input your create_time!' }]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="状态"
            name="status"
            rules={[{ required: true, message: 'Please input your status!' }]}
          >
            <Input/>
          </Form.Item>

        </Form>
      </Modal>
    </div>
  );

};

export default UserModal;

