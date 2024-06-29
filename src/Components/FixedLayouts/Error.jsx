import { Link } from "react-router-dom"

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-6 md:px-8">
      <div className="max-w-md w-full space-y-4 text-center">
        <div className="bg-red-100 dark:bg-red-900 rounded-full p-4">
          <TriangleAlertIcon className="h-8 w-8 text-red-500 dark:text-red-400" />
        </div>
        <h2 className="text-2xl font-bold text-red-500 dark:text-red-400">Oops, something went wrong!</h2>
        <p className="text-gray-500 dark:text-gray-400">
          We're sorry, but an unexpected error has occurred. Please try again later or contact our support team if the
          issue persists.
        </p>
        <Link
          to="/"
          className="inline-flex h-9 items-center justify-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-400 dark:text-gray-950 dark:hover:bg-red-500"
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}

function TriangleAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}