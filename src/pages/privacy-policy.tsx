import React from "react";
import Navbar from "~/components/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="flex max-w-7xl items-center justify-center p-12">
        <div className="">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-600">
            Thank you for using our Lock Screen Generator for Networking Events.
            We value your privacy and are committed to protecting your personal
            information. This privacy policy outlines how we handle your data
            and your rights with respect to the information we collect.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Information We Collect
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our application does not store any personal details. All information
            entered into the application is used solely for the purpose of
            generating lock screens and is not saved or transmitted to any
            servers.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Google Ads
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We use Google Ads to display advertisements within our application.
            Google may use cookies to serve ads based on a user’s prior visits
            to our website or other websites. You can opt out of personalized
            advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Google Ads Settings
            </a>
            .
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Third-Party Links
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our application may contain links to third-party websites. We are
            not responsible for the privacy practices or the content of these
            websites. We encourage you to review the privacy policies of any
            third-party sites you visit.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Changes to This Privacy Policy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We may update our privacy policy from time to time. Any changes will
            be posted on this page with an updated revision date.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            If you have any questions about this privacy policy, please contact
            us at{" "}
            <a
              href="mailto:javian.ng.z.h@gmail.com"
              className="text-blue-500 underline"
            >
              javian.ng.z.h@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
