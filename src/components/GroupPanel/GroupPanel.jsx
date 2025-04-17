import React, { useState } from 'react';
import { Button, Modal, Input, Tag } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

const GroupPanel = () => {
  const [groupModalVisible, setGroupModalVisible] = useState(false);
  const [pcModalVisible, setPcModalVisible] = useState(false);

  const [filters, setFilters] = useState([
    { label: 'All groups', removable: false, active: false },
    { label: 'Общий зал', removable: true, active: true },
    { label: 'php', removable: false, active: false },
  ]);

  const removeFilter = (label) => {
    setFilters(filters.filter((f) => f.label !== label));
  };

  return (
    <div className="flex justify-between items-center px-4 py-4 bg-[#f5f5f5] rounded-md">
      <div className="flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <Tag
            key={filter.label}
            color={filter.active ? 'blue' : 'default'}
            className="flex items-center gap-1 text-sm py-1 px-3"
            closable={filter.removable}
            onClose={() => removeFilter(filter.label)}
          >
            {filter.label}
          </Tag>
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          type="default"
          onClick={() => setPcModalVisible(true)}
        >
          Add a PC
        </Button>
        <Button
          type="primary"
          icon={<PlusOutlined />}
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
        <Input placeholder="Enter group name" />
      </Modal>

      <Modal
        title="Add a PC"
        open={pcModalVisible}
        onCancel={() => setPcModalVisible(false)}
        onOk={() => setPcModalVisible(false)}
        okText="Add"
      >
        <Input placeholder="Enter PC name" />
      </Modal>
    </div>
  );
};

export default GroupPanel;
