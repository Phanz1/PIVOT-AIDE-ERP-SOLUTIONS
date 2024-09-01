"use client";

import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-clip bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <ShowcaseNavbar />
      <div className="max-w-4xl w-full p-8 space-y-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy</h1>
        <p className="text-gray-600">Last Updated: 07/01/2024</p>
        <div className="space-y-6 text-gray-800 text-left">
          <section>
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p className="mt-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Personal Information: When you fill out forms on our website, subscribe to our newsletter, or contact us, we may collect personal information such as your name, email address, phone number, and company name.
              </li>
              <li>
                Usage Data: We collect information about how you use our website, including your IP address, browser type, operating system, referring URLs, and pages viewed.
              </li>
              <li>
                Cookies: Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site and enable certain features.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>
                To Provide Services: We use your personal information to respond to your inquiries, process your requests, and provide you with our services.
              </li>
              <li>
                To Improve Our Website: We analyze usage data to improve our website&apos;s performance, functionality, and user experience.
              </li>
              <li>
                To Communicate with You: We may use your contact information to send you updates, newsletters, and marketing communications. You can opt-out of these communications at any time.
              </li>
              <li>
                To Comply with Legal Obligations: We may use your information to comply with applicable laws, regulations, and legal processes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Information Sharing and Disclosure</h2>
            <p className="mt-2">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                Service Providers: We may share your information with third-party service providers who assist us in operating our website and providing our services. These providers are contractually obligated to protect your information and use it only for the purposes we specify.
              </li>
              <li>
                Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Data Security</h2>
            <p className="mt-2">
              We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. These measures include physical, technical, and administrative safeguards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Your Rights</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Access: You can request access to the personal information we hold about you.</li>
              <li>Correction: You can request that we correct any inaccuracies in your personal information.</li>
              <li>Deletion: You can request that we delete your personal information, subject to certain exceptions.</li>
              <li>Opt-Out: You can opt-out of receiving marketing communications from us at any time by following the unsubscribe instructions included in those communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Third-Party Links</h2>
            <p className="mt-2">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to read the privacy policies of any linked websites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Contact Us</h2>
            <p className="mt-2">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Email: <a href="mailto:info@pivotaide.com" className="text-blue-600 hover:underline">info@pivotaide.com</a></li>
              <li>Phone: <a href="tel:+15714703754" className="text-blue-600 hover:underline">+1 (571) 470-3754</a></li>
              <li>Address: 6475 New Hampshire Ave, Hyattsville, MD 20783</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
