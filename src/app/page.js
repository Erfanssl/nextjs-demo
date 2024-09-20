import { login } from "@/utils/actions";
import Form from "@/components/Form";

export default function HomePage() {
    return (
        <div style={{ margin: '1rem' }}>
            Please login:
            <Form />
        </div>
    );
}
