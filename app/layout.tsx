import "./globals.css";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/store/provider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-poppins antialiased">
        <StoreProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#fff",
                color: "#fff",
              },
            }}
          />
        </StoreProvider>
      </body>
    </html>
  );
};
export default RootLayout;
