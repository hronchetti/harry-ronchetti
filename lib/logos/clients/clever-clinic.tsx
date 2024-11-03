import React from "react"

export const CleverClinicLogo = ({
  fill = "#202939",
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 195 40"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.774 9.004 8.367 8.53c.4.41.434 1.052.1 1.5l-.1.117-5.255 5.36-2.798-2.853 3.252-3.316-5.15-5.252a1.108 1.108 0 0 0-1.472-.102l-.115.102L4.2 21.658l8.742 8.911a3.899 3.899 0 0 1-5.41.177l-.183-.175-6.364-6.49a3.477 3.477 0 0 1-.157-4.677l.157-.172L11.018 9.004a3.316 3.316 0 0 1 4.588-.16l.168.16Zm9.157.425 6.365 6.49a3.476 3.476 0 0 1 0 4.85L21.265 30.995a3.319 3.319 0 0 1-4.758 0l-8.366-8.53a1.16 1.16 0 0 1 0-1.617l5.255-5.357 2.797 2.85-3.252 3.316 5.151 5.252a1.108 1.108 0 0 0 1.587 0l8.401-8.568-8.74-8.911a3.9 3.9 0 0 1 5.591-.002Zm55.646 7.839c-1.298-1.315-2.989-1.972-5.073-1.972-2.086 0-3.787.684-5.1 2.051-1.316 1.368-1.975 3.19-1.975 5.465 0 2.277.65 4.102 1.947 5.477 1.297 1.376 2.986 2.065 5.061 2.065 1.678 0 3.09-.428 4.232-1.285a6.523 6.523 0 0 0 2.361-3.293h-3.192l-.097.19c-.669 1.232-1.77 1.848-3.303 1.848-1.107 0-2.03-.357-2.764-1.073-.736-.714-1.14-1.68-1.207-2.898h10.954l.037-.268c.045-.363.067-.75.067-1.16 0-2.118-.649-3.833-1.948-5.147Zm28.889 0c-1.299-1.315-2.989-1.972-5.074-1.972s-3.786.684-5.1 2.051c-1.316 1.368-1.974 3.19-1.974 5.465 0 2.277.65 4.102 1.948 5.477 1.297 1.376 2.984 2.065 5.061 2.065 1.678 0 3.089-.428 4.231-1.285a6.531 6.531 0 0 0 2.361-3.293h-3.191l-.098.19c-.669 1.232-1.771 1.848-3.303 1.848-1.107 0-2.03-.357-2.764-1.073-.736-.714-1.138-1.68-1.207-2.898h10.953l.037-.268a9.66 9.66 0 0 0 .068-1.16c0-2.118-.65-3.833-1.948-5.147Zm82.084-.715c-1.134-.837-2.565-1.257-4.296-1.257-2.06 0-3.742.688-5.049 2.064-1.307 1.376-1.959 3.199-1.959 5.465 0 2.268.648 4.089 1.947 5.464 1.298 1.376 2.985 2.065 5.061 2.065 1.694 0 3.114-.438 4.257-1.31 1.142-.874 1.92-2.052 2.335-3.533h-3.193c-.554 1.535-1.685 2.301-3.399 2.301-1.212 0-2.176-.44-2.893-1.322-.719-.882-1.079-2.108-1.079-3.678 0-1.57.359-2.792 1.079-3.665.717-.873 1.681-1.31 2.893-1.31 1.731 0 2.864.767 3.399 2.303h3.193c-.398-1.554-1.163-2.748-2.296-3.587ZM57.931 12.928c-1.497-.96-3.206-1.442-5.125-1.442-2.579 0-4.76.886-6.541 2.66-1.783 1.772-2.673 4.022-2.673 6.748 0 2.725.891 4.97 2.673 6.734 1.781 1.764 3.962 2.646 6.54 2.646 1.921 0 3.63-.475 5.126-1.429 1.498-.953 2.584-2.31 3.258-4.075h-3.556c-.969 1.852-2.578 2.778-4.828 2.778-1.817 0-3.3-.607-4.452-1.826-1.15-1.217-1.726-2.826-1.726-4.828 0-2.003.576-3.613 1.727-4.83 1.15-1.217 2.634-1.826 4.452-1.826 2.25 0 3.857.926 4.828 2.779h3.556c-.674-1.764-1.761-3.127-3.259-4.089Zm84.381 0c-1.497-.96-3.206-1.442-5.126-1.442-2.578 0-4.76.886-6.541 2.66-1.783 1.772-2.672 4.022-2.672 6.748 0 2.725.89 4.97 2.672 6.734 1.782 1.764 3.963 2.646 6.541 2.646 1.921 0 3.629-.475 5.126-1.429 1.497-.953 2.584-2.31 3.258-4.075h-3.556c-.97 1.852-2.579 2.778-4.828 2.778-1.816 0-3.301-.607-4.451-1.826-1.151-1.217-1.726-2.826-1.726-4.828 0-2.003.575-3.613 1.726-4.83 1.15-1.217 2.635-1.826 4.451-1.826 2.249 0 3.859.926 4.828 2.779h3.556c-.674-1.764-1.761-3.127-3.258-4.089Zm-75.75 17.187V10.533h-2.96v19.582h2.96Zm23.36-2.7-4.05-11.88h-3.165l5.424 14.58h3.581l5.452-14.58H93.97l-4.048 11.88Zm30.602-8.996v-3.123h-.001c-1.938 0-3.366.926-4.283 2.779v-2.54h-2.959v14.58h2.959v-7.673c0-1.483.299-2.523.896-3.123.596-.6 1.476-.9 2.635-.9h.753Zm30.418 11.696V10.533h-2.959v19.582h2.959Zm5.815 0v-14.58h-2.959v14.58h2.959Zm14.366-13.178c-1.047-1.094-2.375-1.64-3.985-1.64-2.094 0-3.616.846-4.568 2.54v-2.302h-2.96v14.58h2.96v-8.15c0-1.306.324-2.306.973-3.002.649-.697 1.528-1.046 2.636-1.046 1.107 0 1.981.349 2.621 1.046.64.696.96 1.696.96 3.001v8.151h2.933v-8.6c0-1.957-.523-3.484-1.57-4.578Zm7.254 13.178v-14.58h-2.959v14.58h2.959ZM72.752 18.91c.736-.714 1.648-1.073 2.74-1.073 1.088 0 2.014.359 2.776 1.073.761.714 1.15 1.67 1.167 2.87h-7.943l.028-.252c.139-1.082.55-1.955 1.232-2.618Zm28.889 0c.735-.714 1.647-1.073 2.737-1.073 1.091 0 2.016.359 2.777 1.073.763.714 1.151 1.67 1.169 2.87h-7.943l.028-.252c.138-1.082.549-1.955 1.232-2.618Zm54.986-8.614a1.804 1.804 0 0 0-1.338-.557c-.527 0-.973.188-1.336.557-.364.371-.545.83-.545 1.377s.181 1.004.545 1.375a1.8 1.8 0 0 0 1.336.555c.528 0 .975-.185 1.338-.555.363-.37.544-.828.544-1.376 0-.546-.181-1.005-.544-1.376Zm21.62 0a1.802 1.802 0 0 0-1.337-.557c-.528 0-.972.188-1.337.557-.362.371-.545.83-.545 1.377s.183 1.004.545 1.375c.365.37.809.555 1.337.555.528 0 .974-.185 1.337-.555.364-.37.545-.828.545-1.376 0-.546-.181-1.005-.545-1.376Z"
    />
  </svg>
)
