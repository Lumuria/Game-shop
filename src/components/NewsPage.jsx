import { Calendar, ExternalLink, AlertTriangle, TrendingUp, Shield } from 'lucide-react';
import { Button } from './Button';

const NewsPage = () => {
  const newsData = [
    {
      id: 1,
      title: "اكتشاف ثغرة أمنية جديدة في متصفحات الويب",
      summary: "باحثون أمنيون يكتشفون ثغرة خطيرة قد تسمح للمهاجمين بسرقة البيانات الشخصية",
      date: "2024-01-15",
      category: "ثغرات أمنية",
      severity: "عالية",
      source: "مركز الأمن السيبراني",
      content: "اكتشف فريق من الباحثين الأمنيين ثغرة جديدة في المتصفحات الشائعة قد تسمح للمهاجمين بالوصول إلى البيانات الحساسة. ينصح المستخدمون بتحديث متصفحاتهم فوراً.",
      recommendations: [
        "تحديث المتصفح إلى أحدث إصدار",
        "تجنب زيارة المواقع غير الموثوقة",
        "استخدام إضافات الحماية"
      ]
    },
    {
      id: 2,
      title: "زيادة هجمات التصيد الإلكتروني بنسبة 40%",
      summary: "تقرير جديد يظهر ارتفاعاً كبيراً في محاولات التصيد الإلكتروني خلال الربع الأخير",
      date: "2024-01-12",
      category: "إحصائيات",
      severity: "متوسطة",
      source: "شركة الأمن السيبراني العالمية",
      content: "أظهر تقرير حديث زيادة كبيرة في هجمات التصيد الإلكتروني، خاصة تلك التي تستهدف المؤسسات المالية والتعليمية.",
      recommendations: [
        "التحقق من صحة رسائل البريد الإلكتروني",
        "عدم النقر على الروابط المشبوهة",
        "التدريب المستمر للموظفين"
      ]
    },
    {
      id: 3,
      title: "إطلاق أداة جديدة لحماية الشركات الصغيرة",
      summary: "شركة تقنية رائدة تطلق حلول أمنية مبسطة ومناسبة للشركات الصغيرة والمتوسطة",
      date: "2024-01-10",
      category: "حلول أمنية",
      severity: "منخفضة",
      source: "أخبار التقنية",
      content: "أعلنت شركة تقنية كبرى عن إطلاق مجموعة جديدة من الأدوات الأمنية المصممة خصيصاً للشركات الصغيرة والمتوسطة.",
      recommendations: [
        "تقييم احتياجات الشركة الأمنية",
        "الاستثمار في الحلول المناسبة",
        "التدريب على استخدام الأدوات الجديدة"
      ]
    },
    {
      id: 4,
      title: "تحديث أمني طارئ لأنظمة التشغيل",
      summary: "مايكروسوفت وآبل تصدران تحديثات أمنية عاجلة لمعالجة ثغرات خطيرة",
      date: "2024-01-08",
      category: "تحديثات",
      severity: "عالية جداً",
      source: "الشركات المصنعة",
      content: "أصدرت كل من مايكروسوفت وآبل تحديثات أمنية عاجلة لمعالجة ثغرات أمنية خطيرة في أنظمة التشغيل الخاصة بهما.",
      recommendations: [
        "تثبيت التحديثات فوراً",
        "إعادة تشغيل الأجهزة بعد التحديث",
        "التحقق من تفعيل التحديثات التلقائية"
      ]
    }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'منخفضة': return 'text-green-600 bg-green-100';
      case 'متوسطة': return 'text-yellow-600 bg-yellow-100';
      case 'عالية': return 'text-orange-600 bg-orange-100';
      case 'عالية جداً': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'ثغرات أمنية': return AlertTriangle;
      case 'إحصائيات': return TrendingUp;
      case 'حلول أمنية': return Shield;
      case 'تحديثات': return ExternalLink;
      default: return AlertTriangle;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <TrendingUp className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            أخبار الأمن السيبراني
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آخر الأخبار والتطورات في عالم الأمن السيبراني والتهديدات الرقمية
          </p>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">2</div>
            <div className="text-sm text-gray-600">تهديدات عالية</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">1</div>
            <div className="text-sm text-gray-600">إحصائيات جديدة</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">1</div>
            <div className="text-sm text-gray-600">حلول أمنية</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <ExternalLink className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800">1</div>
            <div className="text-sm text-gray-600">تحديثات مهمة</div>
          </div>
        </div>

        {/* قائمة الأخبار */}
        <div className="space-y-6">
          {newsData.map((news) => {
            const CategoryIcon = getCategoryIcon(news.category);
            return (
              <article key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  {/* رأس الخبر */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <CategoryIcon className="h-6 w-6 text-blue-500" />
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {news.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${getSeverityColor(news.severity)}`}>
                          {news.severity}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
                        {news.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {news.summary}
                      </p>
                    </div>
                  </div>

                  {/* معلومات إضافية */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(news.date).toLocaleDateString('ar-SA')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ExternalLink className="h-4 w-4" />
                      <span>{news.source}</span>
                    </div>
                  </div>

                  {/* محتوى الخبر */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {news.content}
                    </p>
                  </div>

                  {/* التوصيات */}
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      التوصيات الأمنية
                    </h4>
                    <ul className="space-y-2">
                      {news.recommendations.map((recommendation, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-blue-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* أزرار العمل */}
                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 ml-2" />
                      قراءة المزيد
                    </Button>
                    <Button variant="outline" size="sm">
                      مشاركة
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* تنبيه أمني */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-800 mb-2">تنبيه أمني مهم</h3>
              <p className="text-red-700 text-sm leading-relaxed mb-4">
                تذكر أن التهديدات السيبرانية تتطور باستمرار. ابق على اطلاع دائم بآخر التطورات 
                وطبق التوصيات الأمنية فور صدورها.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  اشترك في التنبيهات
                </Button>
                <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
                  تعلم المزيد
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* مصادر موثوقة */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            مصادر موثوقة للأخبار الأمنية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-800 mb-2">المراكز الأمنية الرسمية</h3>
              <p className="text-blue-700 text-sm">
                تابع المراكز الحكومية المختصة بالأمن السيبراني
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-800 mb-2">شركات الأمن المتخصصة</h3>
              <p className="text-blue-700 text-sm">
                اقرأ تقارير الشركات الرائدة في مجال الأمن السيبراني
              </p>
            </div>
            <div className="text-center">
              <ExternalLink className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-800 mb-2">المجتمعات التقنية</h3>
              <p className="text-blue-700 text-sm">
                شارك في المنتديات والمجتمعات المتخصصة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

