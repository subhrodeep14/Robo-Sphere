"use client";

import { ActiveSectionProvider } from "@/components/ActiveSectionContext";
import { SessionProvider } from "next-auth/react";


export function Providers({children}:{
    children: React.ReactNode
}){
    return <SessionProvider>
                <ActiveSectionProvider>
                    {children}
                </ActiveSectionProvider>
        
    </SessionProvider>
}``