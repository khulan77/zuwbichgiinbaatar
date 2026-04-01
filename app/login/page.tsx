"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // 1 секунд хүлээлгээд нүүр хуудас руу шилжүүлнэ
    setTimeout(() => {
      setIsLoading(false);
      router.push("/topics?grade=1");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFE] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[420px] z-10"
      >
        <div className="text-center mb-10">
          <p className="text-gray-400 font-medium text-sm mt-2 italic">
            Аялалаа үргэлжлүүлцгээе!
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-2xl rounded-[40px] p-10 shadow-[0_20px_70px_rgba(93,49,145,0.08)] border border-white">
          <h2 className="text-[#5D3191] font-black text-xl mb-8 flex items-center gap-2">
            Нэвтрэх <Sparkles className="w-5 h-5 text-yellow-400" />
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-[#5D3191]/40 uppercase tracking-widest ml-1">
                Нэвтрэх нэр
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#5D3191]" />
                <input
                  required
                  type="text"
                  placeholder="Нэрээ оруулна уу"
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-[20px] py-4 pl-12 pr-4 outline-none focus:border-purple-200 focus:bg-white font-medium text-[#5D3191]"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black text-[#5D3191]/40 uppercase tracking-widest ml-1">
                Нууц үг
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-[#5D3191]" />
                <input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50/50 border border-gray-100 rounded-[20px] py-4 pl-12 pr-4 outline-none focus:border-purple-200 focus:bg-white font-medium text-[#5D3191]"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#5D3191] text-white font-black py-4 rounded-[22px] flex items-center justify-center gap-2 mt-4 transition-all shadow-lg shadow-purple-100"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  Аялалыг эхлүүлэх <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center border-t border-gray-50 pt-6 text-gray-400 text-sm">
            Бүртгэлгүй юу?{" "}
            <Link
              href="/signup"
              className="text-[#5D3191] font-black hover:underline ml-1"
            >
              Бүртгүүлэх
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default LoginPage;
