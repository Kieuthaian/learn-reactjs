import { useState } from 'react';
import './App.css';
import 'https://kit.fontawesome.com/a076d05399.js';

function App() {
  const inititems = [
    {
      name: "Nguyen Quang Huy",
      status: "18/9/2001",
    },
  ];
  const [valueInput, setValueInput] = useState({
    inputTask: "",
    inputEdit: "",
  });

  const [items, setItems] = useState(inititems);
  const handleInput = (e) => {
    const { value, name } = e.target;
    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();

  let date = day + '/' + month+ '/'+ year


  const handleSubmit = () => {
    let task = valueInput.inputTask;
    let item = [...items];
    let schema = {
      name: task,
      status: date,
    };
    item.push(schema);
    setItems(item);
    setValueInput({
      ...valueInput,
      inputTask: "",
    });
  };

  const handleDelete = (index) => {
    let item = [...items];
    item.splice(index, 1);
    setItems(item);
  };

  const handleEdit = (index) => {
    setValueInput({
      ...valueInput,
      inputEdit: items[index].name,
      indexEdit: index,
    });

  };

  const handleSaveEdit = () => {
    let item = [...items];
    let index = valueInput.indexEdit;
    item[index].name = valueInput.inputEdit;
    setItems(item);
  };
  
  return (
    <div class="wrapper">
    <header>Todo App</header>
    <div class="inputField">
      <input
        type="text" 
        name='inputTask' 
        value={valueInput.inputTask} 
        onChange={handleInput} 
        placeholder="Add your new todo">
      </input>
      <button 
        onClick={handleSubmit}>
        <i class="fas fa-plus"></i>
      </button>
    </div>
    {items?.map((item, index) => {
      return (      
    <ul class="todoList">
      <li>
        {item.status}: {item.name}
          <p>
            <span><i class="fas fa-edit" onClick={() => handleEdit(index)}></i></span>
            <span><i class="fas fa-trash" onClick={() => handleDelete(index)}></i></span>
          </p>
      </li>
    </ul>
     );
    })}
    {/* <div class="footer">
      <span>You have pending tasks</span>
      <button>Clear All</button>
    </div> */}

    <div className='edit'>
        <div className="edit__title">Edit: </div>
        <div className="inputField">
          <input
            className="content__input-todo mb-15"
            placeholder="Edit"
            name="inputEdit"
            value={valueInput.inputEdit}h
            onChange={handleInput}
          />
          <div className="content__button right mr-10">
            <button onClick={handleSaveEdit}
            >Lưu</button>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
