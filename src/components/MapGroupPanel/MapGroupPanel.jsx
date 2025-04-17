import React, { useState } from "react";
import { Button, Modal, Input, Tag, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { VscInfo } from "react-icons/vsc";

const MapGroupPanel = () => {
  const [groupModalVisible, setGroupModalVisible] = useState(false);
  const [pcModalVisible, setPcModalVisible] = useState(false);
  const addFilter = (label) => {
    setFilters([...filters, { label, removable: true, active: true }]);
  };

  return (
    <div className="flex justify-between items-center px-4 py-4  rounded-md">
      <div className="flex gap-2 flex-wrap">
       

        <Button
          type="default"
          icon={<VscInfo style={{width: ''}} />}
          style={{
            width:'50px',
            height:'40px'
          }}
         
        ></Button>
      </div>

      <div className="flex gap-2">
        <Button type="default" onClick={() => setPcModalVisible(true)}  style={{
            height:'40px'
          }}>
          Add a PC
        </Button>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{
            height:'40px'
          }}
          onClick={() => setGroupModalVisible(true)}
        >
          Create group
        </Button>
      </div>

      <Modal
        title="Create Group"
        open={groupModalVisible}
        onCancel={() => setGroupModalVisible(false)}
        onOk={() => setGroupModalVisible(false)}
        okText="Create"
      >
        <Form
          onFinish={(values) => {
            addFilter(values.groupName);
            setGroupModalVisible(false);
          }}
        >
          <Form.Item
            name="groupName"
            rules={[
              { required: true, message: "Please input the group name!" },
            ]}
          >
            <Input placeholder="Enter group name" />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Add a PC"
        open={pcModalVisible}
        onCancel={() => setPcModalVisible(false)}
        onOk={() => setPcModalVisible(false)}
        okText="Add"
      >
        <Form
          onFinish={(values) => {
            addFilter(values.pcName);
            setPcModalVisible(false);
          }}
        >
          <Form.Item
            name="pcName"
            rules={[{ required: true, message: "Please input the PC name!" }]}
          >
            <Input placeholder="Enter PC name" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MapGroupPanel;
