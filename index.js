'use strict'

require('dotenv').config()

import axios from 'axios'

// construile une route à partire de sopn nom
const getRoute = async ({name,params})=>{
    const baseurl = process.env.API_ROUTE_URL
    const url = await axios.get(`${baseurl}`/${name}, params)
    return url
}



export default getRoute
