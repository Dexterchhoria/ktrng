import React from "react";

const JoinCommunity = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16 text-center relative">
      {/* Glowing Heading */}
      <h2 className="text-3xl md:text-5xl text font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
        JOIN THE COMMUNITY
      </h2>

      {/* Welcome Message */}
      <h3 className="text-2xl md:text-4xl text font-semibold mb-4">
        Welcome to Kaltarang
      </h3>

      {/* Description */}
      <p className="max-w-2xl mx-auto text text-gray-300 mb-6 text-lg">
        Be a part of the most electrifying cultural festival! Connect, share,
        and enjoy the vibe of Kaltarang with exclusive updates,
        behind-the-scenes content, and special announcements.
      </p>

      {/* Join Button */}
      <a
        href="https://wa.me/yourwhatsapplink" // Replace with your actual WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text gap-2 bg-green-500 text-black font-bold text-lg px-6 py-3 rounded-full transition transform hover:scale-105 hover:bg-green-600"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-6 h-6"
        />
        Join WhatsApp Channel
      </a>
    </section>
  );
};

export default JoinCommunity;
