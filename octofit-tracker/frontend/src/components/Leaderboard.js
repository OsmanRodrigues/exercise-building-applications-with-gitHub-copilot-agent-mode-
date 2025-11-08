import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `http://localhost:8000/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results || data;
        setLeaders(results);
        console.log("Leaderboard endpoint:", endpoint);
        console.log("Fetched leaderboard:", results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4 display-6">Leaderboard</h2>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader, idx) => (
                <tr key={leader.id || idx}>
                  <th scope="row">{leader.id || idx + 1}</th>
                  <td>{leader.name || "-"}</td>
                  <td>{leader.score || JSON.stringify(leader)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
