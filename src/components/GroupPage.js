import React, { useState } from "react";
import "../App.css";

const GroupPage = () => {
  const [formData, setFormData] = useState({
    groupId: "",
    groupName: "",
    totalMembers: "",
    dueOn: "",
    collectionDay: "",
    collectionTimeFrom: "",
    updateTime: "",
    employeeId: "",
    referredBy: "",
    status: "Active",
  });

  const [groupList, setGroupList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (editIndex === -1) {
      setGroupList([...groupList, formData]);
    } else {
      const updatedGroups = [...groupList];
      updatedGroups[editIndex] = formData;
      setGroupList(updatedGroups);
      setEditIndex(-1);
    }
    setFormData({
      groupId: "",
      groupName: "",
      totalMembers: "",
      dueOn: "",
      collectionDay: "",
      collectionTimeFrom: "",
      updateTime: "",
      employeeId: "",
      referredBy: "",
      status: "Active",
    });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(groupList[index]);
  };

  const handleDelete = (index) => {
    const updatedGroups = groupList.filter((_, i) => i !== index);
    setGroupList(updatedGroups);
  };

  return (
    <div className="group-page">
      <h2>Group Management</h2>
      <div className="form-container">
        <div className="form-field">
          <label>Group ID:</label>
          <input
            type="text"
            name="groupId"
            value={formData.groupId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Group Name:</label>
          <input
            type="text"
            name="groupName"
            value={formData.groupName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Total Members:</label>
          <input
            type="number"
            name="totalMembers"
            value={formData.totalMembers}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Due On:</label>
          <input
            type="date"
            name="dueOn"
            value={formData.dueOn}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Collection Day:</label>
          <select
            name="collectionDay"
            value={formData.collectionDay}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>
        <div className="form-field">
          <label>Collection Time From:</label>
          <input
            type="time"
            name="collectionTimeFrom"
            value={formData.collectionTimeFrom}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Update Time:</label>
          <input
            type="datetime-local"
            name="updateTime"
            value={formData.updateTime}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
        <label>Employee ID:</label>
        
        <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Referred By:</label>
          <input
            type="text"
            name="referredBy"
            value={formData.referredBy}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Closed">Closed</option>
          </select>
        </div>
        <div className="form-actions">
          <button onClick={handleSave}>
            {editIndex === -1 ? "Save" : "Update"}
          </button>
          <button
            onClick={() =>
              setFormData({
                groupId: "",
                groupName: "",
                totalMembers: "",
                dueOn: "",
                collectionDay: "",
                collectionTimeFrom: "",
                updateTime: "",
                employeeId: "",
                referredBy: "",
                status: "Active",
              })
            }
          >
            Clear
          </button>
        </div>
      </div>

      <div className="list-container">
        <h3>Group List</h3>
        {groupList.length === 0 ? (
          <p>No groups added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Group ID</th>
                <th>Group Name</th>
                <th>Total Members</th>
                <th>Due On</th>
                <th>Collection Day</th>
                <th>Collection Time</th>
                <th>Update Time</th>
                <th>Employee ID</th>
                <th>Referred By</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {groupList.map((group, index) => (
                <tr key={index}>
                  <td>{group.groupId}</td>
                  <td>{group.groupName}</td>
                  <td>{group.totalMembers}</td>
                  <td>{group.dueOn}</td>
                  <td>{group.collectionDay}</td>
                  <td>{group.collectionTimeFrom}</td>
                  <td>{group.updateTime}</td>
                  <td>{group.employeeId}</td>
                  <td>{group.referredBy}</td>
                  <td>{group.status}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default GroupPage;

