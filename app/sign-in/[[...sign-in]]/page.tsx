import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <main className={"items-center"}>
        <SignIn />
        </main>
    )
}