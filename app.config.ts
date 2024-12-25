export default defineAppConfig({
  ui: {
    primary: "bg-slate-800",
    button: {
      base: "  ",
      color: {
        transparent: {
          solid:
            "bg-transparent text-stone-900 dark:bg-transparent dark:text-slate-300 focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-100",
        },
        primary: {
          solid:
            "bg-slate-900 text-stone-200 dark:bg-stone-200 dark:text-stone-900 focus-visible:ring-2 focus-visible:ring-slate-600 dark:focus-visible:ring-slate-100",
        },
      },
    },
    checkbox: {
      color: "text-cyan-500 dark:text-cyan-800",
      ring: "focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-100 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",
    },
    input: {
      color: {
        transparent: {
          outline:
            "bg-stone-100 text-stone-900 border border-1 border-stone-300 dark:border-none dark:bg-slate-800 dark:text-slate-300 focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-100",
        },
      },
    },
    pagination: {
      default: {
        activeButton: {
          color: "primary",
        },
      },
    },
    verticalNavigation: {
      base: "group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-stone-900 dark:focus-visible:before:ring-slate-300 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",
      ring: "focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-stone-900 dark:focus-visible:ring-slate-300",
      inactive:
        "text-stone-900 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:before:bg-stone-100 dark:hover:bg-slate-900",
      icon: {
        inactive: "text-stone-800 dark:text-slate-300",
      },
    },
  },
});
