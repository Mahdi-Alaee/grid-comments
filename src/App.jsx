function App() {
  return (
    <>
      {/* global container */}
      <div className="bg-gray-200 flex justify-center items-center min-h-screen">
        {/* comments container */}
        <div className="grid grid-cols-1 max-w-7xl px-2 py-2 lg:grid-rows-2 lg:grid-cols-3">
          {/* comment 1 */}
          <div className="bg-purple-700 text-white p-10 rounded-xl relative z-10">
            {/* BANNER */}
            <img
              className="absolute right-7 top-0 w-32 z-0"
              src="/images/bg-pattern-quotation.svg"
              alt="quotation"
            />

            {/* profile */}
            <div className="flex gap-x-4 text-sm">
              {/* image */}
              <img
                className="rounded-full w-11 h-11 border-2 border-white"
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
            <p className="opacity-50">
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
        </div>
      </div>
    </>
  );
}

export default App;
