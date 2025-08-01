
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, TikTok } from "lucide-react";

export default function AuthorWebsite() {
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="bg-white border-b shadow-md p-6 text-center">
        <h1 className="text-3xl font-bold text-yellow-600">SLindhlovue Writes</h1>
        <p className="text-lg mt-2">Author & Self-Publishing Services</p>
      </header>

      <nav className="flex justify-center gap-6 mt-4 text-yellow-600 font-semibold">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="home" className="text-center py-10 px-4">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-4">
              <img src="/1000008857.png" alt="Valarie Book Cover" className="rounded-xl mb-4" />
              <h3 className="text-xl font-bold">Valarie</h3>
              <p>Book 1 of The Santorini Vampires series</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <img src="/Black White Minimal Living My Best Life Instagram Post_20250722_153556_0000.jpg" alt="The Summer I Fell Book Cover" className="rounded-xl mb-4" />
              <h3 className="text-xl font-bold">The Summer I Fell</h3>
              <p>Book 1 of the Seasons of Love Quartet</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="bg-yellow-50 py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">About the Author</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          SLindhlovue is a passionate author committed to bringing heartfelt stories to life. Specializing in romantic and supernatural themes, she helps other aspiring writers bring their books to the world through personalized self-publishing services.
        </p>
      </section>

      <section id="services" className="py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Services</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          Offering editing, formatting, and self-publishing consultation for indie authors.
        </p>
      </section>

      <section id="newsletter" className="py-10 px-4 bg-white text-center">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Join the Newsletter</h2>
        <p className="text-gray-700 mb-4">Get the latest updates, book releases, and self-publishing tips delivered to your inbox.</p>
        <form
          action="https://docs.google.com/forms/d/1njobe90acLUWMm0ThA0gdW4zXfZXdcjB9SRvyJjjxLE/viewform"
          method="GET"
          target="_blank"
          className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="border border-gray-300 rounded-xl p-2 w-full md:w-2/3"
          />
          <Button type="submit" className="bg-yellow-600 text-white rounded-xl px-6 py-2 hover:bg-yellow-700">
            Subscribe
          </Button>
        </form>
      </section>

      <section id="contact" className="bg-yellow-50 py-10 px-4 text-center">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Contact</h2>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-gray-700">
            <Mail className="w-5 h-5" />
            <span>slindhlovuewrites@outlook.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Instagram className="w-5 h-5" />
            <span>@slindhlovu38</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <TikTok className="w-5 h-5" />
            <span>@slindhlovu38</span>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 text-sm text-gray-500">
        &copy; 2025 SLindhlovue Writes. All rights reserved.
      </footer>
    </div>
  );
}
