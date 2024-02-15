import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Reminders.css'; // Import CSS file

const Reminders = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [medicines, setMedicines] = useState([{ medicineName: '', dosage: '', days: [] }]);
    const [showAddUserForm, setShowAddUserForm] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users');
            setUsers(response.data.arrayList);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const addUser = async () => {
        try {
            await axios.post('http://localhost:5000/add-user', {
                name: name,
                phoneNumber: phoneNumber,
                medicines: medicines
            });
            fetchUsers(); // Refresh user list after adding
            setName('');
            setPhoneNumber('');
            setMedicines([{ medicineName: '', dosage: '', days: [] }]); // Reset medicines field
            setShowAddUserForm(false); // Hide the form after adding user
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const handleAddMedicine = () => {
        setMedicines([...medicines, { medicineName: '', dosage: '', days: [] }]);
    };

    const handleMedicineChange = (index, event) => {
        const { name, value, type, checked } = event.target;
        const updatedMedicines = [...medicines];
        if (type === 'checkbox') {
            if (checked) {
                updatedMedicines[index].days.push(value);
            } else {
                updatedMedicines[index].days = updatedMedicines[index].days.filter(day => day !== value);
            }
        } else {
            updatedMedicines[index][name] = value;
        }
        setMedicines(updatedMedicines);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'phoneNumber') {
            setPhoneNumber(value);
        }
    };

    return (
        <div className="user-management">
            <h2>Reminder Management</h2>
            <button onClick={() => setShowAddUserForm(!showAddUserForm)}>Add User</button>
            {showAddUserForm && (
                <div className="add-user-form">
                    <h3>Add User</h3>
                    <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
                    <input type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={handleChange} />
                    <h4>Medicines</h4>
                    {medicines.map((medicine, index) => (
                        <div key={index} className="medicine-inputs">
                            <input type="text" name="medicineName" placeholder="Medicine Name" value={medicine.medicineName} onChange={(event) => handleMedicineChange(index, event)} />
                            <input type="text" name="dosage" placeholder="Dosage" value={medicine.dosage} onChange={(event) => handleMedicineChange(index, event)} />
                            <div>
                                <label>
                                    <input type="checkbox" name="days" value="Monday" checked={medicine.days.includes('Monday')} onChange={(event) => handleMedicineChange(index, event)} />
                                    Monday
                                </label>
                                <label>
                                    <input type="checkbox" name="days" value="Tuesday" checked={medicine.days.includes('Tuesday')} onChange={(event) => handleMedicineChange(index, event)} />
                                    Tuesday
                                </label>
                                <label>
                                    <input type="checkbox" name="days" value="Wednesday" checked={medicine.days.includes('Wednesday')} onChange={(event) => handleMedicineChange(index, event)} />
                                    Wednesday
                                </label>
                                <label>
                                    <input type="checkbox" name="days" value="Thursday" checked={medicine.days.includes('Thursday')} onChange={(event) => handleMedicineChange(index, event)} />
                                    Thursday
                                </label>
                                <label>
                                    <input type="checkbox" name="days" value="Friday" checked={medicine.days.includes('Friday')} onChange={(event) => handleMedicineChange(index, event)} />
                                    Friday
                                </label>
                                <label>
                                    <input type="checkbox" name="days" value="Saturday" checked={medicine.days.includes('Saturday')} onChange={(event) => handleMedicineChange(index, event)} />
                                    Saturday
                                </label>
                                <label>
                                    <input type="checkbox" name="days" value="Sunday" checked={medicine.days.includes('Sunday')} onChange={(event) => handleMedicineChange(index, event)} />
                                    Sunday
                                </label>
                            </div>
                        </div>
                    ))}
                    <button onClick={handleAddMedicine}>Add Medicine</button>
                    <button onClick={addUser}>Add User</button>
                </div>
            )}
        </div>
    );
};

export default Reminders;
