export const Footer = () => (
  <footer className="flex flex-wrap items-center justify-between py-12 wrapper-x text-grey-60 lg:text-base lg:py-30">
    <div className="w-full text-center sm:w-auto lg:text-left sm:py-2 xl:py-0">
      &copy; {new Date().getFullYear()} Harry Ronchetti
    </div>
    <ul className="flex flex-wrap w-full my-4 sm:w-auto">
      <li className="w-full mx-3 my-2 text-center sm:w-max sm:my-0">
        <a
          className="block py-2 hover:underline xl:py-0"
          href="https://app.getterms.io/view/T19oC/privacy/en-au"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
      </li>
      <li className="w-full mx-3 my-2 text-center sm:w-max sm:my-0">
        <a
          className="block py-2 hover:underline xl:py-0"
          href="https://app.getterms.io/view/T19oC/tos/en-au"
          target="_blank"
          rel="noreferrer"
        >
          Terms of Use
        </a>
      </li>
      <li className="w-full mx-3 my-2 text-center sm:w-max sm:my-0">
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
