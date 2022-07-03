import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import { useForm } from "react-hook-form";
// import { publicRequest } from "../api/requests";
// import Modal from "../components/UI/Modal/Modal";
import ClipLoader from "react-spinners/ClipLoader";
import { FooterIcon } from "./Buttons";
import { HeadingSix, Paragraph } from "./FontStyles";
const Footer = () => {
  const footerLinks = [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Services",
          path: "/services",
        },
        {
          name: "Blog",
          path: "/blog",
        },
      ],
    },
  ];
  let loading = true;
  let color = "#1e3330";
  // const [load, setLoad] = useState(false);
  // const [showNotification, setShowNotification] = useState(false);
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = async (data) => {
  //   try {
  //     setLoad(true);
  //     await publicRequest.post("/subscription", { ...data });
  //     setShowNotification(true);
  //     setLoad(false);
  //     reset(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className="w-full flex flex-col justify-between space-y-12  bg-pry-100">
      <div className=" py-6  flex flex-col space-y-8 justify-between w-full ">
        {/* {showNotification && (
        <Modal
          message="Thank you for your subscribing."
          onClose={() => setShowNotification(false)}
        />
      )} */}
        <div className="flex justify-between bg-pry-100 border-b py-2 border-b-pry-50 px-8 md:px-24">
          <p className="font-heading text-2xl font-bold   text-pry-50 ">
            LogiQuick
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-12">
            <h5 className="hidden md:block font-body uppercase  font-medium text-base text-pry-50">
              follow us on
            </h5>
            <div className="flex justify-between  items-center space-x-4 md:space-x-6 ">
              <FooterIcon
                path="www.facebook.com/"
                icon={<FacebookOutlinedIcon />}
              />
              <FooterIcon path="www.instagram.com/" icon={<InstagramIcon />} />
              <FooterIcon path="www.twitter.com/" icon={<TwitterIcon />} />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between px-8 md:px-24">
          <div className="flex flex-col md:flex-row  justify-center space-y-6 md:space-y-0 md:justify-between w-full">
            {footerLinks.map((link, index) => (
              <div
                className="flex flex-col justify-between space-y-6 md:space-y-4"
                key={index}
              >
                <HeadingSix title={link.title} color="pry-50" size="xl" />
                {link.links.map((link, index) => (
                  <Link href={link.path} key={index}>
                    <a className="text-pry-50 hover:text-sec transition font-body text-base duration-300">
                      {link.name}
                    </a>
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col  space-y-6 md:space-y-4">
              <HeadingSix title="Working hours" color="pry-50" size="xl" />

              <Paragraph
                title="Monday-Friday : 8.00am - 4:00pm"
                color="pry-50"
                align="left"
              />

              <Paragraph
                title="Saturday : 8.00am - 3:00pm"
                color="pry-50"
                align="left"
              />

              <Paragraph
                title="Holidays : 8.00am - 12:00pm"
                color="pry-50"
                align="left"
              />
              <Link href="/request">
                <a className="text-pry-50 hover:text-sec transition font-body text-base duration-300">
                  Request a quote
                </a>
              </Link>
            </div>
            <form
              // onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-between w-full md:w-3/5 mt-6 md:mt-0 space-y-8 md:space-y-0 "
            >
              <HeadingSix
                title="
                Subscribe to our newsletter
               "
                color="pry-50"
                size="xl"
              />
              <Paragraph
                title=" Signup to get the latest discount and information on our
                products &amp; services"
                color="pry-50"
                align="left"
              />

              <div className="flex flex-col">
                <label
                  className="relative text-pry-50 focus-within:text-pry-50 block"
                  key="Email address"
                >
                  <span className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3">
                    <EmailIcon />
                  </span>

                  <input
                    type="text"
                    id="subscriberEmail"
                    name="email"
                    className="py-3 px-4 w-full tracking-widest left-12 block pl-14  placeholder-pry-50 bg-pry-100 border-b border-b-pry-50 text-pry-50 placeholder:text-pry-50  appearance-none transition duration-300 focus:outline-none focus:border-pry-50 focus:ring-pry-50 focus:ring-1 "
                    placeholder="Your email address"
                    // {...register("subscriberEmail", {
                    //   required: "Your email address is required, thank you",
                    //   minLength: {
                    //     value: 4,
                    //     message: "Email must be more than 4 characters",
                    //   },
                    // })}
                  />
                </label>
                {/* <p className="text-pry-50 font-normal text-sm font-body">
                {errors["email"] && errors["email"].message}
              </p> */}
              </div>

              <button className=" flex justify-center w-full bg-pry-50 text-pry-100  font-body py-4 px-4 hover:bg-sec  hover:text-pry-50 font-medium transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-sec flex justify-center items-center py-4">
        <Paragraph
          title=" Copyright &copy; LogiQuick 2022"
          color="pry-50"
          align="center"
        />
      </div>
    </div>
  );
};

export default Footer;
