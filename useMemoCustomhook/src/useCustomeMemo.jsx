import React, { useEffect,useRef } from 'react'
const areEqual=(prevDeps,nextDeps)=>{
    if(prevDeps==null){
        return false;
    }
    if(prevDeps.length!==nextDeps.length){
        return false;
    }
    for(let i=0;i<prevDeps.length;i++){
        if(prevDeps[i]!=nextDeps[i]){
            return false;
        }
    }
    return true;
};
const useCustomeMemo = (cb,deps) => {
    const memoizedRef=useRef(null);

     if(!memoizedRef.current||!areEqual(memoizedRef.current.deps,deps)){
        memoizedRef.current={
            value:cb(),
            deps,
        }
     }

     useEffect(()=>{
        return ()=>{
            memoizedRef.current=null;
        }
     },[])

  return  memoizedRef.current.value;
  
}

export default useCustomeMemo;