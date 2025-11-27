import React, { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    
    if (value === '') {
      setFahrenheit('');
      return;
    }
    
    const celsiusValue = parseFloat(value);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    
    if (value === '') {
      setCelsius('');
      return;
    }
    
    const fahrenheitValue = parseFloat(value);
    if (!isNaN(fahrenheitValue)) {
      const celsiusValue = (fahrenheitValue - 32) * 5/9;
      setCelsius(celsiusValue.toFixed(2));
    }
  };

  return (
    <div style={{ 
      maxWidth: '300px', 
      margin: '50px auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ textAlign: 'center' }}>Конвертер температур</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Градусы Цельсия (°C):
        </label>
        <input
          type="number"
          value={celsius}
          onChange={handleCelsiusChange}
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
          placeholder="Введите температуру в °C"
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Градусы Фаренгейта (°F):
        </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
          placeholder="Введите температуру в °F"
        />
      </div>

      <div style={{ 
        fontSize: '14px', 
        color: '#666', 
        textAlign: 'center',
        marginTop: '20px'
      }}>
        Формулы: °F = (°C × 9/5) + 32<br />
        °C = (°F - 32) × 5/9
      </div>
    </div>
  );
}

export default TemperatureConverter;