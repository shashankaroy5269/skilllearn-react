import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import AxiosInstance from "../../api/axios/axios";
import { endPoints } from "../../api/endPoints/endPoints";
import regModalImg from "../assets/TeacherRegistration/Reg-modal-img1.png";
import logoImg from "../assets/TeacherRegistration/Logo.png";
import langImg from "../assets/CommonAssets/Lang-img.png";
// import loaderLogo from "../assets/CommonAssets/Loader-logo.png";
// import loaderText from "../assets/CommonAssets/loader-txt.png";


//  VALIDATION SCHEMA

const schema = yup.object().shape({
  fname: yup.string().required("First name is required"),
  lname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup.string().required("Mobile number is required"),
  password: yup.string().min(6, "Minimum 6 characters").required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
  terms: yup.boolean().oneOf([true],),
});

const StudentRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = async (data) => {
    const payload = {
      role: "student",
      firstName: data.fname,
      lastName: data.lname,
      email: data.email,
      phone: data.mobile,
      password: data.password,
    };

    try {
      setLoading(true); 

      const res = await AxiosInstance.post(
        endPoints.auth.signUp,
        payload
      );

      alert(res.data?.message || "Registration successful");

      navigate("/login", { replace: true });

    } catch (error) {
      alert(error.response?.data?.message || "Server error");
    } 
    finally {
      setLoading(false); 
    }

  };

  return (
    <main>
     <section>
        <div className="about-about-hdr">
          <div className="container">
            <ul className="list-unstyled d-flex">
              <li>
                <Link to="/register" className="brdcrumb fw-light me-1">
                  Register&gt;
                </Link>
              </li>
              <li className="brdcrumb fw-light">Student Register</li>
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="stud-reg-sec">
            <div className="teacher-reg-eclipse-1"></div>
            <div className="teacher-reg-eclipse-2"></div>

            <div className="student-modal">
              <div className="reg-btm-img">
                <img src={regModalImg} alt="" />
              </div>

              <div className="row">

                <div className="col-12 col-sm-6">
                  <div className="stud-r-left text-center reg-modal-left">
                    <div className="reg-logo mx-auto">
                      <Link to="/">
                        <img src={logoImg} alt="" />
                      </Link>
                    </div>

                    <h2 className="fw-semibold">Unlock Your Full Potentials</h2>
                    <p className="fw-light">
                      Join a community of lifelong learners. Begin your journey
                      and grow your skills with guidance from top experts.
                    </p>

                    <div className="stud-stats d-flex">
                      <div className="stud-stat d-flex flex-column">
                        5k+ <span>STUDENTS</span>
                      </div>
                      <div className="stud-stat d-flex flex-column">
                        100+ <span>TOTALCOURSES</span>
                      </div>
                      <div className="stud-stat d-flex flex-column">
                        4.9 <span>RATINGS</span>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-12 col-sm-6">
                  <button className="lang-btn d-flex align-items-center ms-auto" type="button">
                    <img src={langImg} alt="" />
                    <span className="fw-medium">EN</span>
                  </button>

                  <div className="stud-reg-right reg-right">
                    <h2 className="fw-semibold text-center">Create Account</h2>

                    <p className="text-center">
                      Enter Your Details to register as <Link to="#">Student</Link>
                    </p>

                    <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col52">
                          <label>First Name</label>
                          <input {...register("fname")} placeholder="Jane" />
                          <p className="error">{errors.fname?.message}</p>
                        </div>

                        <div className="col48">
                          <label>Last Name</label>
                          <input {...register("lname")} placeholder="Austin" />
                          <p className="error">{errors.lname?.message}</p>
                        </div>

                        <div className="col-12">
                          <label>Email Address</label>
                          <input {...register("email")} placeholder="Enter your Email Address...." />
                          <p className="error">{errors.email?.message}</p>
                        </div>

                        <div className="col-12">
                          <label htmlFor="num">Mobile Number</label>

                          <div className="pass-wrpr align-items-center d-flex">
                            <button class="lock-btn">
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M2.06919 0.661081C3.08336 -0.347253 4.75336 -0.168086 5.60252 0.966914L6.65419 2.37025C7.34586 3.29358 7.28419 4.58358 6.46336 5.39941L6.26502 5.59775C6.24253 5.681 6.24025 5.76843 6.25836 5.85275C6.31086 6.19275 6.59502 6.91275 7.78502 8.09608C8.97502 9.27941 9.70002 9.56275 10.045 9.61608C10.132 9.63356 10.2217 9.631 10.3075 9.60858L10.6475 9.27025C11.3775 8.54525 12.4975 8.40941 13.4009 8.90025L14.9925 9.76691C16.3567 10.5069 16.7009 12.3602 15.5842 13.4711L14.4 14.6477C14.0267 15.0186 13.525 15.3277 12.9134 15.3852C11.405 15.5261 7.89086 15.3461 4.19669 11.6736C0.749189 8.24525 0.0875225 5.25525 0.00335584 3.78191C-0.0383108 3.03691 0.313356 2.40691 0.761689 1.96191L2.06919 0.661081ZM4.60252 1.71608C4.18002 1.15191 3.39336 1.10691 2.95002 1.54775L1.64169 2.84775C1.36669 3.12108 1.23502 3.42275 1.25169 3.71108C1.31836 4.88191 1.85169 7.57941 5.07836 10.7877C8.46336 14.1527 11.5892 14.2536 12.7975 14.1402C13.0442 14.1177 13.2892 13.9894 13.5184 13.7619L14.7017 12.5844C15.1834 12.1061 15.0775 11.2344 14.3959 10.8644L12.8042 9.99858C12.3642 9.76025 11.8492 9.83858 11.5292 10.1569L11.15 10.5344L10.7084 10.0911C11.15 10.5344 11.1492 10.5352 11.1484 10.5352L11.1475 10.5369L11.145 10.5394L11.1392 10.5444L11.1267 10.5561C11.0915 10.5887 11.0536 10.6183 11.0134 10.6444C10.9467 10.6886 10.8584 10.7377 10.7475 10.7786C10.5225 10.8627 10.2242 10.9077 9.85586 10.8511C9.13336 10.7402 8.17586 10.2477 6.90336 8.98275C5.63169 7.71775 5.13502 6.76608 5.02336 6.04441C4.96586 5.67608 5.01169 5.37775 5.09669 5.15275C5.14347 5.02614 5.21045 4.90794 5.29502 4.80275L5.32169 4.77358L5.33336 4.76108L5.33836 4.75608L5.34086 4.75358L5.34252 4.75191L5.58252 4.51358C5.93919 4.15775 5.98919 3.56858 5.65336 3.11941L4.60252 1.71608Z"
                                  fill="black"
                                  fill-opacity="0.5"
                                />
                              </svg>
                            </button>
                            <input
                              type="number"
                              {...register("mobile")}
                              placeholder="Enter your Mobile Number...."
                            />
                          </div>

                          <p className="error">{errors.mobile?.message}</p>
                        </div>

                        <div className="col-12">
                          <label>Create a Password</label>

                          <div className="pass-wrpr align-items-center d-flex">
                            <button class="lock-btn">
                              <svg
                                width="15"
                                height="19"
                                viewBox="0 0 15 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.5 3.37271e-09C8.79365 -4.74809e-05 10.037 0.501305 10.9687 1.39872C11.9005 2.29614 12.4482 3.51976 12.4967 4.8125L12.5 5H13.3333C13.7538 4.99987 14.1588 5.15867 14.4671 5.44458C14.7754 5.73049 14.9643 6.12237 14.9958 6.54167L15 6.66667V15C15.0001 15.4205 14.8413 15.8255 14.5554 16.1338C14.2695 16.4421 13.8776 16.631 13.4583 16.6625L13.3333 16.6667H1.66667C1.24619 16.6668 0.841195 16.508 0.532877 16.2221C0.224559 15.9362 0.0357029 15.5443 0.00416685 15.125L8.35567e-08 15V6.66667C-0.000132983 6.24619 0.158672 5.84119 0.444581 5.53288C0.73049 5.22456 1.12237 5.0357 1.54167 5.00417L1.66667 5H2.5C2.5 3.67392 3.02678 2.40215 3.96447 1.46447C4.90215 0.526784 6.17392 3.37271e-09 7.5 3.37271e-09ZM13.3333 6.66667H1.66667V15H13.3333V6.66667ZM7.5 8.33333C7.85549 8.33345 8.20163 8.44722 8.48787 8.65804C8.7741 8.86886 8.98543 9.16568 9.09098 9.50514C9.19653 9.8446 9.19078 10.2089 9.07456 10.5449C8.95834 10.8808 8.73775 11.1708 8.445 11.3725L8.33333 11.4433V12.5C8.3331 12.7124 8.25177 12.9167 8.10596 13.0711C7.96015 13.2256 7.76087 13.3185 7.54884 13.331C7.3368 13.3434 7.12802 13.2744 6.96514 13.1381C6.80226 13.0018 6.69759 12.8084 6.6725 12.5975L6.66667 12.5V11.4433C6.34895 11.2599 6.10065 10.9767 5.96026 10.6378C5.81987 10.2988 5.79524 9.923 5.8902 9.56863C5.98515 9.21425 6.19439 8.90111 6.48544 8.67776C6.7765 8.45442 7.13312 8.33335 7.5 8.33333ZM7.5 1.66667C6.61594 1.66667 5.7681 2.01786 5.14298 2.64298C4.51786 3.2681 4.16667 4.11594 4.16667 5H10.8333C10.8333 4.11594 10.4821 3.2681 9.85702 2.64298C9.2319 2.01786 8.38406 1.66667 7.5 1.66667Z"
                                  fill="black"
                                  fill-opacity="0.5"
                                />
                              </svg>
                            </button>

                            <input
                              type="password"
                              {...register("password")}
                              placeholder="Enter a Password"
                            />

                            <button type="button" className="eye-btn">
                              <svg
                                width="22"
                                height="15"
                                viewBox="0 0 22 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 4.5C10.2044 4.5 9.44129 4.81607 8.87868 5.37868C8.31607 5.94129 8 6.70435 8 7.5C8 8.29565 8.31607 9.05871 8.87868 9.62132C9.44129 10.1839 10.2044 10.5 11 10.5C11.7956 10.5 12.5587 10.1839 13.1213 9.62132C13.6839 9.05871 14 8.29565 14 7.5C14 6.70435 13.6839 5.94129 13.1213 5.37868C12.5587 4.81607 11.7956 4.5 11 4.5ZM11 12.5C9.67392 12.5 8.40215 11.9732 7.46447 11.0355C6.52678 10.0979 6 8.82608 6 7.5C6 6.17392 6.52678 4.90215 7.46447 3.96447C8.40215 3.02678 9.67392 2.5 11 2.5C12.3261 2.5 13.5979 3.02678 14.5355 3.96447C15.4732 4.90215 16 6.17392 16 7.5C16 8.82608 15.4732 10.0979 14.5355 11.0355C13.5979 11.9732 12.3261 12.5 11 12.5ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0Z"
                                  fill="black"
                                />
                              </svg>
                            </button>
                          </div>

                          <p className="error">{errors.password?.message}</p>
                        </div>


                        <div className="col-12">
                          <label>Confirm Password</label>

                          <div className="pass-wrpr align-items-center d-flex">
                            <button class="lock-btn">
                              <svg
                                width="15"
                                height="19"
                                viewBox="0 0 15 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.5 3.37271e-09C8.79365 -4.74809e-05 10.037 0.501305 10.9687 1.39872C11.9005 2.29614 12.4482 3.51976 12.4967 4.8125L12.5 5H13.3333C13.7538 4.99987 14.1588 5.15867 14.4671 5.44458C14.7754 5.73049 14.9643 6.12237 14.9958 6.54167L15 6.66667V15C15.0001 15.4205 14.8413 15.8255 14.5554 16.1338C14.2695 16.4421 13.8776 16.631 13.4583 16.6625L13.3333 16.6667H1.66667C1.24619 16.6668 0.841195 16.508 0.532877 16.2221C0.224559 15.9362 0.0357029 15.5443 0.00416685 15.125L8.35567e-08 15V6.66667C-0.000132983 6.24619 0.158672 5.84119 0.444581 5.53288C0.73049 5.22456 1.12237 5.0357 1.54167 5.00417L1.66667 5H2.5C2.5 3.67392 3.02678 2.40215 3.96447 1.46447C4.90215 0.526784 6.17392 3.37271e-09 7.5 3.37271e-09ZM13.3333 6.66667H1.66667V15H13.3333V6.66667ZM7.5 8.33333C7.85549 8.33345 8.20163 8.44722 8.48787 8.65804C8.7741 8.86886 8.98543 9.16568 9.09098 9.50514C9.19653 9.8446 9.19078 10.2089 9.07456 10.5449C8.95834 10.8808 8.73775 11.1708 8.445 11.3725L8.33333 11.4433V12.5C8.3331 12.7124 8.25177 12.9167 8.10596 13.0711C7.96015 13.2256 7.76087 13.3185 7.54884 13.331C7.3368 13.3434 7.12802 13.2744 6.96514 13.1381C6.80226 13.0018 6.69759 12.8084 6.6725 12.5975L6.66667 12.5V11.4433C6.34895 11.2599 6.10065 10.9767 5.96026 10.6378C5.81987 10.2988 5.79524 9.923 5.8902 9.56863C5.98515 9.21425 6.19439 8.90111 6.48544 8.67776C6.7765 8.45442 7.13312 8.33335 7.5 8.33333ZM7.5 1.66667C6.61594 1.66667 5.7681 2.01786 5.14298 2.64298C4.51786 3.2681 4.16667 4.11594 4.16667 5H10.8333C10.8333 4.11594 10.4821 3.2681 9.85702 2.64298C9.2319 2.01786 8.38406 1.66667 7.5 1.66667Z"
                                  fill="black"
                                  fill-opacity="0.5"
                                />
                              </svg>
                            </button>
                            <input
                              type="password"
                              {...register("confirmPassword")}
                              placeholder="Retype Password"
                            />

                            <button type="button" className="eye-btn">
                              <svg
                                width="22"
                                height="15"
                                viewBox="0 0 22 15"
                                fill="black"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 4.5C10.2044 4.5 9.44129 4.81607 8.87868 5.37868C8.31607 5.94129 8 6.70435 8 7.5C8 8.29565 8.31607 9.05871 8.87868 9.62132C9.44129 10.1839 10.2044 10.5 11 10.5C11.7956 10.5 12.5587 10.1839 13.1213 9.62132C13.6839 9.05871 14 8.29565 14 7.5C14 6.70435 13.6839 5.94129 13.1213 5.37868C12.5587 4.81607 11.7956 4.5 11 4.5ZM11 12.5C9.67392 12.5 8.40215 11.9732 7.46447 11.0355C6.52678 10.0979 6 8.82608 6 7.5C6 6.17392 6.52678 4.90215 7.46447 3.96447C8.40215 3.02678 9.67392 2.5 11 2.5C12.3261 2.5 13.5979 3.02678 14.5355 3.96447C15.4732 4.90215 16 6.17392 16 7.5C16 8.82608 15.4732 10.0979 14.5355 11.0355C13.5979 11.9732 12.3261 12.5 11 12.5ZM11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0Z"
                                  fill="black"
                                />
                              </svg>
                            </button>
                          </div>

                          <p className="error">{errors.confirmPassword?.message}</p>
                        </div>


                        <div className="col-12">
                          <label className="terms-label">
                            <input type="checkbox" {...register("terms")} />
                            <span className="custom-check"></span>
                            <span class="terms-text text-center">
                              By Signing up You accept to our
                              <Link href="#">Terms of Services</Link>

                              < Link href="#">Privacy Policy</Link>
                            </span>
                          </label>
                          <p className="error">{errors.terms?.message}</p>
                        </div>

                        <div className="col-12">
                          <input
                            type="submit"
                            value="Register as Student"
                            className="fw-medium"
                          />
                        </div>
                      </div>
                    </form>

                    <div class="back-btn">
                      <Link to="/register" className="fw-light">
                        <svg
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.88375 3.56687L0.441875 4.00875L0 3.56687L0.441875 3.125L0.88375 3.56687ZM11.5087 8.56687C11.5087 8.73264 11.4429 8.89161 11.3257 9.00882C11.2085 9.12603 11.0495 9.19187 10.8837 9.19187C10.718 9.19187 10.559 9.12603 10.4418 9.00882C10.3246 8.89161 10.2587 8.73264 10.2587 8.56687H11.5087ZM3.56688 7.13375L0.441875 4.00875L1.32562 3.125L4.45062 6.25L3.56688 7.13375ZM0.441875 3.125L3.56688 0L4.45062 0.88375L1.32562 4.00875L0.441875 3.125ZM0.88375 2.94187H7.13375V4.19187H0.88375V2.94187ZM11.5087 7.31687V8.56687H10.2587V7.31687H11.5087ZM7.13375 2.94187C8.29407 2.94187 9.40687 3.40281 10.2273 4.22328C11.0478 5.04375 11.5087 6.15655 11.5087 7.31687H10.2587C10.2587 6.48807 9.92951 5.69322 9.34346 5.10717C8.75741 4.52111 7.96255 4.19187 7.13375 4.19187V2.94187Z"
                            fill="#100F0F"
                          />
                        </svg>

                        Back to Main
                      </Link>
                    </div>

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

export default StudentRegister;
