import { Table, Tag, Space, Button } from 'antd';
import './index.less';
import { connect } from 'umi';
import UserModal from './components/UserModal';
import React, { useEffect, useState } from 'react';

const index = (props) => {
  console.log(props, 'props');
  let { users, dispatch } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [record, setRecord] = useState({});
  const [operateType, setoperateType] = useState('add');

  const columns = [
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
          <a
            onClick={() => {
              handleEdit(record, 'edit');
            }}
          >
            编辑
          </a>
          <a>删除</a>
        </Space>
      ),
    },
  ];
  const pagination = {};
  const handleEdit = (record, type) => {
    console.log(record);
    setIsVisible(true);
    setoperateType(type);
    setRecord(record || {});
  };
  const handleClose = () => {
    setIsVisible(false);
  };
  const getFormData = (formData) => {
    console.log(formData);
    const { id }: { id: number } = record;
    console.log(operateType);
    if (operateType === 'edit') {
      console.log(1111111, 'edit');
      dispatch({
        type: 'users/editUsers',
        payload: {
          formData,
          id,
        },
      }).then((res) => {
        setIsVisible(false);
        initListData();
      });
    } else {
      console.log(22222, 'add');
      dispatch({
        type: 'users/addUsers',
        payload: {
          formData,
        },
      }).then(() => {
        setIsVisible(false);
        initListData();
      });
    }
  };
  useEffect(() => {
    initListData();
  }, []);
  const initListData = () => {
    dispatch({
      type: 'users/getRemote',
      payload: {},
    });
  };
  return (
    <div className="userContainer">
      <div className="add-btn">
        <Button
          type="primary"
          onClick={() => {
            handleEdit({}, 'add');
          }}
        >
          新增
        </Button>
      </div>
      <Table
        columns={columns}
        pagination={pagination}
        dataSource={users.userList}
        rowKey="id"
      />
      <UserModal
        isVisible={isVisible}
        record={record}
        handleOk={handleClose}
        getFormData={getFormData}
        title="新增"
      />
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(index);
