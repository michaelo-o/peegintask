import Link from "next/link";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="termsof">
        <Head>
          <title>Privacy Policy</title>
        </Head>
        <div className="termsandprivacy">
          <h1> Privacy Policy</h1>
          <p>
            Peegin.com, Ltd (“Peegin.com”, “we” or “us”) collects (a) the e-mail
            addresses of those who communicate with us via e-mail, (b) aggregate
            information concerning what pages users access or visit, (c)
            information volunteered by the user (such as survey information
            and/or site registrations) and (d) information related to your use
            of the site, including IP address, geographic location and date and
            time of your request. The information we collect is used to improve
            the content of our Website and the quality of our service, and is
            not shared with or sold to other organizations for commercial
            purposes, except to provide products or services you’ve requested,
            when we have your permission, or under the following circumstances:
          </p>
          <ul>
            <li>
              It is necessary to share information in order to investigate,
              prevent, or take action regarding illegal activities, suspected
              fraud, situations involving potential threats to the physical
              safety of any person, violations of Terms of Service, or as
              otherwise required by law.
            </li>
            <li>
              We transfer information about you if peegin.com is acquired by or
              merged with another company. In this event, peegin.com will notify
              you before information about you is transferred and becomes
              subject to a different privacy policy.
            </li>
            <li>
              We provide such information to trusted businesses or persons for
              the sole purpose of processing personally identifying information
              on our behalf. When this is done, it is subject to agreements that
              oblige those parties to process such information only on our
              instructions and in compliance with this Privacy Policy and
              appropriate confidentiality and security measures.
            </li>
            <li>
              We provide such information to third parties who have entered into
              non-disclosure agreements with us.
            </li>
            <li>
              We provide such information to a company controlled by, or under
              common control with, Peegin.com for any purpose permitted by this
              Privacy Policy.
            </li>
          </ul>

          <h2>Information Gathering and Usage</h2>
          <p>
            When you submit a posting to Peegin.com we ask for information such
            as your email address and name. Peegin.com uses collected
            information for the following general purposes: products and
            services provision, identification and authentication, services
            improvement, contact, and research.
          </p>
          <h2>Cookies and Web Beacons</h2>
          <p>
            A cookie is a small amount of data, which often includes an
            anonymous unique identifier, which is sent to your browser from a
            website’s computers and stored on your computer’s hard drive.
            Cookies are required to use some Peegin.com services.
          </p>
          <p>
            Peegin.com and its ad management partners (“Ad Partners”) use
            cookies to record current session information.
          </p>
          <p>
            Our Ad Partners may also from time to time use web beacons (also
            known as Internet tags, pixel tags and clear GIFs). These web
            beacons are provided by our Ad Partners and allow Ad Partners to
            obtain information such as the IP address of the computer that
            downloaded the page on which the beacon appears, the URL of the page
            on which the beacon appears, the time the page containing the beacon
            was viewed, the type of browser used to view the page and the
            information in cookies set by the Ad Partners. Web beacons enable
            our Ad Partners to recognize a unique cookie on your web browser,
            which in turn enables us to learn which advertisements bring users
            to our Website.
          </p>
          <p>
            The Company reserves the right to modify, suspend, or discontinue
            the Website for any reason, with or without notice.
          </p>
          <p>
            The Website is provided “as is” and “as available”. You assume
            complete responsibility and risk for your use of the Website. The
            Company does not warrant that (i) the Website will meet your
            requirements, (ii) you will be satisfied with the Website, (iii) you
            will at all times be able to use the Website, (iv) the Website will
            be without errors, (v) or that any errors will be corrected.
          </p>
          <p>
            With both cookies and web beacon technology, the information that we
            collect and share is anonymous and not personally identifiable. It
            does not contain your name, address, telephone number, or email
            address.
          </p>
          <p>
            You can opt-out of Google Analytics data collection with the Google
            Analytics Opt-out Browser Add-on.
          </p>

          <h2>Data Storage</h2>
          <p>
            Peegin.com uses third party vendors and hosting partners to provide
            the necessary hardware, software, networking, storage, and related
            technology required to run the Peegin English Dictionary. Peegin.com
            owns the code, databases, and all rights to the Peegin English
            Dictionary application.
          </p>

          <h2>Security</h2>
          <p>
            We take precautions to ensure the security of your personal
            information. However, we cannot guarantee that hackers or
            unauthorized personnel may gain access to your personal information
            despite our efforts. You should note that in using the Urban
            Dictionary service, your information will travel through third party
            infrastructures which are not under our control.
          </p>
          <p>
            We cannot protect, nor does this Privacy Policy apply to, any
            information that you transmit to other users. You should never
            transmit personal or identifying information to other users.
          </p>

          <h2>Children</h2>
          <p>
            The Peegin.com service is not intended for children under 13, and we
            do not knowingly collect information from children under the age of
            13.
          </p>
          <p>
            Children aged 13 or older should not submit any personal information
            without the permission of their parents or guardians. By using the
            Peegin.com service, you are representing that you are at least 18,
            or that you are at least 13 years old and have your parents’ or
            guardians’ permission to use the service.
          </p>

          <h2>Changes</h2>
          <p>
            Peegin.com may periodically update this policy. We may notify you
            about significant changes in the way we treat personal information
            by placing a prominent notice on our site.
          </p>

          <h2>Questions</h2>
          <p>
            Any questions about this Privacy Policy should be addressed to this
            address:
            <Link href="legal@peegin.com">
              <a> legal@peegin.com</a>
            </Link>
          </p>
          <p>Updated: August 2016</p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
