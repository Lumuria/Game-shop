import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, TrendingUp, Users, Lock, Eye, ArrowRight, Sparkles, CheckCircle, Star, Zap, Globe, Award } from 'lucide-react';
import { Button } from './Button';

const HomePage = ({ setActiveSection }) => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stats = [
    { icon: AlertTriangle, label: 'هجمات يومية', value: '4,000+', color: 'text-red-500', bgColor: 'bg-red-50', gradient: 'from-red-400 to-red-600' },
    { icon: TrendingUp, label: 'نمو التهديدات', value: '67%', color: 'text-orange-500', bgColor: 'bg-orange-50', gradient: 'from-orange-400 to-orange-600' },
    { icon: Users, label: 'ضحايا سنوياً', value: '1.7M', color: 'text-blue-500', bgColor: 'bg-blue-50', gradient: 'from-blue-400 to-blue-600' },
    { icon: Lock, label: 'تكلفة الاختراق', value: '$4.45M', color: 'text-green-500', bgColor: 'bg-green-50', gradient: 'from-green-400 to-green-600' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'تعلم الحماية',
      description: 'اكتشف أحدث طرق الحماية من الهجمات السيبرانية وتعلم كيفية تأمين بياناتك الشخصية والمهنية بطرق عملية ومجربة.',
      action: () => setActiveSection('prevention'),
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0ms',
      bgPattern: 'morphing-blob'
    },
    {
      icon: Eye,
      title: 'فهم التهديدات',
      description: 'تعرف على أنواع الهجمات السيبرانية المختلفة وكيفية عملها لتكون أكثر وعياً وحذراً في التعامل مع التهديدات الرقمية.',
      action: () => setActiveSection('attacks'),
      gradient: 'from-purple-500 to-pink-500',
      delay: '150ms',
      bgPattern: 'animate-float'
    },
    {
      icon: Lock,
      title: 'أدوات تفاعلية',
      description: 'استخدم أدواتنا التفاعلية المتطورة لفحص قوة كلمات المرور وتقييم مستوى الأمان لديك بشكل فوري ودقيق.',
      action: () => setActiveSection('tools'),
      gradient: 'from-green-500 to-emerald-500',
      delay: '300ms',
      bgPattern: 'pulse-ring'
    }
  ];

  const securityTips = [
    { text: 'استخدم كلمات مرور قوية ومختلفة لكل حساب', icon: Lock },
    { text: 'فعّل المصادقة الثنائية في جميع حساباتك المهمة', icon: Shield },
    { text: 'حدّث برامجك ونظام التشغيل بانتظام', icon: Zap },
    { text: 'كن حذراً من الروابط والمرفقات المشبوهة', icon: AlertTriangle }
  ];

  const achievements = [
    { icon: Star, title: 'خبرة 10+ سنوات', description: 'في مجال الأمن السيبراني' },
    { icon: Award, title: '50,000+ متدرب', description: 'استفادوا من برامجنا التدريبية' },
    { icon: Globe, title: 'تغطية عالمية', description: 'نخدم أكثر من 100 دولة' },
    { icon: Zap, title: 'استجابة سريعة', description: 'دعم فني على مدار الساعة' }
  ];

  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      {/* Floating Elements */}
      <div 
        className="fixed pointer-events-none z-10"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transition: 'all 0.1s ease-out'
        }}
      >
        <div className="w-5 h-5 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
      </div>

      {/* القسم الرئيسي المحسن */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center mb-8">
              <div className="relative pulse-ring">
                <div className="glass-card p-6 rounded-full">
                  <Shield className="h-24 w-24 text-blue-400 animate-glow" />
                </div>
                <div className="absolute -top-3 -right-3">
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-bounce" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-white text-gradient animate-scale-in">
              دليلك الشامل للأمن السيبراني
            </h1>
            <p className="text-xl md:text-3xl text-white mb-4 leading-relaxed animate-slide-in-left">
              تعلم كيفية حماية نفسك ومؤسستك من الهجمات الإلكترونية المتزايدة
            </p>
            <p className="text-lg text-blue-100 mb-12 animate-slide-in-right">
              مع خبراء متخصصين وأدوات تفاعلية متطورة
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <Button 
                size="lg" 
                className="btn-modern btn-primary text-xl px-10 py-5 group hover-lift interactive-card"
                onClick={() => setActiveSection('attacks')}
              >
                <span>استكشف الهجمات</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="btn-modern btn-secondary text-xl px-10 py-5 group hover-lift interactive-card"
                onClick={() => setActiveSection('prevention')}
              >
                <span>تعلم الحماية</span>
                <Shield className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* إحصائيات تفاعلية محسنة */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 animate-fade-in-up text-gradient">
            إحصائيات الأمن السيبراني
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`glass-card text-center hover-lift interactive-card transition-all duration-500 p-8 rounded-2xl ${
                  currentStat === index ? 'ring-4 ring-blue-400 shadow-2xl scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${stat.gradient} mb-6 animate-rotate-in`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-3 text-shadow-glow">{stat.value}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* الميزات الرئيسية المحسنة */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-aurora opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 text-gradient">
              ماذا ستتعلم معنا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم لك تجربة تعليمية شاملة ومتطورة لفهم عالم الأمن السيبراني مع أحدث التقنيات والأساليب
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group neomorphism hover-tilt transition-all duration-700 p-8 ${feature.bgPattern}`}
                style={{ animationDelay: feature.delay }}
              >
                <div className="relative mb-8">
                  <div className={`inline-flex p-6 rounded-full bg-gradient-to-r ${feature.gradient} group-hover:scale-125 transition-transform duration-500`}>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{feature.description}</p>
                <Button 
                  onClick={feature.action}
                  className="btn-modern btn-primary w-full group-hover:scale-105 transition-transform hover-glow"
                >
                  اكتشف المزيد
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الإنجازات الجديد */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTIwIDIwYzAtNS41LTQuNS0xMC0xMC0xMHMtMTAgNC41LTEwIDEwIDQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTB6bTEwIDBjMC01LjUtNC41LTEwLTEwLTEwcy0xMCA0LjUtMTAgMTAgNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMHoiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">
            لماذا نحن الخيار الأفضل؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="glass-dark text-center p-8 rounded-2xl hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <achievement.icon className="h-16 w-16 text-yellow-400 mx-auto mb-6 animate-float" />
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-blue-200">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* نصائح أمنية سريعة محسنة */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-800 text-gradient">
              نصائح أمنية سريعة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityTips.map((tip, index) => (
                <div 
                  key={index}
                  className="glass-card flex items-start gap-4 p-6 rounded-2xl hover-lift interactive-card animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full">
                      <tip.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-right text-lg leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* تحذير أمني محسن */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-red-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-float" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex p-6 glass-card rounded-full mb-8 pulse-ring">
              <AlertTriangle className="h-16 w-16 text-red-500 animate-glow" />
            </div>
            <h2 className="text-4xl font-bold mb-12 text-gray-800 text-gradient">
              هل تعلم؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
              <div className="neomorphism p-8 hover-tilt animate-scale-in">
                <h3 className="text-2xl font-semibold mb-4 text-red-600">
                  كل 39 ثانية
                </h3>
                <p className="text-gray-700 text-lg">
                  يحدث هجوم سيبراني جديد في مكان ما حول العالم
                </p>
              </div>
              <div className="neomorphism p-8 hover-tilt animate-scale-in" style={{animationDelay: '200ms'}}>
                <h3 className="text-2xl font-semibold mb-4 text-red-600">
                  95% من الاختراقات
                </h3>
                <p className="text-gray-700 text-lg">
                  تحدث بسبب الأخطاء البشرية وليس الثغرات التقنية
                </p>
              </div>
              <div className="neomorphism p-8 hover-tilt animate-scale-in" style={{animationDelay: '400ms'}}>
                <h3 className="text-2xl font-semibold mb-4 text-red-600">
                  300 مليار دولار
                </h3>
                <p className="text-gray-700 text-lg">
                  التكلفة السنوية للجرائم السيبرانية عالمياً
                </p>
              </div>
              <div className="neomorphism p-8 hover-tilt animate-scale-in" style={{animationDelay: '600ms'}}>
                <h3 className="text-2xl font-semibold mb-4 text-red-600">
                  280 يوم
                </h3>
                <p className="text-gray-700 text-lg">
                  متوسط الوقت لاكتشاف الاختراق الأمني
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* دعوة للعمل محسنة */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTIwIDIwYzAtNS41LTQuNS0xMC0xMC0xMHMtMTAgNC41LTEwIDEwIDQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTB6bTEwIDBjMC01LjUtNC41LTEwLTEwLTEwcy0xMCA0LjUtMTAgMTAgNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMHoiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 animate-scale-in">
              ابدأ رحلتك في الأمن السيبراني اليوم
            </h2>
            <p className="text-2xl mb-12 text-blue-100 leading-relaxed animate-fade-in-up">
              لا تنتظر حتى تصبح ضحية. تعلم كيفية حماية نفسك الآن واكتسب المهارات اللازمة
            </p>
            <Button 
              size="lg" 
              className="btn-modern bg-white text-blue-600 hover:bg-gray-100 text-2xl px-12 py-6 group hover-lift interactive-card animate-glow"
              onClick={() => setActiveSection('prevention')}
            >
              <span>ابدأ التعلم الآن</span>
              <ArrowRight className="h-7 w-7 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

