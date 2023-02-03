export const Footer = () => (
  <footer className="items-center grid-cols-3 py-12 wrapper-x text-grey-60 lg:grid lg:text-base lg:py-30">
    <div className="text-center lg:text-left">
      &copy; {new Date().getFullYear()} Harry Ronchetti Consulting Ltd
    </div>
    <ul className="flex justify-center mt-8 mb-7 lg:my-0">
      <li className="mx-3">
        <a
          className="block hover:underline"
          href="https://www.linkedin.com/in/harry-ronchetti/"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
      </li>
      <li className="mx-3">
        <a
          className="block hover:underline"
          href="https://www.linkedin.com/in/harry-ronchetti/"
          target="_blank"
          rel="noreferrer"
        >
          Cookie Policy
        </a>
      </li>
    </ul>
    <ul className="flex justify-center lg:justify-end">
      <li>
        <a
          className="block text-grey-60 hover:text-grey-90"
          href="https://www.linkedin.com/in/harry-ronchetti/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon-linkedin block leading-7 text-[1.75rem] lg:text-2xl lg:leading-6 p-3 lg:p-0 lg:mx-3" />
        </a>
      </li>
      <li>
        <a
          className="block text-grey-60 hover:text-grey-90"
          href="https://github.com/hronchetti"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon-github block leading-7 text-[1.75rem] lg:text-2xl lg:leading-6 p-3 mx-1 lg:p-0 lg:mx-3" />
        </a>
      </li>
      <li>
        <a
          className="block text-grey-60 hover:text-grey-90"
          href="https://medium.com/@harryronchetti"
          target="_blank"
          rel="noreferrer"
        >
          <span className="icon-medium block leading-7 text-[1.75rem] lg:text-2xl lg:leading-6 p-3 lg:p-0 lg:mx-3" />
        </a>
      </li>
    </ul>
  </footer>
)
