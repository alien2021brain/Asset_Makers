import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import BasicModal from "../admin/Component/OtpModal";
import { CheckIcon } from "lucide-react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // otp dialog
  const [otpOpen, setOtpOpen] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [currentOtp, setCurrentOtp] = useState("");
  const [otpActiveIndex, setOtpActiveIndex] = useState(0);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current?.focus();
  }, [otpActiveIndex, otpOpen]);
  // handle key
  const handeleKey = (e, index) => {
    if (e.key == "Backspace") {
      setOtpActiveIndex(index - 1);
    }
  };
  // handle change for otp
  const handleChangeOtp = (e, index) => {
    const { value } = e.target;

    if (!value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtpActiveIndex(index - 1);
      setOtp(newOtp);
    } else {
      const val = value.substring(value.length - 1);
      const newOtp = [...otp];
      newOtp[index] = val;
      setOtpActiveIndex(index + 1);

      setOtp(newOtp);
    }
  };
  console.log(otp, "otp");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log("form", formData);
  // api url
  const url = "http://localhost:8000";
  // handlemail for otp
  const handleMail = async (e) => {
    e.preventDefault();

    if (!formData.username) return toast.error("username is required");
    if (!formData.email) return toast.error("email is required");
    if (!formData.password) return toast.error("password is required");

    setOtpOpen(true);
    const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

    const sixDigitOTP = generateOTP();
    console.log("Generated OTP:", sixDigitOTP);
    try {
      const res = await axios.post(`${url}/auth/verify`, {
        email: formData.email,
        sixDigitOTP,
      });
      if (res.data.otp) {
        toast.success("check your email");

        setCurrentOtp(res.data.otp);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      toast.error("Internal Error");
    }
  };
  const postUsers = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const otpString = otp.join("");
      if (otpString == currentOtp) {
        const res = await fetch(`${url}/auth/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        // if (!data.ok) return toast.error(data);
        // console.log(data);
        // // if (data.success === false) {
        // //   setLoading(false);
        // //   setError(data.message);
        // //   return;
        // // }
        toast.success(data);
        setLoading(false);
        setError(null);
        toast.success(data);
        navigate("/sign-in");
      } else {
        setLoading(false);
        toast.error("Otp Not Match");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          onClick={handleMail}
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        {/* <OAuth /> */}
      </form>
      <BasicModal
        title="Please Enter You OTP"
        description={`OTP send to ${formData.email}`}
        setOpen={setOtpOpen}
        open={otpOpen}
      >
        {" "}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          {otp.map((_, index) => (
            <input
              placeholder="0"
              style={{
                width: "40px",
                border: "1px solid black",
                borderRadius: "5px",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onChange={(e) => handleChangeOtp(e, index)}
              ref={otpActiveIndex == index ? inputRef : null}
              value={otp[index]}
              onKeyDown={(e) => handeleKey(e, index)}
            />
          ))}
        </div>
        <button
          style={{
            margin: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            width: "100%",
            gap: "5px",
          }}
          onClick={postUsers}
        >
          <div
            style={{
              borderRadius: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "green",
              border: "1px solid green",
              padding: "10px",
            }}
          >
            <CheckIcon />
          </div>
          {/* <button>Verify</button> */}
        </button>
      </BasicModal>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
