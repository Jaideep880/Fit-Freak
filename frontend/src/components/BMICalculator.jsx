import React, { useState, useEffect } from 'react'

const BMICalculator = () => {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = bmi.toFixed(2);
    setResult(roundedBMI);
    
  };

  return (
    <div className='w-full h-screen flex bg-gray-800'>
      <div className='w-[100%] h-[100%] bg-white text-black flex justify-center items-center'>
        <form className='text-center border rounded-lg w-[600px] h-[450px] p-9  '>
        <h1 className="text-4xl  text-black font-bold mb-4">BMI Calculator</h1>
          <label className='text-xl '>
            Weight (kg):
            <input className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
          <br /><br />
          <label className='text-xl '>
            Height (cm):
            <input className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </label>
          <br /><br />
          <label className='text-xl '>
            Age:
            <input className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <br /><br />
          <label className='text-xl '>
            Gender:
            <select className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2 text-xl ' value={gender} onChange={(e) => setGender(e.target.value)}>
              <option className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value="male">Male</option>
              <option className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value="female">Female</option>
            </select>
          </label>
          <br/><br/>
          <button onClick={calculateBMI} variant="dark"
                type='submit'>Calculate</button>
         {result && <p>Your BMI: {result}</p>}
        </form>
      </div>

    </div>
  )
}

export default BMICalculator