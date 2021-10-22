import {useRouter} from 'next/router'

import Header from '../../../components/header'
// Dynamic Discussion Component
const Discussion=()=>{
    const router = useRouter()
    // define the route query parameters
    const {id, discussion}  = router.query

    return (
        <>
           <Header/>
           <h1>
               Showin the Dynamic-Route Based Component Values
           </h1>

           <h2>
               Blog Id is  ={id}
           </h2>
           <h2>
                Discussion : {discussion}
           </h2>

        </>
    );
};

export default Discussion;