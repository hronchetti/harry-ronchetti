import React from "react"

export const BreezeLogo = ({
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
      d="M13.233 4c6.8 0 12.314 5.514 12.314 12.315 0 .686-.056 1.366-.167 2.034l-.061.335c-.02.15-.071.292-.151.42l-.068.094-6.291 7.787a6.555 6.555 0 1 1-11.155-.002L1.366 19.19a1.023 1.023 0 0 1-.204-.43H1.16a12.361 12.361 0 0 1-.243-2.444C.918 9.514 6.43 4 13.233 4Zm-4.22 21.411c.097-.081.196-.16.297-.236l-2.66-6.933a1.022 1.022 0 0 1-.045-.155 1.746 1.746 0 0 0-3.383.142l5.791 7.182Zm2.12-1.194a6.546 6.546 0 0 1 2.098-.342c.734 0 1.44.12 2.099.343l2.428-6.317c-.394-.7-2.25-1.433-4.527-1.433-2.268 0-4.119.726-4.523 1.427l2.426 6.322Zm6.02.96c.101.076.2.154.297.236l5.797-7.177a1.748 1.748 0 0 0-3.383-.154l-.002.008a1.009 1.009 0 0 1-.01.042l-.01.031-.005.02-.022.069-2.662 6.925ZM8.768 7.064a10.278 10.278 0 0 0-5.732 8.019l-.025.232.074-.043c.304-.17.636-.3.989-.38l.178-.038a3.782 3.782 0 0 1 2.339.321c.152-3.205.944-6.08 2.177-8.11Zm4.465-1.019.12.004c2.157.14 4.2 4.023 4.473 9.115l.01.237-.131-.066c-1.193-.586-2.772-.912-4.474-.912l-.248.002c-1.642.03-3.157.367-4.3.947l-.055.028.012-.236c.277-5.186 2.392-9.119 4.593-9.119Zm4.465 1.02a10.278 10.278 0 0 1 5.73 8.018l.025.23-.073-.042a3.79 3.79 0 0 0-3.505-.095c-.153-3.206-.944-6.08-2.177-8.112Zm22.42 3.298v19.712h7.979c1.508 0 2.759-.234 3.754-.703.994-.468 1.739-1.107 2.233-1.915.494-.815.74-1.733.74-2.753 0-1-.205-1.854-.615-2.56-.411-.706-.94-1.251-1.588-1.636a4.27 4.27 0 0 0-2.012-.645v-.192a5.258 5.258 0 0 0 1.742-.76c.52-.354.934-.813 1.242-1.377.308-.571.462-1.258.462-2.06 0-.975-.238-1.848-.713-2.618-.468-.77-1.177-1.376-2.127-1.819-.943-.449-2.127-.674-3.551-.674h-7.546Zm7.411 16.728h-3.84v-5.775h3.936c.738 0 1.373.138 1.906.414a2.948 2.948 0 0 1 1.665 2.695c0 .783-.289 1.425-.866 1.925-.571.494-1.505.741-2.8.741Zm-.308-8.344H43.69v-5.438h3.61c1.051 0 1.844.247 2.376.74.54.495.809 1.124.809 1.887 0 .578-.145 1.078-.433 1.502-.283.417-.67.74-1.165.972a3.979 3.979 0 0 1-1.665.337Zm9.991-3.456v14.784h3.484v-8.691c0-.63.145-1.184.434-1.665a3.03 3.03 0 0 1 1.183-1.127 3.526 3.526 0 0 1 1.714-.413c.295 0 .6.022.914.067.32.039.555.084.703.135v-3.205a4.348 4.348 0 0 0-.607-.068 8.068 8.068 0 0 0-.645-.029c-.847 0-1.6.235-2.261.703-.655.462-1.117 1.12-1.386 1.973h-.154v-2.464h-3.379ZM73.33 30.363c-1.483 0-2.763-.307-3.84-.923-1.072-.623-1.897-1.502-2.474-2.638-.578-1.142-.866-2.486-.866-4.032 0-1.521.288-2.856.866-4.004.584-1.155 1.399-2.053 2.444-2.695 1.046-.648 2.275-.972 3.687-.972.91 0 1.77.147 2.58.442a5.83 5.83 0 0 1 2.155 1.348c.629.61 1.123 1.386 1.482 2.33.36.936.54 2.052.54 3.349v1.068H69.604c.01.823.168 1.532.471 2.127.315.61.754 1.078 1.32 1.405.564.321 1.225.481 1.982.481.507 0 .965-.07 1.376-.211.41-.148.767-.363 1.069-.645.301-.282.529-.632.683-1.05l3.253.367a5.073 5.073 0 0 1-1.174 2.252c-.571.635-1.303 1.129-2.195 1.482-.892.346-1.912.52-3.06.52ZM70.057 19.68a3.835 3.835 0 0 0-.445 1.608h6.952c-.007-.668-.151-1.261-.434-1.781a3.149 3.149 0 0 0-1.183-1.242c-.5-.301-1.085-.452-1.752-.452-.712 0-1.338.173-1.877.52-.539.34-.96.789-1.26 1.347Zm14.934 9.76c1.078.616 2.358.923 3.84.923 1.148 0 2.169-.173 3.06-.52.892-.352 1.624-.846 2.195-1.481a5.07 5.07 0 0 0 1.174-2.252l-3.253-.366a2.684 2.684 0 0 1-.683 1.049 3.054 3.054 0 0 1-1.069.645c-.41.14-.87.211-1.376.211-.757 0-1.418-.16-1.983-.48a3.365 3.365 0 0 1-1.318-1.406c-.304-.595-.461-1.304-.471-2.127h10.298v-1.068c0-1.297-.18-2.413-.54-3.35-.359-.943-.853-1.72-1.482-2.329a5.831 5.831 0 0 0-2.156-1.348 7.466 7.466 0 0 0-2.579-.442c-1.412 0-2.64.324-3.686.972-1.046.642-1.861 1.54-2.445 2.695-.577 1.148-.866 2.483-.866 4.004 0 1.546.289 2.89.866 4.032.578 1.136 1.402 2.015 2.474 2.638Zm.122-8.152c.034-.58.182-1.116.445-1.608a3.582 3.582 0 0 1 1.261-1.347c.54-.347 1.165-.52 1.877-.52.667 0 1.251.15 1.752.452.507.302.901.716 1.184 1.242.282.52.426 1.113.433 1.78h-6.952Zm12.482 8.787V27.86l7.623-9.557v-.125h-7.373V15.29h11.637v2.378l-7.258 9.393v.125h7.508v2.888H97.595Zm17.128-.635c1.077.616 2.358.923 3.84.923 1.149 0 2.169-.173 3.061-.52.891-.352 1.623-.846 2.194-1.481a5.084 5.084 0 0 0 1.175-2.252l-3.254-.366a2.67 2.67 0 0 1-.683 1.049 3.054 3.054 0 0 1-1.068.645 4.22 4.22 0 0 1-1.377.211c-.756 0-1.418-.16-1.983-.48a3.366 3.366 0 0 1-1.318-1.406c-.304-.595-.461-1.304-.471-2.127h10.297v-1.068c0-1.297-.179-2.413-.538-3.35-.36-.943-.853-1.72-1.482-2.329a5.834 5.834 0 0 0-2.156-1.348 7.466 7.466 0 0 0-2.579-.442c-1.412 0-2.642.324-3.687.972-1.046.642-1.86 1.54-2.444 2.695-.578 1.148-.866 2.483-.866 4.004 0 1.546.288 2.89.866 4.032.577 1.136 1.401 2.015 2.473 2.638Zm.122-8.152c.034-.58.182-1.116.446-1.608a3.59 3.59 0 0 1 1.26-1.347c.539-.347 1.165-.52 1.877-.52.668 0 1.251.15 1.752.452.507.302.902.716 1.184 1.242.283.52.426 1.113.433 1.78h-6.952ZM12.408 32.568l2.808-1.755a.452.452 0 0 0 0-.766l-2.808-1.755a.452.452 0 0 0-.69.383v3.51c0 .354.39.57.69.383Z"
    />
  </svg>
)
