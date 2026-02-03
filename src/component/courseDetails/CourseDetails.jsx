import React, { useState } from "react";
import "./courseDetails.css";

// Asset Imports
import BannerImg from "../../assets/CourseDetails/Banner-img.png";
import AuthorImg from "../../assets/CourseDetails/Course-author.png";
import VideoImg from "../../assets/CourseDetails/Video-img.png";
import SidebarVideoImg from "../../assets/CourseDetails/Video-img2.png";
import CertImg from "../../assets/CourseDetails/Course-Certification.png";
import DesignerImg from "../../assets/CourseDetails/Course-designer-img.png";

// --- Reusable SVG Components (Exact from your HTML) ---
const StarIcon = () => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.825 18.5301L5.45 11.6788L0 7.0707L7.2 6.46116L10 0L12.8 6.46116L20 7.0707L14.55 11.6788L16.175 18.5301L10 14.8972L3.825 18.5301Z"
      fill="#EDB007"
    />
  </svg>
);

const LockIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.6">
      <path
        d="M1.5 6C1.5 6 4.85786 2.25 9 2.25C13.1421 2.25 16.5 6 16.5 6"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16.158 9.78375C16.386 10.1035 16.5 10.2634 16.5 10.5C16.5 10.7366 16.386 10.8965 16.158 11.2162C15.1334 12.6529 12.5169 15.75 9 15.75C5.48309 15.75 2.86657 12.6529 1.84203 11.2162C1.61401 10.8965 1.5 10.7366 1.5 10.5C1.5 10.2634 1.61401 10.1035 1.84203 9.78375C2.86657 8.34705 5.48309 5.25 9 5.25C12.5169 5.25 15.1334 8.34705 16.158 9.78375Z"
        stroke="#141B34"
        strokeWidth="1.5"
      />
      <path
        d="M11.25 10.5C11.25 9.25732 10.2427 8.25 9 8.25C7.75732 8.25 6.75 9.25732 6.75 10.5C6.75 11.7427 7.75732 12.75 9 12.75C10.2427 12.75 11.25 11.7427 11.25 10.5Z"
        stroke="#141B34"
        strokeWidth="1.5"
      />
    </g>
  </svg>
);
const BagIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.6">
      <path
        d="M3.20086 14.1335C3.36952 15.3862 4.4071 16.3676 5.66974 16.4257C6.7322 16.4745 7.81148 16.5 9 16.5C10.1885 16.5 11.2678 16.4745 12.3302 16.4257C13.5929 16.3676 14.6305 15.3862 14.7992 14.1335C14.9093 13.316 15 12.4782 15 11.625C15 10.7718 14.9093 9.93398 14.7992 9.11648C14.6305 7.86375 13.5929 6.88237 12.3302 6.82432C11.2678 6.77548 10.1885 6.75 9 6.75C7.81148 6.75 6.7322 6.77548 5.66974 6.82432C4.4071 6.88237 3.36952 7.86375 3.20086 9.11648C3.09079 9.93398 3 10.7718 3 11.625C3 12.4782 3.09079 13.316 3.20086 14.1335Z"
        stroke="#141B34"
        strokeWidth="1.5"
      />
      <path
        d="M5.625 6.75V4.875C5.625 3.01104 7.13604 1.5 9 1.5C10.864 1.5 12.375 3.01104 12.375 4.875V6.75"
        stroke="#141B34"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 11.6172V11.6247"
        stroke="#141B34"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.6172V11.6247"
        stroke="#141B34"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 11.6172V11.6247"
        stroke="#141B34"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const DurationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#097877"
      strokeWidth="1.5"
    />
    <path
      d="M12 8V12L14 14"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StudentsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 6L8 4L13.5 6L11 7.5V9C11 9 10.3333 8.5 8 8.5C5.66667 8.5 5 9 5 9V7.5L2.5 6ZM2.5 6V10"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 8.5V9.38889C11 11.1071 9.65685 12.5 8 12.5C6.34315 12.5 5 11.1071 5 9.38889V8.5"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.3182 11.0294C15.3182 11.0294 15.803 10.6765 17.5 10.6765C19.197 10.6765 19.6818 11.0294 19.6818 11.0294M15.3182 11.0294V10L13.5 9L17.5 7.5L21.5 9L19.6818 10V11.0294M15.3182 11.0294V11.3182C15.3182 12.5232 16.295 13.5 17.5 13.5C18.705 13.5 19.6818 12.5232 19.6818 11.3182V11.0294"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.38505 15.926C3.44187 16.4525 0.968909 17.5276 2.47511 18.8729C3.21087 19.53 4.03033 20 5.06058 20H10.9394C11.9697 20 12.7891 19.53 13.5249 18.8729C15.0311 17.5276 12.5581 16.4525 11.6149 15.926C9.40321 14.6913 6.59679 14.6913 4.38505 15.926Z"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 20H19.7048C20.4775 20 21.0921 19.624 21.6439 19.0983C22.7736 18.0221 20.9189 17.162 20.2115 16.7408C18.9362 15.9814 17.3972 15.8059 16 16.2141"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LessonsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 7H8.5M12.499 11H8.49902"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 22H6C4.89543 22 4 21.1046 4 20M4 20C4 18.8954 4.89543 18 6 18H20V6C20 4.11438 20 3.17157 19.4142 2.58579C18.8284 2 17.8856 2 16 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8V20Z"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5 18C19.5 18 18.5 18.7628 18.5 20C18.5 21.2372 19.5 22 19.5 22"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SkillIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 19.5V11.5C13.5 10.5572 13.5 10.0858 13.2071 9.79289C12.9142 9.5 12.4428 9.5 11.5 9.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V19.5C9.5 20.4428 9.5 20.9142 9.79289 21.2071C10.0858 21.5 10.5572 21.5 11.5 21.5C12.4428 21.5 12.9142 21.5 13.2071 21.2071C13.5 20.9142 13.5 20.4428 13.5 19.5Z"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5 12.5V19.5C20.5 20.4428 20.5 20.9142 20.2071 21.2071C19.9142 21.5 19.4428 21.5 18.5 21.5C17.5572 21.5 17.0858 21.5 16.7929 21.2071C16.5 20.9142 16.5 20.4428 16.5 19.5V12.5"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.4375 9.16667V3.83333M19 3.83333V2.5M19 10.5V9.16667M17.4375 6.5H20.5625M20.5625 6.5C21.0803 6.5 21.5 6.94772 21.5 7.5V8.16667C21.5 8.71895 21.0803 9.16667 20.5625 9.16667H16.5M20.5625 6.5C21.0803 6.5 21.5 6.05228 21.5 5.5V4.83333C21.5 4.28105 21.0803 3.83333 20.5625 3.83333H16.5"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 19.5V14.5C6.5 13.5572 6.5 13.0858 6.20711 12.7929C5.91421 12.5 5.44281 12.5 4.5 12.5C3.55719 12.5 3.08579 12.5 2.79289 12.7929C2.5 13.0858 2.5 13.5572 2.5 14.5V19.5C2.5 20.4428 2.5 20.9142 2.79289 21.2071C3.08579 21.5 3.55719 21.5 4.5 21.5C5.44281 21.5 5.91421 21.5 6.20711 21.2071C6.5 20.9142 6.5 20.4428 6.5 19.5Z"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LanguageIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#097877"
      strokeWidth="1.5"
    />
    <path
      d="M7 8.37931H11.5M11.5 8.37931H14.5M11.5 8.37931V7M17 8.37931H14.5M14.5 8.37931C13.9725 10.2656 12.8679 12.0487 11.6071 13.6158M11.6071 13.6158C10.5631 14.9134 9.41205 16.0628 8.39286 17M11.6071 13.6158C10.9643 12.8621 10.0643 11.6426 9.80714 11.0909M11.6071 13.6158L13.5357 15.6207"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const QuizIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.4564 2.64012C11.3085 1.78663 12.6915 1.78663 13.5436 2.64012L14.553 3.65112C14.9625 4.06139 15.5186 4.29172 16.0983 4.29124L17.5269 4.29007C18.733 4.28909 19.7109 5.26702 19.7099 6.47306L19.7088 7.90166C19.7083 8.48139 19.9386 9.03745 20.3489 9.44705L21.3599 10.4564C22.2134 11.3085 22.2134 12.6915 21.3599 13.5436L20.3489 14.553C19.9386 14.9625 19.7083 15.5186 19.7088 16.0983L19.7099 17.5269C19.7109 18.733 18.733 19.7109 17.5269 19.7099L16.0983 19.7088C15.5186 19.7083 14.9625 19.9386 14.553 20.3489L13.5436 21.3599C12.6915 22.2134 11.3085 22.2134 10.4564 21.3599L9.44705 20.3489C9.03745 19.9386 8.48139 19.7083 7.90166 19.7088L6.47306 19.7099C5.26702 19.7109 4.28909 18.733 4.29007 17.5269L4.29124 16.0983C4.29172 15.5186 4.06139 14.9625 3.65112 14.553L2.64012 13.5436C1.78663 12.6915 1.78663 11.3085 2.64012 10.4564L3.65112 9.44705C4.06139 9.03745 4.29172 8.48139 4.29124 7.90166L4.29007 6.47306C4.28909 5.26702 5.26702 4.28909 6.47306 4.29007L7.90166 4.29124C8.48139 4.29172 9.03745 4.06139 9.44705 3.65112L10.4564 2.64012Z"
      stroke="#097877"
      strokeWidth="1.5"
    />
    <path
      d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5"
      stroke="#097877"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11.9919 17H12.0009"
      stroke="#097877"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CertificatesIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 22C7.49306 22 5.48959 22 4.2448 20.5355C3 19.0711 3 16.714 3 12C3 7.28596 3 4.92893 4.2448 3.46447C5.48959 2 7.49306 2 11.5 2C15.5069 2 17.5104 2 18.7552 3.46447C19.7572 4.64332 19.9527 6.40054 19.9908 9.5"
      stroke="#097877"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 8H15M8 13H11"
      stroke="#097877"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.6092 18.1054C20.4521 17.4918 21 16.4974 21 15.375C21 13.511 19.489 12 17.625 12H17.375C15.511 12 14 13.511 14 15.375C14 16.4974 14.5479 17.4918 15.3908 18.1054M19.6092 18.1054C19.0523 18.5108 18.3666 18.75 17.625 18.75H17.375C16.6334 18.75 15.9477 18.5108 15.3908 18.1054M19.6092 18.1054L20.192 19.9404C20.4143 20.6403 20.5255 20.9903 20.4951 21.2082C20.4318 21.6617 20.0619 21.9984 19.6252 22C19.4154 22.0008 19.101 21.8358 18.4723 21.5059C18.2027 21.3644 18.0679 21.2936 17.93 21.252C17.649 21.1673 17.351 21.1673 17.07 21.252C16.9321 21.2936 16.7973 21.3644 16.5277 21.5059C15.899 21.8358 15.5846 22.0008 15.3748 22C14.9381 21.9984 14.5682 21.6617 14.5049 21.2082C14.4745 20.9903 14.5857 20.6403 14.808 19.9404L15.3908 18.1054"
      stroke="#097877"
      stroke-width="1.5"
    />
  </svg>
);
const PercentageIcon=()=>(
  <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 16L16 8M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9ZM16 14.8284C16 15.3807 15.5523 15.8284 15 15.8284C14.4477 15.8284 14 15.3807 14 14.8284C14 14.2761 14.4477 13.8284 15 13.8284C15.5523 13.8284 16 14.2761 16 14.8284Z"
                            stroke="#097877"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="#097877"
                            stroke-width="1.5"
                          />
                        </svg>
);
const DeadlineIcon=()=>(<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 2V6M8 2V6"
                            stroke="#097877"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z"
                            stroke="#097877"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3 10H21"
                            stroke="#097877"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.9955 14H12.0045M11.9955 18H12.0045M15.991 14H16M8 14H8.00897M8 18H8.00897"
                            stroke="#097877"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>);
