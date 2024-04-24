'use client'
import { useRouter } from "next/router";

export default function Page() {
    const router = useRouter()
    return <p>Study : {router.query.slug} Page</p>
}