import Link from 'next/link';

const AppRoutes = () => {
  return (
    <div>
      <Link href="/">
        <div>HomePage</div>
      </Link>
      <Link href="/about">
        <div>About</div>
      </Link>
      <Link href="contact/contact">
        <div>Contact</div>
      </Link>
    </div>
  );
};

export default AppRoutes;
