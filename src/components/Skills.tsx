export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-20 dark:bg-gray-950">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">My Skills</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
            <CodeIcon className="mb-4 h-12 w-12 text-orange-500" />
            <h3 className="mb-2 text-lg font-medium">React Native</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Experienced in building cross-platform mobile apps using React Native.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
            <SmartphoneIcon className="mb-4 h-12 w-12 text-orange-500" />
            <h3 className="mb-2 text-lg font-medium">Android & iOS</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Proficient in both Android and iOS development.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
            <BrushIcon className="mb-4 h-12 w-12 text-orange-500" />
            <h3 className="mb-2 text-lg font-medium">UI/UX Design</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Skilled in creating visually appealing and user-friendly interfaces.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
            <PuzzleIcon className="mb-4 h-12 w-12 text-orange-500" />
            <h3 className="mb-2 text-lg font-medium">Problem Solving</h3>
            <p className="text-center text-gray-600 dark:text-gray-400">
              Adept at identifying and solving complex problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BrushIcon(props: React.SVGProps<SVGSVGElement>) {
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
      strokeLinejoin="round">
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function PuzzleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      strokeLinejoin="round">
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}

function SmartphoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}
