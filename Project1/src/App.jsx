import { useState } from 'react'


export function Avatar({ size, person }) {
  let imgSize = "s";
   size > 90 ?  imgSize="b" : imgSize="s";
  console.log(person)
  return (
    <>
      <h4>{person.name}</h4>
      <img src={getUrl(person , imgSize )}
        width={size}
        height={size} />
        <p><b>Profession :</b> {person.Profession}</p>
        <p><b>Awards : </b>{person.Awards}</p>
        <p><b>Discovered:</b> {person.Discovered}</p>
    </>

  )

}
function App() {

  return (
    <>
      <h1>Notable Scientists</h1>
      <Card>
        <Avatar
          person={{
            name: 'Maria Skłodowska-Curie',
            Profession: 'physicist and chemist',
            Awards: '4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
            Discovered: 'polonium (chemical element)',
            imageId:'YfeOqp2'
          }}
          size={50} />
      </Card>
      <Card>
        <Avatar
          person={{
            name: 'Katsuko Saruhashi',
            Profession: 'geochemist',
            Awards: '4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
            Discovered: 'a method for measuring carbon dioxide in seawater',
            imageId:'szV5sdG'
          }}
          size={60} />
      </Card>
    </>


  )

}

export function getUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

export function Card({ children }) {
  return (
    <div style={{ border: "1px solid black", borderRadius: '10px' , margin:'10px', padding:'10px'}}>
      {children}
    </div>
  )
}
export default App
