import { useState } from 'react';
import { Search, Filter, Calendar, AlertTriangle, Shield, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './Button';
import cyberAttacksData from '../data/attacksData';

const AttacksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const attackTypes = ['all', 'فيروس', 'برمجية خبيثة', 'دودة كمبيوتر', 'اختراق بيانات', 'هجوم سلسلة التوريد'];
  const severityLevels = ['all', 'متوسطة', 'عالية', 'عالية جداً'];

  const filteredAttacks = cyberAttacksData.filter(attack => {
    const matchesSearch = attack.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         attack.arabicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         attack.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || attack.type === selectedType;
    const matchesSeverity = selectedSeverity === 'all' || attack.severity === selectedSeverity;
    
    return matchesSearch && matchesType && matchesSeverity;
  });

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'متوسطة': return 'text-yellow-600 bg-yellow-100';
      case 'عالية': return 'text-red-600 bg-red-100';
      case 'عالية جداً': return 'text-red-800 bg-red-200';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-12">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            الهجمات السيبرانية
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            تعرف على أشهر الهجمات السيبرانية في التاريخ وتعلم كيفية الحماية منها
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
                placeholder="ابحث عن هجمة..."
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* تصفية حسب النوع */}
            <div className="relative">
              <Filter className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <select
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {attackTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'جميع الأنواع' : type}
                  </option>
                ))}
              </select>
            </div>

            {/* تصفية حسب الخطورة */}
            <div className="relative">
              <AlertTriangle className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
              <select
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
              >
                {severityLevels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'جميع المستويات' : level}
                  </option>
                ))}
              </select>
            </div>

            {/* إعادة تعيين */}
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setSelectedSeverity('all');
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
            عرض {filteredAttacks.length} من أصل {cyberAttacksData.length} هجمة
          </p>
        </div>

        {/* قائمة الهجمات */}
        <div className="space-y-6">
          {filteredAttacks.map((attack) => (
            <div key={attack.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              {/* رأس البطاقة */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">{attack.arabicName}</h3>
                      <span className="text-lg text-gray-500">({attack.name})</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{attack.date}</span>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                        {attack.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full ${getSeverityColor(attack.severity)}`}>
                        {attack.severity}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => toggleCard(attack.id)}
                    variant="outline"
                    size="sm"
                    className="mt-4 md:mt-0"
                  >
                    {expandedCard === attack.id ? (
                      <>
                        <ChevronUp className="h-4 w-4 ml-2" />
                        إخفاء التفاصيل
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 ml-2" />
                        عرض التفاصيل
                      </>
                    )}
                  </Button>
                </div>

                {/* الوصف المختصر */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {attack.description}
                </p>

                {/* معلومات سريعة */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold text-gray-800">الهدف: </span>
                    <span className="text-gray-600">{attack.target}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">الأضرار: </span>
                    <span className="text-gray-600">{attack.damage}</span>
                  </div>
                </div>
              </div>

              {/* التفاصيل المتوسعة */}
              {expandedCard === attack.id && (
                <div className="border-t border-gray-200 bg-gray-50 p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* طرق الوقاية */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">طرق الوقاية</h4>
                      </div>
                      <p className="text-green-700 text-sm leading-relaxed">
                        {attack.prevention}
                      </p>
                    </div>

                    {/* طرق الكشف */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Eye className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold text-blue-800">طرق الكشف</h4>
                      </div>
                      <p className="text-blue-700 text-sm leading-relaxed">
                        {attack.detection}
                      </p>
                    </div>

                    {/* الحلول */}
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="h-5 w-5 text-purple-600" />
                        <h4 className="font-semibold text-purple-800">الحلول</h4>
                      </div>
                      <p className="text-purple-700 text-sm leading-relaxed">
                        {attack.solution}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* رسالة عدم وجود نتائج */}
        {filteredAttacks.length === 0 && (
          <div className="text-center py-12">
            <AlertTriangle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              لا توجد نتائج
            </h3>
            <p className="text-gray-500">
              جرب تغيير معايير البحث أو التصفية
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttacksPage;

