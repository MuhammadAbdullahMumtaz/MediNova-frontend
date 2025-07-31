import { useState } from 'react';

const faqData = [
    {
        question: "When Should I take MediNova?",
        answer: [
            {
                title: "Any Time you are Stressed:",
                text: "MediNova can be used anytime you’re feeling overwhelmed or mentally fatigued — helping you regain clarity, calm, and a refreshed sense of focus.",
            },
            {
                title: "Anytime you need to be Focused:",
                text: "MediNova’s active compounds help you stay calm and sharply focused, so you can power through your work, studies, or daily responsibilities with ease.",
            },
            {
                title: "After a workout:",
                text: "MediNova combines antioxidant support with relaxed focus, making it an ideal post-workout boost to calm the mind and stay productive.",
            },
        ],
    },
    {
        question: "How Quick Will I feel the effects of MediNova Renew?",
        answer: [
            {
                text: "While some users may begin to feel the effects of MediNova within 20 minutes, it may take up to 2 hours for others to experience the full benefits. For optimal results, consistent use is key — many individuals notice the most significant impact after 2 to 3 days, as the formula’s ingredients compound and become more effective over time.",
            },
        ],
    },
    {
        question: "How to use / When should I take Glow?",
        answer: [
            {
                text: "Glow fits easily into your day — take it in the morning or with lunch to help your body fight stressors like sun, pollution, and oxidative damage. Learn more about its science-backed ingredients on our Learn page.",
            },
        ],
    },
    {
        question: "How soon will I see the effects of Glow?",
        answer: [
            {
                text: "Glow works gradually — while it may not deliver instant results like our nootropic products, you can expect to notice positive changes within two weeks. Continued use enhances the benefits over time as the formula supports your body from within.",
            },
        ],
    },
];

const blogPosts = [
    {
        img: "/image 1.png",
        title: "The Vicious Cycle of Stress And How to Get Out of it",
        date: "June 20, 2025",
        desc: "We can’t stress enough about stress but don’t get stressed about it Don’t let stress ruin your ...",
        link: "#",
    },
    {
        img: "/image2.png",
        title: "5 Anti Inflammatory Food Sources",
        date: "June 23, 2025",
        desc: "Let’s address the 500 lb. Gorilla in the room: If inflammation is so bad why do our bodies resort...",
        link: "#",
    },
    {
        img: "/image3.png",
        title: "Collagen: What is it and why should I take it",
        date: "July 02, 2025",
        desc: "You have probably heard of collagen in lotions and creams designed to help your skin stay health...",
        link: "#",
    },
];

const instagramImages = [
    "111.jpg",
    "444(1).jpg",
    "333(1).jpg",
    "22.jpg",
    "555.jpg",
    "666.jpg",
];

