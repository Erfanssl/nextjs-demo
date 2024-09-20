import { createUser } from "@/utils/actions";

export default function CreateForm() {
    return (
        <form style={{ margin: '2rem' }} action={ createUser }>
            <input placeholder="name" type="text" name="name" />
            <input placeholder="job" type="text" name="job" />
            <button>Create</button>
        </form>
    );
}