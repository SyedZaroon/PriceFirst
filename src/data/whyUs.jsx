import React from "react";
import SecuritySafe from "@/assets/icons/SecuritySafe";
import Box from "@/assets/icons/Box";
import Clock from "@/assets/icons/Clock";
import EyeSlash from "@/assets/icons/EyeSlash";
import ShieldTick from "@/assets/icons/ShieldTick";
import Verify from "@/assets/icons/Verify";

const whyus = [
  {
    title: "Safe & Secure",
    desc: "Your information is securely passed to the selected buyer, we never share your data.",
    icon: <SecuritySafe /> 
  },
  {
    title: "Free Postage Provided",
    desc: "All offers come with free tracked postage. Choose a label or request a pack, it’s on us.",
    icon: <Box />
  },
  {
    title: "Offers Are Time-Sensitive",
    desc: "Prices are updated daily. Lock in the best offer by completing your checkout today.",
    icon: <Clock />
  },
  {
    title: "No Hidden Fees",
    desc: "There are no hidden charges from our platform. What you see is what you get.",
    icon: <EyeSlash/> 
  },
  {
    title: "You're in Control",
    desc: "Change your mind anytime before shipping. You're under no obligation to sell.",
    icon: <ShieldTick /> 
  },
  {
    title: "Trusted UK Buyers Only",
    desc: "We work only with verified UK-based buyers, reviewed by thousands of users.",
    icon: <Verify />
  },
];

export default whyus;
