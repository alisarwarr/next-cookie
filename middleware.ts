//NEXT
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
    const rememberMe = request.cookies.get('rememberMe');
    console.log(rememberMe);   // => { name: 'rememberMe', value: true } 
                               // OR undefined

    const response = NextResponse.next();

    response.cookies.set('accessToken', '12345ABC');

    const accessToken = request.cookies.get('accessToken');
    console.log(accessToken);  // => { name: 'accessToken', value: '56879XYZ' }

    const allCookies = request.cookies.getAll()
    console.log(allCookies);   // => [{ name: 'rememberMe', value: true }, { name: 'accessToken', value: '56879XYZ' }]
                               // OR [{ name: 'accessToken', value: '56879XYZ' }]

    return response;
}


export const config = {
///////////////////////
}