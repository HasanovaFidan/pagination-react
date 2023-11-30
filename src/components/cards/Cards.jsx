import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Input from '../search/Input';
import CoinList from '../Coin/CoinList';

function Cards() {
  const [data, setData] = useState([]);
  const [original, setOriginal] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [post, setPost] = useState(25);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        setOriginal(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const lastItem = currentPage * post;
  const firstItem = lastItem - post;
  const paginatedData = data.slice(firstItem, lastItem);


  return (
    <div>
      <Input data={data} setData={setData} original={original} />
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {paginatedData.map((item, index) => (
              <div key={index} className="col-3 mb-5">
                <Card item={item} />
              </div>
            ))}
          </div>
          <CoinList
            paginatedData={paginatedData} setCurrentPage={setCurrentPage} currentPage={currentPage}  data={data} post={post}
          />
          <select onChange={(e)=>{
   setPost(e.target.value)
          }
       
          } name="postpage" id="">
              <option value="8">8</option>
          <option value="10">10</option>
          </select>
        
        </div>
      )}
    </div>
  );
}

export default Cards;
