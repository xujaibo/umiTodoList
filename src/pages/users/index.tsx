import { Table, Tag, Space } from 'antd';
import './index.less';
import { connect } from 'umi';
import UserModal from './components/UserModal';
import React, { useEffect, useState } from 'react';

const index = ({ users }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [record, setRecord]       = useState({});


  const columns     = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '创建时间',
      dataIndex: 'update_time',
      key: 'update_time',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => {
            handleEdit(record);
          }}>编辑</a>
          <a>删除</a>
        </Space>
      ),
    },
  ];
  const handleEdit  = (record) => {
    console.log(record);
    setIsVisible(true);
    setRecord(record);
  };
  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <div className='userContainer'>
      <Table columns={columns} dataSource={users.userList} rowKey='id'/>
      <UserModal isVisible={isVisible} record={record} handleOk={handleClose} title='新增'/>
    </div>
  );

};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };

};


export default connect(mapStateToProps)(index);
