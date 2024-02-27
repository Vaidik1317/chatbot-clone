const PORT = 5000
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = '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'

app.post('/completions', async(req, res) => {
    const options = {
        method: "POST",
        headers : {
            "Authorization" : `Bearer ${ API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
             model: "gpt-3.5-turbo",
            // bid: "180539",
            messages: [{role: "user", content: "hello how are you"}],
        })
    }
    try {
        
     const response = await fetch('https://api.openai.com/v1/chat/completions', options)
     //  await axios.get(`http://api.brainshop.ai/get?bid=${bid}&key=${key}&uid=${uid}&msg=${msg}`) 
     const data = await response.json()
     res.send(data)
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT));
