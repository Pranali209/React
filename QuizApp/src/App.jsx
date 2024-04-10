import { useState } from 'react'

import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setscore] = useState(0)
  const [over, setOver] = useState(false)
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false }
      ]
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true }
      ]
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false }
      ]
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false }
      ]
    }
  ]

  const QuestionChange = (answer) => {   
    
    if (currentIndex == questions.length - 1) {
      setOver(true);
    }
    if (answer && true) {
      setscore(score+1)
      console.log('score :>> ', score);
    }
    setCurrentIndex((value) => value + 1)
  }

  return (

    <div className='w-[35rem] h-60 p-4 rounded-xl font-serif shadow-gray-800 shadow-2xl text-white' style={{ backgroundColor: '#11009E' }}>
      {over ? (<h2 className='text-2xl text-center'> You Scored {score} out of {questions.length}</h2>)
        : (
          <>
            <h2 className='text-3xl  text-white'>Questions {currentIndex}<span className='text-xl'>/{questions.length}</span></h2>
            <div style={{ display: 'flex', alignContent: 'space-between', justifyContent: 'space-evenly' }}>
              <div className='w-[15rem]'>
                <h2 className=' text-xl my-4'>{questions[currentIndex].questionText}</h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }} className='w-[16rem] my-[-3rem]'>
                {questions[currentIndex].answerOptions.map((ans) => {
                  return <button className='m-2 h-10 text-white rounded-xl p-1' style={{ backgroundColor: '#11009E', borderColor: '#B4D4FF', borderWidth: '2px' }} onClick={() => QuestionChange(ans.isCorrect)}>{ans.answerText}</button>
                })}
              </div>
            </div>
          </>
        )}


    </div>
  )
}

export default App
