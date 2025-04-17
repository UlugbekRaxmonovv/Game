import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import 'antd/dist/reset.css';

const PCGrid = () => {
  const [items, setItems] = useState(
    Array.from({ length: 50 }).map((_, index) => ({
      id: `pc-${index + 1}`,
      content: '',
    }))
  );

  const [visibleModal, setVisibleModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpenModal = (index) => {
    setSelectedIndex(index);
    setInputValue(items[index].content);
    setVisibleModal(true);
  };

  const handleCloseModal = () => {
    setVisibleModal(false);
    setInputValue('');
    setSelectedIndex(null);
  };

  const handleSaveValue = () => {
    if (selectedIndex === null) return;

    const newItems = [...items];
    newItems[selectedIndex].content = inputValue;
    setItems(newItems);
    handleCloseModal();
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setItems(newItems);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <div
              className="grid grid-cols-8 gap-3 p-4 max-h-[400px] overflow-y-auto custom-scroll"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <div
                    className="w-30 h-20 bg-[#f4f1ec] border rounded-md flex items-center justify-center text-sm text-center cursor-pointer hover:bg-white transition-all duration-200 group"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => handleOpenModal(index)}
                  >
                    {item.content ? (
                      item.content
                    ) : (
                      <PlusCircleOutlined
                        className="text-blue-500 text-lg opacity-0 group-hover:opacity-100 transition duration-200"
                      />
                    )}
                  </div>
                  
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Modal
        title={`PC #${selectedIndex !== null ? selectedIndex + 1 : ''} qo‘shish yoki tahrirlash`}
        open={visibleModal}
        onCancel={handleCloseModal}
        onOk={handleSaveValue}
        okText="Saqlash"
      >
        <Input
          placeholder="PC nomini kiriting"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default PCGrid;
