import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');
        try {
            const student = { id, name, age, email };
            const response = await axios.post('http://localhost:8082/api/students', student);
            setSuccessMessage('Student added successfully!');
            console.log('Student added:', response.data);

            // Clear form fields after successful submission
            setId('');
            setName('');
            setAge('');
            setEmail('');
        } catch (error) {
            setErrorMessage('Error adding student. Please try again.');
            console.error('Error adding student:', error);
        }
    };

    return (
        <div className="p-8 min-h-screen bg-gray-50 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Add Student</h2>

                {successMessage && (
                    <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded-md">
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="mb-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded-md">
                        {errorMessage}
                    </div>
                )}

                <label className="block font-semibold mb-1 text-gray-700">ID:</label>
                <input
                    type="text"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <label className="block font-semibold mb-1 text-gray-700">Name:</label>
                <input
                    type="text"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="block font-semibold mb-1 text-gray-700">Age:</label>
                <input
                    type="number"
                    className="w-full p-3 mb-4 border border-gray-300 rounded-md shadow-sm"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <label className="block font-semibold mb-1 text-gray-700">Email:</label>
                <input
                    type="email"
                    className="w-full p-3 mb-6 border border-gray-300 rounded-md shadow-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
                >
                    Add Student
                </button>
            </form>
        </div>
    );
};

export default AddStudent;