const RestBody = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleCollapsible = (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };
    return (
        <>
            <div className="bg-[#92d6e3] w-full px-4 py-8">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-nowrap justify-between items-center overflow-x-auto gap-4">
                        {[
                            { src: "/logo3.png", alt: "logo3" },
                            { src: "/logo5.png", alt: "logo5" },
                            { src: "/logo4.png", alt: "logo4" },
                            { src: "/logo2.png", alt: "logo2" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center w-1/6 min-w-[80px]"
                            >
                                <div className="w-full max-w-[100px] sm:max-w-[120px]">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <p className="text-sm mt-4 font-semibold font-sans text-center">
                                    Non-GMO
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Portion 5 - Backed by Science */}
            <div className="bg-[#f8f8f8] w-full py-16 px-4">
                <div className="flex flex-wrap items-center max-w-6xl mx-auto">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/left.png"
                            alt="Backed by Science"
                            className="w-full rounded-lg object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pl-16 mt-10 md:mt-0">
                        <h2 className="text-3xl font-semibold text-[#13171a]">Backed by Science</h2>
                        <p className="text-base text-[#13171a] leading-relaxed">
                            At MediNova, every formula begins with a purpose-driven approach. We thoughtfully
                            select each active compound based on clinical evidence, ensuring that our ingredients
                            work in harmony to deliver maximum results. Beyond efficacy, we focus on the science
                            of absorption, taste profile, and real-world compatibility to create products that
                            truly support your well-being.
                        </p>
                        <p className="text-base text-[#13171a] leading-relaxed">
                            We believe in full transparency—explore the details behind our formulations on the
                            Learn and Science pages, and don’t hesitate to reach out with your questions.
                        </p>
                        <button className="bg-[#94d0a8] border-2 border-[#94d0a8] rounded-full py-3 px-6 w-1/2 hover:bg-white hover:border-black transition">
                            <a href="#" className="text-black font-semibold text-sm">Learn More</a>
                        </button>
                    </div>
                </div>
            </div>

            {/* Portion 6 - Ingredient Sourcing */}
            <div className="bg-[#f8f8f8] w-full py-16 px-4">
                <div className="flex flex-wrap-reverse md:flex-nowrap items-center max-w-6xl mx-auto">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-12 mt-10 md:mt-0">
                        <h2 className="text-3xl font-semibold text-[#13171a]">Ingredient Sourcing</h2>
                        <p className="text-base text-[#13171a] leading-relaxed">
                            At MediNova, we go beyond borders to find the finest ingredients—sourcing globally
                            with a strong commitment to purity, sustainability, and traceability. Every component
                            we use is thoughtfully selected, often backed by patents and clinical research, to
                            ensure exceptional quality and proven results in every product we offer.
                        </p>
                        <button className="bg-[#94d0a8] border-2 border-[#94d0a8] rounded-full py-3 px-6 w-1/2 hover:bg-white hover:border-black transition">
                            <a href="#" className="text-black font-semibold text-sm">Learn More</a>
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="/right.jpg"
                            alt="Ingredient Sourcing"
                            className="w-full rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#92d6e3] py-20 w-full">
                <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#13171a] text-center mb-6 font-['Juana']">
                        Subscribe <span className="font-sans">&</span> Save
                    </h2>

                    <div className="flex flex-wrap justify-center w-full py-10 gap-y-8">
                        {[
                            {
                                img: "/logo6.png",
                                title: "Ships Every Month",
                                desc:
                                    "Choose your flavors, upgrade your subscription, or hit pause if you want. You're in control.",
                            },
                            {
                                img: "/logo7.png",
                                title: "Fast and Easy Delivery",
                                desc:
                                    "Subscribe once and relax. We'll take care of everything else. Delivery of your products is now fast and easy.",
                            },
                            {
                                img: "/logo8.png",
                                title: "Exclusive Benefits",
                                desc:
                                    "Gain exclusive, subscriber-only benefits. Enjoy early access to new products, sales, and promotions!",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-1/2 lg:w-1/3 px-6 flex flex-col items-center text-center"
                            >
                                <img src={item.img} alt={item.title} className="w-20 h-20 object-contain mb-4" />
                                <h4 className="text-lg font-semibold text-[#13171a] mb-2">{item.title}</h4>
                                <p className="text-sm text-[#13171a] leading-relaxed max-w-xs">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button className="bg-[#13171A] text-white font-bold text-sm px-12 py-4 rounded-full border-2 border-[#13171A] hover:bg-transparent hover:text-black transition">
                        Subscribe <span className="font-sans">&</span> Save
                    </button>
                </div>
            </div>
            <div className="bg-[#f8f8f8] py-12 w-full">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h3 className="text-3xl md:text-4xl font-semibold text-[#13171a] mb-12 font-['Juana']">
                        We Love Your Questions
                    </h3>

                    {faqData.map((item, i) => (
                        <div
                            key={i}
                            className={`w-full md:w-[70%] mx-auto text-left mb-4 border rounded-md ${activeIndex === i ? "border-blue-500" : "border-[#C9C9C9]"
                                }`}
                        >
                            <button
                                className="w-full flex justify-between items-center bg-white px-5 py-4 cursor-pointer text-left focus:outline-none"
                                onClick={() => toggleCollapsible(i)}
                            >
                                <h3 className="text-base md:text-lg font-semibold text-[#13171a] font-['Juana']">
                                    {item.question}
                                </h3>
                                <span
                                    className={`font-sans ${activeIndex === i
                                        ? "text-[45px] relative -top-[15px]"
                                        : "text-[28px] relative top-0"
                                        } text-black`}
                                >
                                    {activeIndex === i ? "-" : "+"}
                                </span>
                            </button>

                            <div
                                className={`px-5 bg-white overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeIndex === i ? "max-h-[1000px] py-4" : "max-h-0"
                                    }`}
                            >
                                {item.answer.map((ans, j) => (
                                    <div key={j} className="mb-3">
                                        {ans.title && (
                                            <strong className="block text-sm font-semibold mb-1 text-[#13171a]">
                                                {ans.title}
                                            </strong>
                                        )}
                                        <p className="text-sm text-[#13171a]">{ans.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button className="mt-10 bg-[#13171A] text-white font-semibold py-3 px-8 rounded-full w-[60%] sm:w-[30%] md:w-[20%] hover:bg-transparent hover:text-black border-2 border-[#13171A] transition">
                        <a href="#">View Full FAQS</a>
                    </button>
                </div>
            </div>
            <div className="bg-[#f8f8f8] py-12 w-full">
                <div className="container mx-auto flex flex-wrap justify-around gap-8 px-4">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="flex flex-col w-full sm:w-[47%] md:w-[30%] scroll-part"
                        >
                            <img
                                src={post.img}
                                alt={post.title}
                                className="w-full h-auto rounded-lg object-cover"
                            />
                            <h3 className="text-lg font-semibold mt-5">{post.title}</h3>
                            <div className="text-xs mt-2 font-['Lab Grotesque']">{post.date}</div>
                            <div className="text-base mt-3 font-['Lab Grotesque'] leading-relaxed">
                                {post.desc}
                            </div>
                            <div className="mt-5">
                                <a
                                    href={post.link}
                                    className="text-[#94d0a8] text-xs font-bold uppercase underline"
                                >
                                    READ MORE
                                </a>
                            </div>
                        </div>
                    ))}

                    <div className="w-full flex justify-center mt-10">
                        <button className="main-btn bg-black text-white py-3 px-8 font-bold rounded-full hover:bg-transparent hover:text-black border-2 border-black transition w-[80%] sm:w-[50%] md:w-[25%]">
                            <a href="#">Check Out Our Blog</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#f8f8f8] pt-12 pb-0 w-full">
                <h3 className="text-center mb-8 font-sans text-lg font-semibold">
                    Follow us on Instagram
                </h3>
                <div className="flex flex-wrap justify-around px-4 gap-y-4">
                    {instagramImages.map((src, idx) => (
                        <div
                            key={idx}
                            className="w-[30%] sm:w-[22%] md:w-[16.4%] hover:opacity-50 transition-opacity duration-200 cursor-pointer"
                        >
                            <a href="#">
                                <img src={src} alt={`Instagram post ${idx + 1}`} className="w-full h-auto object-cover" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full pt-16 bg-black pb-0 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        {/* Shop Section */}
                        <div className="px-4 w-full sm:w-1/2 lg:w-auto mb-8">
                            <label className="text-gray-300 font-semibold text-lg mb-5 inline-block">Shop</label>
                            <ul>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">MediNova: Dripping Pills</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">MediNova: Bone Base & Joint Support</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">MediNova: Lavendal 260g</a></li>
                            </ul>
                        </div>

                        {/* Resources Section */}
                        <div className="px-4 w-full sm:w-1/2 lg:w-auto mb-8">
                            <label className="text-gray-300 font-semibold text-lg mb-5 inline-block">Resources</label>
                            <ul>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">The Science</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">Learn</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">About Us</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">Contact Us</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Legal Section */}
                        <div className="px-4 w-full sm:w-1/2 lg:w-auto mb-8">
                            <label className="text-gray-300 font-semibold text-lg mb-5 inline-block">Legal</label>
                            <ul>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">Privacy Policy</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">Refund Policy</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">Term of Services</a></li>
                                <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]">Accessibility</a></li>
                            </ul>
                        </div>

                        {/* Stay Connected */}
                        <div className="px-4 w-full lg:w-[40%] mb-8 text-center lg:text-left">
                            <label className="text-gray-300 font-semibold text-lg mb-5 inline-block">Stay Connected</label>
                            <ul>
                                <li className="text-sm mb-4 max-w-md mx-auto lg:mx-0">
                                    Receive 15% OFF your first order when you join our mailing list + be the first to find out about new products and promotions!
                                </li>
                                <button
                                    onClick={() => alert('Sign Up popup')}
                                    className="bg-[#94D0A8] text-black font-bold px-4 py-2 mt-2 rounded-md hover:bg-transparent hover:text-white hover:border hover:border-[#94D0A8] transition duration-200"
                                >
                                    Sign Up
                                </button>

                                <div className="flex justify-center lg:justify-start mt-6 gap-6 text-white">
                                    {/* Facebook */}
                                    <a href="#"><svg width="24" height="24" viewBox="0 0 28 28" fill="currentColor"><path d="M28 14.0851C28 6.3066 21.7315 0 14 0C6.2685 0 0 6.3066 0 14.0851C0 21.1159 5.11933 26.9424 11.8125 27.9988V18.1569H8.25767V14.0839H11.8125V10.9829C11.8125 7.45336 13.9032 5.50258 17.101 5.50258C18.6317 5.50258 20.2347 5.77841 20.2347 5.77841V9.24452H18.4683C16.7288 9.24452 16.1863 10.3302 16.1863 11.4441V14.0851H20.069L19.4483 18.158H16.1863V28C22.8807 26.9424 28 21.1147 28 14.0851Z" /></svg></a>

                                    {/* Twitter */}
                                    <a href="#"><svg width="24" height="24" viewBox="0 0 28 22" fill="currentColor"><path d="M27.9452 2.62052C26.8969 3.06669 25.7864 3.36121 24.6493 3.49458C25.8465 2.79899 26.7428 1.70815 27.1728 0.423505C26.0633 1.04945 24.8337 1.50509 23.5247 1.75885C22.6611 0.866099 21.5167 0.273979 20.2693 0.0744441C19.0218 -0.125091 17.7411 0.0791234 16.6261 0.655376C15.511 1.23163 14.624 2.14767 14.1027 3.26126C13.5815 4.37485 13.4551 5.62366 13.7433 6.81378C8.97167 6.59611 4.74483 4.37993 1.91333 1.03253C1.39859 1.87819 1.13011 2.84273 1.13633 3.82391C1.13633 5.7525 2.15133 7.44762 3.689 8.44349C2.77767 8.41545 1.88647 8.17725 1.08967 7.74875V7.81642C1.08915 9.09808 1.54731 10.3404 2.38642 11.3327C3.22553 12.325 4.39392 13.0061 5.69333 13.2604C4.85135 13.4786 3.96948 13.5113 3.11267 13.3563C3.48148 14.4593 4.19727 15.4236 5.16018 16.1144C6.12309 16.8053 7.28508 17.1883 8.484 17.2101C6.45345 18.7507 3.94622 19.5868 1.365 19.5842C0.91 19.5842 0.456167 19.5582 0 19.5086C2.63166 21.1376 5.6916 22.0023 8.8165 22C19.3783 22 25.1475 13.5458 25.1475 6.22731C25.1475 5.99047 25.1475 5.75362 25.13 5.51678C26.257 4.73278 27.2291 3.75942 28 2.64307L27.9452 2.62052Z" /></svg></a>

                                    {/* Other icons ... (add as needed) */}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Payments Section */}
                <div className="py-5 text-center border-t border-gray-700 mt-10">
                    <div className="mx-auto w-[40%] sm:w-[80%] max-w-[500px]">
                        <img src="/bank.png" alt="Bank" className="w-full" />
                    </div>
                    <div className="text-white text-xs mt-2 font-medium">© 2025 MediNova. All rights reserved.</div>
                </div>
            </div>
        </>
    );
};

export default RestBody;
