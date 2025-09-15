function About() {
  return (
    <div className="flex flex-col gap-24 px-5 md:px-10 lg:px-20 py-16">
      <div className="grid lg:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
        <div>
          <span className="bg-orange-100 text-orange-700 font-semibold px-3 py-1 rounded-md text-sm">
            Our mission
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-6 text-gray-900">
            Help more people cook nourishing meals, more often.
          </h1>
          <p className="text-gray-700 mb-4">
            Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.
          </p>
          <p className="text-gray-700">
            We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.
          </p>
        </div>
        <div>
          <img
            className="rounded-2xl w-full object-cover"
            src="/assets/image-about-our-mission-large.webp"
            alt="Our mission"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Why we exist</h2>
        <div className="grid gap-8 md:gap-10">
          {[
            {
              title: "Cut through the noise.",
              desc: "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.",
            },
            {
              title: "Empower home kitchens.",
              desc: "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
            },
            {
              title: "Make healthy look good.",
              desc: "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <img src="/assets/icon-bullet-point.svg" alt="" />
                {item.title}
              </h3>
              <p className="text-gray-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our food philosophy</h2>
        <div className="grid gap-8 md:gap-10">
          {[
            {
              title: "Whole ingredients first.",
              desc: "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
            },
            {
              title: "Flavor without compromise.",
              desc: "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
            },
            {
              title: "Respect for time.",
              desc: "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.",
            },
            {
              title: "Sustainable choices.",
              desc: "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <img src="/assets/icon-bullet-point.svg" alt="" />
                {item.title}
              </h3>
              <p className="text-gray-700 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Beyond the plate</h2>
          <p className="text-gray-700 mb-6">
            We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>Spark curiosity about seasonal produce and local agriculture.</li>
          </ul>
        </div>
        <div>
          <img
            className="rounded-2xl w-full object-cover"
            src="/assets/image-about-beyond-the-plate-large.webp"
            alt="Beyond the plate"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
