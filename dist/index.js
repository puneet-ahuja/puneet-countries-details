import{useState as t,useEffect as o}from'react';const n=n=>{const[r,c]=t([]),[a,e]=t(),[s,i]=t(!1);return o((()=>{(async()=>{i(!0);try{const t=await fetch(`https://restcontries.com/v3.1/name/${n}`),o=await t.json();c(o)}catch(t){e('The country is not found')}finally{i(!1)}})()}),[n]),{country:r,error:a,loading:s}};export{n as useCountry};
