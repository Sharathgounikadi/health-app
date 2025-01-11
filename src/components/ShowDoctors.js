import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaRegEdit, FaTrashAlt } from 'react-icons/fa'; // React Icons
import { useNavigate } from 'react-router-dom';

const ShowDoctors = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const api = async () => {
        const response = await fetch('http://localhost:5000/doctors');
        const result = await response.json();
        console.log(result);
        setData(result);
    }

    useEffect(() => {
        api();
    }, []);

    return (
        <div className="font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h2 className="text-gray-800 text-4xl font-extrabold">Meet our Doctors</h2>
                </div>

                <div className="grid sm:grid-cols-3 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
                    {data.map((item) => (
                        <div key={item.id} className="bg-gray-800 p-4 border rounded-lg">
                            <img src="https://readymadeui.com/team-1.webp" class="w-full object-contain object-top rounded-lg" />
                            <div className="text-center mt-4">
                                <h4 className="text-base font-semibold text-white">{item.specialty}</h4>
                                <p className="text-xs mt-2 text-white">{item.name}</p>
                                <p className="text-xs mt-2 text-white">{item.experience} years of experience</p>
                                <p className="text-xs mt-2 text-white">
                                    <FaPhoneAlt className="inline-block mr-1" />
                                    {item.phone}
                                </p>
                                <p className="text-xs mt-2 text-white">
                                    <FaEnvelope className="inline-block mr-1" />
                                    {item.email}
                                </p>
                                <div className="mt-4">
                                    <button 
                                        onClick={() => navigate(`/edit-doctor/${item.id}`)} 
                                        className="mr-4 text-blue-500 hover:text-blue-700"
                                        title="Edit"
                                    >
                                        <FaRegEdit />
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(item.id)} 
                                        className="text-red-500 hover:text-red-700"
                                        title="Delete"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // Handle delete doctor
    const handleDelete = (id) => {
        // Add your delete logic here (API call or state update)
        console.log(`Deleting doctor with id: ${id}`);
    }
};

export default ShowDoctors;
