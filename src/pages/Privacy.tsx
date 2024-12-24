import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-foreground">Privacy Policy</h1>
          <ScrollArea className="h-[600px] rounded-md border p-6">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, including name, email address, and any other information you choose to provide. We also automatically collect certain information about your device when you use our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                <p>We do not share your personal information with third parties except as described in this policy or with your consent.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
                <p>We use cookies and similar tracking technologies to track activity on our services and hold certain information to improve and analyze our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <p>You have the right to access, update, or delete your personal information. You may also have additional rights under applicable data protection laws.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Changes to Privacy Policy</h2>
                <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us through our contact page.</p>
              </section>
            </div>
          </ScrollArea>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;