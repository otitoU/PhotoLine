import express from 'express'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const router = express.Router()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

//////////////////////////////////
////////to test our router, we make our server send a hello message ////////
//////////////////////////////////
router.route('/').get((req, res) => {
  res.send('Zello from Dall-E')
})

//////////////////////////////////
//////// At ro, we make our server send a hello message ////////
//////////////////////////////////

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body
    const aiResponse = await openai.createImage({
      prompt,
      // n: 1,
      n: 3,

      size: '1024x1024',
      response_format: 'b64_json',
    })
    const image = aiResponse.data.data[0].b64_json
    const imag1 = aiResponse.data.data[1].b64_json
    const imag2 = aiResponse.data.data[2].b64_json

    // const images = aiResponse.data.data[0].b64_json

    res.status(200).json({ photo: [image, imag1, imag2] })
  } catch (error) {
    console.log(error)
    res.status(500).send(error?.response.data.error.message)
  }
})

export default router
