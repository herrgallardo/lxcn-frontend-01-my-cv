import Image from "next/image"

const CV = () => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto my-8 rounded-lg overflow-hidden">
      {/* Left sidebar - dark blue */}
      <div className="w-full md:w-1/3 bg-cyan-700 text-white">
        {/* Profile section */}
        <div className="flex flex-col items-center pt-10 pb-6">
          <div className="w-48 h-48 rounded-full bg-white overflow-hidden mb-6">
            <Image
              src="/images/profile-image-round.png"
              alt="Profile"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
          {/* Name */}
          <h1 className="text-3xl font-bold text-center tracking-wider">
            NAME
          </h1>
          <h2 className="text-2xl font-bold text-center tracking-wider mb-4">
            LASTNAME
          </h2>
          {/* Short description */}
          <p className="text-center px-6 text-sm">Description placeholder</p>
        </div>

        {/* Info/Contact section */}
        <div className="px-8 py-6">
          <h3 className="text-2xl font-bold mb-4">INFO</h3>
          <ul className="space-y-4">
            {/* Phone */}
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-cyan-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-sm">Phone placeholder</span>
            </li>
            {/* Email */}
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-cyan-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-sm">Email placeholder</span>
            </li>
            {/* Address */}
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-cyan-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm">Address placeholder</span>
            </li>
            {/* LinkedIn */}
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-cyan-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="text-sm">LinkedIn placeholder</span>
            </li>
          </ul>
        </div>

        {/* Skills section */}
        <div className="px-8 py-6">
          <h3 className="text-2xl font-bold mb-4">SKILLS</h3>
          <div className="space-y-3">
            <div>
              <span className="block text-sm mb-1">Skill 1</span>
              <div className="w-full bg-white rounded-full h-2">
                <div className="bg-cyan-300 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div>
              <span className="block text-sm mb-1">Skill 2</span>
              <div className="w-full bg-white rounded-full h-2">
                <div className="bg-cyan-300 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div>
              <span className="block text-sm mb-1">Skill 3</span>
              <div className="w-full bg-white rounded-full h-2">
                <div className="bg-cyan-300 h-2 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages section */}
        <div className="px-8 py-6">
          <h3 className="text-2xl font-bold mb-4">LANGUAGES</h3>
          <div className="space-y-3">
            <div>
              <span className="block text-sm mb-1">Language 1</span>
              <div className="w-full bg-white rounded-full h-2">
                <div className="bg-cyan-300 h-2 rounded-full w-full"></div>
              </div>
            </div>
            <div>
              <span className="block text-sm mb-1">Language 2</span>
              <div className="w-full bg-white rounded-full h-2">
                <div className="bg-cyan-300 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right content area - white/light blue */}
      <div className="w-full md:w-2/3 bg-white p-8">
        {/* Header/Title */}
        <div className="mb-8 pt-4">
          <h2 className="text-2xl text-cyan-700 font-bold">
            POSITION TITLE - SPECIALIZATION
          </h2>
        </div>

        {/* Education section */}
        <div className="mb-10">
          <div className="inline-block bg-cyan-600 text-white py-1 px-4 rounded-md mb-4">
            <h3 className="font-bold">EDUCATION</h3>
          </div>

          <div className="space-y-6">
            {/* Education item template */}
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="border-l-4 border-cyan-500 pl-4 ml-4 relative"
              >
                <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[10px] top-0"></div>
                <p className="text-cyan-700 font-semibold">20XX - 20XX</p>
                <p className="font-bold">Education title placeholder</p>
                <p className="text-sm text-gray-600">Institution placeholder</p>
                <p className="text-xs italic text-gray-500">
                  Grade placeholder
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience section */}
        <div>
          <div className="inline-block bg-cyan-600 text-white py-1 px-4 rounded-md mb-4">
            <h3 className="font-bold">WORK EXPERIENCE</h3>
          </div>

          <div className="space-y-6">
            {/* Work experience item template */}
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="border-l-4 border-cyan-500 pl-4 ml-4 relative"
              >
                <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[10px] top-0"></div>
                <p className="text-cyan-700 font-semibold">20XX - 20XX</p>
                <p className="font-bold">Position title placeholder</p>
                <p className="text-sm">Company placeholder, Location</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
