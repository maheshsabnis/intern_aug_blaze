import Link from 'next/link';
const Header=()=>(
    <header>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/blog/first">
                    <a>First Blog</a>
                </Link>
            </li>
            <li>
                <Link href="/blog/second">
                    <a>Second Blog</a>
                </Link>
            </li>
        </ul>
    </header>
);

export default Header;