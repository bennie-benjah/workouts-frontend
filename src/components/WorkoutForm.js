import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Guard: must be logged in
    if (!user) {
      setError('You must be logged in');
      return;
    }

    const workout = { title, load, reps };
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/workouts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
        body: JSON.stringify(workout),
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error || 'Failed to add workout');
        setEmptyFields(json.emptyFields || []);
      } else {
        // Success: reset state
        setTitle('');
        setLoad('');
        setReps('');
        setError(null);
        setEmptyFields([]);
        dispatch({ type: 'CREATE_WORKOUT', payload: json });
        console.log('✅ New workout added:', json);
      }
    } catch (err) {
      console.error('❌ Error creating workout:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="workout-form-container">
      <h2>Add a New Workout</h2>
      <form className={`create ${isLoading ? 'loading' : ''}`} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Workout title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={emptyFields?.includes('title') ? 'error' : ''}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label>Load (kg):</label>
          <input
            type="number"
            name="load"
            placeholder="Weight load"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            className={emptyFields?.includes('load') ? 'error' : ''}
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label>Reps:</label>
          <input
            type="number"
            name="reps"
            placeholder="Number of reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className={emptyFields?.includes('reps') ? 'error' : ''}
            disabled={isLoading}
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding Workout...' : 'Add Workout'}
        </button>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default WorkoutForm;