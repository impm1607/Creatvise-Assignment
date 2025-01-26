import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

const HeaderSection = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="relative h-[50vh] bg-gradient-to-b to-[#111111] via-[#5001BD] from-[#111111]">
        <div className="absolute top-4 right-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="btn-primary">Login</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-center">
                  Login
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="mb-4 border-2"
                  />

                  <Input
                    type="password"
                    placeholder="Password"
                    className="mb-4 border-2"
                  />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
                <AlertDialogAction className="w-full">
                  Sign In
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="absolute bottom-[108px] sm:bottom-20 left-1/2 -translate-x-1/2 w-3/4 md:w-[90%] lg:w-[784px] bg-[#18191B] rounded-[10px] border border-[#A6A6A6] p-4 flex flex-col gap-2 md:gap-8">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between sm:gap-2 gap-0">
            <p className="text-[var(--primary-color)] text-[13px]">
              Upload reference or describe your idea in a few words, you can do
              both to.
            </p>

            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V26C32 29.3137 29.3137 32 26 32H6C2.68629 32 0 29.3137 0 26V6Z"
                fill="#1B1F26"
                fill-opacity="0.72"
              />
              <path
                d="M16 16.6667C16.3681 16.6667 16.6666 16.3682 16.6666 16C16.6666 15.6318 16.3681 15.3333 16 15.3333C15.6318 15.3333 15.3333 15.6318 15.3333 16C15.3333 16.3682 15.6318 16.6667 16 16.6667Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.6666 16.6667C21.0348 16.6667 21.3333 16.3682 21.3333 16C21.3333 15.6318 21.0348 15.3333 20.6666 15.3333C20.2984 15.3333 20 15.6318 20 16C20 16.3682 20.2984 16.6667 20.6666 16.6667Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3333 16.6667C11.7015 16.6667 12 16.3682 12 16C12 15.6318 11.7015 15.3333 11.3333 15.3333C10.9651 15.3333 10.6666 15.6318 10.6666 16C10.6666 16.3682 10.9651 16.6667 11.3333 16.6667Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="flex items-center gap-2 justify-between">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8667 8.20833L9.20834 15.8667C8.27014 16.8049 6.99766 17.3319 5.67084 17.3319C4.34402 17.3319 3.07154 16.8049 2.13334 15.8667C1.19514 14.9285 0.66806 13.656 0.66806 12.3292C0.66806 11.0023 1.19514 9.72987 2.13334 8.79166L9.27501 1.65C9.90048 1.02342 10.7492 0.670979 11.6346 0.670198C12.5199 0.669416 13.3693 1.02036 13.9958 1.64583C14.6224 2.2713 14.9749 3.12006 14.9756 4.00538C14.9764 4.89071 14.6255 5.74009 14 6.36666L6.84167 13.5083C6.52894 13.8211 6.10478 13.9968 5.66251 13.9968C5.22023 13.9968 4.79608 13.8211 4.48334 13.5083C4.17061 13.1956 3.99491 12.7714 3.99491 12.3292C3.99491 11.8869 4.17061 11.4627 4.48334 11.15L11.5583 4.08333"
                stroke="url(#paint0_linear_8_34)"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_8_34"
                  x1="0.66806"
                  y1="9.00107"
                  x2="16.8667"
                  y2="9.00107"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#B5B5B5" />
                  <stop offset="0.199326" stop-color="#DADADA" />
                  <stop offset="0.43" stop-color="#E6E6E6" />
                  <stop offset="0.59" stop-color="#F4F4F4" />
                  <stop offset="0.73" stop-color="#FEFEFE" />
                  <stop offset="0.963542" stop-color="#A9A9A9" />
                  <stop offset="1" stop-color="#858585" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex items-center gap-2">
              <Button className="btn-rounded hidden md:inline">
                Text - image
              </Button>
              <Button className="btn-rounded hidden md:inline">
                Image - Sketch
              </Button>
              <Button className="btn-rounded hidden md:inline">
                Generate Similar
              </Button>
              <Button className="btn-primary">Create</Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 w-full">
          <div className="p-4 flex items-center justify-between flex-col-reverse sm:flex-row">
            <div>
              <Button
                onClick={() => setActiveTab(true)}
                className={`${
                  activeTab
                    ? "btn-purple"
                    : "bg-transparent text-[var(--secondary-color)] hover:bg-[var(--bg-hover-purple)]"
                }`}
              >
                Moodboard
              </Button>
              <Button
                onClick={() => setActiveTab(false)}
                className={`text-[#f9fafb] ${
                  !activeTab
                    ? "btn-purple"
                    : "bg-transparent text-[var(--secondary-color)] hover:bg-[var(--bg-hover-purple)]"
                }`}
              >
                Generated
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-2 ">
                <label htmlFor="terms" className="text-sm text-white">
                  Select all
                </label>
                <Checkbox
                  id="terms"
                  style={{
                    borderColor: "#B19DFF",
                    color: "#B19DFF",
                    backgroundColor: "transparent",
                  }}
                />
              </div>

              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" fill="#181B20" />
                <path
                  d="M25.375 19.125V23.2917C25.375 23.8442 25.1555 24.3741 24.7648 24.7648C24.3741 25.1555 23.8442 25.375 23.2917 25.375H8.70833C8.1558 25.375 7.62589 25.1555 7.23519 24.7648C6.84449 24.3741 6.625 23.8442 6.625 23.2917V19.125M10.7917 13.9167L16 19.125M16 19.125L21.2083 13.9167M16 19.125V6.625"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5H18.8947M16.9064 5V19C16.9064 20 15.9123 21 14.9181 21H4.97661C3.98246 21 2.9883 20 2.9883 19V5M5.97076 5V3C5.97076 2 6.96491 1 7.95906 1H11.9357C12.9298 1 13.924 2 13.924 3V5"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="px-4">
            <hr className="border-[#585858]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
