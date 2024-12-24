import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Terms = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      <main className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto pt-32 pb-12">
          <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Terms of Service</h1>
          <ScrollArea className="h-[600px] rounded-md border p-6">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p>By accessing and using Bixory Ecommerce's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
                <p>Bixory Ecommerce provides eCommerce development, consulting, and management services. We reserve the right to withdraw or amend our services without notice.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
                <p>All content, features, and functionality on our platform are owned by Bixory Ecommerce and are protected by international copyright, trademark, and other intellectual property laws.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
                <p>Users must provide accurate information and maintain the security of their accounts. Any misuse of our services may result in immediate termination of access.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p>Bixory Ecommerce shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
                <p>We reserve the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of those changes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
                <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Bixory Ecommerce operates.</p>
              </section>
            </div>
          </ScrollArea>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;