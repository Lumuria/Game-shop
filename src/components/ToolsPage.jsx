import { useState } from 'react';
import { Lock, Eye, EyeOff, Shield, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { Button } from './Button';

const ToolsPage = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(null);
  const [phishingUrl, setPhishingUrl] = useState('');
  const [phishingResult, setPhishingResult] = useState(null);

  // فحص قوة كلمة المرور
  const checkPasswordStrength = (pwd) => {
    let score = 0;
    let feedback = [];

    if (pwd.length >= 8) {
      score += 1;
    } else {
      feedback.push('يجب أن تكون كلمة المرور 8 أحرف على الأقل');
    }

    if (pwd.length >= 12) {
      score += 1;
    } else if (pwd.length >= 8) {
      feedback.push('استخدم 12 حرف أو أكثر للحصول على حماية أفضل');
    }

    if (/[a-z]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push('أضف أحرف صغيرة (a-z)');
    }

    if (/[A-Z]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push('أضف أحرف كبيرة (A-Z)');
    }

    if (/[0-9]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push('أضف أرقام (0-9)');
    }

    if (/[^A-Za-z0-9]/.test(pwd)) {
      score += 1;
    } else {
      feedback.push('أضف رموز خاصة (!@#$%^&*)');
    }

    // فحص الأنماط الشائعة
    const commonPatterns = ['123456', 'password', 'qwerty', 'abc123', '111111'];
    if (commonPatterns.some(pattern => pwd.toLowerCase().includes(pattern))) {
      score -= 2;
      feedback.push('تجنب الأنماط الشائعة مثل 123456 أو password');
    }

    let strength = 'ضعيفة جداً';
    let color = 'text-red-600 bg-red-100';
    let icon = AlertTriangle;

    if (score >= 5) {
      strength = 'قوية جداً';
      color = 'text-green-600 bg-green-100';
      icon = CheckCircle;
    } else if (score >= 4) {
      strength = 'قوية';
      color = 'text-blue-600 bg-blue-100';
      icon = Shield;
    } else if (score >= 2) {
      strength = 'متوسطة';
      color = 'text-yellow-600 bg-yellow-100';
      icon = AlertTriangle;
    }

    return { strength, color, feedback, score, icon };
  };

  const handlePasswordCheck = () => {
    if (password) {
      const result = checkPasswordStrength(password);
      setPasswordStrength(result);
    }
  };

  // فحص الروابط المشبوهة
  const checkPhishingUrl = () => {
    if (!phishingUrl) return;

    const suspiciousPatterns = [
      /bit\.ly|tinyurl|t\.co/i, // روابط مختصرة
      /[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/, // عناوين IP
      /[a-z]+-[a-z]+-[a-z]+\.(tk|ml|ga|cf)/i, // نطاقات مجانية مشبوهة
      /paypal|amazon|google|microsoft|apple/i, // تقليد العلامات التجارية
      /urgent|verify|suspend|click|now/i, // كلمات تحفيزية
    ];

    let riskLevel = 'منخفض';
    let warnings = [];
    let color = 'text-green-600 bg-green-100';

    // فحص البروتوكول
    if (!phishingUrl.startsWith('https://')) {
      warnings.push('الرابط لا يستخدم HTTPS الآمن');
      riskLevel = 'متوسط';
      color = 'text-yellow-600 bg-yellow-100';
    }

    // فحص الأنماط المشبوهة
    suspiciousPatterns.forEach((pattern, index) => {
      if (pattern.test(phishingUrl)) {
        switch (index) {
          case 0:
            warnings.push('يستخدم خدمة اختصار روابط - كن حذراً');
            break;
          case 1:
            warnings.push('يستخدم عنوان IP بدلاً من اسم النطاق');
            break;
          case 2:
            warnings.push('يستخدم نطاق مجاني مشبوه');
            break;
          case 3:
            warnings.push('قد يحاول تقليد علامة تجارية معروفة');
            break;
          case 4:
            warnings.push('يحتوي على كلمات تحفيزية مشبوهة');
            break;
        }
        riskLevel = 'عالي';
        color = 'text-red-600 bg-red-100';
      }
    });

    // فحص طول النطاق
    try {
      const url = new URL(phishingUrl);
      if (url.hostname.length > 30) {
        warnings.push('اسم النطاق طويل بشكل غير عادي');
        riskLevel = 'متوسط';
        if (color === 'text-green-600 bg-green-100') {
          color = 'text-yellow-600 bg-yellow-100';
        }
      }
    } catch (e) {
      warnings.push('تنسيق الرابط غير صحيح');
      riskLevel = 'عالي';
      color = 'text-red-600 bg-red-100';
    }

    if (warnings.length === 0) {
      warnings.push('لا توجد علامات تحذيرية واضحة، لكن كن حذراً دائماً');
    }

    setPhishingResult({ riskLevel, warnings, color });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <Zap className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            الأدوات التفاعلية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استخدم أدواتنا التفاعلية لفحص مستوى الأمان لديك وتعلم كيفية تحسينه
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* أداة فحص قوة كلمة المرور */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="h-8 w-8 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-800">فاحص قوة كلمة المرور</h2>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="أدخل كلمة المرور للفحص..."
                  className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              <Button 
                onClick={handlePasswordCheck}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={!password}
              >
                فحص قوة كلمة المرور
              </Button>

              {passwordStrength && (
                <div className="mt-6 p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <passwordStrength.icon className={`h-5 w-5 ${passwordStrength.color.split(' ')[0]}`} />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${passwordStrength.color}`}>
                      {passwordStrength.strength}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        passwordStrength.score >= 5 ? 'bg-green-500' :
                        passwordStrength.score >= 4 ? 'bg-blue-500' :
                        passwordStrength.score >= 2 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.max(10, (passwordStrength.score / 6) * 100)}%` }}
                    ></div>
                  </div>

                  {passwordStrength.feedback.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">اقتراحات للتحسين:</h4>
                      <ul className="space-y-1">
                        {passwordStrength.feedback.map((tip, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* أداة فحص الروابط المشبوهة */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-green-500" />
              <h2 className="text-2xl font-bold text-gray-800">فاحص الروابط المشبوهة</h2>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="url"
                  placeholder="أدخل الرابط للفحص... (مثل: https://example.com)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={phishingUrl}
                  onChange={(e) => setPhishingUrl(e.target.value)}
                />
              </div>

              <Button 
                onClick={checkPhishingUrl}
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={!phishingUrl}
              >
                فحص الرابط
              </Button>

              {phishingResult && (
                <div className="mt-6 p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className={`h-5 w-5 ${phishingResult.color.split(' ')[0]}`} />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${phishingResult.color}`}>
                      مستوى الخطر: {phishingResult.riskLevel}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">تحليل الرابط:</h4>
                    <ul className="space-y-2">
                      {phishingResult.warnings.map((warning, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          {warning}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* نصائح أمنية */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            نصائح أمنية سريعة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-800 mb-2">كلمات مرور قوية</h3>
              <p className="text-blue-700 text-sm">
                استخدم كلمات مرور طويلة ومعقدة ومختلفة لكل حساب
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-800 mb-2">تحقق من الروابط</h3>
              <p className="text-blue-700 text-sm">
                لا تنقر على الروابط المشبوهة وتحقق من صحة المواقع
              </p>
            </div>
            <div className="text-center">
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-800 mb-2">كن يقظاً</h3>
              <p className="text-blue-700 text-sm">
                راقب الأنشطة المشبوهة وتعلم علامات التحذير
              </p>
            </div>
          </div>
        </div>

        {/* تحذير مهم */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">تحذير مهم</h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                هذه الأدوات مخصصة للأغراض التعليمية فقط. لا تدخل كلمات مرور حقيقية أو معلومات حساسة. 
                للحصول على فحص أمني شامل، استخدم أدوات متخصصة من مصادر موثوقة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsPage;

