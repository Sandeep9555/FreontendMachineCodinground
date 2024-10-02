import { useState } from 'react'
import Cell from './Cell'
import './App.css'
function App() {
  const [order, setOrder] = useState([])
  const [isDeactivate,setisDeactivate]=useState(false);
  const config=[
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]
  const deActivateCells=()=>{
    setisDeactivate(true);
    const timer=setInterval(()=>{
     setOrder((oriOrder)=>{
        const newOrder=oriOrder.slice();
        newOrder.pop();
        if(newOrder.length===0){
          clearInterval(timer);
          setisDeactivate(false);
        }
        return newOrder;
     })
    },300)
  }
  const activateCells=(index)=>{
    const newOrder=[...order,index];
    setOrder(newOrder);
    if(newOrder.length==config.flat(1).filter(Boolean).length){
      deActivateCells()
    }
  }
  return (
    <div className='wrapper'>
    <div 
    className='grid'
    style={{
      gridTemplateColumns:`repeat(${config[0].length},1fr)`
    }}
    >
      {
        config.flat(1).map((value,index)=>{
           return value?<Cell 
           key={index}
           filled={order.includes(index)} 
           onClick={()=>activateCells(index)}
           isDesabled={order.includes(index)|| isDeactivate}
           />:<span></span>
        })
      }
    </div>
    </div>
  )
}

export default App