const InstructorIcon=()=>(<svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 22V17C20 15.1144 20 14.1716 19.4142 13.5858C18.8284 13 17.8856 13 16 13L12 22L8 13C6.11438 13 5.17157 13 4.58579 13.5858C4 14.1716 4 15.1144 4 17V22"
                            stroke="#097877"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 15L11.5 19L12 20.5L12.5 19L12 15ZM12 15L11 13H13L12 15Z"
                            stroke="#097877"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.5 6.5V5.5C15.5 3.56701 13.933 2 12 2C10.067 2 8.5 3.56701 8.5 5.5V6.5C8.5 8.433 10.067 9.99998 12 9.99998C13.933 9.99998 15.5 8.433 15.5 6.5Z"
                            stroke="#097877"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>);
const LnIcon=()=>(<svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4784 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4784 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7 17L11.1936 12.8065M11.1936 12.8065L7 7H9.77778L12.8065 11.1935M11.1936 12.8065L14.2222 17H17L12.8065 11.1935M17 7L12.8065 11.1935"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>);
const FbIcon=()=>(<svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>);
const XIcon=()=>(<svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4784 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4784 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M7 17L11.1936 12.8065M11.1936 12.8065L7 7H9.77778L12.8065 11.1935M11.1936 12.8065L14.2222 17H17L12.8065 11.1935M17 7L12.8065 11.1935"
                                  stroke="#141B34"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>);

// --- Component Start ---
const CourseDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <main>
      {/* Banner Section */}
      <section className="course-banner-sec">
        <div className="about-about-hdr">
          <div className="container">
            <ul className="list-unstyled d-flex m-0">
              <li>
                <a
                  href="/"
                  className="brdcrumb fw-light me-1 text-white text-decoration-none"
                >
                  Home &gt;
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="brdcrumb fw-light me-1 text-white text-decoration-none"
                >
                  Courses &gt;
                </a>
              </li>
              <li className="brdcrumb fw-light text-white">
                Grow Personal Financial Security Thinking & Principles
              </li>
            </ul>
          </div>
        </div>
        <div className="course-banner-cntn">
          <div className="container">
            <div
              className="course-banner-wrpr text-center"
              style={{ backgroundImage: `url(${BannerImg})` }}
            >
              <h1 className="title1">Business & Banking Studies</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="course-d-sec py-5">
        <div className="container">
          <div className="row">
            {/* Left Area */}
            <div className="col-12 col-md-7">
              <div className="course-d-left">
                <div className="course-d-top d-flex align-items-center justify-content-between mb-4">
                  <div className="course-d-img d-flex align-items-center">
                    <img
                      src={AuthorImg}
                      alt=""
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <p
                      className="mb-0 ms-3 fw-medium"
                      style={{ fontSize: "20px" }}
                    >
                      By James Carlson
                    </p>
                  </div>
                  <div className="course-d-review d-flex align-items-center">
                    <ul className="stars d-flex p-0 m-0 list-unstyled">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <li key={i} className="me-1">
                            <StarIcon />
                          </li>
                        ))}
                    </ul>
                    <span className="fw-light ms-2"> (38 Reviews) </span>
                  </div>
                </div>

                <div className="course-d-btn-wrpr mb-4">
                  <ul className="d-flex m-0 p-0 list-unstyled">
                    {["Overview", "curriculum", "Instructor", "Review"].map(
                      (tab) => (
                        <li key={tab} className="me-3">
                          <button
                            className={activeTab === tab ? "active" : ""}
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab}
                          </button>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="course-d-cntn">
                  {activeTab === "Overview" && (
                    <>
                      <div className="video-wrapper mb-4">
                        <a href="#!" data-fancybox>
                          <img
                            src={VideoImg}
                            alt="Video"
                            className="img-fluid rounded"
                          />
                        </a>
                      </div>
                      <h3 className="sec-hdr fw-medium">Course Description</h3>
                      <p className="fw-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                      <p className="fw-light mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>

                      <h3 className="sec-hdr fw-medium mt-5">
                        What You’ll Learn From This Course
                      </h3>
                      <ul className="course-d-cntn-list list-unstyled mt-3">
                        <li>
                          Neque sodales ut etiam sit amet nisl purus non tellus
                          orci ac auctor
                        </li>
                        <li className="big-list">
                          Tristique nulla aliquet enim tortor at auctor urna.
                          Sit amet aliquam id diam maer
                        </li>
                        <li>
                          Nam libero justo laoreet sit amet. Lacus sed viverra
                          tellus in hac
                        </li>
                        <li>
                          Tempus imperdiet nulla malesuada pellentesque elit
                          eget gravida cum sociis
                        </li>
                      </ul>

                      <h3 className="sec-hdr fw-medium mt-5">Certification</h3>
                      <p className="fw-light">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                      <div className="course-certi text-center my-4">
                        <img
                          src={CertImg}
                          alt="Certification"
                          className="img-fluid"
                        />
                      </div>
                    </>
                  )}

                  {activeTab === "curriculum" && (
                    <>
                      <h3 className="sec-hdr fw-medium">Curriculum</h3>
                      <ul
                        className="course-d-cntn-list list-unstyled d-flex mb-4"
                        style={{ gap: "50px" }}
                      >
                        <li>3 Sections</li>
                        <li>18 Lessons</li>
                        <li>17 Weeks</li>
                      </ul>
                      <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item border-bottom mb-3">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                            >
                              Welcome! Course Introduction
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <ul className="p-0 list-unstyled">
                                <li className="d-flex justify-content-between py-2">
                                  A Beginner’s Introduction to Excel Functions{" "}
                                  <LockIcon />
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                  Quick Introduction to pivot Table <BagIcon />
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                  Custom Number Formatting <BagIcon />
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                  Sources of finance <BagIcon />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                            >
                              Microsoft Excel - Quick Introduction
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <ul className="p-0 list-unstyled">
                                <li className="d-flex justify-content-between py-2">
                                  A Beginner’s Introduction to Excel Functions{" "}
                                  <LockIcon />
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                  Quick Introduction to pivot Table <BagIcon />
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                  Custom Number Formatting <BagIcon />
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                  Sources of finance <BagIcon />
                                </li>
                              </ul>
                            </div>
                          </div>
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button collapsed fw-bold"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                            >
                              Microsoft Excel - Useful Tools
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionFlushExample"
                          >
                            <div className="accordion-body">
                              <ul className="p-0 list-unstyled">
                                <li className="d-flex justify-content-between py-2">
                                  A Beginner’s Introduction to Excel Functions{" "}
                                  <LockIcon />
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                  Quick Introduction to pivot Table <BagIcon />
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                  Custom Number Formatting <BagIcon />
                                </li>
                                <li className="d-flex justify-content-between py-2">
                                  Sources of finance <BagIcon />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-12 col-md-5">
              <div className="course-d-right">
                <div className="course-d-topcard card p-4 border-0 shadow-sm mb-4">
                  <div className="video-wrapper2 mb-3">
                    <img
                      src={SidebarVideoImg}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>
                  <ul className="course-d-details ps-0 list-unstyled mb-0">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <span>
                        <DurationIcon /> Duration
                      </span>
                      <span>16 Weeks</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <span>
                        <StudentsIcon /> Students
                      </span>
                      <span>189</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <span>
                        <LessonsIcon /> Lessons
                      </span>
                      <span>18</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <span>
                        <SkillIcon /> Skill level
                      </span>
                      <span>Expert</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <span>
                        <LanguageIcon /> Language
                      </span>
                      <span>English</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <span>
                        <QuizIcon /> Quizzes
                      </span>
                      <span>2</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <span><CertificatesIcon/>Certifications</span>
                      <span>Yes</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <span><PercentageIcon/>Pass Percentage</span>
                      <span>80%</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <span><DeadlineIcon/>Deadline</span>
                      <span>25 Dec, 2024</span>
                    </li>
                    <li className="d-flex justify-content-between py-3">
                      <span><InstructorIcon/>Instructor</span>
                      <span>James Carlson</span>
                    </li>
                  </ul>
                  <div className="payement-btns mt-4">
                    <div className="course-price text-center mb-3">
                      Price $49.00
                    </div>
                    <button className="course-buy text-center w-100 border-0">
                      Buy Now
                    </button>
                  </div>
                </div>

                <div className="course-d-midcard card border-0 shadow-sm p-4 mb-4">
                  <div className="row align-items-center mb-3">
                    <div className="col-5">
                      <img
                        src={DesignerImg}
                        className="img-fluid rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="col-7">
                      <div
                        className="designer-name fw-bold"
                        style={{ fontSize: "20px" }}
                      >
                        James Carlson
                      </div>
                      <p className="fw-light small mb-0 text-muted">
                        Senior Designer
                      </p>
                      <ul class="scl-list d-flex p-0">
                          <li><a href="" class="scl-links"><LnIcon/></a></li>
                          <li><a href="" class="scl-links"><FbIcon/></a></li>
                          <li><a href="" class="scl-links"><XIcon/></a></li>
                      </ul>
                    </div>
                  </div>
                  <p class="fw-light">
                    James Carlson is an instructor and developer living in a
                    suburb of Washington, DC. She has been assigned to aspen
                    ecosystems research and has been involved in several special
                    assignments.
                  </p>
                </div>

                <div className="course-d-endcard card border-0 shadow-sm p-4">
                  <div className="card-d-endcard-hdr fw-bold mb-3">Reviews</div>
                  <div className="progress-bars">
                    {[80, 70, 80, 58, 36].map((width, idx) => (
                      <div
                        className="pro-wrpr d-flex align-items-center mb-3"
                        key={idx}
                      >
                        <div
                          className="progress flex-grow-1"
                          style={{ height: "10px", background: "#eee" }}
                        >
                          <div
                            className="progress-bar"
                            style={{
                              width: `${width}%`,
                              backgroundColor: "#fe7e0f",
                            }}
                          ></div>
                        </div>
                        <span className="ms-3 small text-muted">(12)</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseDetails;
