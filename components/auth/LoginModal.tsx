"use client";

import { useState, useEffect } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { createPortal } from "react-dom";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  onSwitchToRegister,
}: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Xử lý đăng nhập
      console.log("Login:", { email, password });
      onClose();
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen || !mounted) return null;

  // Portal content to be rendered at the document body level
  const modalContent = (
    <>
      {/* Overlay backdrop - làm mờ nền */}
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.5)]  z-[9999]"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="fixed inset-0 z-[10000] overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4 text-center">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-md">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <div className="p-8">
              {/* Header - có thể thêm icon nhân vật ở đây */}
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <img
                    src="/login-characters.png"
                    alt="Login Characters"
                    className="h-24"
                    // Nếu không có ảnh, bạn có thể thay thế bằng div styling
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Đăng Nhập Tài Khoản
                </h2>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập Email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nhập Mật khẩu"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 pr-10 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 font-medium text-base"
                >
                  {isLoading ? "Đang đăng nhập..." : "ĐĂNG NHẬP"}
                </button>

                {/* Forgot Password */}
                <div className="text-center">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Quên mật khẩu?
                  </button>
                </div>

                {/* Switch to Register */}
                <div className="text-center text-sm text-gray-600">
                  Bạn chưa có tài khoản?
                </div>

                {/* Register Button */}
                <button
                  type="button"
                  onClick={onSwitchToRegister}
                  className="w-full border border-orange-500 bg-white text-orange-500 py-3 px-4 rounded-lg hover:bg-orange-50 transition-colors font-medium"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
}
