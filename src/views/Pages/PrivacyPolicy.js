import React from "react";
// Chakra imports
import {
  Text,
  Box,
  OrderedList,
  Center,
  ListItem,
  UnorderedList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from "@chakra-ui/react";

function PrivacyPolicy() {
  return (
    <>
      <Box
        px={{ sm: "10%", md: "10%", lg: "15%" }}
        mt={{ sm: "8%", md: "5%", lg: "5%" }}
        height="70%"
        width="100%"
        zIndex="1"
      >
        <Center>
          <Text
            mt="4px"
            mb="60px"
            fontSize={{ sm: "20px", md: "30px", lg: "40px" }}
            fontWeight="700"
            fontFamily="Montserrat"
            px={{ sm: "0%", md: "20%", lg: "20%" }}
          >
            Privacy Policy
          </Text>
        </Center>
        <Text lineHeight="24px" fontSize="16px" fontWeight="600" mb="10px">
          At Monopole, we understand that your privacy is important to you and
          that you care about how your personal data is used. We respect and
          value the privacy of everyone who visits the websites,{" "}
          <Link href="https://www.monopole.network" isExternal>
            https://www.monopole.network
          </Link>
          , and (the “MNPL Websites”) and only collect and use your personal
          data as described in this Privacy Policy.
          <Text lineHeight="24px" fontSize="16px" fontWeight="700" mb="40px">
            Any personal data we collect will only be used as permitted by
            applicable laws which are set forth in this Privacy Policy. We
            recommend you to read this Privacy Policy carefully and ensure that
            you understand it. If you do not agree to the Privacy Policy you
            should stop using the MNPL Websites immediately.
          </Text>
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Information About Us
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          The MNPL Websites are owned and operated by MNPL Ltd., a limited joint
          stock company under portuguese law in the process of registration,
          with its registered address located at Lisboa.
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          What Does This Policy Cover?
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          This Privacy Policy applies only to your use of the MNPL Websites. The
          MNPL Websites may contain links to third party websites. Please note
          that we have no control over how your data is collected, stored, or
          used by these third party websites and we strongly advise you to check
          the privacy policies of any such websites before providing any data to
          them.
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          What Is Personal Data?
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          Personal data is defined by the General Data Protection Regulation (EU
          Regulation 2016/679) (the “GDPR”) and the French Law No 78-17 of 6
          January 1978 (collectively, “the Data Protection Legislation”) as ‘any
          information relating to an identifiable person who can be directly or
          indirectly identified in particular by reference to an identifier’.
          Personal data is, in simpler terms, any information about you that
          enables you to be identified.
          <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
            Personal data covers obvious information such as your name, address,
            phone number and other contact details, but it also covers less
            obvious information such as identification numbers, electronic
            location data, and other online identifiers.
          </Text>
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Rights of Data Subjects
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          Under the Data Protection Legislation, you have the following rights,
          which we will always work to uphold:
        </Text>
        <OrderedList pl="10px" mb="20px">
          <ListItem mb="10px">
            The right to be informed about our collection and use of your
            personal data. This Privacy Policy should tell you everything you
            need to know, but you can always contact us to find out more or to
            ask any questions using the details provided in this Privacy Policy.
          </ListItem>
          <ListItem mb="10px">
            The right to access the personal data we hold about you. This
            Privacy Policy will tell you how to do this.
          </ListItem>
          <ListItem mb="10px">
            The right to have your personal data rectified if any of your
            personal data held by us is inaccurate or incomplete. Please contact
            us using the link in section “How to contact us” to find out more.
          </ListItem>
          <ListItem mb="10px">
            The right to be forgotten, i.e. the right to ask us to delete or
            otherwise dispose of any of your personal data that we hold. Please
            contact us using the link in section “How to contact us” to find out
            more.
          </ListItem>
          <ListItem mb="10px">
            The right to restrict (i.e. prevent) the processing of your personal
            data.
          </ListItem>
          <ListItem mb="10px">
            The right to object to us using your personal data for a particular
            purpose or purposes.
          </ListItem>
          <ListItem mb="10px">
            The right to withdraw consent. This means that, if we are relying on
            your consent as the legal basis for using your personal data, you
            are free to withdraw that consent at any time.
          </ListItem>
          <ListItem mb="10px">
            The right to data portability. This means that, if you have provided
            personal data to us directly, we are using it with your consent or
            for the performance of a contract, and that data is processed using
            automated means, you can ask us for a copy of that personal data to
            re-use with another service or business in many cases.
          </ListItem>
          <ListItem mb="10px">
            Rights relating to automated decision-making and profiling. We do
            not use your personal data in this way.
          </ListItem>
        </OrderedList>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          For more information about our use of your personal data or exercising
          your rights as outlined above, please contact us using the details
          provided in this Privacy Policy.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          It is important that your personal data is kept accurate and
          up-to-date. If any of the personal data we hold about you changes,
          please keep us informed as long as we have that data.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          Further information about your rights can also be obtained from the
          Portuguese Data Protection Authority (Comissao Nacional de Protecao de
          Dados).
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          If you have any cause for complaint about our use of your personal
          data, you have the right to lodge a complaint with the CNPD. We would,
          however, welcome the opportunity to resolve your concerns ourselves.
          That is why we encourage you to contact us first, using the link in
          section “How to contact us”.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          Depending upon your use of the MNPL Websites, we may collect and hold
          your personal and non-personal data set out in the Privacy Policy. We
          do not collect any ‘special category’ or ‘sensitive’ personal data
          personal data relating to children data relating to criminal
          convictions and/or offences.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          We may collect personal information about you either when you provide
          us with your personal information or through your use of our website.
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Data you provide to us:
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          If you send us an email, we may collect your name, your email address,
          and any other information which you choose to give us. For the
          purposes of the Data Protection Legislation, We are the data
          controller responsible for such personal data.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          We operate social media pages where you can get in touch with us
          either by directly messaging us or mentioning us in your posts. In
          such a case, we would see the data (including any personal data) you
          have decided to share with us. Depending on the medium, the personal
          information we might get about you could include, for example, your
          name, email address, where you work, job title or anything else.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          When you contact us for help through the web forms on our Website we
          may collect certain information about you which directly identifies
          you. This information may include, name, email, address mail, or
          anything else you choose to share with us.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          You may sign up for an account on the MNPL Websites. We don’t,
          normally, ask for any personal information for your registration other
          than your email address. We may, thus, collect your personal
          information when you sign up on the MNPL Websites.
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Data we collect through your use of our Website
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          The MNPL Websites collect certain information automatically, including
          your IP address, the type of browser you are using, and certain other
          non-personal data about your computer or device such as your operating
          system type or version.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          We may also use cookies and other similar technologies (collectively
          “cookies”). These cookies may be used by us for analytics,
          performance, marketing purposes and other purposes. Cookies we use may
          be used to collect information about the use of our website, such as
          number of visits, pages visited, popularity of certain content, etc.
          More information about cookies can be found at a separate section
          within this Privacy Policy.
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Lawful Basis of Processing
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          The Data Protection Legislation requires us to have a valid and lawful
          legal basis for processing personal data. We rely on the following
          legal basis:
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          The lawful basis under the Data Protection Legislation that allows us
          to use such information is article 6(1)(f) of the GDPR which allows us
          to process personal data when it is necessary for the purposes of our
          legitimate interests, in this case, the proper operation and
          functionality of the Ternoa Websites. If you contact us as described
          above, you will be required to consent to our use of your personal
          data to contact you. In this case, our lawful basis for using your
          personal data will be article 6(1)(a) of the GDPR, which allows us to
          use your personal data with your consent for a particular purpose or
          purposes. We may also rely on other legal bases such as Article
          6(a)(b) and 6(1)(c) of the GDPR which allows us to use your personal
          information for the performance of a contract and for our legal
          obligations, depending on the circumstances.
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          How We Use Your Personal Data?
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          Where we collect any personal data, it will be processed and stored
          securely, for no longer than is necessary in light of the reason(s)
          for which it was first collected. We will comply with our obligations
          and safeguard your rights under the Data Protection Legislation at all
          times. For more details on security please see section “How and Where
          Do We Store Your Data?”, below.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          We will process your personal data in order to get back to you in
          order to answer your questions or feedback which we assume is the
          reason why you contact us using our email address, web forms or social
          media pages.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          We will also process your personal data in order to provide you some
          of the services we offer on the MNPL Websites. This is, especially,
          the case for{" "}
          <Link href="https://www.monopole.network" isExternal>
            https://www.monopole.network
          </Link>
          (the “MNPL Board”).
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          The reason for collecting technical data (including cookies) as
          referred to above is necessary for the technical operation of the
          Ternoa Websites and will not normally be used in any way to personally
          identify you and give you a better user experience on the MNPL
          Websites.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          We will not share any of your personal data with any third parties for
          any purposes other than storage of an email and/or web hosting server.
          We are relying on third-party service providers for these services. We
          make sure that these service providers are hosting your personal data
          within the European Economic Area (the “EEA”) which is considered a
          requirement under the GDPR.
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          How and Where Do We Store Your Data?
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          We will store your personal data within the EEA. The EEA consists of
          all EU member states, plus Norway, Iceland, and Liechtenstein. This
          means that your personal data will be fully protected under the Data
          Protection Legislation, the GDPR, and/or to equivalent standards by
          law.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          We may store some of your personal data in countries that are not part
          of the EEA. These are known as “third countries” and may not have data
          protection laws that are as strong as those in the EEA. This means
          that we will take additional steps in order to ensure that your
          personal data is treated just as safely and securely as it would be
          within the EEA and under the Data Protection Legislation as follows:
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          We will only transfer your personal data to third countries whose
          levels of data protection are deemed ‘adequate’ by the{" "}
          <Link
            href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en"
            isExternal
          >
            European Commission
          </Link>
          . More information is available from the European Commission.
          Otherwise, we will rely on standard contractual clauses approved by
          the EU Commission. Personal data security is essential to us, and to
          protect personal data, we take the following measures:
        </Text>
        <UnorderedList mb="40px" pl="10px">
          <ListItem mb="10px">
            Limiting access to your personal data to those employees, agents,
            contractors, and other third parties with a legitimate need to know
            and ensuring that they are subject to duties of confidentiality;
          </ListItem>
          <ListItem mb="10px">
            Procedures for dealing with data breaches (the accidental or
            unlawful destruction, loss, alteration, unauthorised disclosure of,
            or access to, your personal data) including notifying you and/or the
            CNPD where we are legally required to do so;
          </ListItem>
          <ListItem mb="10px">
            We use Secure Sockets Layer (SSL) software to encrypt the
            information you enter on the MNPL Websites in order to protect its
            security during transmission to and from the MNPL Websites.
          </ListItem>
          <ListItem mb="10px">
            We use Wallet Connect for access to your account on the
            <Link href="https://www.monopole.network" isExternal>
              https://www.monopole.network
            </Link>
          </ListItem>
        </UnorderedList>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          Although we take all these security measures to ensure the safety and
          security of your personal data, you should note that no transmission
          over the Internet can ever be guaranteed to be secure. Consequently,
          we cannot fully guarantee the security of any personal information
          that you transfer over the Internet to us.
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Do We Share Your Personal Data?
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          We will not share any of your personal data with any third parties for
          any purposes, subject to the following exceptions:
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          We are using third party service providers which may collect personal
          data of yours on our behalf (the “data processors''). They may have
          access to your personal information but we ensure that these service
          providers do not make use of your personal data for any secondary
          purposes other than our instructions.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          If we sell, transfer, or merge parts of our business or assets, your
          personal data may be transferred to a third party. Any new owner of
          our business may continue to use your personal data in the same way
          that we have used it, as specified in this Privacy Policy (i.e. to
          communicate with you).
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          In some limited circumstances, we may be legally required to share
          certain personal data, which might include yours, if we are involved
          in legal proceedings or complying with legal obligations, a court
          order, or the instructions of a government authority.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          If you want to know what personal data we have about you, you can ask
          us for details of that personal data and for a copy of it (where any
          such personal data is held). This is known as a “data subject access
          request”.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          You can exercise your right to access your personal data by contacting
          us through any means. However, we would welcome any data subject
          access requests made in writing and sent to us via the link shown in
          section “How to contact us”. There is not normally any charge for a
          subject access request. If your request is ‘manifestly unfounded or
          excessive’ (for example, if you make repetitive requests) a fee may be
          charged to cover our administrative costs in responding.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          We will respond to your subject access request within 15 days and, in
          any case, not more than one month of receiving it. Normally, we aim to
          provide a complete response, including a copy of your personal data
          within that time. In some cases, however, particularly if your request
          is more complex, more time may be required up to a maximum of three
          months from the date we receive your request. You will be kept fully
          informed of our progress.
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Cookies
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          We use cookies and similar technologies (collectively “cookies”) on
          the MNPL Websites to distinguish you from other users. This helps us
          to provide you with the best possible experience while you are on the
          MNPL Websites and also allows us to improve the MNPL Websites and the
          services we are providing.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          Cookies are small text files that are sent to your device (computer,
          tablet, smartphone, or another device) by the website you visit.
          Cookies are stored on your device (in your browser’s file directory)
          and are sent back by your browser to the website on each subsequent
          visit. We use the following cookies on the MNPL Websites:
        </Text>
        <Accordion allowToggle mb="40px">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    lineHeight="24px"
                    fontSize="16px"
                    fontWeight="400"
                    fontFamily="Montserrat"
                  >
                    Cookie File: DSID
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Purpose
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="20px"
              >
                Used for retargeting, optimisation, reporting and attribution of
                online adverts.
              </Text>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Category
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="10px"
              >
                Third party cookie
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    lineHeight="24px"
                    fontSize="16px"
                    fontWeight="400"
                    fontFamily="Montserrat"
                  >
                    Cookie File: IDE
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Purpose
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="20px"
              >
                Used for retargeting, optimisation, reporting and attribution of
                online adverts.
              </Text>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Category
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="10px"
              >
                Third party cookie
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    lineHeight="24px"
                    fontSize="16px"
                    fontWeight="400"
                    fontFamily="Montserrat"
                  >
                    Cookie File: RUL
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Purpose
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="20px"
              >
                Used for retargeting, optimisation, reporting and attribution of
                online adverts.
              </Text>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Category
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="10px"
              >
                Third party cookie
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    lineHeight="24px"
                    fontSize="16px"
                    fontWeight="400"
                    fontFamily="Montserrat"
                  >
                    Cookie File: _ga
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Purpose
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="20px"
              >
                Used for retargeting, optimisation, reporting and attribution of
                online adverts.
              </Text>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Category
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="10px"
              >
                Third party cookie
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    lineHeight="24px"
                    fontSize="16px"
                    fontWeight="400"
                    fontFamily="Montserrat"
                  >
                    Cookie File: _gid
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Purpose
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="20px"
              >
                Used for retargeting, optimisation, reporting and attribution of
                online adverts.
              </Text>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Category
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="10px"
              >
                Third party cookie
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    lineHeight="24px"
                    fontSize="16px"
                    fontWeight="400"
                    fontFamily="Montserrat"
                  >
                    Cookie File: _ga_1WKWKG90YT
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Purpose
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="20px"
              >
                Used for retargeting, optimisation, reporting and attribution of
                online adverts.
              </Text>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Category
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="10px"
              >
                Third party cookie
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    lineHeight="24px"
                    fontSize="16px"
                    fontWeight="400"
                    fontFamily="Montserrat"
                  >
                    Cookie File: _gat_gtag_UA_137438445_1
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Purpose
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="20px"
              >
                Used for retargeting, optimisation, reporting and attribution of
                online adverts.
              </Text>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Category
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="10px"
              >
                Third party cookie
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text
                    lineHeight="24px"
                    fontSize="16px"
                    fontWeight="400"
                    fontFamily="Montserrat"
                  >
                    Cookie File: MnplCookieConsent
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Purpose
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="20px"
              >
                Used for retargeting, optimisation, reporting and attribution of
                online adverts.
              </Text>
              <Text
                mb="20px"
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                fontFamily="Montserrat"
              >
                Category
              </Text>
              <Text
                lineHeight="24px"
                fontSize="16px"
                fontWeight="400"
                mb="10px"
              >
                Third party cookie
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          How to Contact Us?
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          If you have any questions we would be happy to answer them. Do not
          hesitate to contact us for any inquiries you might have via
          <Link href="https://monopole.network/" isExternal>
            this link
          </Link>{" "}
          .
        </Text>
        <Text
          mb="20px"
          lineHeight="24px"
          fontSize="18px"
          fontWeight="700"
          fontFamily="Montserrat"
        >
          Changes to Privacy Policy
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          We may change this Privacy Policy from time to time, at our sole
          discretion. This may be necessary, for example, in order to reflect
          changes in the laws and regulations, or if we change our business in a
          way that affects personal data protection.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="10px">
          Any changes will be immediately posted on our Website and you will be
          deemed to have accepted the terms of the Privacy Policy on your first
          use of our Website following the alterations. We recommend that you
          check this page regularly to keep up-to-date.
        </Text>
        <Text lineHeight="24px" fontSize="16px" fontWeight="400" mb="40px">
          This Privacy Policy was last updated on January 25th 2022.
        </Text>
      </Box>
    </>
  );
}

export default PrivacyPolicy;
