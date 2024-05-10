import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const signupPost = createApi({
  reducerPath: "signupPost",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://start-business.vercel.app/api/",
    // baseUrl: "http://192.168.28.155:8000/api/",
  }),
  tagTypes: ["Post", "Category", "Dealers","Brand", "Product"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        url: "/user/register/",
        method: "POST",
        body: newUser,
      }),
    }),

    // otp verification
    otpVerification: builder.mutation({
      query: ({ user_id, ...otp }) => ({
        url: `/user/otp-verification/${user_id}/`,
        method: "POST",
        body: otp,
      }),
    }),

    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: "/category/register",
        method: "POST",
        body: newCategory,
      }),
    }),

    loginUser: builder.mutation({
      query: (user) => ({
        url: "/user/login/",
        method: "POST",
        body: user,
      }),
    }),
    resendOpt: builder.mutation({
      query: (userId) => ({
        url: `/user/otp-resend/${userId}/`,
        method: "GET",
      }),
    }),
    newPassword: builder.mutation({
      query: (v1) => {
        return {
          url: `/user/forgetPassword/?email_id=${v1.email}`,
          method: "POST",
          body: {
            password: v1.password,
          },
        };
      },
    }),
    forgetResendOpt: builder.mutation({
      query: (userId) => ({
        url: `/user/otp-resend/?email_id=${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useOtpVerificationMutation,
  useCreateCategoryMutation,
  useLoginUserMutation,
  useResendOptMutation,
  useNewPasswordMutation,
  useForgetResendOptMutation,
} = signupPost;
