import React from "react";

function Index({foodLogs}) {
    return (
        <div>
            <h1>Food Log Index</h1>
            {foodLogs.map((foodLog,i)=>(
                <div key={i}>
                    <a href={`/foodlogs/${foodLog._id}`}>
                        <p>{foodLog.createdAt.toString().slice(0,21)}</p>
                    </a>
                </div>
            ))}
            <a href="/foodlogs/new"><button>Add a new log</button></a>
        </div>
    );
}

export default Index;