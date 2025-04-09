import Image from "next/image"
import cvData from "@/data/cv-data"

const CV = () => {
  const { personalInfo, education, workExperience, skills, sectionTitles } =
    cvData

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto my-8 rounded-lg overflow-hidden">
      {/* Left sidebar - dark blue */}
      <div className="w-full md:w-1/3 bg-cv-blue text-white">
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
            {personalInfo.name.split(" ")[0]}
          </h1>
          <h2 className="text-2xl font-bold text-center tracking-wider mb-4">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </h2>
          {/* Short description */}
          <p className="text-center px-6 text-sm">{personalInfo.description}</p>
        </div>

        {/* Info/Contact section */}
        <div className="px-8 py-6">
          <h3 className="text-2xl font-bold mb-4">{sectionTitles.info}</h3>
          <ul className="space-y-4">
            {/* Personal Number */}
            {personalInfo.contact.personalNumber && (
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                  {personalInfo.contact.icons?.personalNumber ? (
                    <Image
                      src={personalInfo.contact.icons.personalNumber}
                      alt="Personal Number"
                      width={16}
                      height={16}
                      className="text-cv-blue"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-cv-blue"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-sm">
                  {personalInfo.contact.personalNumber}
                </span>
              </li>
            )}

            {/* Phone */}
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                {personalInfo.contact.icons?.phone ? (
                  <Image
                    src={personalInfo.contact.icons.phone}
                    alt="Phone"
                    width={16}
                    height={16}
                    className="text-cv-blue"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-cv-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                )}
              </div>
              <span className="text-sm">{personalInfo.contact.phone}</span>
            </li>

            {/* Email */}
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                {personalInfo.contact.icons?.email ? (
                  <Image
                    src={personalInfo.contact.icons.email}
                    alt="Email"
                    width={16}
                    height={16}
                    className="text-cv-blue"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-cv-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                )}
              </div>
              <span className="text-sm">{personalInfo.contact.email}</span>
            </li>

            {/* Address */}
            <li className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                {personalInfo.contact.icons?.address ? (
                  <Image
                    src={personalInfo.contact.icons.address}
                    alt="Address"
                    width={16}
                    height={16}
                    className="text-cv-blue"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-cv-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm">
                {personalInfo.contact.address},{" "}
                {personalInfo.contact.postalCode} {personalInfo.contact.city}
              </span>
            </li>

            {/* LinkedIn */}
            {personalInfo.socialMedia.map((social, index) => (
              <li key={index} className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                  {social.icon ? (
                    <Image
                      src={social.icon}
                      alt={social.platform}
                      width={16}
                      height={16}
                      className="text-cv-blue"
                    />
                  ) : (
                    /* Default icon for social media */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-cv-blue"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M6 8a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" />
                    </svg>
                  )}
                </div>
                <span className="text-sm">{social.username || social.url}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills section */}
        <div className="px-8 py-6">
          <h3 className="text-2xl font-bold mb-4">{sectionTitles.skills}</h3>
          <div className="grid grid-cols-3 gap-4">
            {skills.technical.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                  {skill.icon && (
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                    />
                  )}
                </div>
                <span className="text-xs text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages section */}
        <div className="px-8 py-6">
          <h3 className="text-2xl font-bold mb-4">{sectionTitles.languages}</h3>
          <div className="space-y-3">
            {skills.languages.map((language, index) => (
              <div key={index}>
                <div className="flex items-center text-sm mb-1">
                  <div className="w-16 flex-shrink-0">{language.name}</div>
                  <div className="w-4 flex-shrink-0 flex items-center justify-center">
                    {language.icon && (
                      <Image
                        src={language.icon}
                        alt={language.name}
                        width={16}
                        height={16}
                      />
                    )}
                  </div>
                  {language.details && (
                    <span className="text-xs italic ml-3">
                      ({language.details})
                    </span>
                  )}
                </div>
                <div className="w-full bg-white rounded-full h-2 relative">
                  {/* Progress bar */}
                  <div
                    className="bg-sky-400 h-2 rounded-full absolute top-0 left-0"
                    style={{ width: `${(language.level / 5) * 100}%` }}
                  ></div>
                  {/* Level separators */}
                  <div className="flex w-full h-full absolute top-0 left-0 pointer-events-none">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className="flex-1 border-r border-cv-blue h-full"
                      ></div>
                    ))}
                    <div className="flex-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right content area*/}
      <div className="w-full md:w-2/3 bg-white p-8">
        {/* Header/Title */}
        <div className="mb-8 pt-4 text-center">
          <h2 className="text-2xl text-cv-blue font-bold">
            {personalInfo.professionalTitle}
          </h2>
        </div>
        {/* Education section */}
        <div className="mb-10">
          <div className="inline-block bg-cv-blue text-white py-1 px-4 rounded-md mb-4">
            <h3 className="font-bold">{sectionTitles.education}</h3>
          </div>

          <div className="relative ml-4">
            {/* Timeline items */}
            <div className="space-y-6">
              {education.map((edu, index, array) => {
                const isLastItem = index === array.length - 1

                return (
                  <div key={index} className="pl-6 relative">
                    {/* Circle with white center and blue border */}
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-cv-blue rounded-full z-10"
                      style={{
                        left: "0",
                        top: "6px",
                        transform: "translateX(-50%)",
                      }}
                    ></div>

                    {/* Line segment (not shown for last item) */}
                    {!isLastItem && (
                      <div
                        className="absolute border-l-2 border-cv-blue"
                        style={{
                          left: "0",
                          top: "8px", // Start from middle of dot (4px/2 + 6px)
                          height: "calc(100% + 30px)", // Connect exactly to the next dot center
                          transform: "translateX(-50%)",
                        }}
                      ></div>
                    )}

                    {/* Content */}
                    <p className="text-cv-blue font-semibold">{edu.period}</p>
                    <p className="font-bold">{edu.degree}</p>
                    <p className="text-sm text-cv-blue">
                      {edu.institution}, {edu.location}
                    </p>
                    {edu.grade && (
                      <p className="text-xs italic text-cv-blue">{edu.grade}</p>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Work Experience section */}
        <div>
          <div className="inline-block bg-cv-blue text-white py-1 px-4 rounded-md mb-4">
            <h3 className="font-bold">{sectionTitles.workExperience}</h3>
          </div>

          <div className="relative ml-4">
            {/* Timeline items */}
            <div className="space-y-6">
              {workExperience.map((work, index, array) => {
                const isLastItem = index === array.length - 1

                return (
                  <div key={index} className="pl-6 relative">
                    {/* Circle with white center and blue border */}
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-cv-blue rounded-full z-10"
                      style={{
                        left: "0",
                        top: "6px",
                        transform: "translateX(-50%)",
                      }}
                    ></div>

                    {/* Line segment (not shown for last item) */}
                    {!isLastItem && (
                      <div
                        className="absolute border-l-2 border-cv-blue"
                        style={{
                          left: "0",
                          top: "8px", // Start from middle of dot (4px/2 + 6px)
                          height: "calc(100% + 30px)", // Connect exactly to the next dot center
                          transform: "translateX(-50%)",
                        }}
                      ></div>
                    )}

                    {/* Content */}
                    <p className="text-cv-blue font-semibold">{work.period}</p>
                    <p className="font-bold">{work.position}</p>
                    <p className="text-sm text-cv-blue">
                      {work.company && `${work.company}, `}
                      {work.location}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CV
