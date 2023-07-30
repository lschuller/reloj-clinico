import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="color-neutral-7 display-flex padding-m justify-content-center align-items-center">
      Powered by
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="margin-right-xs margin-left-xs">
          <Image src="/images/siux.svg" alt="SIUX Logo" width={22} height={22} />
        </span>
      </a>
      <span>+</span>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="margin-right-xs margin-left-xs">
          <Image src="/images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
}

export { Footer };