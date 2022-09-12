
import { useState } from 'react';
import './App.css';
import ReactLogo from './logo.svg'

const myNodes = document.querySelectorAll(".bar")



function App(){
  for(let i=0; i < 7; i++){
    let days = "day" + i + ""
    
     console.log(days)
  }
  console.log()
 const [isOn, SetIsOn] = useState(false);

 /** Mouse Enter Function */
  const toggleBarClass = (e) => {
    
  console.log(myNodes)
   
  e.preventDefault();
  console.log(e.target)
 for(let i=0; i < myNodes.length; i++){

  if (e.target == myNodes[i]) {

    document.getElementById('day' + i ).classList.remove("test")
    document.getElementById('day' + i).classList.add("popup-active")
   
  } 
 }
  
  

  };
// Mouse Leave Function 
  const deactiveBarClass = (e) => {
    e.preventDefault();
     for(let i=0; i < myNodes.length; i++){

      if (e.target = myNodes[i]) {
        document.getElementById('day' + i ).classList.remove("popup-active")
        document.getElementById('day' + i ).classList.add("test")
   
  } 
    
 
   
  }
  
}
return (
  <div className='root-container'>
  <main className='container'>
<section className="balance">
<img  className='react-logo' src={ReactLogo} />
  <p id="mybalance">My Balance</p>
  <strong id="moneybalance">$921.48</strong>
</section>
<section className="graphs">
  <h1 id="spending">Spending - Last 7 Days</h1>
  <section className='days' onMouseEnter={toggleBarClass} onMouseLeave={deactiveBarClass}>
<div id="1"><div className='test' id="day0" >$17.45</div><div onMouseOver={toggleBarClass} onMouseLeave={deactiveBarClass} className="bar" id="bar1"></div>mon</div>
<div id="2"><div className='test'id="day1">$34.91</div><div onMouseOver={toggleBarClass} onMouseLeave={deactiveBarClass} className="bar" id="bar2"></div>tues</div>
<div id="3"><div className="test" id='day2'>$52.36</div><div onMouseOver={toggleBarClass} onMouseLeave={deactiveBarClass} className="bar" id="bar3"></div>wens</div>
<div id="4"><div className="test" id='day3'>$31.07</div><div onMouseOver={toggleBarClass} onMouseLeave={deactiveBarClass} className="bar" id="bar4"></div>thu</div>
<div id="5"><div className="test" id='day4'>$23.39</div><div onMouseOver={toggleBarClass} onMouseLeave={deactiveBarClass} className="bar" id="bar5"></div>fri</div>
<div id="6"><div className="test" id='day5'>$43.28</div><div  onMouseOver={toggleBarClass} onMouseLeave={deactiveBarClass} className="bar" id="bar6"></div>sat</div>
<div id="7"><div className="test" id='day6'>$25.48</div><div onMouseOver={toggleBarClass} onMouseLeave={deactiveBarClass}  className="bar" id="bar7"></div>sun</div>
  </section>
</section>
<section className="footer">
<div>

<p>Total this month </p>
<h1 id="total-month">$478.33</h1> 

</div>
<div>
<p id="percentage">+2.4%</p>

<p>from last month</p>
</div>

</section>
  </main>
  </div>
)
}

export default App
