import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchRoles } from "../store/actions/clientActions.js";
import api from "../api/api.js";

export default function Register() {
  // ================= REDUX =================

  const dispatch = useDispatch();
  const roles = useSelector((state) => state.client.roles);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");


  // ================= REACT HOOK FORM =================

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // ================= GET ROLES =================

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch]);

  // ================= DEFAULT CUSTOMER =================

  useEffect(() => {
    if (roles.length > 0) {
      const customerRole = roles.find(
        (role) => role.name?.toLowerCase() === "müşteri"
      );

      if (customerRole) {
        setValue("role_id", customerRole.id);
      }
    }
  }, [roles, setValue]);

  // ================= SELECTED ROLE =================

  const selectedRoleId = watch("role_id");

  const selectedRole = roles.find(
    (role) => String(role.id) === String(selectedRoleId)
  );

  const isStore = selectedRole?.name?.toLowerCase() === "mağaza";

  // ================= SUBMIT =================

const onSubmit = async (data) => {
  setLoading(true);
  setSubmitError("");

  try {
    let formData;

    if (isStore) {
      formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: Number(data.role_id),

        store: {
          name: data.store.name,
          phone: data.store.phone,
          tax_no: data.store.tax_no,
          bank_account: data.store.bank_account,
        },
      };
    } else {
      formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: Number(data.role_id),
      };
    }

    console.log("BACKEND'E GİDEN VERİ:", formData);

    const response = await api.post("/signup", formData);

    console.log("SIGNUP BAŞARILI:", response.data);

    alert(
      "Hesabınızı etkinleştirmek için e-postadaki bağlantıya tıklamanız gerekiyor!"
    );

    navigate(-1);
  } catch (error) {
    console.error(
      "SIGNUP HATASI:",
      error.response?.data || error.message
    );

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Kayıt işlemi başarısız oldu. Lütfen bilgilerinizi kontrol edin.";

    setSubmitError(errorMessage);
  } finally {
    setLoading(false);
  }
};
  return (
    <section className="flex min-h-175 w-full justify-center bg-white">
      <div className="flex w-full max-w-125 flex-col items-center px-6 py-20">

        {/* TITLE */}

        <h1 className="mb-10 text-center text-[40px] font-bold leading-12.5 text-[#252B42]">
          Register
        </h1>

        {/* FORM */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-full flex-col items-center gap-6"
        >

          {/* NAME */}

          <div className="flex w-full flex-col items-center gap-2">
            <label
              htmlFor="name"
              className="w-full text-center text-[14px] font-bold text-[#252B42]"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="h-12.5 w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3.75 text-center text-[14px] text-[#252B42] outline-none focus:border-[#23A6F0]"
            />

            {errors.name && (
              <p className="text-center text-[13px] text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
                  message:
                    "Password must contain uppercase, lowercase, number and special character",
                },
              })}
              className="h-12.5 w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3.75 text-center text-[14px] text-[#252B42] outline-none focus:border-[#23A6F0]"
            />

            {errors.password && (
              <p className="text-center text-[13px] text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* PASSWORD CONFIRM */}

          <div className="flex w-full flex-col items-center gap-2">
            <label 
            htmlFor="passwordConfirm"
            className="w-full text-center text-[14px] font-bold text-[#252B42]"
            >
              Password Confirmation
            </label>

            <input 
            type="passwordConfirm" 
            name="password" 
            placeholder="Enter your password"
            {...register("passwordConfirm", {
              required:"Password confirmation is required",

              validate: (value) => value === watch("password") ||
              "Passwords do not match",
            })}
            className="h-12.5 w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3.75 text-center text-[14px] text-[#252B42] outline-none focus:border-[#23A6F0]"          
            />
            {errors.passwordConfirm && (
              <p className="text-center text-[13px] text-red-500">
                {errors.passwordConfirm.message}
              </p>
            )}


          </div>


          {/* ROLE */}

          <div className="flex w-full flex-col items-center gap-2">
            <label
              htmlFor="role_id"
              className="w-full text-center text-[14px] font-bold text-[#252B42]"
            >
              Role
            </label>

            <select
              id="role_id"
              {...register("role_id", {
                required: "Role is required",
              })}
              className="h-12.5 w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3.75 text-center text-[14px] text-[#252B42] outline-none focus:border-[#23A6F0]"
            >
              <option value="">Select a role</option>

              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>

            {errors.role_id && (
              <p className="text-center text-[13px] text-red-500">
                {errors.role_id.message}
              </p>
            )}
          </div>

          {/* ================= STORE FIELDS ================= */}

          {isStore && (
            <div className="flex w-full flex-col gap-6">

              {/* STORE NAME */}

              <div className="flex w-full flex-col items-center gap-2">
                <label
                  htmlFor="storeName"
                  className="w-full text-center text-[14px] font-bold text-[#252B42]"
                >
                  Mağaza Adı
                </label>

                <input
                  id="storeName"
                  type="text"
                  placeholder="Mağaza adını giriniz"
                  {...register("store.name", {
                    required: "Mağaza adı zorunludur",
                    minLength: {
                      value: 3,
                      message: "Mağaza adı en az 3 karakter olmalıdır",
                    },
                  })}
                  className="h-12.5 w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3.75 text-center text-[14px] text-[#252B42] outline-none focus:border-[#23A6F0]"
                />

                {errors.store?.name && (
                  <p className="text-center text-[13px] text-red-500">
                    {errors.store.name.message}
                  </p>
                )}
              </div>

              {/* STORE PHONE */}

              <div className="flex w-full flex-col items-center gap-2">
                <label
                  htmlFor="storePhone"
                  className="w-full text-center text-[14px] font-bold text-[#252B42]"
                >
                  Mağaza Telefonu
                </label>

                <input
                  id="storePhone"
                  type="tel"
                  placeholder="05XXXXXXXXX"
                  {...register("store.phone", {
                    required: "Telefon numarası zorunludur",
                    pattern: {
                      value: /^05\d{9}$/,
                      message:
                        "Geçerli bir Türkiye telefon numarası giriniz",
                    },
                  })}
                  className="h-12.5 w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3.75 text-center text-[14px] text-[#252B42] outline-none focus:border-[#23A6F0]"
                />

                {errors.store?.phone && (
                  <p className="text-center text-[13px] text-red-500">
                    {errors.store.phone.message}
                  </p>
                )}
              </div>

              {/* TAX NO */}

              <div className="flex w-full flex-col items-center gap-2">
                <label
                  htmlFor="taxNo"
                  className="w-full text-center text-[14px] font-bold text-[#252B42]"
                >
                  Mağaza Vergi Kimlik Numarası
                </label>

                <input
                  id="taxNo"
                  type="text"
                  placeholder="T1234V123456"
                  {...register("store.tax_no", {
                    required: "Vergi kimlik numarası zorunludur",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message:
                        "Vergi numarası TXXXXVXXXXXX formatında olmalıdır",
                    },
                  })}
                  className="h-12.5 w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3.75 text-center text-[14px] text-[#252B42] outline-none focus:border-[#23A6F0]"
                />

                {errors.store?.tax_no && (
                  <p className="text-center text-[13px] text-red-500">
                    {errors.store.tax_no.message}
                  </p>
                )}
              </div>

              {/* BANK ACCOUNT */}

              <div className="flex w-full flex-col items-center gap-2">
                <label
                  htmlFor="bankAccount"
                  className="w-full text-center text-[14px] font-bold text-[#252B42]"
                >
                  Mağaza Banka Hesabı
                </label>

                <input
                  id="bankAccount"
                  type="text"
                  placeholder="TRXXXXXXXXXXXXXXXXXXXXXXXX"
                  {...register("store.bank_account", {
                    required: "IBAN zorunludur",
                    pattern: {
                      value: /^TR\d{24}$/,
                      message: "Geçerli bir Türkiye IBAN adresi giriniz",
                    },
                  })}
                  className="h-12.5 w-full rounded-[5px] border border-[#E6E6E6] bg-[#F9F9F9] px-3.75 text-center text-[14px] text-[#252B42] outline-none focus:border-[#23A6F0]"
                />

                {errors.store?.bank_account && (
                  <p className="text-center text-[13px] text-red-500">
                    {errors.store.bank_account.message}
                  </p>
                )}
              </div>

            </div>
          )}
        {submitError && (
        <p className="w-full text-center text-[14px] font-bold text-red-500">
          {submitError}
        </p>
      )}
          
          {/* SIGN UP BUTTON */}

         <button
          type="submit"
          disabled={loading}
          className="
            mt-2.5
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
              <span
                className="
                  h-5
                  w-5
                  animate-spin
                  rounded-full
                  border-2
                  border-white
                  border-t-transparent
                "
              />

              Signing Up...
            </>
          ) : (
            "Sign Up"
            )}
          </button>
          </form>
      </div>
    </section>
  );
}