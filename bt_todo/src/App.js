import React, { useState } from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

import tasks from './mocks/tasks';

function App() {
  const [taskItem, setTaskItem] = useState(tasks);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {/* TITLE : START */}
      <Title title="Project 01 - ToDo List" subtitle="NodeJS" />
      {/* TITLE : END */}

      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}

      {/* FORM : START */}
      <Form items={taskItem}
            setNewTaskItem={setTaskItem}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem} />
      {/* FORM : END */}

      {/* LIST : START */}
      <List items={taskItem}
            setTaskItem={setTaskItem}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem} />
    </>
  );
}

export default App;
