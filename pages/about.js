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

// About Page

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Us | Talent-Height</title>
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
          About Us
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
                marginBottom: 30,
                textAlign: "justify",
                marginLeft: 20,
              }}
            >
              About
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
              Talent Height is the website and the product of the company Talent
              Foster India Private Limited headquartered in Dehradun, India. It
              consists of mainly three co-founders of different age groups:-
              Devesh Bartwal, Manish Kumar, Shivam Gandhi. They created this
              platform on 1 Jan 2020. <br /> <br /> In this global arena, where
              the competition in every field is at its peak, it becomes quite
              difficult to survive in such a challenging situation by being a
              part of this race for the best. To do this, it is the key factor
              to opt the right track to reach the desired goal. But the dilemma
              of choosing the correct and appropriate source of the platform
              from the market full of time-wasting and money squandering traps
              may lead you to the ‘Misleading’. <br /> <br /> Misleading is
              something, which not only wastes the golden time of your valuable
              career years but can also demotivate you to quit the career of
              your choice in the field of art, creativity, and talent, whether
              it is dancing, singing, teaching, acting, cooking, etc. <br />{" "}
              <br /> So, for the up-liftmen of such underprivileged talented
              people and other expertise artists, we have created a door-opening
              opportunity through a platform that is known by the name of Talent
              Height. Its services are accessible to all the people of 18 years
              and above. It is the website and the product of our company TALENT
              FOSTER PRIVATE INDIA LIMITED which is created for all the talented
              artists across the world. <br /> <br /> We all know that there is
              no happiness and satisfaction in creating the content and
              uploading it without any worthy appreciation. Being an artist,
              healthy love, interest, and support for our content is something
              we earn priceless from the audience. This not only makes your
              content worthy and useful but also increases your motivation and
              passion towards your goal. It acts like a catalyst that amplifies
              your interest in your field and brings out the best hidden
              creative side through your talent/content, making you an Ingenious
              Star. <br /> <br /> In a nutshell, it adds beauty in your work and
              gives more eye-catching and entertaining videos full of talent to
              the audience. <br /> <br /> Therefore, keeping these things in
              mind, we have created a platform for you which not only helps you
              to create your supportive audience to watch and share your
              creative videos but also gives you the golden scope to earn a good
              amount of money through it. <br /> <br /> We are here with the
              purpose to bring out the best in you and to enhance your skill and
              ability gradually. To fulfill this aim, we conduct online
              competitions from time to time which is entitled as Ingenious
              Star. Where the registered candidates compete with each other and
              the audience itself does the judgment for the search of deserving
              winners which is done based on the maximum number of views on your
              video which is a part of the competition to give away exciting
              cash prizes and gifts to them by announcing their ranks on the
              Header. We announce winners of every competition and progress
              report of all the deserving candidates in this section only
              (HEADER). <br /> <br /> Not only this, but we also offer you the
              Stars ranging from one to five based on your number of subscribers
              and watch hours, which gives you the special privileges which
              differ from that of other no-star artists. To become a star artist
              you have to focus and fulfill on two specific criteria set by us-
              ‘Subscribers’ and ‘Watch Hours’. The stars are given to the users
              based on the following:- Users (Uploaders) who have up to 1000
              subscribers and have gained 2000 watch hours in their channel by
              their uploaded content fall under the category of One Star artist.
              Users who have 3000 subscribers and have 7000 watch hours in their
              channel comes under the category of Two Star artists. Similarly,
              users who have 7000 subscribers and 15000 watch hours in their
              channel come under the category of three Star artists. In the same
              way, uploaders having 12000 subscribers and 23000 watch hours are
              given the title of Four Star artists. Last but not the least,
              users which 25000 subscribers and 1 lakh and above watch hours in
              their channel are known as Five Star artists. The best part of the
              Star Rank system is that with the increase in the number of stars
              ranging from one to five, the percentage of the withdrawal of the
              money from the Talent Height money wallet also increases.
              Moreover, these special artists are also given other prizes from
              Talent Height. So guys hurry up and focus on the growth of two
              important elements of your channel i.e. your number of Subscribers
              and Watch Hours. Apart from this, we are also providing the
              message option to the users. Our users have their inbox and chat
              option which help them to communicate, connect and support each
              other in a better way. <br /> <br /> There is more for you inside
              the box. There is one more important option in the Talent Height
              which plays a vital role in the growth of the user’s money wallet
              of Talent Height. We are talking about the ‘Watch Ad’ option by
              clicking which you can watch various adds one after the other and
              earn coins per ad. These coins are automatically converted into
              money which the user can withdraw afterward through the payment
              gateway. Our dream is to promote talent across the globe as it is
              clear from the name of the company itself i.e. Talent Foster India
              Private Limited and it’s a product Talent Height. As we all know
              that the Talent knows no bounds in terms of land and area and is
              not restricted up to a particular boundary or a region. It is
              spread everywhere like the stars in the sky. This is why we are
              here with the motive to create the best opportunity for such
              talented artists to create their audience and supporters for their
              content. <br /> <br /> Moreover, our company also conduct offline
              competitions for the talented youth in different cities, to seek
              the best performances of our country’s talented Ingenious Stars to
              make them aware of the platform ‘Talent Height’ so that they can
              also access to our services to grab its massive benefits which can
              change their way and view of life.
            </Typography>
          </Card>
        </div>
      </Container>
      <Divider />
      <Footer />
    </div>
  );
}
