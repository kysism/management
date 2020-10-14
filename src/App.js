import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

// function App() {
//   return (
//     <div className="gray-background">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2> Let's develop management system!</h2>
//     </div>
//   );
// }

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'911111',
  'gender' : '남자',
  'job':'대학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동2',
  'birthday':'921111',
  'gender' : '남자',
  'job':'회사원'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/2',
  'name':'홍길동3',
  'birthday':'931111',
  'gender' : '남자',
  'job':'개인사업자'
}]

class App extends Component{
  render(){
    return(
      <div>
        {
            customers.map((customer, index) => (
              <Customer
              key= {customer.id}
              id = {customer.id}
              image = {customer.image}
              name ={customer.name}
              birthday ={customer.birthday}
              gender = {customer.gender}
              job = {customer.job}
            />
            ))
        }
      </div>      
    );
  }
}
export default App;
