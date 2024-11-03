import React from "react"

export const VizzlyLogo = ({
  fill = "#202939",
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 126 40"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m18.596 11.793-2.709-2.468a3.757 3.757 0 0 0-2.656-.971 3.745 3.745 0 0 0-2.58 1.146l-7.586 7.933a3.568 3.568 0 0 0-.994 2.592 3.58 3.58 0 0 0 1.174 2.52l8.126 7.404a3.758 3.758 0 0 0 2.655.971 3.746 3.746 0 0 0 2.582-1.146l2.528-2.645 2.708 2.469a3.757 3.757 0 0 0 2.656.97 3.745 3.745 0 0 0 2.581-1.146l7.585-7.932a3.567 3.567 0 0 0 .995-2.593 3.58 3.58 0 0 0-1.175-2.52l-8.125-7.404a3.757 3.757 0 0 0-2.656-.97 3.745 3.745 0 0 0-2.581 1.146l-2.528 2.644ZM32.5 19.515l-7.586 7.932a.752.752 0 0 1-1.047.035l-8.125-7.404a.715.715 0 0 1-.036-1.023l7.585-7.932a.752.752 0 0 1 1.047-.035l8.126 7.405a.714.714 0 0 1 .036 1.023Zm-27.467.41a.713.713 0 0 1 .199-.518l7.585-7.932a.752.752 0 0 1 1.047-.035l2.709 2.468-3.034 3.173a3.569 3.569 0 0 0-.995 2.593 3.58 3.58 0 0 0 1.175 2.52l3.25 2.96-2.528 2.645a.752.752 0 0 1-1.047.035L5.267 20.43a.717.717 0 0 1-.235-.504Zm41.664 9.394-6.53-15.653h4.974l3.724 9.712 3.751-9.712h4.975L51.032 29.32h-4.335Zm16.294-16.276c-1.473 0-2.53-1.14-2.53-2.415 0-1.248 1.057-2.469 2.53-2.469 1.445 0 2.556 1.221 2.556 2.47 0 1.274-1.111 2.414-2.556 2.414ZM60.74 29.346V13.64h4.501v15.707H60.74Zm7.679-.027v-3.69l6.947-7.73h-6.697v-4.26h13.505v3.554l-6.947 7.867h6.975v4.26H68.419Zm16.654 0v-3.69l6.947-7.73h-6.697v-4.26h13.505v3.554l-6.946 7.867h6.975v4.26H85.073Zm21.157.054h-4.502l.027-20.942v-.272h4.419l.056 21.214ZM117.493 38c-4.696 0-8.392-3.662-8.392-7.894v-.244h4.502v.244c0 1.98 1.695 3.77 3.89 3.77 2.335 0 3.863-1.681 3.919-3.77l.027-1.682c-1.195.597-2.528.895-3.946.895-4.446 0-8.392-3.526-8.392-7.65v-8.057h4.502l.027 8.166c.39 1.899 1.724 3.418 3.863 3.418 2.167 0 3.919-1.71 3.919-3.69v-7.894h4.501v16.494c0 4.313-3.613 7.894-8.42 7.894Z"
    />
  </svg>
)