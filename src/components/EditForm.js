import { editUser } from "@/utils/actions";

export default function EditForm({ userId }) {
    return (
        <form style={{ margin: '2rem' }} action={ editUser.bind(null, userId) }>
            <input placeholder="name" type="text" name="name" />
            <input placeholder="job" type="text" name="job" />
            <button>Edit</button>
        </form>
    );
}