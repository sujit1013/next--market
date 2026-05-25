import {NextResponse} from "next/server"
import { jwtVerify } from "jose"

export async function proxy(request){
    // const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiZXhwIjoxNzc3MDgwMTg3fQ.WK_aoJFhNWt_M1ed3tFIgTSp7PLD9ObyD871pg2GbtM"

    // console.log("ミドルウェア")
    const token = await request.headers.get("Authorization")?.split(" ")(1)
    if (!token){
        return NextResponse.json({message:"トークンがありません"})
    }
    try {
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const  decodedJwt = await jwtVerify(token,secretKey)
        console.log("decodedJwt:",decodedJwt)
        return NextResponse.next()
    }catch{
        return NextResponse.json({message:"トークンが正しくないので、ログインしてください"})
    }
    // return NextResponse.next()
}
export const config = {
    matcher:["/api/item/create","/api/item/update/:path","/api/item/delete/:path*"],

}