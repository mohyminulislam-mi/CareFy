import React from "react";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Logo />
            </Link>
            <p className="text-gray-400 mb-4">
              Connect with verified, professional caregivers. From childcare to
              specialized elderly support, we make caregiving easy, secure, and
              accessible for every family.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-blue-400 transition">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition">
                <Youtube />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition">
                <Linkedin />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Track Booking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Service Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+880 1861720000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@carefy.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Shop Street, Birampur 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; 2024 CareFy. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
