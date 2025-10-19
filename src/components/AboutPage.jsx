import { Shield, Target, Users, BookOpen, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "د. أحمد محمد",
      role: "خبير الأمن السيبراني",
      description: "أكثر من 15 عاماً من الخبرة في مجال الأمن السيبراني والحماية الرقمية",
      icon: Shield
    },
    {
      name: "م. فاطمة علي",
      role: "مطورة أمان التطبيقات",
      description: "متخصصة في تطوير التطبيقات الآمنة وفحص الثغرات الأمنية",
      icon: BookOpen
    },
    {
      name: "د. محمد حسن",
      role: "باحث في الذكاء الاصطناعي",
      description: "يركز على استخدام الذكاء الاصطناعي في كشف التهديدات السيبرانية",
      icon: Award
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "الأمان أولاً",
      description: "نضع الأمان والحماية في مقدمة أولوياتنا في كل ما نقدمه"
    },
    {
      icon: BookOpen,
      title: "التعليم المستمر",
      description: "نؤمن بأهمية التعلم المستمر ومواكبة التطورات في مجال الأمن السيبراني"
    },
    {
      icon: Users,
      title: "المجتمع أولاً",
      description: "نهدف إلى بناء مجتمع واعٍ ومحمي من التهديدات الرقمية"
    },
    {
      icon: Heart,
      title: "الشفافية",
      description: "نقدم معلومات دقيقة وموثوقة بشفافية كاملة"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            حول موقع الأمن السيبراني
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن منصة تعليمية متخصصة في نشر الوعي حول الأمن السيبراني وحماية البيانات الرقمية
          </p>
        </div>

        {/* رسالتنا */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="text-center mb-8">
            <Target className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">رسالتنا</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              في عصر التكنولوجيا الرقمية، أصبحت الحماية من التهديدات السيبرانية ضرورة حتمية لكل فرد ومؤسسة. 
              نحن نؤمن بأن التعليم والوعي هما أقوى أسلحة الدفاع ضد الهجمات الإلكترونية.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">هدفنا</h3>
                <p className="text-blue-700 leading-relaxed">
                  نسعى إلى جعل الأمن السيبراني مفهوماً وقابلاً للتطبيق من قبل الجميع، 
                  من المستخدمين العاديين إلى المتخصصين في التقنية.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-3">رؤيتنا</h3>
                <p className="text-green-700 leading-relaxed">
                  نتطلع إلى مجتمع رقمي آمن حيث يمتلك كل فرد المعرفة والأدوات اللازمة 
                  لحماية نفسه من التهديدات السيبرانية.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* قيمنا */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">قيمنا الأساسية</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* فريق العمل */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="text-center mb-8">
            <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">فريق العمل</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              فريقنا مكون من خبراء متخصصين في مجال الأمن السيبراني والتقنية، 
              يعملون بشغف لتقديم أفضل المحتوى التعليمي والأدوات العملية.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <member.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ما نقدمه */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">ما نقدمه لك</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">محتوى تعليمي شامل</h3>
                  <p className="text-gray-600 text-sm">
                    مقالات ودروس مفصلة حول جميع جوانب الأمن السيبراني
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">أدوات تفاعلية</h3>
                  <p className="text-gray-600 text-sm">
                    أدوات عملية لفحص الأمان وتقييم مستوى الحماية
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">تحليل التهديدات</h3>
                  <p className="text-gray-600 text-sm">
                    دراسات مفصلة للهجمات السيبرانية وطرق الوقاية منها
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">مجتمع تفاعلي</h3>
                  <p className="text-gray-600 text-sm">
                    منصة للتواصل وتبادل الخبرات مع المهتمين بالأمن السيبراني
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">أحدث الأخبار</h3>
                  <p className="text-gray-600 text-sm">
                    تحديثات مستمرة حول آخر التطورات في عالم الأمن السيبراني
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">دعم مجاني</h3>
                  <p className="text-gray-600 text-sm">
                    جميع المحتوى والأدوات متاحة مجاناً لخدمة المجتمع
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* إحصائيات */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">إنجازاتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">مقال تعليمي</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">زائر شهرياً</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">أدوات تفاعلية</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">تهديد محلل</div>
            </div>
          </div>
        </div>

        {/* دعوة للتواصل */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">انضم إلى مجتمعنا</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            كن جزءاً من مجتمع الأمن السيبراني وساهم في نشر الوعي الأمني
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              تواصل معنا
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              اشترك في النشرة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

