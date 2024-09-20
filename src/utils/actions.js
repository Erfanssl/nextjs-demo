'use server';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const login = async (formData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    });

    const finalRes = await res.json();

    if (res.ok && finalRes && finalRes.token) {
        const cookiesStore = cookies()
        cookiesStore.set({ name: 'role', value: 'admin', httpOnly: true });
        redirect('/users');
    }
}

export const checkLoggedIn = async () => {
    const cookiesStore = cookies();
    const cookieName = cookiesStore.get('role');
    if (!cookieName || cookieName.name !== 'role' || cookieName.value !== 'admin') {
        redirect('/');
    }
};

export const fetchUsers = async (pageNumber) => {
    const usersReq = await fetch(`https://reqres.in/api/users?page=${ pageNumber }`);
    return usersReq.json();
};

export const fetchUser = async (userId) => {
    const usersReq = await fetch(`https://reqres.in/api/users/${ userId }`);
    return usersReq.json();
}

export const deleteUser = async (userId) => {
    const usersReq = await fetch(`https://reqres.in/api/users/${ userId }`, { method: 'DELETE' });
    if (!usersReq.ok) throw new Error('could not delete the user');

    revalidatePath('/users');
};

export const editUser = async (userId, formData) => {
    const name = formData.get('name');
    const job = formData.get('job');

    const res = await fetch(`https://reqres.in/api/users/${ userId }`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, job })
    });

    if (!res.ok) throw new Error('could not edit the user');

    revalidatePath('/users');
}

export const createUser = async (formData) => {
    const name = formData.get('name');
    const job = formData.get('job');

    const res = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ name, job })
    });

    if (!res.ok) throw new Error('could not create the user');

    revalidatePath('/users');
};

export const logout = async () => {
    const cookiesStore = cookies();
    const cookieName = cookiesStore.get('role');
    if (cookieName && cookieName.name === 'role' && cookieName.value === 'admin') {
        cookiesStore.delete('role');
        redirect('/');
    }
};
