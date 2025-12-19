import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <Container className="text-center">
        <p className="text-sm sm:text-base">
          © 2025 Galaxy Cine. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="text-sm sm:text-base hover:text-gray-300">
            Facebook
          </a>
          <a href="#" className="text-sm sm:text-base hover:text-gray-300">
            Instagram
          </a>
        </div>
      </Container>
    </footer>
  );
}
