import Image from "next/image"
import Link from "next/link"
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
          <div className="w-48 h-48 rounded-full bg-white/20 overflow-hidden mb-6 shadow shadow-black hover:scale-115 transition-all duration-300 hover:shadow-lg">
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
        <div className="px-8 py-8">
          <h3 className="text-2xl font-bold mb-8">{sectionTitles.info}</h3>
          <ul className="space-y-4">
            {/* Phone */}
            <li className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                {personalInfo.contact.icons?.phone ? (
                  <Image
                    src={personalInfo.contact.icons.phone}
                    alt="Phone"
                    width={24}
                    height={24}
                    className="text-cv-blue"
                  />
                ) : null}
              </div>
              <Link
                href={`tel:${personalInfo.contact.phone.replace(/\s+/g, "")}`}
                className="text-sm hover:text-indigo-300 hover:underline transition-colors duration-300"
              >
                {personalInfo.contact.phone}
              </Link>
            </li>

            {/* Email */}
            <li className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                {personalInfo.contact.icons?.email ? (
                  <Image
                    src={personalInfo.contact.icons.email}
                    alt="Email"
                    width={24}
                    height={24}
                    className="text-cv-blue"
                  />
                ) : null}
              </div>
              <Link
                href={`mailto:${personalInfo.contact.email}`}
                className="text-sm hover:text-indigo-300 hover:underline transition-colors duration-300"
              >
                {personalInfo.contact.email}
              </Link>
            </li>

            {/* Address */}
            <li className="flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                {personalInfo.contact.icons?.address ? (
                  <Image
                    src={personalInfo.contact.icons.address}
                    alt="Address"
                    width={24}
                    height={24}
                    className="text-cv-blue"
                  />
                ) : null}
              </div>
              <span className="text-sm">
                {personalInfo.contact.address},{" "}
                {personalInfo.contact.postalCode} {personalInfo.contact.city}
              </span>
            </li>

            {/* Social Media / LinkedIn */}
            {personalInfo.socialMedia.map((social, index) => (
              <li key={index} className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  {social.icon ? (
                    <Image
                      src={social.icon}
                      alt={social.platform}
                      width={24}
                      height={24}
                      className="text-cv-blue"
                    />
                  ) : null}
                </div>
                {social.url ? (
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-indigo-300 hover:underline transition-colors duration-300"
                  >
                    {social.username}
                  </Link>
                ) : (
                  <span className="text-sm">
                    {social.username || social.url}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills section */}
        <div className="px-8 py-8">
          <h3 className="text-2xl font-bold mb-8">{sectionTitles.skills}</h3>
          <div className="grid grid-cols-3 gap-4">
            {skills.technical.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2 border-2 border-indigo-600 shadow shadow-black transition-all duration-300 group-hover:scale-115 group-hover:shadow-lg">
                  {skill.icon && (
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={36}
                      height={36}
                    />
                  )}
                </div>
                <span className="text-xs font-semibold text-center transition-all duration-300 group-hover:scale-125 group-hover:text-indigo-700">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Languages section */}
        <div className="px-8 py-8">
          <h3 className="text-2xl font-bold mb-8">{sectionTitles.languages}</h3>
          <div className="space-y-3">
            {skills.languages.map((language, index) => (
              <div key={index}>
                <div className="flex items-center text-sm mb-2">
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
                    className="bg-indigo-400 h-2 rounded-full absolute top-0 left-0"
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
          <div className="inline-block bg-cv-blue/20 text-cv-blue shadow shadow-black/25 py-2 px-4 rounded-md mb-6">
            <h3 className="font-bold">{sectionTitles.education}</h3>
          </div>

          <div className="relative ml-4">
            {/* Timeline items */}
            <div className="space-y-6">
              {education.map((edu, index, array) => {
                const isLastItem = index === array.length - 1

                return (
                  <div key={index} className="pl-6 relative group">
                    {/* Circle with white center and blue border */}
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-cv-blue rounded-full z-10 shadow shadow-black/20 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-black/50"
                      style={{
                        left: "0",
                        top: "20px",
                        transform: "translateX(-50%)",
                      }}
                    ></div>

                    {/* Line segment (not shown for last item) */}
                    {!isLastItem && (
                      <div
                        className="absolute border-l-2 border-cv-blue shadow shadow-black/20"
                        style={{
                          left: "0",
                          top: "20px", // Start from middle of dot (4px/2 + 6px)
                          height: "calc(100% + 30px)", // Connect exactly to the next dot center
                          transform: "translateX(-50%)",
                        }}
                      ></div>
                    )}

                    {/* Content */}
                    <div className="bg-cv-blue/10 shadow shadow-black/25 rounded-md p-4 hover:scale-102 hover:shadow-lg transition-all duration-300">
                      <p className="text-cv-blue font-semibold">{edu.period}</p>
                      <p className="font-bold text-cv-blue">{edu.degree}</p>
                      <p className="text-sm text-cv-blue">
                        {edu.institution}, {edu.location}
                      </p>
                      {edu.grade && (
                        <p className="text-xs italic text-cv-blue">
                          {edu.grade}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Work Experience section */}
        <div>
          <div className="inline-block bg-cv-blue/20 text-cv-blue shadow shadow-black/25 py-2 px-4 rounded-md mb-6">
            <h3 className="font-bold">{sectionTitles.workExperience}</h3>
          </div>

          <div className="relative ml-4">
            {/* Timeline items */}
            <div className="space-y-6">
              {workExperience.map((work, index, array) => {
                const isLastItem = index === array.length - 1

                return (
                  <div key={index} className="pl-6 relative group">
                    {/* Circle with white center and blue border */}
                    <div
                      className="absolute w-4 h-4 bg-white border-2 border-cv-blue rounded-full z-10 shadow shadow-black/20 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-black/50"
                      style={{
                        left: "0",
                        top: "20px",
                        transform: "translateX(-50%)",
                      }}
                    ></div>

                    {/* Line segment (not shown for last item) */}
                    {!isLastItem && (
                      <div
                        className="absolute border-l-2 border-cv-blue shadow shadow-black/20"
                        style={{
                          left: "0",
                          top: "20px", // Start from middle of dot (4px/2 + 6px)
                          height: "calc(100% + 30px)", // Connect exactly to the next dot center
                          transform: "translateX(-50%)",
                        }}
                      ></div>
                    )}

                    {/* Content */}
                    <div className="bg-cv-blue/10 shadow shadow-black/25 rounded-md p-4 hover:scale-102 hover:shadow-lg transition-all duration-300">
                      <p className="text-cv-blue font-semibold">
                        {work.period}
                      </p>
                      <p className="font-bold text-cv-blue">{work.position}</p>
                      <p className="text-sm text-cv-blue">
                        {work.company && `${work.company}, `}
                        {work.location}
                      </p>
                    </div>
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
