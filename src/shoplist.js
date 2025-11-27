import React, { useState } from 'react';

function ShopList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { 
        id: Date.now(), 
        text: newItem.trim(), 
        completed: false 
      }]);
      setNewItem('');
    }
  };

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', fontFamily: 'Arial' }}>
      <h1>Список покупок</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Добавить продукт..."
          style={{
            padding: '10px',
            width: '70%',
            marginRight: '10px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <button
          onClick={addItem}
          style={{
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Добавить
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li
            key={item.id}
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textDecoration: item.completed ? 'line-through' : 'none',
              color: item.completed ? '#888' : '#000'
            }}
          >
            <span
              onClick={() => toggleItem(item.id)}
              style={{ cursor: 'pointer', flex: 1 }}
            >
              {item.text}
            </span>
            <button
              onClick={() => deleteItem(item.id)}
              style={{
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '5px 10px',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>

      {items.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888' }}>
          Пусто
        </p>
      )}
    </div>
  );
}

export default ShopList;