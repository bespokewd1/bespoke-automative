import { BUSINESS } from "@data/client";

export default function TelLink() {
  return (
    <a
      href={`tel:+1${BUSINESS.phoneForTel}`}
      className="inline-flex items-center gap-2 px-6 py-4 relative text-primary font-bold uppercase tracking-wider duration-300 ease-in hover:bg-primary hover:text-white transition-colors"
      style={{
        clipPath:
          "polygon(0 14px, 14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)",
      }}
    >

      <span
        style={{ clipPath: "polygon(0 14px, 14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px, 2px 14.8px, 2px calc(100% - 2px), calc(100% - 14px - 0.8px) calc(100% - 2px), calc(100% - 2px) calc(100% - 14px - 0.8px), calc(100% - 2px) 2px, 14.8px 2px, 2px 14.8px)" }}
        className="absolute inset-0 z-10 block bg-fg transition-colors duration-300 group-hover:bg-transparent"
        aria-hidden="true"></span>
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      Call Now
    </a>
  )
}
