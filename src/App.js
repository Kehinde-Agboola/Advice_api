import {useState} from 'react'
function App() {
  const [advice, setadvice] = useState('');

  // const getAdvice = async () => {
  // const res = await fetch("")
  // const data = await res.jason();
  // }
  const getAdvice = () =>{
    fetch("https://api.adviceslip.com/advice").then((response) => response.json()).then((data) => {
      setadvice(data.slip.id + "...." + data.slip.advice)
    })
  }
  return (
    <div className="App bg-slate-700">
      <header className="App">
      <div className='flex flex-col-reverse items-center justify-around '>
        <button className="bg-[yellow] py-2 px-4 m-5"  onClick={getAdvice}>Get Advice</button>
      <div className='bg-[white] p-10 w-[60%]'>
        <p className=''>{advice}</p>
      </div>
      </div>
      </header>
    </div>
  );
}

export default App;
