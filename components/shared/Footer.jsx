import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="p-2 md:p-0">
        <div className="md:px-20 lg:px-42 xl:px-68 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <Link href="/">
                <Image src="/wu_logo_white.png" width={200} height={100} alt="Company Logo" />
              </Link>
              <p className="text-gray-300 mb-4 mt-4">
                Send money worldwide with 0€ fee on your first transaction. Great exchange rates and low fees every day.
              </p>
              <Button className="rounded-full bg-[#fbd721] text-gray-900 hover:bg-[#e6c41d] w-[140px]">
                <Link href="/send-money">Get Started</Link>
              </Button>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/send-money" className="hover:text-[#fbd721] transition-colors">
                    Send Money
                  </Link>
                </li>
                <li>
                  <Link href="/exchange-rates" className="hover:text-[#fbd721] transition-colors">
                    Exchange Rates
                  </Link>
                </li>
                <li>
                  <Link href="/track-transfer" className="hover:text-[#fbd721] transition-colors">
                    Track Transfer
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-app" className="hover:text-[#fbd721] transition-colors">
                    Mobile App
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/help" className="hover:text-[#fbd721] transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#fbd721] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/fraud-protection" className="hover:text-[#fbd721] transition-colors">
                    Fraud Protection
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="hover:text-[#fbd721] transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/terms" className="hover:text-[#fbd721] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#fbd721] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-[#fbd721] transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-[#fbd721] transition-colors">
                    Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">© 2024 Western Union. All rights reserved.</p>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-sm text-gray-300">
                  <span className="font-bold text-[#fbd721]">Be informed. Be aware.</span>{" "}
                  <span className="underline">Protect yourself from fraud.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
