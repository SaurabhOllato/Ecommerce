// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginSuccess } from "../feautures/authslice";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [step, setStep] = useState("phone"); // phone | otp | name
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [name, setName] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleSendOtp = async (e) => {
//   e.preventDefault();

//   if (phone.length !== 10) {
//     alert("Enter a valid 10-digit phone number.");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:5000/api/auth/send-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ phone_number: phone }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "Failed to send OTP");
//     }

//     alert("📲 OTP sent (check console/log)");
//     setStep("otp");
//   } catch (err) {
//     alert(err.message);
//   }
// };

// const handleVerifyOtp = async (e) => {
//   e.preventDefault();

//   if (otp.length !== 6) {
//     alert("Enter a 6-digit OTP");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ phone_number: phone, otp }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "OTP verification failed");
//     }

//     alert("✅ OTP verified");

//     if (isLogin) {
//       // ✅ Store user in Redux here if needed
//       // dispatch(loginUser({ phone }))
//       alert("Logged in successfully!");
//       navigate("/");
//     } else {
//       setStep("name");
//     }
//   } catch (err) {
//     alert(err.message);
//   }
// };

//  const handleRegister = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await fetch("http://localhost:5000/api/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, number: phone }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "Registration failed");
//     }

//     alert("✅ Registered successfully!");
//     navigate("/"); // redirect to homepage or dashboard
//     dispatch(loginSuccess({ id: data.userId, name, number: phone }));

//   } catch (error) {
//     console.error("❌ Registration error:", error.message);
//     alert(error.message);
//   }
// };

//   return (
//       <div className="min-h-screen bg-gradient-to-br from-pink-200 to-white flex items-center justify-center relative">
//       <div className="absolute inset-0 backdrop-blur-md" />
//       <div className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-8 w-full max-w-md z-10">
//         <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
//           {step === "phone" && "Enter your Mobile Number"}
//           {step === "otp" && "Enter OTP sent to your number"}
//           {step === "name" && "Complete Your Registration"}
//         </h2>

//         <form className="space-y-4">
//           {step === "phone" && (
//             <>
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full border border-gray-300 rounded px-4 py-2"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 onClick={handleSendOtp}
//                 className="w-full bg-pink-600 text-white rounded py-2 hover:bg-pink-700 transition"
//               >
//                 Send OTP
//               </button>
//             </>
//           )}

//           {step === "otp" && (
//             <>
//               <input
//                 type="text"
//                 placeholder="Enter OTP"
//                 className="w-full border border-gray-300 rounded px-4 py-2"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 onClick={handleVerifyOtp}
//                 className="w-full bg-pink-600 text-white rounded py-2 hover:bg-pink-700 transition"
//               >
//                 Verify OTP
//               </button>
//             </>
//           )}

//           {step === "name" && (
//             <>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border border-gray-300 rounded px-4 py-2"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 onClick={handleRegister}
//                 className="w-full bg-pink-600 text-white rounded py-2 hover:bg-pink-700 transition"
//               >
//                 Complete Registration
//               </button>
//             </>
//           )}
//         </form>

//         {/* Reset Option */}
//         <p className="text-center text-sm mt-6 text-gray-600">
//           Changed your mind?{" "}
//           <button
//             className="text-pink-600 hover:underline font-medium"
//             onClick={() => {
//               setStep("phone");
//               setPhone("");
//               setOtp("");
//               setName("");
//               setIsNewUser(false);
//             }}
//           >
//             Start Over
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../feautures/authslice";

const AuthPage = () => {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSendOtp = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      alert("Enter a valid 10-digit number.");
      return;
    }

    try {
      // ✅ Call backend to send OTP & check if user exists
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone_number: phone }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);
      setIsNewUser(data.isNewUser); // backend tells if user is new
      setStep("otp");
    } catch (err) {
      alert("❌ Failed to send OTP: " + err.message);
    }
  };

const handleVerifyOtp = async (e) => {
  e.preventDefault();
  if (otp.length !== 6) return alert("Enter 6-digit OTP");

  try {
    const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone_number: phone, otp }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    if (isNewUser) {
      setStep("name");
    } else {
      alert("✅ Logged in");

      // ✅ FIX: Dispatch user info
      dispatch(loginUser({ name: data.name, phone }));

      navigate("/");
    }
  } catch (err) {
    alert("❌ OTP verification failed: " + err.message);
  }
};

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name) return alert("Enter your name");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, number: phone }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      alert("✅ Registered successfully");
      console.log("Logged in user:", { name, phone });
      dispatch(loginUser({ name, phone }));
      navigate("/");
    } catch (err) {
      alert("❌ Registration failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-[url('https://res.cloudinary.com/dxscy1ixg/image/upload/v1750316288/pexels-arnold-nagy-195342381-12002672_jd6wpx.jpg')]">
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />

      {/* Form Card */}
      <div className="bg-white/30 backdrop-blur-2xl rounded-2xl shadow-xl p-8 w-full max-w-md z-10 border border-white/40">
        <h1 className="text-center text-xl">Login/Register</h1>
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">
          {step === "phone" && "Enter your Mobile Number"}
          {step === "otp" && "Enter OTP sent to your number"}
          {step === "name" && "Complete Your Registration"}
        </h2>

        <form className="space-y-4">
          {step === "phone" && (
            <>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button
                type="submit"
                onClick={handleSendOtp}
                className="w-full bg-pink-600 text-white rounded-md py-2 hover:bg-pink-700 transition"
              >
                Send OTP
              </button>
            </>
          )}

          {step === "otp" && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                type="submit"
                onClick={handleVerifyOtp}
                className="w-full bg-pink-600 text-white rounded-md py-2 hover:bg-pink-700 transition"
              >
                Verify OTP
              </button>
            </>
          )}

          {step === "name" && (
            <>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="submit"
                onClick={handleRegister}
                className="w-full bg-pink-600 text-white rounded-md py-2 hover:bg-pink-700 transition"
              >
                Complete Registration
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
