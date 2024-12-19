export default defineAppConfig({
  ui: {
    primary:'bg-slate-800',
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
    input:{
      color: {
        transparent: {
          outline:
            "bg-white text-stone-900 border border-1 border-stone-200 dark:border-none dark:bg-slate-800 dark:text-slate-300 focus-visible:ring-2 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-100",
        },
      },
    },
    pagination:{
      default: {
        activeButton:{
          color:'primary'
        }
      }
    }
  },

});
