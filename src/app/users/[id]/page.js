import { checkLoggedIn, fetchUser } from "@/utils/actions";
import User from "@/components/User";
import DeleteButton from "@/components/DeleteButton";
import EditForm from "@/components/EditForm";
import CreateForm from "@/components/CreateForm";

export default async function UserPage({ params }) {
    await checkLoggedIn();
    const user = await fetchUser(params.id);
    return (
        <>
            <User userInfo={ user.data } link={ false } />
            <DeleteButton userId={ user.data.id } />
            <EditForm userInfo={ user.data.id } />
            <CreateForm />
        </>
    );
}