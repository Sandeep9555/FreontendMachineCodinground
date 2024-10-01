import { useState,useEffect } from 'react'
import './App.css'
function App() {
  const [products, setProducts] = useState([])
  const [page,setPage]=useState(3);
  const [totalPages,setTotalPages]=useState(0);


  const fetchProducts=async ()=>{
    const res= await fetch(`https://dummyjson.com/products?limit=10&&skip=${page*10-10}`);
    const data=await res.json();

    if(data && data.products){
      setProducts(data.products);
      setTotalPages(data.total/10)
    }
   };
   console.log(products);
   useEffect(
    ()=>{
      fetchProducts();
    },[]);
    const selectPageHandler=(selectedPage)=>{
      if(selectedPage>=1 && selectedPage<=totalPages && selectPageHandler && selectedPage!==page){
        setPage(selectedPage);
      }
      
    }
  return (
    <>
     {products.length>0 && 
     <div className='products'>
      {
        products.map((prod)=>{
            return <span className='products__single'>
              <img src={prod.thumbnail} alt={prod.title}/>
              <span>{prod.title}</span>
            </span>
        })
      }
     </div>}
     {
      products.length>0 &&
      <div className='pagination'>
      <span 
      className={page<totalPages ?"":"pagiantion__disable"}
       onClick={()=>{
            selectPageHandler(page-1)
      }}>⏮</span>
      {
        [...Array(totalPages)].map((_,i)=>{
          return <span  className={page===i+1? "pagination__selcted":""}
          onClick={()=>{
            selectPageHandler(i+1)
          }} key={i}>{i+1}</span>;
        })
      }
      <span onClick={()=>{
            selectPageHandler(page+1)}}
            className={page<totalPages ?"":"pagiantion__disable"}
      >⏭</span>
      </div>
     }
    </>
  );
}

export default App
