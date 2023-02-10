export const Footer = () => (
  <footer className="items-center grid-cols-3 py-12 wrapper-x text-grey-60 lg:grid lg:text-base lg:py-30">
    <div className="text-center lg:text-left">
      &copy; {new Date().getFullYear()} Harry Ronchetti Consulting Ltd
    </div>
    <ul className="flex flex-wrap justify-center my-4 xs:mt-8 xs:mb-7 lg:my-0">
      <li className="w-full mx-3 my-2 text-center xs:w-max xs:my-0">
        <a
          className="block py-2 hover:underline xl:py-0"
          href="https://app.getterms.io/view/T19oC/privacy/en-au"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
      </li>
      <li className="w-full mx-3 my-2 text-center xs:w-max xs:my-0">
        <a
          className="block py-2 hover:underline xl:py-0"
          href="https://app.getterms.io/view/T19oC/tos/en-au"
          target="_blank"
          rel="noreferrer"
        >
          Terms of Use
        </a>
      </li>
      <li className="w-full mx-3 my-2 text-center xs:w-max xs:my-0">
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
    <ul className="flex justify-center lg:justify-end">
      <li>
        <a
          aria-label="LinkedIn"
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
          aria-label="GitHub"
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
          aria-label="Medium"
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
