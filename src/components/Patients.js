import React, { useEffect, useState } from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Patients = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const api = async () => {
        try {
            const response = await fetch('https://health-app-helg.onrender.com/api/patients');
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (error) {
            console.error("Error fetching patients data:", error);
        }
    };

    useEffect(() => {
        api();
    }, []);

    const handleDelete = (id) => {
        // Implement your delete logic here (API call or state update)
        console.log(`Deleting patient with id: ${id}`);
    };

    return (
        <div className="font-sans overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-100 whitespace-nowrap">
                    <tr>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Name
                        </th>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Age
                        </th>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Gender
                        </th>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Disease
                        </th>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Doctor ID
                        </th>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody className="whitespace-nowrap">
                    {data.map((item) => (
                        <tr className="hover:bg-gray-50" key={item.id}> {/* Assuming item.id is unique */}
                            <td className="p-4 text-[15px] text-gray-800">
                                {item.name}
                            </td>
                            <td className="p-4 text-[15px] text-gray-800">
                                {item.age}
                            </td>
                            <td className="p-4 text-[15px] text-gray-800">
                                {item.gender}
                            </td>
                            <td className="p-4 text-[15px] text-gray-800">
                                {item.disease}
                            </td>
                            <td className="p-4 text-[15px] text-gray-800">
                                {item.doctorId}
                            </td>
                            <td className="p-4">
                                <button className="mr-4" title="Edit" onClick={() => navigate(`/edit-patient/${item.id}`)}>
                                    <FaRegEdit className="w-5 fill-blue-500 hover:fill-blue-700" />
                                </button>
                                <button className="mr-4" title="Delete" onClick={() => handleDelete(item.id)}>
                                    <FaTrashAlt className="w-5 fill-red-500 hover:fill-red-700" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Patients;
