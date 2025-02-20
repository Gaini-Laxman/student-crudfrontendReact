import React, { useState, useEffect } from 'react';
import axios from '../axios';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sortBy, setSortBy] = useState('name');

    const fetchStudents = async () => {
        try {
            const response = await axios.get(`?sortBy=${sortBy}`);
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const searchStudents = async () => {
        try {
            const response = await axios.get('/search', { params: { name, age } });
            setStudents(response.data);
        } catch (error) {
            console.error('Error searching students:', error);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, [sortBy]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Student List</h2>

            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
                <input
                    type="text"
                    placeholder="Search by Name"
                    className="p-2 border border-gray-300 rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Search by Age"
                    className="p-2 border border-gray-300 rounded-md"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button
                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={searchStudents}
                >
                    Search
                </button>
            </div>

            <div className="mb-4">
                <label className="font-semibold mr-2">Sort By:</label>
                <select
                    className="p-2 border border-gray-300 rounded-md"
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                >
                    <option value="name">Name</option>
                    <option value="age">Age</option>
                </select>
            </div>

            <ul className="bg-white p-4 rounded-lg shadow-md">
                {students.map((student) => (
                    <li key={student.id} className="border-b py-2 last:border-none">
                        <span className="font-medium">{student.name}</span> ({student.age}) - {student.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
