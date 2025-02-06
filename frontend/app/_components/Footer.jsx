import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-gold-600 dark:text-gold-300">
              <Image
                src="/images/logo.avif"
                alt="Next.js"
                width={110}
                height={110}
              />
            </div>

            <p className="mt-4 max-w-xs text-gray-400 dark:text-gray-300">
              Top-quality products at unbeatable low prices—shop smart, save more!
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gold-600 dark:text-gold-300">All Categories</p>

              <ul className="mt-6 text-sm grid lg:grid-cols-2 lg:col-span-2 gap-4">
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Vegetables
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Fruits
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Cool Drinks
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Grains
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Grocery
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Meats
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Snacks
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Candy
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Personal Care
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Bakery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gold-600 dark:text-gold-300">Popular Categories</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Biscuits & Drinks
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Fruits & Vegetables
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Dairy & Bakery
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Sweet & Snacks
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gold-600 dark:text-gold-300">About Us</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Our Story
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gold-600 dark:text-gold-300">Help</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Support Center
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    FAQs
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Shipping & Returns
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-400 transition hover:text-gold-600 dark:text-gray-200">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-12 text-center text-sm text-gray-400">
          <p className="text-gray-300 dark:text-gray-300">
            &copy; 2025 - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
