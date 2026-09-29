import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { loginUser } from "../store/actions/clientActions.js";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ================= LOGIN SUBMIT =================

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await dispatch(loginUser(data));

      toast.success("Giriş başarılı!");

      // Önceki sayfa varsa geri dön
      // Yoksa home page'e git
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(
        "LOGIN HATASI:",
        error.response?.data || error.message
      );

      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "E-posta veya şifre hatalı.";

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-162.5 w-full justify-center bg-white">
      <div className="flex w-full max-w-125 flex-col items-center px-6 py-20">

        {/* TITLE */}

        <h1 className="mb-10 text-center text-[40px] font-bold text-[#252B42]">
          Login
        </h1>

        {/* FORM */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center gap-6"
        >

          {/* EMAIL */}

          <div className="flex w-full flex-col items-center gap-2">
            <label
              htmlFor="email"
              className="w-full text-center text-[14px] font-bold text-[#252B42]"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className="h-12.5 w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3.75 text-center text-[14px] text-[#252B42] outline-none focus:border-[#23A6F0]"
            />

            {errors.email && (
              <p className="text-center text-[13px] text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}

          <div className="flex w-full flex-col items-center gap-2">
            <label
              htmlFor="password"
              className="w-full text-center text-[14px] font-bold text-[#252B42]"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="h-12.5 w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3.75 text-center text-[14px] text-[#252B42] outline-none focus:border-[#23A6F0]"
            />
          </div>

          {/* REMEMBER ME */}

          <label className="flex cursor-pointer items-center gap-2 text-[14px] text-[#737373]">
            <input
              type="checkbox"
              {...register("rememberMe")}
            />

            Remember Me
          </label>

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              flex
              h-13
              w-full
              items-center
              justify-center
              gap-2
              rounded-[5px]
              bg-[#23A6F0]
              text-[14px]
              font-bold
              text-white
              transition
              hover:opacity-90
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />

                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

        </form>
      </div>
    </section>
  );
}