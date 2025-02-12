import { Button, Typography } from "@material-tailwind/react";
import { useContext, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function VerifyOTP() {
  const { setUpRecaptcha } = useContext(AuthContext);
  const [number, setNumber] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);
  const [otp, setOTP] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);
  const navigate = useNavigate();

  const handleGetOTP = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (number === "" || number.length !== 14) {
      setErrorMsg("Please enter a valid phone number");
      return;
    }

    try {
      const res = await setUpRecaptcha(number);
      console.log(res);
      setConfirmResult(res);
      setShowOTPInput(true);
    } catch (error) {
      setErrorMsg(error.message);
      console.error(error);
    }

    console.log(number);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    console.log(otp);

    try {
      setErrorMsg("");
      await confirmResult.confirm(otp);
      navigate("/");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="w-96 mx-auto mt-32">
      <form onSubmit={handleGetOTP}>
        <Typography
          variant="lead"
          className="text-center mb-5"
        >
          Enter your phone number
        </Typography>
        <PhoneInput
          value={number}
          onChange={setNumber}
        />
        {errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}
        <Button
          type="submit"
          className="block ml-auto mt-5"
        >
          Send OTP
        </Button>
        <div
          id="recaptcha-container"
          className="mt-5 flex justify-end"
        ></div>
      </form>
      <form onSubmit={handleVerifyOTP}>
        <Typography
          variant="lead"
          className="text-center mb-5"
        >
          Enter the OTP
        </Typography>
        <input
          className="w-full rounded-lg border-gray-300 p-3 text-sm"
          type="number"
          id="otp"
          onChange={(e) => setOTP(e.target.value)}
        />
        {errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}
        <Button
          type="submit"
          className="block ml-auto mt-5"
        >
          Verify OTP
        </Button>
      </form>
    </div>
  );
}
