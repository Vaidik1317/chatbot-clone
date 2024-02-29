import React from 'react'
// import { useState, useEffect } from 'react'

 const App = () => {
    // const [message, setMessage] = useState(null)

    const getMessages = async () => {
        const options = {
           method: "POST",
           body : JSON.stringify({
            message: "hello how are you"
           }),
           headers:{
            "Content-Type": "application/json"
           }
        }
        try {
            const response = await fetch('http://localhost:5000/completions', options)
           // console.log(response.status)
            const data = await response.json()
            console.log(data)
            // setMessage(data.choices[0].message)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className='App'>
        <section className='side-bar'>
            <button>+ New chat</button>
            <ul className='history'>
                <li>BLugh</li>
            </ul>
            <nav>
                <p>Title</p>
            </nav>

        </section>
        <section className='main'>
            <h1>Chatgpt</h1>
            <ul className='feed'>

            </ul>
            <div className='bottom-section'>
                <div className='input-container'>
                    <input name="input"/>
                    <div id="submit" onClick={getMessages}>*</div>
                </div>
                <p className='info'>Chat gpt mar 14 version. free research preview.
                    our goal is to make ai system more natural and safe to interact 
                    your feedback will help us improve</p>
            </div>

        </section>
    </div>
  )
}


export default App
