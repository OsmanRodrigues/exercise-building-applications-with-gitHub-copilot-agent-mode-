import React, { useEffect, useState } from "react";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `http://localhost:8000/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        const results = data.results || data;
        setWorkouts(results);
        console.log("Workouts endpoint:", endpoint);
        console.log("Fetched workouts:", results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4 display-6">Workouts</h2>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, idx) => (
                <tr key={workout.id || idx}>
                  <th scope="row">{workout.id || idx + 1}</th>
                  <td>{workout.name || "-"}</td>
                  <td>{workout.type || JSON.stringify(workout)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
