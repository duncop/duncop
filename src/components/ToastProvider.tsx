"use client";

import { ToastContainer } from "react-toastify";

export default function ToastProvider() {
    return (
        <ToastContainer
            position="bottom-center"
            autoClose={2000}
            closeButton={false}
            pauseOnHover={false}
            limit={1}
            className="mb-10"
            toastClassName={() =>
                "flex w-md bg-white border border-gray200 dark:border-gray900 dark:bg-gray1000 text-gray1000 dark:text-white rounded-xl px-6 py-5 shadow-lg"
            }
        />
    );
}
