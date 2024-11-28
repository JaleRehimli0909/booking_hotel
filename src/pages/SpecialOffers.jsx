import React from 'react';

const SpecialOffersPage = () => {

    const specialOffersData = [
        {
            category: "Muslim-Friendly Features",
            label: "Free",
            items: [
                {
                    title: "Separate Pools for Women",
                    description: "Enjoy private and serene pool experiences designed specifically for women.",
                },
                {
                    title: "Alcohol-Free Packages",
                    description: "Exclusive packages catering to guests who prefer a completely alcohol-free environment.",
                },
                {
                    title: "Halal Cuisine",
                    description: "Authentic halal meals prepared by skilled chefs, ensuring the highest quality and taste.",
                },
                {
                    title: "Prayer Rooms",
                    description: "Convenient and comfortable prayer rooms available for all guests, with Qibla direction clearly marked.",
                },
                {
                    title: "Family-Friendly Areas",
                    description: "Special areas and activities for families to enjoy their time together, including kids' clubs and family lounges.",
                },
            ],
        },
        {
            category: "Premium Services",
            label: "Free",
            items: [
                {
                    title: "Private Beach Access",
                    description: "Enjoy an exclusive private beach for ultimate relaxation and luxury, with personalized service.",
                },
                {
                    title: "Personalized Spa Treatments",
                    description: "Tailor-made treatments designed to soothe and rejuvenate you in a tranquil spa environment.",
                },
                {
                    title: "Luxury Car Rentals",
                    description: "Rent high-end luxury vehicles to make your stay even more special, including sports cars and sedans.",
                },
                {
                    title: "Private Yacht Tours",
                    description: "Explore the coastline in style with private yacht tours, complete with gourmet dining and personalized service.",
                },
                {
                    title: "VIP Airport Transfers",
                    description: "Travel in comfort with VIP airport transfers in luxury vehicles, including chauffeurs and exclusive services.",
                },
                {
                    title: "Exclusive Shopping Experiences",
                    description: "Enjoy exclusive shopping experiences with personal stylists and private access to luxury boutiques.",
                },
            ],
        },
    ];

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
                Special Offers
            </h1>

            {specialOffersData.map((section, index) => (
                <section key={index} className="mb-12">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-semibold text-blue-600">
                            {section.category}
                        </h2>
                        <span className="bg-green-500 text-white text-sm font-semibold py-1 px-3 rounded-full">
                            {section.label}
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {section.items.map((item, itemIndex) => (
                            <div
                                key={itemIndex}
                                className="border p-6 rounded-lg shadow-md bg-white hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                                style={{
                                    borderTopRightRadius: "50px",
                                    borderBottomLeftRadius: "50px",
                                }}
                            >
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 mt-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default SpecialOffersPage;
