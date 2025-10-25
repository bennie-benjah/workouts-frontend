import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
const WorkoutForm = () => {
  
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const { dispatch } = useWorkoutsContext();

const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch('/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    if (response.ok) {
        const json = await response.json();
        setTitle('');
        setLoad('');
        setReps('');
        setError(null);
        setEmptyFields([]);
        console.log("New workout added:", json);
        dispatch({ type: 'CREATE_WORKOUT', payload: json });
    }else {
        const json = await response.json();
        setEmptyFields(json.emptyFields);
        setError(json.error);
    }
};
  return (
    <div>
      <h2>Add a New Workout</h2>
      <form className="create" onSubmit={handleSubmit}>
         
        <label>
          Title:
          <input type="text" name="title" required value={title} onChange={(e) => setTitle(e.target.value)} className={emptyFields.includes('title') ? 'error' : ''} />
        </label>
        <label>
          Load (kg):
          <input type="number" name="load" value={load} onChange={(e) => setLoad(e.target.value)} className={emptyFields.includes('load') ? 'error' : ''} />
        </label>
        <label>
          Reps:
          <input type="number" name="reps" value={reps} onChange={(e) => setReps(e.target.value)} className={emptyFields.includes('reps') ? 'error' : ''} />
        </label>
        <button type="submit">Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;
