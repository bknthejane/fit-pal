"use client"

import withAuth from "@/hoc/withAuth";

const TrainerLayout =({ children }: Readonly<{ children: React.ReactNode; }>)  => {
    return (
        <>
            { children }
        </>
    );
}

export default withAuth(TrainerLayout, {allowedRoles:["admin"]})