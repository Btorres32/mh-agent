
import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {

  const [currentUser, setCurrentUser] = useState({
    signedIn: false,
    name:"",
    email: "",
    password: "",
    uniqueId:"",
    phone: "",
    paymentInfo: [],
    purchasedRecords: [],
    license: ""
  })

  return (
    <div >
      <Header />
      <Main />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
