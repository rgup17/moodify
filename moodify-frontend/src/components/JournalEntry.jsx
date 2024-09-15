import React, { useState } from 'react';

function JournalEntry() {
  const [entry, setEntry] = useState('');
  const [emotion, setEmotion] = useState('');

  const handleChange = (e) => {
    setEntry(e.target.value);
  };

  const handlePredictEmotion = async () => {
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: entry }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setEmotion(data.emotion);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 p-4">
      <h2 className="text-3xl font-bold text-white pb-2">Journal Entry</h2>
      <textarea
        value={entry}
        onChange={handleChange}
        placeholder="Describe what happened today..."
        className="w-full max-w-lg h-20 p-2 border border-gray-300 rounded mb-4"
      />
      <button
        onClick={handlePredictEmotion}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Predict Emotion
      </button>
      {emotion && (
        <div className="mt-4 text-xl text-white">
          Predicted Emotion: {emotion}
        </div>
      )}
    </div>
  );
}

export default JournalEntry;