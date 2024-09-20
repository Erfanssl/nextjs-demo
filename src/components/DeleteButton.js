import { deleteUser } from "@/utils/actions";

export default function DeleteButton({ userId }) {
    return (
        <form action={ deleteUser.bind(null, userId) }>
            <button style={{ marginLeft: '2rem' }}>Delete</button>
        </form>
    )
}