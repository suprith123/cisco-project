import React, { useState } from "react";
import AddVoter from "./AddVoter";

function VoterList() {
  const voters = [];
  const [votersList, setVotersList] = useState(voters);

  const handleSubmit = (formValues) => {
    const newVoter = {
      name: formValues.name,
      age: formValues.age,
      gender: formValues.gender,
    };
    const newVoters = [...votersList, newVoter];
    setVotersList(newVoters);
  };

  return (
    <div>
      <AddVoter updateProduct={handleSubmit} />
      <h1>Voters List</h1>
      <table border={2}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {votersList.map((voter) => (
          <tr>
            <td>{voter.name}</td>
            <td>{voter.age}</td>
            <td>{voter.gender}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default VoterList;