const zod = require('zod')

const validate = (arr) =>{
    const schema = zod.array(zod.number())
    const reponse = schema.safeParse(arr)
    console.log(reponse)
}

validate([1,"t",4])