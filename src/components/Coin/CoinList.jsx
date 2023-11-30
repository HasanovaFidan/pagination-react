import React from 'react';
import "./coin.css"

function CoinList({ paginatedData, currentPage,setCurrentPage, handlePageChange, data, post }) {
    const pages = [];
    for (let index = 0; index < Math.ceil(data.length / post); index++) {
        pages.push(index);
    }
    
    return (
        <div>
            {pages.map((page, index) => (
                <button className={index+1==currentPage?"open":""}  onClick={()=>{
                    setCurrentPage(index+1)

                }

                } key={index} >
                    {index+1}
                </button>
            ))}
        </div>
    );
}

export default CoinList;


