import { IoFolderOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const BottomSection = ({ activeTab }) => {
  return (
    <>
      <div className="px-4 flex items-center justify-between">
        {activeTab && (
          <>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-white">
                <div className="flex items-center gap-2 py-2 border-b border-transparent border-white">
                  <IoFolderOutline />
                  <p className="text-[13px]">Project 1</p>
                </div>
                <RxCross2 />
              </button>

              <button className="flex items-center gap-1 text-[#464646]">
                <div className="flex items-center gap-2 py-2 border-b border-transparent hover:border-b hover:border-[#464646]">
                  <IoFolderOutline />
                  <p className="text-[13px]">Project 2</p>
                </div>
                <RxCross2 />
              </button>
            </div>

            <DropdownMenu className="bg-red">
              <DropdownMenuTrigger asChild>
                <svg
                  className="cursor-pointer"
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
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-[#111111] border border-[#535353] text-white">
                <DropdownMenuItem className="focus:bg-[#181B20] focus:text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6667 14V12.6667C12.6667 11.9594 12.3858 11.2811 11.8857 10.781C11.3856 10.281 10.7073 10 10 10H6.00004C5.2928 10 4.61452 10.281 4.11442 10.781C3.61433 11.2811 3.33337 11.9594 3.33337 12.6667V14M10.6667 4.66667C10.6667 6.13943 9.4728 7.33333 8.00004 7.33333C6.52728 7.33333 5.33337 6.13943 5.33337 4.66667C5.33337 3.19391 6.52728 2 8.00004 2C9.4728 2 10.6667 3.19391 10.6667 4.66667Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Rename
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#181B20] focus:text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.14667 1.33331H7.85333C7.49971 1.33331 7.16057 1.47379 6.91053 1.72384C6.66048 1.97389 6.52 2.31302 6.52 2.66665V2.78665C6.51976 3.02046 6.45804 3.25011 6.34103 3.45254C6.22401 3.65497 6.05583 3.82307 5.85333 3.93998L5.56667 4.10665C5.36398 4.22367 5.13405 4.28528 4.9 4.28528C4.66595 4.28528 4.43603 4.22367 4.23333 4.10665L4.13333 4.05331C3.82738 3.87682 3.46389 3.82894 3.12267 3.92018C2.78145 4.01143 2.49037 4.23434 2.31333 4.53998L2.16667 4.79331C1.99018 5.09927 1.9423 5.46275 2.03354 5.80398C2.12478 6.1452 2.34769 6.43628 2.65333 6.61331L2.75333 6.67998C2.95485 6.79632 3.12241 6.96337 3.23937 7.16453C3.35632 7.36569 3.4186 7.59396 3.42 7.82665V8.16665C3.42093 8.40159 3.35977 8.63261 3.2427 8.83632C3.12563 9.04002 2.95681 9.20917 2.75333 9.32665L2.65333 9.38665C2.34769 9.56368 2.12478 9.85476 2.03354 10.196C1.9423 10.5372 1.99018 10.9007 2.16667 11.2066L2.31333 11.46C2.49037 11.7656 2.78145 11.9885 3.12267 12.0798C3.46389 12.171 3.82738 12.1231 4.13333 11.9466L4.23333 11.8933C4.43603 11.7763 4.66595 11.7147 4.9 11.7147C5.13405 11.7147 5.36398 11.7763 5.56667 11.8933L5.85333 12.06C6.05583 12.1769 6.22401 12.345 6.34103 12.5474C6.45804 12.7499 6.51976 12.9795 6.52 13.2133V13.3333C6.52 13.6869 6.66048 14.0261 6.91053 14.2761C7.16057 14.5262 7.49971 14.6666 7.85333 14.6666H8.14667C8.50029 14.6666 8.83943 14.5262 9.08948 14.2761C9.33953 14.0261 9.48 13.6869 9.48 13.3333V13.2133C9.48024 12.9795 9.54196 12.7499 9.65898 12.5474C9.77599 12.345 9.94418 12.1769 10.1467 12.06L10.4333 11.8933C10.636 11.7763 10.866 11.7147 11.1 11.7147C11.3341 11.7147 11.564 11.7763 11.7667 11.8933L11.8667 11.9466C12.1726 12.1231 12.5361 12.171 12.8773 12.0798C13.2186 11.9885 13.5096 11.7656 13.6867 11.46L13.8333 11.2C14.0098 10.894 14.0577 10.5305 13.9665 10.1893C13.8752 9.84809 13.6523 9.55701 13.3467 9.37998L13.2467 9.32665C13.0432 9.20917 12.8744 9.04002 12.7573 8.83632C12.6402 8.63261 12.5791 8.40159 12.58 8.16665V7.83331C12.5791 7.59837 12.6402 7.36734 12.7573 7.16364C12.8744 6.95994 13.0432 6.79079 13.2467 6.67331L13.3467 6.61331C13.6523 6.43628 13.8752 6.1452 13.9665 5.80398C14.0577 5.46275 14.0098 5.09927 13.8333 4.79331L13.6867 4.53998C13.5096 4.23434 13.2186 4.01143 12.8773 3.92018C12.5361 3.82894 12.1726 3.87682 11.8667 4.05331L11.7667 4.10665C11.564 4.22367 11.3341 4.28528 11.1 4.28528C10.866 4.28528 10.636 4.22367 10.4333 4.10665L10.1467 3.93998C9.94418 3.82307 9.77599 3.65497 9.65898 3.45254C9.54196 3.25011 9.48024 3.02046 9.48 2.78665V2.66665C9.48 2.31302 9.33953 1.97389 9.08948 1.72384C8.83943 1.47379 8.50029 1.33331 8.14667 1.33331Z"
                      stroke="#E5E7EB"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 9.99998C9.10457 9.99998 10 9.10455 10 7.99998C10 6.89541 9.10457 5.99998 8 5.99998C6.89543 5.99998 6 6.89541 6 7.99998C6 9.10455 6.89543 9.99998 8 9.99998Z"
                      stroke="#E5E7EB"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#181B20] focus:text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.33337 6.66665H14.6667M2.66671 3.33331H13.3334C14.0698 3.33331 14.6667 3.93027 14.6667 4.66665V11.3333C14.6667 12.0697 14.0698 12.6666 13.3334 12.6666H2.66671C1.93033 12.6666 1.33337 12.0697 1.33337 11.3333V4.66665C1.33337 3.93027 1.93033 3.33331 2.66671 3.33331Z"
                      stroke="#E5E7EB"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Delete This Project
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </>
  );
};

export default BottomSection;
