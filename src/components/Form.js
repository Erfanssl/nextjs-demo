'use client';

import { login } from "@/utils/actions";

export default function Form() {
    // console.log('message is: ', message);
    return (
        <form action={ login }>
            <input name="email" type="email" />
            <input name="password" type="password" />
            <button>Submit</button>
        </form>
    );
}