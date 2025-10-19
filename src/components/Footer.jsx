import React from 'react';
import { Shield, Heart, Mail, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-bold">الأمن السيبراني</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              منصة تعليمية شاملة لتعلم أساسيات الأمن السيبراني وحماية البيانات. 
              نهدف إلى نشر الوعي الأمني وتوفير المعرفة اللازمة لحماية الأفراد والمؤسسات.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>صُمم بـ</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>بواسطة فريق متخصص</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="/attacks" className="text-gray-300 hover:text-blue-400 transition-colors">
                  أنواع الهجمات
                </a>
              </li>
              <li>
                <a href="/prevention" className="text-gray-300 hover:text-blue-400 transition-colors">
                  طرق الحماية
                </a>
              </li>
              <li>
                <a href="/tools" className="text-gray-300 hover:text-blue-400 transition-colors">
                  الأدوات التفاعلية
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-300 hover:text-blue-400 transition-colors">
                  آخر الأخبار
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">تواصل معنا</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@cybersecurity.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@cybersecurity.com</span>
              </a>
              
              <div className="flex gap-3 mt-4">
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label="تويتر"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label="لينكد إن"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label="جيت هاب"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} الأمن السيبراني. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
