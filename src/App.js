import './App.css';
import { useState } from "react";

function App() {
  const [note, setNote] = useState('');
  const [currentNotes, setCurrentNotes] = useState([]);

  const handleClick = () => {
    setCurrentNotes([...currentNotes, note])
    console.log(currentNotes)
  }

  const handleChange = (event) => {
    setNote(event.target.value);
  }

  return (
    <div className="App">
      <h1>Quill</h1>
      <p>Capture your thoughts with elegance</p>
      <div className='form'>
        <div className='mb-3'>
          <label htmlFor='note' className='form-label'>Note :</label>
          <input
            type='test'
            className='form-control'
            id='note'
            name='note'
            placeholder='Enter your note here...'
            onChange={handleChange}
            value = {note}
          />
          <br></br>
          <button type="button" class="btn btn-outline-primary" onClick={handleClick} >Submit</button>
        </div>
      </div>

      <div className='mb-3'>
        {
          currentNotes.length === 0
          ?
          <p>No notes added yet.</p>
          :
          <table>
            <thead>
              <th>Note</th>
            </thead>
            <tbody>
              {
                currentNotes.map((n) => (
                  <tr>
                    <td>{n}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        }
      </div>

    </div>
  );
}

export default App;
