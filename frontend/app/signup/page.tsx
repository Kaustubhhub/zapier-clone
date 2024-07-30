"use client";
import { Appbar } from "@/components/Appbar";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { Features } from "@/components/Features";
import { TextInput } from "@/components/TextInput";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useRouter } from "next/navigation";

const FEATURES_LIST = [
    {
        title: "Easy setup, no coding required"
    },
    {
        title: "Free forever for core features"
    },
    {
        title: "14-day trial of premium features & apps"
    },
]

export default function () {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const handleSignUp = async () => {
        const objToPush = {
            username: email,
            name: firstName + " " + lastName,
            password: password
        }
        console.log('objToPush', objToPush);
        try {
            const response = await axios.post(BACKEND_URL + '/user/signup', objToPush)
            console.log('response', response);
            if (response.status === 200) {
                router.push('/login')
            }
        } catch (e) {
            console.log(e)
        }
    }
    return <div>
        <Appbar />
        <div className="flex justify-center pt-10 gap-4">
            <div className="flex flex-col max-w-[600px]">
                <div className="pt-20 px-20">
                    <span className="text-4xl font-semibold text-left">
                        Join millions worldwide who automate their work using Zapier.
                    </span>
                </div>
                <div className="pt-4">
                    {FEATURES_LIST.map((feat, index) => {
                        return <div className="px-20 pt-4" key={index}>
                            <Features icon={<CheckIcon1 />} title={feat.title} />
                        </div>
                    })}
                </div>
            </div>
            <div className="border flex flex-col justify-center rounded-lg p-4">
                <div className="px-4">
                    <TextInput placeholder="" title="Email" type="email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                </div>
                <div className="flex justify-center gap-3 px-4">
                    <TextInput placeholder=" " title="First Name" type="email"
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                    />
                    <TextInput
                        onChange={(e) => {
                            setLastName(e.target.value)
                        }}
                        placeholder=" " title="Last Name" type="email" />
                </div>
                <div className="px-4">
                    <TextInput
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        placeholder="" title="Password" type="password" />
                </div>
                <div className="flex justify-center pt-4 px-4">
                    <PrimaryButton type="big"
                        onClick={() => {
                            handleSignUp()
                        }}>
                        Get started free</PrimaryButton>
                </div>
                <div className="w-[450px] flex pt-4 px-4 pb-4">
                    <span className="text-md">By signing up, you agree to Zapier's <a className="text-blue-600 border-b border-blue-600" href="">terms of service</a> and <a className="border-b border-blue-600 text-blue-600" href="">privacy policy</a>.</span>
                </div>
            </div>
        </div>
    </div>
}

function CheckIcon1() {
    return <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="size-6">
            <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    </div>
}