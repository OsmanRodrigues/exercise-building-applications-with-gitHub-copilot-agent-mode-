import React, { useEffect, useState } from "react";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `http://localhost:8000/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results || data;
        setTeams(results);
        console.log("Teams endpoint:", endpoint);
        console.log("Fetched teams:", results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4 display-6">Teams</h2>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={team.id || idx}>
                  <th scope="row">{team.id || idx + 1}</th>
                  <td>{team.name || "-"}</td>
                  <td>
                    {team.members
                      ? team.members.join(", ")
                      : JSON.stringify(team)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teams;
