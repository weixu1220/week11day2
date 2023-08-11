import React from 'react';
function Index({meats}){
    return(
        <div>
            <h1>Index</h1>
            {meats.map((meat,i)=>
            <div key={i}>
            <a href={`/meats/${i}`}>{meat.name}</a>
            </div>
            )}
            <a href="/fruits"><button>Fruits</button></a>
            <a href="/vegetables"><button>Vegetables</button></a>
            <a href="/meats/new"><button>Add to this list</button></a>
        </div>
    )
}
export default Index;