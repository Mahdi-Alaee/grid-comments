function App() {
  return (
    <>
      {/* global container */}
      <div className="bg-gray-200 flex justify-center items-center min-h-screen">
        {/* comments container */}
        <div className="grid grid-cols-1 max-w-7xl px-2 py-2 gap-6 xl:grid-rows-2 xl:grid-cols-4 xl:px-10 xl:py-10">
          {/* comment 1 */}
          <div className="bg-purple-700 text-white p-10 rounded-xl relative xl:col-span-2 z-10">
            {/* BANNER */}
            <img
              className="absolute right-7 top-0 w-32 z-0 xl:w-40 xl:right-16"
              src="/images/bg-pattern-quotation.svg"
              alt="quotation"
            />

            {/* profile */}
            <div className="flex gap-x-4 text-sm">
              {/* image */}
              <img
                className="rounded-full w-11 h-11 ring-2 ring-purple-200"
                src="/images/image-daniel.jpg"
                alt="profile image"
              />
              {/* profile content container */}
              <div>
                {/* name */}
                <h6 className="opacity-90">Daniel Clifford</h6>
                {/* desc */}
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* title */}
            <h5 className="text-xl font-thin my-6 relative z-10">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny's worth.
            </h5>

            {/* content */}
            <p className="opacity-50 line-clamp-6">
              "I was an EMT for many years before I joined the bootcamp. I've
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I've successfully switched
              careers, working as a Software Engineer at a VR startup. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ratione vero
              repudiandae, quasi atque officiis eum consectetur odio amet
              dolorem deleniti repellat expedita aut sunt laudantium cum itaque
              nam voluptatum quod! Quo totam sequi omnis deserunt? Sit nam
              molestiae excepturi, perspiciatis labore deleniti eum, eligendi
              quisquam quod sed nobis exercitationem tempora! "
            </p>
          </div>
          {/* comment 2 */}
          <div className="bg-gray-600 text-white p-10 rounded-xl z-10">
            {/* profile */}
            <div className="flex gap-x-4 text-sm">
              {/* image */}
              <img
                className="rounded-full w-11 h-11 ring-2 ring-purple-200"
                src="/images/image-jonathan.jpg "
                alt="profile image"
              />
              {/* profile content container */}
              <div>
                {/* name */}
                <h6 className="opacity-90">Jonathan Walters</h6>
                {/* desc */}
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* title */}
            <h5 className="text-xl font-thin my-6 z-10">
              The team was very supportive and kept me motivated
            </h5>

            {/* content */}
            <p className="opacity-50 line-clamp-6">
              "I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I've made in myself. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Atque ipsam veritatis natus
              illum ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem
              necessitatibus facere nihil deleniti assumenda vel velit neque
              quia, nisi ipsum laudantium impedit eveniet iste. Pariatur,
              exercitationem consequuntur praesentium a est eum velit quos
              maiores ipsum facere tempora! "
            </p>
          </div>
          {/* kira comment desktop */}
          <div className="bg-white hidden text-black p-10 rounded-xl z-10 xl:row-span-2 xl:block">
            {/* profile */}
            <div className="flex gap-x-4 text-sm">
              {/* image */}
              <img
                className="rounded-full w-11 h-11 ring-2 ring-purple-200"
                src="/images/image-kira.jpg"
                alt="profile image"
              />
              {/* profile content container */}
              <div>
                {/* name */}
                <h6 className="opacity-90">Kira Whittle</h6>
                {/* desc */}
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* title */}
            <h5 className="text-xl font-thin my-6 z-10">
              Such a life-changing experience. Highly recommended!
            </h5>

            {/* content */}
            <p className="opacity-50">
              "Before joining the bootcamp, I've never written a line of code. I
              needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I've often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend!"
            </p>
          </div>
          {/* comment 4 */}
          <div className="bg-white text-black p-10 rounded-xl z-10">
            {/* profile */}
            <div className="flex gap-x-4 text-sm">
              {/* image */}
              <img
                className="rounded-full w-11 h-11 ring-2 ring-purple-200"
                src="/images/image-jeanette.jpg"
                alt="profile image"
              />
              {/* profile content container */}
              <div>
                {/* name */}
                <h6 className="opacity-90">Jeanette Harmon</h6>
                {/* desc */}
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* title */}
            <h5 className="text-xl font-thin my-6 z-10">
              An overall wonderful and rewarding experience
            </h5>

            {/* content */}
            <p className="opacity-50 line-clamp-6">
              "Thank you for the wonderful experience! I now have a job I really
              enjoy, and make a good living while doing something I love."
            </p>
          </div>
          {/* comment 5 */}
          <div className="bg-gray-900 text-white p-10 rounded-xl relative z-10 xl:col-span-2">
            {/* profile */}
            <div className="flex gap-x-4 text-sm">
              {/* image */}
              <img
                className="rounded-full w-11 h-11 ring-2 ring-purple-200"
                src="/images/image-patrick.jpg"
                alt="profile image"
              />
              {/* profile content container */}
              <div>
                {/* name */}
                <h6 className="opacity-90">Patrick Abrams</h6>
                {/* desc */}
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* title */}
            <h5 className="text-xl font-thin my-6 relative z-10">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </h5>

            {/* content */}
            <p className="opacity-50 line-clamp-6">
              "The staff seem genuinely concerned about my progress which I find
              really refreshing. The program gave me the confidence necessary to
              be able to go out in the world and present myself as a capable
              junior developer. The standard is above the rest. You will get the
              personal attention you need from an incredible community of smart
              and amazing people."
            </p>
          </div>
          {/* kira comment mobile */}
          <div className="bg-white text-black p-10 rounded-xl z-10 xl:hidden">
            {/* profile */}
            <div className="flex gap-x-4 text-sm">
              {/* image */}
              <img
                className="rounded-full w-11 h-11 ring-2 ring-purple-200"
                src="/images/image-kira.jpg"
                alt="profile image"
              />
              {/* profile content container */}
              <div>
                {/* name */}
                <h6 className="opacity-90">Kira Whittle</h6>
                {/* desc */}
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>

            {/* title */}
            <h5 className="text-xl font-thin my-6 relative z-10">
              Such a life-changing experience. Highly recommended!
            </h5>

            {/* content */}
            <p className="opacity-50">
              "Before joining the bootcamp, I've never written a line of code. I
              needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I've often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
