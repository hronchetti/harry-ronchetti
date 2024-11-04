export const Footer = () => (
  <footer className="wrapper-x flex flex-wrap items-center justify-between py-12 text-grey-60 lg:py-30 lg:text-base">
    <div className="w-full text-center sm:w-auto sm:py-2 lg:text-left xl:py-0">
      &copy; {new Date().getFullYear()} Harry Ronchetti
    </div>
    <ul className="my-4 flex w-full flex-wrap sm:w-auto">
      <li className="mx-3 my-2 w-full text-center sm:my-0 sm:w-max">
        <a
          className="block py-2 hover:underline xl:py-0"
          href="https://app.getterms.io/view/T19oC/privacy/en-au"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
      </li>
      <li className="mx-3 my-2 w-full text-center sm:my-0 sm:w-max">
        <a
          className="block py-2 hover:underline xl:py-0"
          href="https://app.getterms.io/view/T19oC/tos/en-au"
          target="_blank"
          rel="noreferrer"
        >
          Terms of Use
        </a>
      </li>
      <li className="mx-3 my-2 w-full text-center sm:my-0 sm:w-max">
        <a
          className="block py-2 hover:underline xl:py-0"
          href="https://app.getterms.io/view/T19oC/cookie/en-au"
          target="_blank"
          rel="noreferrer"
        >
          Cookie Policy
        </a>
      </li>
    </ul>
  </footer>
)
