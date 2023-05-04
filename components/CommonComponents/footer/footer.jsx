import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-10">
            <div className="container mx-auto px-4 xl:px-0">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="mb-6 lg:mb-0">
                        <Link href="/" legacyBehavior>
                            <a className="text-white font-bold text-xl">My Website</a>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/about" legacyBehavior>
                                    <a className="text-gray-300 hover:text-white">About</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" legacyBehavior>
                                    <a className="text-gray-300 hover:text-white">About</a>
                                </Link>

                            </li>
                            <li>
                                <Link href="/blog" legacyBehavior>
                                    <a className="text-gray-300 hover:text-white">Blog</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" legacyBehavior>
                                    <a className="text-gray-300 hover:text-white">Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

