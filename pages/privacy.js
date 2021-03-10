import React from "react";
import Head from "next/head";
import {
  Card,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Header from "../layout/header";
import Footer from "../layout/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 120,
    paddingLeft: 90,
    paddingRight: 90,
    backgroundColor: "#79b321",
    marginTop: -22,
  },
  content: {
    marginTop: 40,
    marginBottom: 40,
  },
  contentText: {
    fontSize: "1.1em",
    textAlign: "justify",
    textJustify: "interword",
    marginRight: 15,
  },
}));

// Privacy page

export default function Privacy() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Privacy Policy | Talent-Height</title>
      </Head>
      <br />
      <Card className={classes.root} elevation={0}>
        <Typography
          style={{
            color: "#ffffff",
            textAlign: "center",
            fontSize: "2.2em",
            fontWeight: 9000,
          }}
        >
          Privacy Policy
        </Typography>
      </Card>
      <Container>
        <div style={{ marginTop: -120 }}>
          <Card className={classes.content} elevation={4}>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                marginLeft: 20,
              }}
              variant="body2"
            >
              In Talent Height we are committed in maintaining your trust in us
              and following us by the following principles to protect your
              personal information: accountability, purpose limitation, opt-pin,
              data minimization, security, subject participation and
              transparency, etc.
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
                marginTop: 30,
              }}
            >
              How this privacy policy is updated
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                marginLeft: 20,
              }}
              variant="body2"
            >
              Our privacy policy may subject to change as the time of any update
              Without your express consent ,we will not limit the rights due to
              you under this privacy policy. In any changes regarding the
              material things and events you will be provided a prior notice.
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              Safety, Security and Compliance with Law.
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                marginLeft: 20,
              }}
              variant="body2"
            >
              Your information, and the contents of your private online
              communications, may be accessed and disclosed :
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
              }}
              variant="body2"
            >
              <ul>
                <li>
                  In response to legal process (for example, a court order,
                  search warrant ).
                </li>
                <li>
                  When we have a good faith belief that we are required to
                  disclose the information in response to legal process.
                </li>
                <li>
                  In other circumstances in which Talent Height believes the
                  Talent Height or other web sites are being used in the
                  commission of a crime (including exchanging information with
                  other companies and organizations for the purposes of fraud
                  protection and credit risk reduction).
                </li>
                <li>
                  When we have a good faith belief that there is an emergency
                  that poses a threat to the safety of you or another person.
                </li>
                <li>
                  When necessary either to protect the rights or property of to
                  enforce our Terms of Service, or for us to render the service
                  you have requested ,we need to take the necessary step
                  according to certain laws.
                </li>
              </ul>
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              Private policy of talent height
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                marginLeft: 20,
              }}
              variant="body2"
            >
              The talent height is accessible from https://www.talentheight.com/
              , while using this website of our main priority is the privacy of
              our users and our visitors. The Privacy Policy for this website
              contains types of information that is collected and recorded by
              Talent Height and how we use it. If you have additional questions
              or require more information about our Privacy Policy, do not
              hesitate to Contact Us , the “Contact Us” information is also
              mentioned in the “Terms and Policies” section as well.
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              LOG FILES
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                marginLeft: 20,
              }}
              variant="body2"
            >
              Talent Height follows a standard procedure of using log files.
              These files helps the visitors to log in when they visit the
              websites. All hosting companies do this as a part to check the
              hosting services' analytics. The information collected by log
              files include Internet Protocol (IP Address), Browser Type,
              Internet Service Provider (ISP), Date and Time stamp,
              referring/exit pages, and possibly the number of clicks. These are
              not linked to any of your information that is personally
              identifiable to you. The purpose of the information is for
              analyzing trends, administrating the site, tracking users'
              movements and their actions on the website.
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              COOKIES
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
              }}
              variant="body2"
            >
              <ul>
                <li>
                  Our use of cookie and local storage device (including specific
                  cookie name )might vary depending on elapsing of time, but
                  usually will be included into said types. We will notify you
                  of any material changes in our use of cookie and local storage
                  device. Please visit the page periodically to help you verify
                  any changes.
                </li>
              </ul>
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.3px",
                fontSize: "1.5em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              Are cookies also used on mobile applications?
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
              }}
              variant="body2"
            >
              <ul>
                <li>
                  Mobile applications do not use cookies. Applications use the
                  unique identifiers of your mobile (here in after “Mobile
                  Identifiers”) to identify your device. These Mobile
                  Identifiers are stored on a user’s device and are accessible
                  by the Talent Height Application. Partner tools have been
                  installed on the Talent Height Application (here in after
                  “Tracking tool of the application”) and collect information
                  from these identifiers to ensure the Application is operating
                  correctly, to allow certain features to function or for
                  advertising or analysis purposes.
                </li>
              </ul>
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.3px",
                fontSize: "1.5em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              What are the various categories of cookies?
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
              }}
              variant="body2"
            >
              <ul>
                <li>
                  A cookie can be categorized based on its lifetime and domain
                  to which it belongs.
                </li>
                <li>The lifetime of a cookie is either:</li>
                <li>
                  A session cookie, which is deleted when the user closes
                  his/her browser.
                </li>
                <li>
                  A persistent cookie that remains stored on the hard drive of
                  the user’s terminal for a predetermined time. • Domain refers
                  to either:
                </li>
                <li>
                  Proprietary cookies which are placed by the server of the
                  website visited that shares the same domain.
                </li>
                <li>
                  Third party cookies are placed by a domain that is different
                  from the website visited. For example, these cookies can be
                  placed when a website makes reference to a file, such as
                  JavaScript, located outside its domain.
                </li>
              </ul>
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.3px",
                fontSize: "1.5em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              What are the various features of cookies?
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
              }}
              variant="body2"
            >
              <ul>
                <li>
                  Mandatory cookies (for example, see below SECURITY and SYSTEM
                  cookies): these may be used for authentication or security
                  purposes. They are mandatory for the operation of some
                  features of the website or the Talent Height Application, and
                  for security reasons.
                </li>
                <li>
                  Functional cookies (for example, see below LANGUAGE cookies):
                  these cookies improve and optimize the users’ experience on
                  the Talent Height website by, for example, remembering the
                  preferred language of users when they browse the website.
                </li>
                <li>
                  Advertising cookies (see below ADVERTISING cookies): these
                  cookies collect information about your browsing habits and
                  interests in order to offer you relevant ads.
                </li>
                <li>
                  Audience-measurement cookies (see below MEASUREMENT cookies):
                  they are used to obtain information on the browsing history of
                  users, to analyze traffic on the website or the Talent Height
                  Application and for audience measurement purposes (for
                  example, cookies collect information on the pages visited
                  (number of visits, etc.). Information collected is anonymized
                  and aggregated, which allows us to improve the functioning of
                  our services.
                </li>
              </ul>
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              YOUR RIGHTS
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
              }}
              variant="body2"
            >
              <ul>
                <li>
                  You can review and revise your profile information at any
                  time. Once you register, you will be able to review and change
                  much of your personal information except gender. If you want
                  to stop using your account it will be initially deactivated.
                  This means that no user will be able to search for you on
                  website although they may still see you profile from direct
                  cached links, but it will not be deleted. We save your profile
                  information in case you later decide to restore your account.
                  Many users deactivate their accounts for temporary reasons and
                  in doing so expect us to maintain their information until they
                  return to Talent Height. You will therefore be able to restore
                  your account and your profile in its entirety within 30 days
                  of de-activating it.
                </li>
                <li>
                  After the expiration of 30 days, your account is permanently
                  deleted from Talent Height . We delete photographs from our
                  servers within 14 days from the expiration of the deactivation
                  period while other information (such as contact history) is
                  deleted by us over a longer timescale, by way of housekeeping
                  on a periodic basis. You should only delete your account if
                  you are certain you never want to restore it.
                </li>
                <li>
                  To prevent abuse and/or misuse of Talent Height by a user
                  following termination or deletion of a profile/account. We
                  shall retain such information as we deem in our sole
                  discretion may be necessary to ensure that user does not open
                  a new account and profile in breach of our Terms and
                  Conditions of Use and to ensure compliance with all laws and
                  regulations.
                </li>
                <li>
                  If you have questions about our Privacy Policy or how we
                  collect and use information, drop us a line via Feedback
                  contact us on .........................................com.
                </li>
              </ul>
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.3px",
                fontSize: "1.5em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              Description of rights
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
              }}
              variant="body2"
            >
              <ul>
                <li>
                  The right to access allows a Member to ask to Talent Height
                  for data pertaining to him/her in an accessible format, based
                  on Article 39 of the French Data Protection Act and Article 15
                  of the GDPR. Your right of access must not infringe on the
                  privacy of third parties, which is why you will only have
                  access to your personal data and not that of third parties
                  (for example, only messages that you have sent will be
                  communicated to you and not those that you have received).
                </li>
                <li>
                  The right to correct grants a Member the right to demand to
                  Talent Height corrects, adds to, updates or removes any
                  personal data on him/her that is inaccurate, incomplete,
                  ambiguous, out-of-date, or whose use, communication or storage
                  is prohibited based on Article 40 of the French Data
                  Protection Act and Article 16 of the GDPR. You can modify or
                  rectify some data directly on the Application. You just need
                  to go on your profile and make changes directly in the
                  sections “My photos”, “Work and Education (Job, Employer,
                  School)”, and “About me”. When you have registered via
                  Facebook Connect, to change your first name, age, or gender,
                  go to your Facebook page and update the “About me – contact
                  and basic info” section of your profile. When you have
                  registered via a cell phone number, you must send a letter or
                  contact customer support at the addresses listed above, to
                  change your first name, age or gender.
                </li>
                <li>
                  The right to data portability grants a Member the right to
                  receive the personal data he/she gave to Talent Height, in a
                  structured, commonly used format, legible on a machine, and to
                  forward them to another processing entity, in compliance with
                  Article 20 of the GDPR.
                </li>
                <li>
                  The right to delete grants a Member the right to demand the
                  removal, free of charge and at his/her own discretion, of data
                  transmitted to to Talent Height, within the limits of the
                  rights based on Article 17 of the GDPR. You can delete your
                  Account using the corresponding feature on the Application. We
                  inform you that all your data will be deleted from the to
                  Talent Height application. However, to Talent Height, as the
                  host, has a legal obligation to retain your personal data for
                  one year under Article 6-II) of the French Trust in the
                  Digital Economy Act no. 2004-575 of 21 June 2004. Your data
                  will be kept in an archive database kept separate from our
                  production databases and only for the purpose of responding to
                  a court order. Data will be permanently deleted after one
                  year.
                </li>
                <li>
                  The right to limitation grants Members the right to request
                  the limitation of the processing of their data by to Talent
                  Height under the conditions set out in Article 18 of GDPR.
                </li>
                <li>
                  The right for the Member to set the guidelines for the
                  retention, deletion and communication of his/her personal data
                  after his/her death, in compliance with Article 40-1 of the
                  French Data Protection Act.
                </li>
                <li>
                  These rights may only be exercised within the limits of to
                  Talent Height resources as it relates to its use of Facebook
                  Connect. Some data sent to to Talent Height by Facebook
                  Connect cannot be corrected without Facebook’s assistance.
                </li>
              </ul>
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              Personal data of minors
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                marginLeft: 20,
              }}
              variant="body2"
            >
              Talent Height shall not collect data from minors. Should a Member
              lie about his/her date of birth, and particularly if he/she
              fraudulently claims to be an adult, the parents of the minor in
              question should inform Talent Height of this fact by sending an
              e-mail to one of the contacts mentioned in Article 11 “Contact”,
              requesting the data to be deleted. Talent Height commits to
              deleting all data on the minor in question as soon as possible.
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              Advertisement
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
              }}
              variant="body2"
            >
              <ul>
                <li>
                  We may use your information to provide you with more
                  personalized advertisements.
                </li>
                <li>
                  We may also use your information to send marketing messages to
                  you through our services, email, or other means in order to
                  provide or promote the following products and services:
                </li>
                <li>
                  (i) The products and services of Talent Height and its
                  affiliates and joint venture partners. These products and
                  services include instant messaging services, online media
                  services, interactive entertainment services, social
                  networking services, payment services, Internet search
                  services, location and map services, data management apps and
                  services, online advertising services, Internet banking, and
                  other social media, entertainment, e- commerce, information
                  and communication software or services (Internet services).
                </li>
                <li>
                  Third party Internet service providers, and the following
                  third party products and services: Food and beverage, sports,
                  music, movies, television, live performances and other arts
                  and entertainment, books, magazines and other publications,
                  clothing and accessories, jewelry, cosmetics, health and
                  hygiene, electronics, collectibles, household utensils,
                  electrical appliances, home decor and furnishings, pets, cars,
                  hotels, transportation, tourism, banking, insurance and
                  financial services, membership points and loyalty incentives,
                  and any other products or services that may be relevant to
                  you. If you do not wish that we use your personal information
                  for the above advertising purposes, you can request that we
                  stop using your personal information for these purposes by
                  following the related instructions as seen in our
                  advertisements.
                </li>
              </ul>
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              Third Party
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
              }}
              variant="body2"
            >
              <ul>
                <li>
                  Talent Height services may include or link to third party
                  social media or other services (including websites). For
                  example, you can use the “share” option to share content onto
                  our platform, or you can log into our service through a third
                  party platform. These features may collect your information
                  (including your log files), and may add cookies to your device
                  in order to function normally.
                </li>
                <li>
                  Talent Height will provide links to third party services or
                  websites through our advertisements or our other services. The
                  third party social media services may be operated by the said
                  third party or Talent Height . Your use of the third party
                  social media services (including providing the third party
                  with any personal information) shall be subject to the third
                  party’s terms and conditions and privacy policy. Please read
                  the terms and conditions carefully. Talent Height “Privacy
                  Policy” only applies to the information that we collect, not
                  the information that the third party collects or uses. Talent
                  Height does not assume any responsibility for the third party
                  usage of your information. Talent Height Privacy Policy does
                  not apply to other advertisers or websites. Thus, we are
                  advising you to consult the respective Privacy Policies of
                  these third-party ad servers for more detailed information. It
                  may include their practices and instructions about how to
                  opt-out of certain options. You may find a complete list of
                  these Privacy Policies and their links here.
                </li>
              </ul>
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                fontSize: "1.7em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              Disclosures
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
                marginLeft: 20,
              }}
              variant="body2"
            >
              To the fullest extent permitted by law, Talent Height expressly
              excludes:
            </Typography>
            <Typography
              className={classes.contentText}
              style={{
                lineHeight: "35px",
                letterSpacing: "1.5px",
              }}
              variant="body2"
            >
              <ul>
                <li>
                  All conditions, representations, warranties and other terms
                  which might otherwise be implied by statute, common law or the
                  law of equity.
                </li>
                <li>
                  Any liability incurred by you arising from use of Talent
                  Height , its services or these terms and conditions, including
                  without limitation for any claims, charges, demands, damages,
                  liabilities, losses or expenses of whatever nature and
                  howsoever direct, indirect, incidental, special, exemplary,
                  punitive or consequential damages (however arising including
                  negligence), loss of use, loss of data, loss caused by a
                  computer or electronic virus, loss of income or profit, loss
                  of or damage to property, wasted management or office time,
                  breach of contract or claims of third parties or other losses
                  of any kind or character, even if Talent Height has been
                  advised of the possibility of such damages or losses, arising
                  out of or in connection with the use of Talent Height . This
                  limitation on liability applies to, but is not limited to, the
                  transmission of any disabling device or virus that may infect
                  your equipment, failure or mechanical or electrical equipment
                  or communication lines, telephone or other interconnect
                  problems (e.g., you cannot access your internet service
                  provider), unauthorized access, theft, bodily injury (other
                  than caused by our negligence), property damage, operator
                  errors, strikes or other labor problems or any act of god in
                  connection with Talent Height including, without limitation,
                  any liability for loss of revenue or income, loss of profits
                  or contracts, loss of business, loss of anticipated savings,
                  loss of goodwill, loss of data, wasted management or office
                  time and any other loss or damage of any kind, however arising
                  and whether caused by tort (including, but not limited to,
                  negligence), breach of contract or otherwise, even if
                  foreseeable whether arising directly or indirectly.
                </li>
                <li>
                  For clearance of doubt, although Talent Height is under no
                  obligation to assumes responsibility or liability arising from
                  the activities you are engaging, nor for any error,
                  defamation, libel, slander, omission, falsehood, obscenity,
                  pornography, profanity, danger, or inaccuracy contained in any
                  information while you are using Service. You are prohibited
                  from posting or transmitting any unlawful, threatening,
                  libelous, defamatory, obscene, scandalous, inflammatory,
                  pornographic, or profane material or any material that could
                  constitute or encourage conduct that would be considered a
                  criminal offense, give rise to civil liability, or otherwise
                  violate any law. Talent Height will fully cooperate with any
                  law enforcement authorities or court order requesting or
                  directing Talent Height to disclose the identity of any user
                  that is engaging in any illegal activities.
                </li>
              </ul>
            </Typography>
          </Card>
        </div>
      </Container>
      <Divider />
      <Footer />
    </div>
  );
}
