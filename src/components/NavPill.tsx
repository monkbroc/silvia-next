import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
    name: string;
    tab: string;
    defaultTab?: boolean;
};

export default function NavPill({ name, tab, defaultTab }: Props) {
    const { query } = useRouter();

    const isActive = (query.tab === tab) || (!query.tab && defaultTab);

    return (
        <li className="nav-item">
          <Link className={`nav-link ${isActive ? 'active' : ''}`} href={`?tab=${tab}`}>{name}</Link>
        </li>
    );  
}
