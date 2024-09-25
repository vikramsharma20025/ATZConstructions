import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    if(req.nextUrl.pathname === "/our-projects") {
        // req.nextUrl.pathname = "/projects/1";
        return NextResponse.redirect(new URL('/project/1',req.url));
    }
}

// rewrite(new URL('/projects/1',req.url));
