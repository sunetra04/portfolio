import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-10">
      <p className="text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} SUNETRA. All rights reserved.</p>
    </footer>
  );
}
