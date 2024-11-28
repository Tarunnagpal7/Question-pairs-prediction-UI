import { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from './config';
function App() {
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [prediction, setPrediction] = useState(null);  // Initial state as null
    const [isClicked, setIsClicked] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const predictionForm = async (e) => {
        setError('');
        setLoading(true);  // Set loading to true when form is submitted
        e.preventDefault();

        if (!question1.trim() || !question2.trim()) {
          setError('Both questions are required');
          setLoading(false);
          return; // Stop execution if validation fails
      }

        try {
            // Send question1 and question2 to the Flask backend
            const response = await axios.post(API_BASE_URL, {
                question1: question1,
                question2: question2
            });
            setIsClicked(true);
            setPrediction(response.data.prediction); // Set prediction data
            setQuestion1('');
            setQuestion2('');
        } catch (error) {
          setError('An error occurred while predicting');
        } finally {
            setLoading(false);  // Set loading to false after the request is completed
        }
    };

    return (
        <div className="m-10">
            <div className="text-center text-red-400 text-6xl font-thin mt-10">
                Duplicate Question Pairs Predictor
            </div>

            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

            <form onSubmit={predictionForm} className="flex-col justify-center align-middle m-auto mt-10 w-1/2">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Question 1</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-5"
                        type="text"
                        placeholder="Enter Question 1"
                        value={question1}
                        onChange={(e) => setQuestion1(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Question 2</label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-5"
                        type="text"
                        placeholder="Enter Question 2"
                        value={question2}
                        onChange={(e) => setQuestion2(e.target.value)}
                    />
                </div>

                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
                    type="submit"
                    disabled={loading} // Disable button during loading
                >
                    {loading ? 'Predicting...' : 'Predict'}
                </button>
            </form>

            {isClicked && prediction !== null && (
                <h2 className="text-center text-lg font-bold m-5">
                    {prediction == '1' ? 'Duplicate' : 'Non-Duplicate'}
                </h2>
            )}
        </div>
    );
}

export default App;
