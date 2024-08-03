import React from 'react';

const AboutUs: React.FC = () => (
  <div className="p-6 bg-white shadow-lg">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
    <p className="text-lg text-gray-600 leading-7 mb-6">
      NexGen HR Solutions specializes in connecting businesses with highly qualified professionals across various industries. With years of experience, a robust network, and a proven methodology, we are equipped to handle all your hiring needs efficiently and effectively.
    </p>
    <div className="shadow-md p-4 mb-6">
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">VISION</h2>
      <p className="text-lg text-gray-600 leading-7">
        To be the premier provider of innovative HR solutions, empowering organizations to reach their full potential.
      </p>
    </div>
    <div className="shadow-md p-4 mb-6">
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">MISSION</h2>
      <p className="text-lg text-gray-600 leading-7">
        Our mission is to deliver exceptional HR services that help clients attract, develop, and retain top talent. We focus on personalized consulting, strategic talent management, and fostering a culture of excellence and inclusivity.
      </p>
    </div>
    <div className="shadow-md p-4 mb-6">
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">Contact Us</h2>
      <p className="text-lg text-gray-600 leading-7">Address: NexGen HR Solutions</p>
      <p className="text-lg text-gray-600 leading-7">Unit 2039 Spaze Tristar Sector 92 Gurugram-122001</p>
      <p className="text-lg text-gray-600 leading-7">Email: info@nexgenhrsolutions.com</p>
      <p className="text-lg text-gray-600 leading-7">Phone: +91-1234567890</p>
    </div>
    <div className="shadow-md p-4">
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">Location</h2>
      <div className="h-64 w-full">
        <iframe
          title="NexGen HR Solutions Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.997434448121!2d76.87217081545156!3d30.73331538164178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef11d893b4b%3A0x290be4f8a2f7e598!2sGoogle!5e0!3m2!1sen!2sin!4v1598534676365!5m2!1sen!2sin"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen={false}
          aria-hidden="false"
        />
      </div>
    </div>
  </div>
);

export default AboutUs;
