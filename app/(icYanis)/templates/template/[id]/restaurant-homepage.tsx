'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigation = [
  { name: 'Home', href: 'http://localhost:3000/' },
  { name: 'Menu', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Reservations', href: '#' },
  { name: 'Contact', href: '#' },
]

const menuItems = [
  { name: 'Foie Gras Terrine', description: 'With fig chutney and brioche toast', price: '€28' },
  { name: 'Lobster Bisque', description: 'Creamy lobster soup with cognac', price: '€22' },
  { name: 'Wagyu Beef Fillet', description: 'With truffle mashed potatoes and red wine jus', price: '€65' },
  { name: 'Sea Bass en Papillote', description: 'With seasonal vegetables and lemon butter sauce', price: '€48' },
]

export function RestaurantHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Le Gourmet Élégant</span>
              <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Book a table <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Le Gourmet Élégant</span>
                  <img
                    className="h-8 w-auto"
                    src="/placeholder.svg?height=32&width=32"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Book a table
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Le Gourmet Élégant
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Experience culinary excellence in an atmosphere of refined elegance.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Reserve a table
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    View our menu <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu preview section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Exquisite Cuisine</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A Taste of Our Menu
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Indulge in our carefully curated selection of dishes, crafted with the finest ingredients and culinary expertise.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {menuItems.map((item) => (
                  <div key={item.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      {item.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{item.description}</p>
                      <p className="mt-6">
                        <span className="font-semibold text-gray-900">{item.price}</span>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Story</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Passion for Culinary Excellence</p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    At Le Gourmet Élégant, we believe in the power of exceptional cuisine to create unforgettable moments. Our team of world-class chefs combines traditional techniques with innovative approaches to deliver a dining experience that delights all the senses.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    From our carefully sourced ingredients to our impeccable service, every detail is crafted to ensure your visit is nothing short of extraordinary.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg?height=900&width=1600"
                alt="Restaurant interior"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2023 Le Gourmet Élégant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}