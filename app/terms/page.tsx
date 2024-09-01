"use client";

import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <ShowcaseNavbar />
      <div className="max-w-4xl mx-auto w-full space-y-8 px-4 py-8">

        <h1 className="text-4xl font-extrabold text-gray-900 text-center">
          Terms and Conditions
        </h1>

        <div className="mt-8 space-y-6 text-gray-800">
          <section>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="mt-2">
              These Terms and Conditions govern the provision of services by Pivot Aide Consulting (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) to the client (&quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;). By engaging our services, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Services</h2>
            <p className="mt-2">
              Pivot Aide Consulting offers web design services and logo design/branding services. The scope of work for each project will be defined in a separate proposal or contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Payment Terms</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Deposits: A non-refundable deposit of 70% of the total project cost is required to commence work.</li>
              <li>Final Payment: The remaining balance is due upon project completion, prior to the final delivery of the work.</li>
              <li>Late Payments: Late payments will incur a 5% monthly fee on the outstanding balance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Project Timelines</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Timelines: Project timelines will be outlined in the proposal. Delays caused by the Client (e.g., late content submission) may result in a revised timeline.</li>
              <li>Revisions: The proposal includes up to two rounds of revisions. Additional revisions will be billed at our standard hourly rate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Client Responsibilities</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Content: The Client is responsible for providing all necessary content, images, and materials required for the project.</li>
              <li>Feedback: Timely feedback is essential for project progress. Delays in feedback may result in project delays.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Ownership: Upon full payment, the Client will own the final design files. Pivot Aide Consultants retains the right to use the work in our portfolio and for marketing purposes.</li>
              <li>Third-Party Content: The Client must ensure they have the necessary rights and permissions for any third-party content provided to us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Confidentiality</h2>
            <p className="mt-2">
              Both parties agree to keep confidential any proprietary information received during the course of the project. This obligation extends beyond the termination of the contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">8. Termination</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>By Client: The Client may terminate the project at any time. However, the deposit is non-refundable, and the Client will be billed for any work completed beyond the deposit amount.</li>
              <li>By Company: We reserve the right to terminate the project if the Client breaches these Terms and Conditions. The Client will be billed for any work completed up to the termination date.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Service Interruption: Pivot Aide Consulting will not be liable for any interruptions or delays in service caused by third-party providers or events beyond our control.</li>
              <li>Indemnity: The Client agrees to indemnify and hold harmless Pivot Aide Consultants from any claims arising out of the use of the work provided.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">10. Warranty and Disclaimer</h2>
            <ul className="list-disc pl-5 mt-2">
              <li>Warranty: We warrant that our services will be performed in a professional manner. We do not guarantee specific results or that the work will be error-free.</li>
              <li>Disclaimer: Except as expressly provided in these Terms and Conditions, our services are provided &quot;as is&quot; without any other warranties or conditions, express or implied.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">11. Governing Law</h2>
            <p className="mt-2">
              These Terms and Conditions are governed by the laws of the state in which Pivot Aide Consulting is located, without regard to its conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">12. Amendments</h2>
            <p className="mt-2">
              We reserve the right to amend these Terms and Conditions at any time. The Client will be notified of any significant changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">13. Acceptance</h2>
            <p className="mt-2">
              By engaging Pivot Aide Consultants for web design or logo design/branding services, the Client acknowledges that they have read, understood, and agree to these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p className="mt-2">
              If you have any questions or concerns about these Terms and Conditions, please contact us at:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>Email: <a href="mailto:info@pivotaide.com" className="text-blue-600 hover:underline">info@pivotaide.com</a></li>
              <li>Phone: <a href="tel:+15714703754" className="text-blue-600 hover:underline">+1 (571) 470-3754</a></li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
