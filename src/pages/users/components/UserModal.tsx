import { Modal, Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';

const UserModal = (props) => {
  let { title, getFormData, isVisible, record, handleOk } = props;
  const [form] = Form.useForm();
  const handleOks = () => {
    form
      .validateFields()
      .then((res) => {
        getFormData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (Object.keys(record).length) {
      form.setFieldsValue(record);
    } else {
      form.resetFields();
    }
  }, [props.isVisible]);
  return (
    <div>
      <Modal
        getContainer={false}
        title={title}
        visible={isVisible}
        onOk={handleOks}
        onCancel={handleOk}
      >
        <Form form={form} labelCol={{ span: 4 }} name="basic">
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[{ required: false, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="创建时间"
            name="create_time"
            rules={[
              { required: true, message: 'Please input your create_time!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="状态"
            name="status"
            rules={[{ required: false, message: 'Please input your status!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserModal;
