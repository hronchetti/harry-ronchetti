export const Footer = () => (
  <footer className="wrapper-width text-grey-60">
    <div>
      <span>
        &copy; {new Date().getFullYear()} Harry Ronchetti Consulting Ltd
      </span>
    </div>
    <div>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/harry-ronchetti/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/harry-ronchetti/"
            target="_blank"
            rel="noreferrer"
          >
            Cookie Policy
          </a>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/harry-ronchetti/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-linkedin block leading-7 text-[1.75rem]" />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://github.com/hronchetti"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-github block leading-7 text-[1.75rem]" />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/ux.freelancer/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon-instagram block leading-7 text-[1.75rem]" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
)
