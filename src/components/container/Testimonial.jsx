import React, { useState } from 'react';

function Testimonial() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Words are not enough to describe how grateful I am to everyone who
              supported me to become the person I am today. I believe that
              someday I will also stretch a hand to the needy who cannot afford
              a quality education.
            </p>
            <p
              className={`leading-relaxed text-lg ${
                isExpanded ? 'block' : 'hidden'
              }`}
            >
              My name is Priscillah. I am 18 years old. I was born in a small
              village in Kisii called Getare village. Sometimes life becomes so
              uncertain and unbearable due to the loss of a loved one. My life’s
              journey has been tough since the death of my father in 2008 when I
              was seven years old. My dad passed on and left behind four
              children. I am the third born in my family and every time I saw
              my mum struggle to raise us or rather look for our basic needs, I
              wept silently. She was unemployed and after my father’s death, she
              was rejected by all our relatives and friends.<br/>
              One thing I always admire in my mum is that she is a prayerful woman. In 2012 an uncle of mine came to our home to visit us. At that time I was in grade six at a local primary school near our home. From the conversation between my uncle and my mother, I could hear the mention of a school that sponsors orphans and children from humble backgrounds. It was a sign of hope. The following month after my uncle's visit, I went for an interview at Margaret Okari Primary School. This is the first time I met Auntie Kwamboka, a very jovial and lovely woman who became my second mum. Fortunately, I got admission to Margaret Okari Primary School where my life changed and I was shaped into the person I am today. I went from walking barefoot to school to wearing good shoes and socks. From wearing torn clothes to wearing  a new school uniform. From walking daily from home to school to waking up every morning at school and all I  had to do is walk to class. The faded future I had seen before started gaining some light.<br/>

I joined Margaret Okari Primary School in grade six in 2012. The experience I got there was  not only lovely but splendid and magnificent. It was like a small heaven on earth to me when I compared my life at home and my school life at the Okari School. The food was readily available and well cooked. I had a warm bed to sleep in, good teachers who treated us like their own and good colleagues who  were warm and welcoming. One most important thing that I gained from the school is the spirit of giving back to the community. This I especially learnt from Auntie Kwamboka and the visitors from the USA who used to visit us.<br/>

In 2014, I did my grade 8 national examination and passed with 395 out of 500 marks. I was proud of my accomplishment and I think the school was proud too. It is through Margaret Okari that I got to join the school of my dreams. The motivation I got from my teachers, especially our Head Teacher Mr. Wekesa, who was more like a dad to me, gave me hope for the future. I believe that someday I am going to be like Auntie Kwamboka by impacting the lives of the community through giving back.<br/>

I joined Starehe Girls Center, my dream high school, which shaped my future. I was fortunate to earn a scholarship to Starehe from Equity Bank. It was like a dream come true. I graduated in 2018 with an A- and went to work for Equity Bank in Nairobi for nine months as a way to earn tuition support for university. I am now pursuing my dream career of a bachelor’s degree in medicine and surgery. I strongly believe that it is by God’s grace that I am here. He closes one door and opens another. I am proud of being an alumnus of Margaret Okari Primary School. It was the best place to be.<br/>

I can write much but words are not enough to describe how grateful I am to everyone who supported me to become the person I am today. It is not the end of the road still and I believe that someday I will also stretch a hand to the needy who cannot afford a quality education.<br/>
            </p>
            <p
              className="leading-relaxed text-lg hover:underline hover:cursor-pointer"
              onClick={toggleParagraph}
            >
              Learn more
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              Priscillah, MOCF graduate
            </h2>
            <p className="text-gray-500">
              Pursuing her bachelor’s degree in medicine and surgery
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
