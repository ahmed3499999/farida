import Link from "next/link"
import { Phone, Mail, Globe, Linkedin } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">This page could not be found.</p>

        <div className="space-y-4 text-sm text-gray-600">
          <p className="text-gray-800 font-medium mb-6">تواصل معنا - Contact Us</p>

          <div className="space-y-3">
            <a
              href="tel:01092688458"
              className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Phone size={16} />
              <span>01092688458</span>
            </a>

            <a
              href="mailto:faridasoftware9@gmail.com"
              className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Mail size={16} />
              <span>faridasoftware9@gmail.com</span>
            </a>

            <a
              href="https://faridacompany.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Globe size={16} />
              <span>faridacompany.netlify.app</span>
            </a>

            <a
              href="https://linkedin.com/company/farida1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={16} />
              <span>linkedin.com/company/farida1</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              العودة للرئيسية - Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
