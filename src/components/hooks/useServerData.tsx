import axios from "axios"
import {  Dispatch, SetStateAction, useEffect, useState } from "react"

interface IElements{
    id : number,
    firstName: string,
    lastName: string,
    email:string,
    phone:string,
    streetAddress:string
  }
  // type UseServerDataReturn = [
  //   {
  //     elements: IElements[];
  //     isLoading: boolean;
  //     setElements: Dispatch<SetStateAction<IElements[]>>;
  //     setIsLoading: Dispatch<SetStateAction<boolean>>;
      
  //   },
  //   () => Promise<void>
  // ];
 

  // :UseServerDataReturn
const useServerData = ({url,isButtonClick}) =>{

    const [elements, setElements] = useState<IElements[]>([])
    const [isLoading, setIsLoading] = useState(false)
  
    
    const getData = () => {

    }
    useEffect(() => {
      if(!isButtonClick){
        return
      }
      setIsLoading(true)
      axios.get(url)
      .then(res => {
        setElements(res.data)
        setIsLoading(false)
      } )
      .catch(error => console.log("Ошибка"));
      }, [url, isButtonClick ]);
      
    return[{elements, setElements,isLoading, setIsLoading}, getData]
}

export default useServerData