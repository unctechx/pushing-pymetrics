"use server"

//Refreshes authentication

import { revalidatePath} from "next/cache";

import {redirect} from "next/navigation";

import { createClient } from "@/utils/supabase/server";

type AuthData ={
    email: string;
    password: string;
}

export async function login({email,password}:AuthData){
    const supabase=createClient();

    if (
        typeof email!="string" || typeof password !="string"|| !email||!password
    ){
        throw new Error("Please fill in both email and password");
    }

    const {error} = await supabase.auth.signInWithPassword({email,password});

    if (error){
        throw new Error(error.message)
    }

    revalidatePath("/","layout")
    redirect("/")
}
export async function signup({email,password}:AuthData){
    const supabase=createClient();

    if (
        typeof email!="string" || typeof password !="string"|| !email||!password
    ){
        throw new Error("Please fill in both email and password");
    }

    const {data, error} = await supabase.auth.signUp({email,password});

    if (error){
        throw new Error(error.message)
    }

    revalidatePath("/","layout")
    redirect("/")
}




