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
  const [comments,setComments]= useState("")
  const [onSubmitchange,setSubmitchange]= useState(false)
  const [defaultView,setDefaultView]= useState(true)
  const accountsColRef = collection(db, "accounts")
  
  /*const addAccount = async (accountName,accountNumber,accountDescription,accountCategory,
    accountSubcategory,userID,order,debit,credit,initialBalance,endingBalance,accountCreation) => {
    
    /*await addDoc(accountsColRef, { AccountName : accountName, AccountNumber : accountNumber,
    AccountDescription : accountDescription, AccountCategory: accountCategory, AccountSubcategory 
    : accountSubcategory, UserID : userID, Order: order, Debit: debit, Credit: credit, InitialBalance
    : initialBalance, EndingBalance : endingBalance, AccountCreation : accountCreation, Comments:comments
  })*/

// }
const DefaultView=(props)=>{
    <AdminViewNewAcct style={{position:'relative' , left:'30em'}}
    overrides={{'TextField34533251' : {onChange : (event) => {setAccountName(event.target.value)}},
    'TextField34533250' : {onChange : (event) => {setAccountNumber(event.target.value) }},
    'TextField34533245': {onChange  : (event) => {setAccountDescription(event.target.value)}},
    'TextField34533247' : {onChange : (event) => {setAccountCategory(event.target.value)}},
    'TextField34533248':{onChange   : (event) => {setAccountSubCategory(event.target.value)}},
    'TextField34692999':{onChange   : (event) => {setUserID(event.target.value)}},
    'Button34533256':{onClick:onNextButton},
   }}/> 
}

<AdminViewNewAcct2 
      overrides={{
        'TextField351912593' : {onChange : (event) => {setOrder(event.target.value)}},
        'TextField351912596' : {onChange : (event) => {setDebit(event.target.value)}},
        'TextField351912597' : {onChange : (event) => {setCredit(event.target.value)}},
        'TextField351912599' : {onChange : (event) => {setInitialBalance(event.target.value)}},
        'TextField351912599' : {onChange : (event) => {setEndingBalance(event.target.value)}},
        'TextField351912595' : {onChange : (event) => {setAccountCreation(event.target.value)}},
        'TextField351912594' : {onChange : (event) => {setComments(event.target.value)}}
      }}/>

  const onNextButton = (event) => {
    { /* setSubmitchange(true);
    if(onSubmitchange){
      
        alert('button was clicked !');
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

  const addToDB=() =>{
    {addDoc(accountName,accountNumber,accountDescription,
      accountCategory,accountSubcategory,userID,order,debit,credit,initialBalance,endingBalance,
      accountCreation)}
      console.log("add accounts worked");
  }

  const addAccountToDB = async () => {
    await addDoc(accountsColRef, {acountName : accountName, accountNumber : accountNumber, accountDescription : accountDescription,
      accountCategory : accountCategory, accountSubcategory : accountSubcategory, userID : userID, order : order, debit : debit, credit : credit,
      initialBalance : initialBalance, endingBalance : endingBalance, accountCreation : accountCreation, comments : comments})
  }
  
  return (
    <>
    <div style={{position:'absolute', alignContent:'right' }}>
    
    <AdminViewNewAcct style={{position:'relative' , left:'30em'}}
    overrides={{'TextField34533251':{onChange : (event) => {setAccountName(event.target.value)}},
    'TextField34533250':{onChange : (event) => {setAccountNumber(event.target.value) }},
    'TextField34533245':{onChange  : (event) => {setAccountDescription(event.target.value)}},
    'TextField34533247':{onChange : (event) => {setAccountCategory(event.target.value)}},
    'TextField34533248':{onChange   : (event) => {setAccountSubCategory(event.target.value)}},
    'TextField34692999':{onChange   : (event) => {setUserID(event.target.value)}},
   
   }}/> 

    <AdminViewNewAcct2 style={{position:'relative' , left:'30em'}}
      overrides={{
        
        'TextField34533248':{},
        'TextField351912593':{onChange:Order},
        'TextField351912596':{onChange:Debit},
        'TextField351912597':{onChange:Credit},
        'TextField351912599':{onChange:InitialBalance},
        'TextField351912598':{onChange:finalBalance},
        'TextField351912595':{onChange: AccountCreation},
        'TextField351912594':{onChange : (event) => {setComments(event.target.value)}},
        'Button351912604'   :{onClick : () => {addToDB()}}

      }}/>

      <button onClick = {addAccountToDB}>A Button</button>
     {/*'Button351912604':{onClick:addDoc*/}
      </div>
    </>
    )
}

export default AdminViewNewAccount;