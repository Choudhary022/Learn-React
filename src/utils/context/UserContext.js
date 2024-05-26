
import { createContext } from 'react';



const UserContext=createContext({
    userName:'Akash',
    setName:()=>{},
});



export const UserProvider=({children})=>{

    const [name, setName] = useState(initialValue);


const value={name,setName};

<createContext.Provider value={value}>

{children}
</createContext.Provider>
}


export default UserContext;


