import React from 'react';
function Index({vegetables}){
    return(
        <div>
            <h1>Index</h1>
            {vegetables.map((vegetable,i)=>
            <div key={i}>
            <a href={`/vegetables/${i}`}>{vegetable.name}</a>
            </div>
            )}
            <a href="/fruits"><button>Fruits</button></a>
            <a href="/meats"><button>Meats</button></a>
            <a href="/vegetables/new"><button>Add to this list</button></a>
        </div>
    )
}
export default Index;