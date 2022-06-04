import React from "react";
import { BeakerIcon } from "@heroicons/react/solid";

export default function MainProject() {
  return (
    <div>
      <div className="flex justify-between p-5 container mx-auto ">
        <img src="mainlogo.webp" alt="" />
        <button
          class="px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-opacity-75 "
          data-modal-toggle="defaultModal"
        >
          Save changes
        </button>
      </div>
      <div className="container mx-auto px-20">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-blue-700 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="mx-2 text-blue-700 font-bold">Maths</span>
        </div>
        <div className="text-3xl my-3 font-bold">MENTAL MATHS</div>
        <div className="grid md:grid-cols-2 gap-10 my-8">
          <div className="my-3 text-lg">
            <div>
              Have Fun with Math! Get rid of your Math phobia. Become a Human
              Calculator yourself and be able to calculate 10-15 times faster
              than before!
            </div>
            <div className="my-5 grid md:grid-cols-2 p-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 h-6 w-6 text-blue-700 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span className="mx-4 text-lg">6 - 8 Years</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-700 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="mx-4 text-lg">7 - 8 Students</span>
              </div>
              <div className="my-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="mx-4 text-lg">60 Mins Per Class</span>
              </div>
              <div className="my-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="mx-4 text-lg">5 Weeks Duration</span>
              </div>
            </div>
            <div className="font-bold text-2xl text-center p-5 bg-slate-200 rounded-lg border-slate-600 border">
              ₹1499 INR For 10 Live Classes
            </div>
          </div>
          <div>
            <img
              src="reading.webp"
              alt=""
              className="rounded-lg overflow-hidden object-cover"
            />
          </div>
        </div>
        <hr />
        <div className="font-bold text-3xl my-5">Available Batches</div>
        <div className="my-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="rounded overflow-hidden border border-slate-200 border-2 ">
              <div className="text-center text-3xl p-5">Starting in 2 Days</div>
              <hr className="text-gray-400" />
              <div className="m-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="mx-4 text-base">Monday, Wednesday</span>
                </div>
                <div className="my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-4 text-base">6:00 PM to 7:00 PM</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                  <span className="mx-4 text-base">Date- Monday, Jun 6</span>
                </div>
                <div className="my-8 text-lg">Instructor</div>
                <div className="flex justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 bg-blue-500 rounded-full p-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div className="mx-3">
                    <div className="font-bold text-blue-500">
                      Pooja Tegginmath
                    </div>
                    <div>Certified international Vedic Math tutor</div>
                  </div>
                </div>
                <div className="text-red-500 text-center my-5">
                  Hurry only 7 slots are left
                </div>
                <div className="text-center">
                  <button class="py-4 px-8 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-opacity-75">
                    ENROLL NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded overflow-hidden border border-slate-200 border-2 ">
              <div className="text-center text-3xl p-5">Starting in 2 Days</div>
              <hr className="text-gray-400" />
              <div className="m-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="mx-4 text-base">Monday, Wednesday</span>
                </div>
                <div className="my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-4 text-base">6:00 PM to 7:00 PM</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                  <span className="mx-4 text-base">Date- Monday, Jun 6</span>
                </div>
                <div className="my-8 text-lg">Instructor</div>
                <div className="flex justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 bg-blue-500 rounded-full p-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div className="mx-3">
                    <div className="font-bold text-blue-500">
                      Pooja Tegginmath
                    </div>
                    <div>Certified international Vedic Math tutor</div>
                  </div>
                </div>
                <div className="text-red-500 text-center my-5">
                  Hurry only 7 slots are left
                </div>
                <div className="text-center">
                  <button class="py-4 px-8 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-opacity-75">
                    ENROLL NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded overflow-hidden border border-slate-200 border-2 ">
              <div className="text-center text-3xl p-5">Starting in 2 Days</div>
              <hr className="text-gray-400" />
              <div className="m-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="mx-4 text-base">Monday, Wednesday</span>
                </div>
                <div className="my-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-4 text-base">6:00 PM to 7:00 PM</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                  <span className="mx-4 text-base">Date- Monday, Jun 6</span>
                </div>
                <div className="my-8 text-lg">Instructor</div>
                <div className="flex justify-between">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 bg-blue-500 rounded-full p-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div className="mx-3">
                    <div className="font-bold text-blue-500">
                      Pooja Tegginmath
                    </div>
                    <div>Certified international Vedic Math tutor</div>
                  </div>
                </div>
                <div className="text-red-500 text-center my-5">
                  Hurry only 7 slots are left
                </div>
                <div className="text-center">
                  <button class="py-4 px-8 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-opacity-75">
                    ENROLL NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold text-blue-500 text-2xl my-8">
            Description
          </div>
          <div className="text-base">
            The course aims at enhancing mathematical skills and brain
            development. It improves one's number sense and helps them gain the
            ability to understand relationships between quantities, while
            stimulating their brain and improving observation skills.
          </div>
        </div>
        <div class="accordion my-7" id="accordionExample5">
          <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingOne5">
              <button
                class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne5"
              >
                <span className="font-bold text-blue-500 text-2xl">
                  Details
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 inline mx-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="collapseOne5"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne5"
            >
              <div class="accordion-body py-4 px-5">
                <p>
                  CLASS 1- Criss-cross multiplication <br /> CLASS 2-
                  Subtraction with numbers near to 10 and multiples of 10 Cutoff
                  method addition/ Vyavakalanam method Dot method addition/
                  Rekhanth method <br /> CLASS 3- Multiplication upto 100 (Done
                  mentally) <br /> CLASS 4- Subtraction with Numbers near 10 and
                  multiple of 10 <br /> CLASS 5- Digit sum method Multiplication
                  using base method part 1/ Nikhilam method, Fractions <br />{" "}
                  CLASS 6- Base method multiplication part 2 Division part 1{" "}
                  <br /> CLASS 7 - LCM and HCF <br /> CLASS 8- Multiplication
                  with series of 9 Division part 2 <br /> CLASS 9-
                  Multiplication with series of 1 Multiplication with 21,31 41
                  91 Base complement method subtraction/ Nikhil am method
                  ,Division of any number by 11 <br /> CLASS 10- Division with
                  series of 9 Multiplication by digits 12 to 19 Multiplication
                  with 5, 25, 125 Percentage
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingTwo5">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
              >
                <span className="font-bold text-blue-500 text-2xl">
                  Homework
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 inline mx-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="collapseTwo5"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo5"
            >
              <div class="accordion-body py-4 px-5">
                Comprehensive home assignments will be provided , which will be
                an extension of what is done is the class.
              </div>
            </div>
          </div>
          <div class="accordion-item bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="headingThree5">
              <button
                class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree5"
                aria-expanded="false"
                aria-controls="collapseThree5"
              >
                <span className="font-bold text-blue-500 text-2xl">
                  Learning Goals
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 inline mx-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="collapseThree5"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree5"
            >
              <div class="accordion-body py-4 px-5">
                Have Fun with Math! Get rid of your Math phobia. Become a Human
                Calculator yourself and be able to calculate 10-15 times faster
                than before!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lime-200">
        <div className="grid lg:grid-cols-3 gap-10  container mx-auto p-8">
          <div className="m-4">
            <div>
              Your friend, your guide and your partner in the journey of
              parenting
            </div>
            <div className="flex my-6">
              <span>
                <img src="https://img.icons8.com/color/48/undefined/facebook-new.png" />
              </span>
              <span>
                <img
                  src="https://img.icons8.com/color/48/undefined/instagram-new--v1.png"
                  className="mx-5"
                />
              </span>
              <span>
                <img src="https://img.icons8.com/color/48/undefined/whatsapp--v1.png" />
              </span>
            </div>
            <div>© 2022 All Rights Reserved. Younglabs</div>
          </div>

          <div className="m-4">
            <div className="text-lg">Quick links</div>
            <ul>
              <li className="my-2 hover:text-white ">
                <a href="">About</a>
              </li>
              <li className="hover:text-white ">
                <a href="" className="hover:text-white ">
                  Privacy Policy
                </a>
              </li>
              <li className="my-2 hover:text-white">
                <a href="">Terms & Conditions</a>
              </li>
              <li className="hover:text-white ">
                <a href="">Shipping & Delivery</a>
              </li>
              <li className="my-2 hover:text-white">
                <a href="">Return, Refunds & Exchange Policy</a>
              </li>
            </ul>
          </div>

          <div className="m-4">
            <div className="text-lg">Address</div>
            <div>
              <div className="my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline hover:text-white "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="mx-4 text-base">Monday, Wednesday</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                  />
                </svg>
                <span className="mx-4 text-base">Monday, Wednesday</span>
              </div>
              <div className="my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                  />
                </svg>
                <span className="mx-4 text-base">Monday, Wednesday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="defaultModal"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="p-6 space-y-6">
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>

            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
