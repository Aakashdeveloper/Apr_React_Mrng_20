import React, {useState} from 'react';
import useTitle from './custome';


function page2(){
    const [record, setRecord] = useState(0);
    useTitle()


    return(
        <button onClick={()=>setRecord(record+1)}>
            Record: {record}
        </button>
    )
}

export default page2;