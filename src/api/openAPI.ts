import axios from "axios"
import { Configuration, OpenAIApi } from "openai"

const config = new Configuration({
    apiKey: process.env.REACT_APP_OPPENAI_KEY
})

const openai = new OpenAIApi(config)

export const createImage = async (prompt: string) => {
    return await openai.createImage({prompt, n: 1, size: "256x256"})
}