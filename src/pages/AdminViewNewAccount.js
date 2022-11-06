import {React,useState} from 'react'
import { db } from '../database/firebase'
import { AdminViewNewAcct2 } from '../ui-components'
import AdminViewNewAcct from '../ui-components/AdminViewNewAcct'
import { Firestore, collection, addDoc} from 'firebase/firestore'

export const AdminViewNewAccount = () => {
  const [accountName, setAccountName]= useState("")
  const [accountNumber, setAccountNumber]= useState("")
  const [accountDescription, setAccountDescription]= useState("")
  const [accountCategory, setAccountCategory]= useState("")
  const [accountSubcategory,setAccountSubCategory]= useState("")
  const [userID,setUserID]= useState("")
  const [order,setOrder]= useState("")
  const [debit,setDebit]= useState("")
  const [credit ,setCredit]= useState("")
  const [initialBalance,setInitialBalance]= useState("")
  const [endingBalance,setEndingBalance]= useState("")
  const [accountCreation,setAccountCreation]= useState("")
  const [comments,setComment]= useState("")
  const [onSubmitchange,setSubmitchange]= useState(false)
  const [defaultView,setDefaultView]= useState(true)
  const accountsColRef = collection(db, "accounts")
  
  const addAccount = async (accountName,accountNumber,accountDescription,accountCategory,
    accountSubcategory,userID,order,debit,credit,initialBalance,endingBalance,accountCreation) => {
    
    await addDoc(accountsColRef, { AccountName : accountName, AccountNumber : accountNumber,
    AccountDescription : accountDescription, AccountCategory: accountCategory, AccountSubcategory 
    : accountSubcategory, UserID : userID, Order: order, Debit: debit, Credit: credit, InitialBalance
    : initialBalance, EndingBalance : endingBalance, AccountCreation : accountCreation, Comments:comments
  })

}
const DefaultView=(props)=>{
  if(defaultView){
    <AdminViewNewAcct style={{position:'relative' , left:'30em'}}
    overrides={{'TextField34533251' : {onChange : (event) => {setAccountName(event.target.value)}},
    'TextField34533250' : {onChange : (event) => {setAccountNumber(event.target.value) }},
    'TextField34533245': {onChange  : (event) => {setAccountDescription(event.target.value)}},
    'TextField34533247' : {onChange : (event) => {setAccountCategory(event.target.value)}},
    'TextField34533248':{onChange   : (event) => {setAccountSubCategory(event.target.value)}},
    'TextField34692999':{onChange   : (event) => {setUserID(event.target.value)}},
    'Button34533256':{onClick : addAccountToDB},
    // 'Button34533256':{onClick:onNextButton},
   }}/> 
  }
}

// 'Button351912604'   :{onClick : () => {addToDB()}}

  /**
   * 
   * submit button action statement
   */
  const onSubmitAccountName = (event) =>{
  setAccountName(event.target.value);
    console.log(accountName);
  };
  /** 
   * submit accountNumber
  */
  const onSubmitAccountNumber = (event) =>{
  setAccountNumber(event.target.value);
    console.log(accountNumber);

  };
  const onSubmitAccountDescription = (event) =>{
  setAccountDescription(event.target.value);
    console.log(accountDescription);

  };
  const onSubmitAccountCategory = (event) =>{
  setAccountCategory(event.target.value);
    console.log(accountCategory);
  };
  const onSubmitAccountSubCategory = (event) =>{
  
    setAccountSubCategory(event.target.value);
    console.log(accountSubcategory)
  };
  const onSubmitUserID = (event)=> {
    setUserID(event.target.value);
    console.log(userID);
  }
  const onNextButton = (event) => {
    { /* setSubmitchange(true);
    if(onSubmitchange){
      
        alert('button was clicked bitch!');
      <div>
      
      <AdminViewNewAcct2 
      overrides={{
        
        'TextField34533248':{onChange:onSubmitAccountSubCategory},
        'TextField351912593':{onChange:Order},
        'TextField351912596':{onChange:Debit},
        'TextField351912597':{onChange:Credit},
        'TextField351912599':{onChange:InitialBalance},
        'TextField351912599':{onChange:finalBalance},
        'TextField351912595':{onChange: AccountCreation},
        'TextField351912594':{onChange: Comments}
      }}/>
      
    }
      </div>*/}
   
  }
  
  const Order = (event) =>{
  setOrder(event.target.value);
    console.log(order)
  };
  const Debit = (event) =>{
  setDebit(event.target.value);
    console.log(debit)
  };
  const Credit = (event) =>{
  setCredit(event.target.value);
    console.log(credit);
  };
  const InitialBalance = (event) =>{
  setInitialBalance(event.target.value);
    console.log(initialBalance)
  };
  const finalBalance = (event) =>{
  setEndingBalance(event.target.value);
    console.log(endingBalance)
  };
  const AccountCreation = (event) =>{
  setAccountCreation(event.target.value);
    console.log(accountCreation)
  };
  const Comments = (event) =>{
    setComment(event.target.value);
      console.log(comments)
    };

  const addToDB=() =>{
    {addDoc(accountName,accountNumber,accountDescription,
      accountCategory,accountSubcategory,userID,order,debit,credit,initialBalance,endingBalance,
      accountCreation)}
      console.log("add accounts worked");
  }

  const addAccountToDB = async () => {
    await addDoc(accountsColRef, {acountName : accountName, accountNumber : accountNumber, accountDescription : accountDescription,
      accountCategory : accountCategory, accountSubcategory : accountSubcategory, userID : userID})
  }
  
  return (
    <>
    <div style={{position:'absolute', alignContent:'right' }}>
    
    <AdminViewNewAcct style={{position:'relative' , left:'30em'}}
    overrides={{'TextField34533251':{onChange:onSubmitAccountName},
    'TextField34533250':{onChange:onSubmitAccountNumber},
    'TextField34533245':{onChange:onSubmitAccountDescription},
    'TextField34533247':{onChange:onSubmitAccountCategory},
    'TextField34533248':{onChange:onSubmitAccountSubCategory},
    'TextField34692999':{onChange:onSubmitUserID},
   
   }}/> 
    <AdminViewNewAcct2 style={{position:'relative' , left:'30em'}}
      overrides={{
        
        'TextField34533248':{onChange:onSubmitAccountSubCategory},
        'TextField351912593':{onChange:Order},
        'TextField351912596':{onChange:Debit},
        'TextField351912597':{onChange:Credit},
        'TextField351912599':{onChange:InitialBalance},
        'TextField351912598':{onChange:finalBalance},
        'TextField351912595':{onChange: AccountCreation},
        'TextField351912594':{onChange: Comments},
        'Button351912604'   :{onClick : () => {addToDB()}}

      }}/>

      <button onClick = {addAccountToDB}>A Button</button>
     {/*'Button351912604':{onClick:addDoc*/}
      </div>
    </>
    )
}

export default AdminViewNewAccount;