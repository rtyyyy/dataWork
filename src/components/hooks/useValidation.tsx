import { useEffect, useState } from "react";

const useValidation = ({getInputData})=>{
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [errorId, setErrorId] = useState("Id не должен быть пустым!")
    const [errorFirstName, setErrorFirstName] = useState("Поле не должно быть пустым!")
    const [errorLastName, setErrorLastName] = useState("Поле не должно быть пустым!")
    const [errorEmail, setErrorEmail] = useState("Email не должен быть пустым!")
    const [errorPhone, setErrorPhone] = useState("Телефон не должен быть пустым!")
  
    const [formValid, setFormValid] = useState(false)
    //дизейбл кнопки//
    useEffect(()=>{
      if(errorId || errorFirstName || errorLastName || errorEmail || errorPhone ){
        setFormValid(false)
      }else{
        setFormValid(true)
      }
    },[errorId,errorFirstName,errorLastName,errorEmail,errorPhone])
    
      const submitHandler = (e) => {
        e.preventDefault();
        getInputData({ id, firstName, lastName, phone, email });
      };
    //валидация для имени//
    const firstNameHandler = (e)=>{
      setFirstName(e.target.value)
      
      const regex = /^[a-zA-Z]+$/;
      if(!regex.test(String(e.target.value).toLowerCase())){
        setErrorFirstName('Используйте только буквы латинского алфавита')
      }else{
        setErrorFirstName('')
      }
    }
  //валидация для фамилии//
    const lastNameHandler = (e)=>{
      setLastName(e.target.value)
      
      const regex = /^[a-zA-Z]+$/;
      if(!regex.test(String(e.target.value).toLowerCase())){
        setErrorLastName('Используйте только буквы латинского алфавита')
      }else{
        setErrorLastName('')
      }
    }
  //валидация для емейла//
  const emailHandler = (e) =>{
      setEmail(e.target.value)
      const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(!re.test(String(e.target.value).toLowerCase())){
        setErrorEmail('Некорректно введён email')
      } else{
        setErrorEmail('')
      }
    }
    //валидация для id//
  const idHandler = (e) =>{
    setId(e.target.value)
    const re = /^[0-9]+$/
    if(!re.test(id)){
      setErrorId('Используйте только числа!')
    } else{
      setErrorId('')
    }
  }
  //валидация для номера телефона//
  const phoneHandler = (e) =>{
    setPhone(e.target.value)
    const re = /^[0-9]+$/
    if(!re.test(phone)){
      setErrorPhone(' Вводите только числа!')
    } else{
      setErrorPhone('')
    }
  }
    return [{formValid,idHandler,firstNameHandler,lastNameHandler,emailHandler,phoneHandler,submitHandler,errorId,errorFirstName,errorLastName,errorEmail,errorPhone,id,firstName,lastName,email,phone}]
}

export default useValidation