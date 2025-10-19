import { useState } from 'react';
import { Shield, CheckCircle, Star, Filter, Search } from 'lucide-react';
import { Button } from './Button';
import preventionData from '../data/preventionData';

const PreventionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['all', 'أساسيات الأمان', 'صيانة النظام', 'حماية البيانات', 'الاستخدام اليومي', 'الشبكات', 'الهندسة الاجتماعية'];
  const difficulties = ['all', 'سهل', 'متوسط', 'صعب'];

  const filteredPrevention = preventionData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || item.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'متوسطة': return 'text-yellow-600 bg-yellow-100';
      case 'عالية': return 'text-orange-600 bg-orange-100';
      case 'عالية جداً': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'سهل': return 'text-green-600 bg-green-100';
      case 'متوسط': return 'text-yellow-600 bg-yellow-100';
      case 'صعب': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            طرق الوقاية والحماية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تعلم أفضل الممارسات والطرق المثبتة لحماية نفسك ومؤسستك من التهديدات السيبرانية
          </p>
        </div>

        {/* أدوات البحث والتصفية */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* البحث */}
            <div className="relative">
              <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="ابحث عن طريقة حماية..."
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* تصفية حسب الفئة */}
            <div className="relative">
              <Filter className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <select
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'جميع الفئات' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* تصفية حسب الصعوبة */}
            <div className="relative">
              <Star className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <select
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'all' ? 'جميع المستويات' : difficulty}
                  </option>
                ))}
              </select>
            </div>

            {/* إعادة تعيين */}
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              variant="outline"
              className="w-full"
            >
              إعادة تعيين
            </Button>
          </div>
        </div>

        {/* عدد النتائج */}
        <div className="mb-6">
          <p className="text-gray-600">
            عرض {filteredPrevention.length} من أصل {preventionData.length} طريقة حماية
          </p>
        </div>

        {/* قائمة طرق الوقاية */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPrevention.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                {/* رأس البطاقة */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  </div>
                  <Shield className="h-8 w-8 text-green-500 flex-shrink-0 mr-4" />
                </div>

                {/* التصنيفات */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {item.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${getImportanceColor(item.importance)}`}>
                    أهمية: {item.importance}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(item.difficulty)}`}>
                    صعوبة: {item.difficulty}
                  </span>
                </div>

                {/* النصائح */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    نصائح التطبيق
                  </h4>
                  <ul className="space-y-2">
                    {item.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* زر العمل */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    تطبيق هذه الطريقة
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* رسالة عدم وجود نتائج */}
        {filteredPrevention.length === 0 && (
          <div className="text-center py-12">
            <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              لا توجد نتائج
            </h3>
            <p className="text-gray-500">
              جرب تغيير معايير البحث أو التصفية
            </p>
          </div>
        )}

        {/* نصائح إضافية */}
        <div className="mt-12 bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
            نصائح عامة للأمان السيبراني
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">كن حذراً دائماً</h3>
              <p className="text-green-700 text-sm">
                الشك الصحي أفضل من الثقة العمياء في الأمن السيبراني
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">حدّث بانتظام</h3>
              <p className="text-green-700 text-sm">
                التحديثات الأمنية هي خط دفاعك الأول ضد التهديدات
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800 mb-2">تعلم باستمرار</h3>
              <p className="text-green-700 text-sm">
                التهديدات تتطور، وعليك أن تتطور معها
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreventionPage;

