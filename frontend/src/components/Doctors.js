import React, { useEffect, useState } from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'; // React Icons
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const api = async () => {
        const response = await fetch('https://health-app-helg.onrender.com/api/doctors');
        const result = await response.json();
        console.log(result);
        setData(result);
    }

    useEffect(() => {
        api();
    }, []);

    return (
        <div className="font-sans overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-100 whitespace-nowrap">
                    <tr>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Name
                        </th>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Specialty
                        </th>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Experience
                        </th>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Phone
                        </th>
                        <th className="p-4 text-left text-xs font-semibold text-gray-800">
                            Email
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
                                {item.specialty}
                            </td>
                            <td className="p-4 text-[15px] text-gray-800">
                                {item.experience}
                            </td>
                            <td className="p-4 text-[15px] text-gray-800">
                                {item.phone}
                            </td>
                            <td className="p-4 text-[15px] text-gray-800">
                                {item.email}
                            </td>

                            <td className="p-4">
                                <button className="mr-4" title="Edit" onClick={() => navigate(`/edit-doctor/${item.id}`)}>
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
}

const handleDelete = (id) => {
    // Implement your delete logic here (API call or state update)
    console.log(`Deleting doctor with id: ${id}`);
};

export default Doctors;
