const zod = require('zod')

const validate = (arr) =>{
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8)
    })
    const reponse = schema.safeParse(arr)
    console.log(reponse)
}

validate({
    email : "test@gmail.com",
    password : "1234564846541"
})