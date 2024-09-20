import { checkLoggedIn, fetchUsers } from "@/utils/actions";
import User from "@/components/User";

export default async function UsersPage() {
    await checkLoggedIn();
    const users1 = await fetchUsers(1);
    const users2 = await fetchUsers(2);
    let users = [...users1.data, ...users2.data]

    return (
        <>
            {
                users.map(user => {
                    return <User key={ user.id } userInfo={ user } link={ true } />
                })
            }
        </>
    );
}