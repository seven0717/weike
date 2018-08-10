import axios from 'axios'

const getSomething = (param1,param2) => axios.get(url,{
  params: {
    param1: param1,
    param2: param2
  }
})

export default {
  getSomething
}