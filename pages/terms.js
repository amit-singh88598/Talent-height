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

// Terms And Conditions Page

export default function TermsAndConditions() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Terms of use | Talent-Height</title>
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
          Terms of use
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
              Terms & Condition
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
              Talent Height may use information that it collects about you to:
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
                  Provide you when Talent Height services, its features and
                  functionalities, and deliver the services that you have
                  requested.
                </li>
                <li>
                  Use it for identity authentication Talent Height verification,
                  customer service, fraud monitoring, archiving and backup
                  purposes, and to ensure the security of the products and
                  services that we provide.
                </li>
                <li>
                  Help us develop new services, and improve and customize our
                  current services.
                </li>
                <li>
                  Help us understand how you use our services and provide
                  tailored responses to your individual needs, such as language
                  setting, location setting, personalized service and help
                  instruction.
                </li>
                <li>
                  Display advertisements that are tailored to your interests in
                  place of general advertising; evaluate the effect of our
                  advertisements and promotional activities and improve its
                  performance.
                </li>
                <li>
                  Software certification and management of software upgrades.
                </li>
                <li>
                  Perform research and analysis about your use of, or interest
                  in Talent Height services. In order to improve our user
                  experience and in accordance with relevant laws and
                  regulations, we may use the information we collect regarding a
                  specific service as data to improve our other services. For
                  example, if you use one of our services, we may use the
                  information collected during that service to provide
                  personalized content you see when you use another service of
                  ours. You may also ask to use the same previous personal
                  information stored in our system for our other services.
                </li>
                <li>
                  Specific privacy policies for certain services will further
                  explain how we specifically use your information during the
                  service.
                </li>
              </ul>
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
              What information does it collect
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
              Once you have created a Profile, you may choose to edit your sex,
              birthday and other information. Moreover, we will automatically
              track certain information such as your IP, device
              information(model, system, MCC), time zone. And we also collect
              information about mobile operator testing and user engagement
              purposes. <br /> For safety and security and to ensure you have
              the best possible user experience, we require , network
              information (4G\3G\WIFI). That information helps us identify your
              physical location so that it can be displayed and shared with
              other users. We may from time to time allow our employees to use
              the product users to verify their accounts (because we want to
              make sure you are not a robot!) and might ask for your phone
              number or Face book Account and as well your goggle account .
              Don't worry! This is only to make sure you are real and breathing!
              We won't use your phone number for marketing purposes, only when
              you submit Talent Height account, your phone number shall be
              provided.
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
              How we use your information
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
              In addition to some of the specific uses of information we
              describe in this Privacy Policy, we may use information that we
              receive to:
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
                  Help you efficiently access your information after you sign
                  in.
                </li>
                <li>
                  Remember information so you will not have to re-enter it
                  during your visit or the next time you visit the Service.
                </li>
                <li>
                  Provide personalized content and information to you and
                  others, which could include online ads or other forms of
                  marketing.
                </li>
                <li>
                  provide, improve, test, and monitor the effectiveness of our
                  Service
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
              How to Access and Control Your Information
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
              We will take the appropriate technical means to ensure that you
              can access, update, and correct your registration information or
              other personal information provided during the use of our
              services. When you visit, update, correct, or delete your personal
              information, we may ask you to verify your identity in order to
              protect your account security.
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
              Emails and Other Messages We Send You
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
              We may use your information to send you emails, news, or other
              push notifications to your device. If you do not wish to receive
              this information, you can choose to cancel your subscription
              following the instructions given in the emails. <br /> When it is
              necessary, we may send you notices regarding our services (for
              example, if a service is suspended due to system maintenance). You
              may not be able to cancel these notifications related to our
              service.
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
              Age Limit
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
              We require that user must be at least 18 years old to use our
              services. If any minors are found using our service, we will
              immediately terminate the service and remove all the rights from
              the accounts. If you are below the aforementioned minimum age, you
              may only use over services if your guardian has provided us with
              valid consent, you may not falsely claim you have reached the
              minimum age. The age limit can also be set according to the rules
              of once country.
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
              Scope of Application of Privacy Policy
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
              With the exception of certain special services, all of our
              services are applicable to this “Privacy Policy”. Specific privacy
              policies will apply to the special services mentioned. These
              specific privacy policies constitute a part of this “Privacy
              Policy”. If a part of the specific privacy policy is different
              than this “Privacy Policy”, then the terms of the specific privacy
              policy should be applied.
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
              Code of Conduct
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
              Talent Height is dedicated to providing an unique, interesting
              stream platform for worldwide users. In order to ensure the
              quality of the stream content, we have developed a code of conduct
              to guarantee a good user experience. We will do our best to
              maintain the quality of Talent Height content, however we cannot
              fully guarantee this. If you violate the following terms and
              rules, it may cause us to suspend or permanently terminate your
              use of Talent Height services.
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
              Violence and/or Self Mutilation is Prohibited
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
              Safety is the first and foremost priority of Talent Height Content
              and actions relating to violence or self-mutilation is strictly
              prohibited. If we detect any risk of damage to public safety or a
              direct threat, we reserve the right to delete the content directly
              and report it to relevant law enforcement agencies. Similarly, we
              strictly prohibit the threatening of others. If this occurs, we
              may permanently terminate your use of Talent Height services.
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
              Nudity and Explicit Words/Actions Prohibited
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
              Regardless of gender, you are not allowed to expose excessive skin
              in any content of the video. In particular, females must not
              expose themselves in any video content. Any users engaging in
              actions relating to or encouraging nudity will be temporarily or
              permanently banned from Talent Height services. <br /> You are
              also not allowed to use vulgar or explicit language in the chat
              room as well as on videos that will be on your channel. This
              includes showing any video that contain aggressive or explicit
              content. Sexual acts, hinting of a sexual act, displaying sexual
              toys or dancing sexually in the video are all prohibited as well,
              the excessive sending of messages in the inbox of the particular
              subscriber will be blocked as soon as found invalid, so try using
              a proper language and valid questions. <br /> Do not bring
              anyone's personal issues on the website if found such content on
              the page that person will be given a warming mail on his or her
              registered mail ID ,if still not removed then the subscribers ID
              will be permanently banned.
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
              Fraud, Harassment, and Hate Speech Prohibited
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
              You must respect the other members of this community. Ridicule,
              fraud, hatred, racial discrimination, or harassment of other users
              is strictly prohibited on Talent Height While we respect the
              freedom of speech, we strictly prohibit personal video attacks
              based on race, nationality, religion, sex, gender, sexual
              orientation, disability, or other sickness. If we found such
              content on your ID it can be banned for a particular time period
              and still not removed it can be banned permanently for your future
              use.
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
              Use and Display of Forbidden Objects Prohibited
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
              The use of prohibited drugs, medical devices, or is prohibited
              during the downloading of your content on the channel. Talent
              Height is designed for users over the age of 18. If we find that
              the user of an account is under the age of 18, we will terminate
              the account, until and unless we have a proper consent from the
              guardian who will be helping the minor handling the account.
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
              Spam Prohibited
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
              Sending spam messages or videos in the inbox that interferes with
              other users’ normal usage of Talent Height services is prohibited.
              Sending sexual pictures or links to websites containing malicious
              content is also prohibited. Talent Height will take the necessary
              measures against accounts participating in such activity, which
              may include cyber action as well.
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
              Sharing of the Information/Hacking
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
              As when you will be using Talent Height certain information about
              you and even about your bank details will be taken by us that will
              be used during the time of withdrawal, this information will be
              completely preserved by us ,so while using this application make
              sure you do not share information to any one else because it may
              lead to the hacking of your Id as well so be alert while sharing
              your information regarding the application to any stranger.
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
              Adversisment
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
              As Talent Height is a platform where you can showcase your talent
              so that you may get name and fame both, but Talent Height is also
              helping various people to develop their business through
              promotions and other advertisement acts so banners of
              advertisement is different from the usage of you account if you
              want the banner of your work to be displayed on the website so
              that you can prosper more in work for that you can reach us on the
              “Contact Us”. Once reaching us our executive will help you so that
              the process of uploading your Advertise becomes easy .
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
              ADVERSTIMENT RELATED QUERIES
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
              We don’t share your personal information into this advertisement
              process, the adds on your channel will be shown according to your
              mode of interest ,age and gender. Further the adds will be shown
              on the users who are above the age of 18.If you are dealing with
              us on the advertisment and in future you want to know about the
              reports about your add you can directly visit your website and
              channel the advertisement analytics .
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
              Verification of your account/OTP
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
              To formulate your account for its usage, certain things from you
              will be asked which would include your verification process so
              that while you use your ID it wont create a problem while
              uploading you videos on it, so once you are done filling all your
              details one time OTP will be send to you on your registered number
              or the email id ,once that OTP number is filed in the correct
              place you will be allowed to work on you channel by without any
              interference. The OTP will be valid for just 5min .Even if your
              account is not ”DO NOT SHARE YOUR OTP WITH ANYONE BECAUSE IT MAY
              LEAD TO ANY DIFFICULTY FOR YOU IN FUTURE.
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
              REPORTING
            </Typography>
            <Typography
              style={{
                lineHeight: "35px",
                letterSpacing: "1.4px",
                fontSize: "1.4em",
                marginTop: 30,
                margin: 20,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              While using the Talent Height you may find the invalid content or
              invalid videos which may be based on race, nationality, religion,
              sex, gender, sexual orientation, disability, or other sicknesses
              which may hurt someone's sentiments, so we give you the authority
              to report about that particular account or on any particular video
              once the reports exceeds the limit of 20 the account or the video
              will be banned .Reporting authority is just provided to you so
              that you may help us to keep our application safe and make it use
              in a better way .
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
              Cookies
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
              Our use of cookie and local storage device (including specific
              cookie name )might vary depending on elapsing of time, but usually
              will be included into said types. We will notify you of any
              material changes in our use of cookie and local storage device.
              Please visit the page periodically to help you verify any changes.
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
              How to Delete ……………… Account or Deactivate Account…………….
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
                  Open your email account that is registered with the
                  application(having the correct email will only help you in
                  deactivating your account).
                </li>
                <li>
                  Now compose an email and enter the email address support@
                  Talent Height .com, or choose the options why you want to
                  deactivate your account with a specific reason .
                </li>
                <li>
                  Once all the details are correctly updated according to the
                  requirement then you can click on the option “REQUEST TO
                  DELETE MY ACCOUNT”.
                </li>
                <li>
                  Once the account is deactivated all your information and the
                  content you loaded on your channel as well your account will
                  be removed permanently.
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
              Duplicacy of the content
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
              As this is the entrainment site on which you will be showcasing
              your talent and your talent will be shown worldwide ,so in order
              to this ,any duplicate content will not be allowed as it may hurt
              someone's emotions ,if still in order to the instructions given if
              any duplicate content is found a warning mail will be send to you
              but still if it will not be removed by the subscriber than the
              video content will be directly deleted by the official heads .
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
              Wallet
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
              We require your bank information and other information to make
              payments and at the time withdrawal you will be solely responsible
              for the information you share on which we will be processing your
              payment . <br /> The payment in the wallet will be issued to you
              on the basis of the completion of the terms and policies, once you
              complete that zone you will be getting your earrings which you can
              withdraw or can use for the further upgrading of your channel.
              <br /> Incase the bank information share by you is wrong and
              payment is released in that particular account we will not be
              responsible for it ,so kindly put in your correct information.
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
              Contact Us
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
              If while using Talent Height , you might face any difficulty which
              is not getting solved or any other questions related to “Private
              Policy”, you may send a mail at info@talent height.com or to the
              said address.
            </Typography>
          </Card>
        </div>
      </Container>
      <Divider />
      <Footer />
    </div>
  );
}
