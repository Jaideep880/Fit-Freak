import React, { useState } from 'react'

const MCalculator = () => {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(null);
  const [activityLevel, setActivityLevel] = useState('sedentary'); // Default to sedentary

  // Maintenance calorie calculation function
const calculateMaintenanceCalories = () => {
  let maintenanceCalories;

  // Calculate BMR (Basal Metabolic Rate) based on gender
  if (gender === 'male') {
    maintenanceCalories = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else if (gender === 'female') {
    maintenanceCalories = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  } else {
    return 'Invalid gender';
  }

  // Adjust BMR based on activity level
  switch (activityLevel) {
    case 'sedentary':
      maintenanceCalories *= 1.2;
      break;
    case 'lightlyActive':
      maintenanceCalories *= 1.375;
      break;
    case 'moderatelyActive':
      maintenanceCalories *= 1.55;
      break;
    case 'veryActive':
      maintenanceCalories *= 1.725;
      break;
    case 'extraActive':
      maintenanceCalories *= 1.9;
      break;
    default:
      return 'Invalid activity level';
  }

  // Round maintenance calories to nearest integer
  Math.round(maintenanceCalories);
  setResult(maintenanceCalories);
};


  return (
    <div className='w-full h-screen flex bg-gray-800'>
      <div className='w-[100%] h-[100%] bg-white text-black flex justify-center items-center'>
        <form className='text-center border rounded-lg w-[600px] h-[450px] p-9  '>
          <h1 className="text-4xl  text-black font-bold mb-4">Maintenance Calories Calculator</h1>
          <label className='text-xl'>
            Weight (kg):
            <input className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
          <br/><br/>
          <label className='text-xl'>
            Height (cm):
            <input className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </label>
          <br/><br/>
          <label className='text-xl'>
            Age:
            <input className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </label>
          <br/><br/>
          <label className='text-xl'>
            Gender:
            <select className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value={gender} onChange={(e) => setGender(e.target.value)}>
              <option className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value="male">Male</option>
              <option className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value="female">Female</option>
            </select>
          </label>
          <br/><br/>
          <label className='text-xl'>
            Activity Level:
            <select className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
              <option className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value="sedentary">Sedentary (little to no exercise)</option>
              <option className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value="light">Lightly active (light exercise/sports 1-3 days/week)</option>
              <option className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value="moderate">Moderately active (moderate exercise/sports 3-5 days/week)</option>
              <option className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value="active">Very active (hard exercise/sports 6-7 days/week)</option>
              <option className='w-[100px] h-[40px] rounded-xl bg-gray-200 p-2' value="extraActive">Extra active (very hard exercise & physical job or 2x training)</option>
            </select>
          </label>
          <br/><br/>
          <button onClick={calculateMaintenanceCalories} variant="dark"
                type='submit'>Calculate</button>
         {result && <p>Your Maintenance Calories: {result}</p>}
        </form>
      </div></div>
  )
}

export default MCalculator