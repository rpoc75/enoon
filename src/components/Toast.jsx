// TOASTY!!!

import { useEffect, useState } from "react";

export default function Toast() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    function handleToast(e) {
      const id = Date.now();
      const message = e.detail;

      setToasts((prev) => [...prev, { id, message }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3500);
    }

    window.addEventListener("toast", handleToast);
    return () => window.removeEventListener("toast", handleToast);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="px-6 py-4 rounded-xl shadow-lg text-[var(--color-btn-hover-text)] bg-[var(--color-accent)]
                     animate-[toast-in_0.25s_ease-out] cursor-pointer"
          onClick={() =>
            setToasts((prev) => prev.filter((toast) => toast.id !== t.id))
          }
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
