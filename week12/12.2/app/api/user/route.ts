import { NextRequest } from "next/server"

export function GET() {
    return Response.json({
        email : 'ashu@gmail.com',
        name : 'Ashutosh Ranjan' 
    })
}

export async function POST(req: NextRequest) {
    //Extract data
    const body = await req.json()
    console.log(body)

    //Put it in database


    return Response.json({
        message : "You are logged in!"
    })
}

// eport async function PUT(req)