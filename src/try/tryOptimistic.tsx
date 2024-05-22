import { Suspense, useDeferredValue, useEffect, useState } from "react";


const QueryResult = ({query}: any) => {
  const [res, setRes] = useState('');
  useEffect(() => {
    let flag = false;

    setTimeout(() => {
      if(!flag) {
        setRes(query)
      }
    }, 4000)
    return () => {
      flag = true;
    }
  }, [query])

  return <div>No Match: {res}</div>
}
const DemoSearchValue = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return <>
    <label>Search: <input type="text" value={query} onChange={e => setQuery(e.target.value)} /></label>
    <Suspense fallback={<h3>loading...</h3>}>
      <div style={{
        opacity: isStale ? '0.8' : '1'
      }}>
        <QueryResult query={deferredQuery}></QueryResult>
      </div>
    </Suspense>
  </>
}

export { DemoSearchValue };
