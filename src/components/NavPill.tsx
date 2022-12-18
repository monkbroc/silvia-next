import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
    page: string;
    name: string;
};

export default function NavPill({ page, name }: Props) {
    const router = useRouter();

    const isActive = router.pathname === page;

    return (
        <li className="nav-item">
          <Link className={`nav-link ${isActive ? 'active' : ''}`} href={page}>{name}</Link>
        </li>
    );  
}
