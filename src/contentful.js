import { createClient } from "contentful"

export default createClient({
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    space: process.env.REACT_APP_API_SPACE
})