"use client";

import { ToastContainer } from "react-toastify";

export default function ToastProvider() {
    return (
        <ToastContainer
            position="bottom-center"
            autoClose={2000}
            hideProgressBar
            closeButton={false}
            pauseOnHover={false}
            style={{ bottom: "40px", gap: "10px" }}
            toastClassName={() =>
                "flex sm:w-md bg-white/80 border border-gray200 dark:border-gray900 dark:bg-gray1000/90 backdrop-blur-xs text-gray1000 dark:text-white rounded-xl px-6 py-5 shadow-lg"
            }
        />
    );
}
