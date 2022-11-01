import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { async } from "@firebase/util";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from './firestore-config'

function Database() {
    
    const [users, setUsers] = useState ("")
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [DOB, setDOB] = useState("")
    const [address, setAddress] = useState("")

    const userCollectionRef = collection(db, "users")
    const adminsCollectionRef = collection(db, "admins")
    const chartOfAccountsRef = collection(db, "chartOfAccounts")

    const addUser = async (firstName, lastName, email, password, DOB, address) => {
        
        const currentDate = new Date();

        const userName = firstName.charAt(0).toLowerCase() + lastName.toLowerCase() + currentDate.getFullYear().toString().substring(2);

        await addDoc(userCollectionRef, { firstName : firstName, lastName : lastName, username : userName, email : email, password, passwordCreation : currentDate, DOB : DOB, address : address})

    }

    const updateUser = async() => {

    }

    const deleteUser = async(id) => {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc)
    }

    const addToChartOfAccounts = async (accountName, accountNumber, category, subCategory, description, initialBalance, currentBalance, debit, credit, userID, order, statement, comment) => {
        
        await addDoc(chartOfAccountsRef, { accountName : accountName, accountNumber : accountNumber, category : category,
             subCategory : subCategory, description : description, initialBalance : initialBalance, currentBalance : currentBalance, 
             debit : debit, credit : credit, userID : userID, order : order, statement : statement, comment : comment })
    }



    return (
        <div>
            <div>
                <input
                    placeholder='First Name'
                    onChange={(event) => setFirstName(event.target.value)} // we are changing the states with what we write in the text boxes
                />

                <input
                    placeholder='Last Name'
                    onChange={(event) => setLastName(event.target.value)} // we are changing the states with what we write in the text boxes
                />

                <input
                    placeholder='Email'
                    onChange={(event) => setEmail(event.target.value)} // we are changing the states with what we write in the text boxes
                />

                <input
                    placeholder='Password'
                    onChange={(event) => setPassword(event.target.value)} // we are changing the states with what we write in the text boxes
                />

                <input
                    placeholder='Date of Birth'
                    onChange={(event) => setDOB(event.target.value)} // we are changing the states with what we write in the text boxes
                />

                <input
                    placeholder='Address'
                    onChange={(event) => setAddress(event.target.value)} // we are changing the states with what we write in the text boxes
                />

                <button onClick = {() => addUser(firstName, lastName, email, password, DOB, address)}> Add User to DB </button>

            </div>

            <div>



            </div>

        </div>


    )
    
}

export default Database;

