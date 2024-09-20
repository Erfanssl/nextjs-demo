'use client';
import Image from "next/image";
import Link from "next/link";

export default function User({ userInfo, link }) {
    return (
        <div style={{ margin: '2rem' }}>
            {
                link ?
                    <Link href={`/users/${ userInfo.id }`}>
                        <Image
                            src={ userInfo.avatar }
                            alt={ userInfo.first_name }
                            width={200}
                            height={200}
                        />
                    </Link> :
                    <Image
                        src={ userInfo.avatar }
                        alt={ userInfo.first_name }
                        width={200}
                        height={200}
                    />
            }
            <p>first name: { userInfo.first_name }</p>
            <p>last name: { userInfo.last_name }</p>
            <p>email: { userInfo.email }</p>
        </div>
    );
}