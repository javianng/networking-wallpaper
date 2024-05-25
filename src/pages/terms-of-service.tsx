import Navbar from "~/components/Navbar";

const TermsOfService = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center p-12">
        <div className="w-full max-w-7xl">
          <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to our Lock Screen Generator for Networking Events. By using
            our service, you agree to the following terms and conditions. Please
            read them carefully.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Acceptance of Terms
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            By accessing and using our application, you accept and agree to be
            bound by the terms and provision of this agreement. If you do not
            agree to abide by these terms, please do not use this service.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Description of Service
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our application provides a tool to generate lock screens for
            networking events. We do not store any personal information entered
            into the application. The information is used solely for the purpose
            of generating lock screens and is not saved or transmitted to any
            servers.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Use of the Service
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            You agree to use the service only for lawful purposes and in a way
            that does not infringe the rights of, restrict, or inhibit anyone
            else's use and enjoyment of the service. Prohibited behavior
            includes harassing or causing distress or inconvenience to any other
            user, transmitting obscene or offensive content, or disrupting the
            normal flow of dialogue within our service.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Intellectual Property
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            All content included on this application, such as text, graphics,
            logos, images, and software, is the property of the application
            owners or its content suppliers and protected by international
            copyright laws.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Termination
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We may terminate or suspend access to our service immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the terms.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Changes to This Agreement
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We reserve the right, at our sole discretion, to modify or replace
            these terms at any time. If a revision is material, we will try to
            provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:your-email@example.com"
              className="text-blue-500 underline"
            >
              your-email@example.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
