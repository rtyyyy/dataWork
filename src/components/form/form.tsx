import { useEffect, useState } from "react";
import useValidation from "../hooks/useValidation";

const Form = ({ getInputData }) => {
  const [formOpen, setFormOpen] = useState(false);
const [{formValid,idHandler,firstNameHandler,lastNameHandler,emailHandler,phoneHandler,submitHandler,errorId,errorFirstName,errorLastName,errorEmail,errorPhone,id,firstName,lastName,email,phone}] = useValidation({getInputData})

 const [idDirty, setIdDirty] = useState(false)
 const [firstNameDirty, setFirstNameDirty] = useState(false)
 const [lastNameDirty, setLastNameDirty] = useState(false)
 const [phoneNumberDirty, setPhoneNumberDirty] = useState(false)
 const [emailDirty, setEmailDirty] = useState(false)


  const blur = (e)=>{
    switch(e.target.placeholder){
        case 'Id':
        setIdDirty(true)
            break
        case 'First Name':
            setFirstNameDirty(true)
            break
        case 'Last Name':
            setLastNameDirty(true)
            break
        case 'phone':
            setPhoneNumberDirty(true)
            break
        case 'email':
            setEmailDirty(true)
            break
    }
  }

  return (
    <div style={{ marginTop: 20 }}>
      {!formOpen ? (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => setFormOpen(true)}
          style={{ marginTop: 100 }}
        >
          Add new element
        </button>
      ) : (
        <form
          className="needs-validation"
          style={{ display: "flex", marginBottom: 100 }}
          onSubmit={submitHandler}
        >
          <div className="form-row" style={{ marginRight: 20 }}>
            <div className="col-md-3 mb-3" style={{ width: 200 }}>
                
              <input
              onBlur={e => blur(e)}
                type="text"
                className="form-control"
                placeholder="Id"
                value={id}
                onChange={(e) => {
                  idHandler(e);
                }}
              />
              {(idDirty&&errorId)&& <div style={{color:'red', fontSize:14}}>{errorId}</div>}
            </div>
          </div>
          <div className="form-row" style={{ marginRight: 20 }}>
            <div className="col-md-4 mb-3" style={{ width: 200 }}>
           
              <input
               onBlur={e => blur(e)}
                type="text"
                className="form-control"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                    firstNameHandler(e);
                }}
              />
               {(firstNameDirty&&errorFirstName)&& <div style={{color:'red',fontSize:14}}>{errorFirstName}</div>}
            </div>
          </div>
          <div className="form-row" style={{ marginRight: 20 }}>
            <div className="col-md-4 mb-3" style={{ width: 200 }}>
          
              <input
              onBlur={e => blur(e)}
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                    lastNameHandler(e);
                }}
              />
                {(lastNameDirty&&errorLastName)&& <div style={{color:'red',fontSize:14}}>{errorLastName}</div>}
            </div>
          </div>
          <div className="form-row" style={{ marginRight: 20 }}>
            <div className="col-md-6 mb-3" style={{ width: 200 }}>
         
              <input
              onBlur={e => blur(e)}
                type="text"
                className="form-control"
                placeholder="email"
                value={email}
                onChange={(e) => {
                 emailHandler(e);
                }}
              />
                 {(emailDirty&&errorEmail)&& <div style={{color:'red',fontSize:14}}>{errorEmail}</div>}
            </div>
          </div>

          <div className="form-row">
            <div
              className="col-md-3 mb-3"
              style={{ width: 200, marginRight: 20 }}
            >
              
              <input
              onBlur={e => blur(e)}
                type="text"
                className="form-control"
                placeholder="phone"
                value={phone}
                minLength={10}
                maxLength={10}
                onChange={(e) => {
                  phoneHandler(e);
                }}
              />
              {(phoneNumberDirty&&errorPhone)&& <div style={{color:'red', fontSize:14}}>{errorPhone}</div>}
            </div>
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            style={{
              height: 50,
              marginTop: 85,
              width: 150,
              position: "absolute",
            }}
            disabled={!formValid}
          >
            Submit form
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
