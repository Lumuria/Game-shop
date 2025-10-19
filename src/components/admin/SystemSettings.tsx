import React, { useState } from 'react';
import styled from 'styled-components';

interface Settings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  currency: string;
  language: string;
  timezone: string;
  maintenanceMode: boolean;
  allowRegistration: boolean;
  emailNotifications: boolean;
  smsNotifications: boolean;
  taxRate: number;
  shippingFee: number;
  freeShippingThreshold: number;
}

const Container = styled.div`
  padding: 0;
`;

const Header = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin: 0;
  font-size: 1.5rem;
`;

const SettingsGrid = styled.div`
  display: grid;
  gap: 30px;
`;

const SettingsSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h3`
  color: #2c3e50;
  margin: 0 0 20px 0;
  font-size: 1.2rem;
  padding-bottom: 10px;
  border-bottom: 2px solid #ecf0f1;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: #2c3e50;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.9rem;
`;

const SaveButton = styled.button`
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(39, 174, 96, 0.3);
  }
`;

const ResetButton = styled.button`
  background: #95a5a6;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: 20px;
  margin-left: 15px;

  &:hover {
    background: #7f8c8d;
    transform: translateY(-2px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ecf0f1;
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #c3e6cb;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SystemSettings: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
    siteName: 'متجر الألعاب الإلكترونية',
    siteDescription: 'أفضل متجر لبيع أجهزة الكمبيوتر والألعاب الإلكترونية',
    contactEmail: 'info@gamingstore.com',
    contactPhone: '+966500000000',
    currency: 'SAR',
    language: 'ar',
    timezone: 'Asia/Riyadh',
    maintenanceMode: false,
    allowRegistration: true,
    emailNotifications: true,
    smsNotifications: false,
    taxRate: 15,
    shippingFee: 25,
    freeShippingThreshold: 500
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : 
              type === 'number' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSave = () => {
    // في التطبيق الحقيقي، ستكون هذه استدعاءات API لحفظ الإعدادات
    console.log('حفظ الإعدادات:', settings);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleReset = () => {
    if (window.confirm('هل أنت متأكد من إعادة تعيين جميع الإعدادات؟')) {
      setSettings({
        siteName: 'متجر الألعاب الإلكترونية',
        siteDescription: 'أفضل متجر لبيع أجهزة الكمبيوتر والألعاب الإلكترونية',
        contactEmail: 'info@gamingstore.com',
        contactPhone: '+966500000000',
        currency: 'SAR',
        language: 'ar',
        timezone: 'Asia/Riyadh',
        maintenanceMode: false,
        allowRegistration: true,
        emailNotifications: true,
        smsNotifications: false,
        taxRate: 15,
        shippingFee: 25,
        freeShippingThreshold: 500
      });
    }
  };

  return (
    <Container>
      <Header>
        <Title>إعدادات النظام</Title>
      </Header>

      {showSuccess && (
        <SuccessMessage>
          <span>✅</span>
          تم حفظ الإعدادات بنجاح!
        </SuccessMessage>
      )}

      <SettingsGrid>
        {/* إعدادات عامة */}
        <SettingsSection>
          <SectionTitle>الإعدادات العامة</SectionTitle>
          <FormGrid>
            <FormGroup>
              <Label>اسم الموقع</Label>
              <Input
                type="text"
                name="siteName"
                value={settings.siteName}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>وصف الموقع</Label>
              <TextArea
                name="siteDescription"
                value={settings.siteDescription}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>البريد الإلكتروني للتواصل</Label>
              <Input
                type="email"
                name="contactEmail"
                value={settings.contactEmail}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>رقم الهاتف للتواصل</Label>
              <Input
                type="tel"
                name="contactPhone"
                value={settings.contactPhone}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>العملة</Label>
              <Select
                name="currency"
                value={settings.currency}
                onChange={handleInputChange}
              >
                <option value="SAR">ريال سعودي (SAR)</option>
                <option value="USD">دولار أمريكي (USD)</option>
                <option value="EUR">يورو (EUR)</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>اللغة الافتراضية</Label>
              <Select
                name="language"
                value={settings.language}
                onChange={handleInputChange}
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>المنطقة الزمنية</Label>
              <Select
                name="timezone"
                value={settings.timezone}
                onChange={handleInputChange}
              >
                <option value="Asia/Riyadh">الرياض (GMT+3)</option>
                <option value="UTC">UTC (GMT+0)</option>
                <option value="America/New_York">نيويورك (GMT-5)</option>
              </Select>
            </FormGroup>
          </FormGrid>
        </SettingsSection>

        {/* إعدادات النظام */}
        <SettingsSection>
          <SectionTitle>إعدادات النظام</SectionTitle>
          <FormGrid>
            <FormGroup>
              <CheckboxGroup>
                <Checkbox
                  type="checkbox"
                  name="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={handleInputChange}
                />
                <CheckboxLabel>وضع الصيانة</CheckboxLabel>
              </CheckboxGroup>
            </FormGroup>

            <FormGroup>
              <CheckboxGroup>
                <Checkbox
                  type="checkbox"
                  name="allowRegistration"
                  checked={settings.allowRegistration}
                  onChange={handleInputChange}
                />
                <CheckboxLabel>السماح بالتسجيل الجديد</CheckboxLabel>
              </CheckboxGroup>
            </FormGroup>

            <FormGroup>
              <CheckboxGroup>
                <Checkbox
                  type="checkbox"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleInputChange}
                />
                <CheckboxLabel>إشعارات البريد الإلكتروني</CheckboxLabel>
              </CheckboxGroup>
            </FormGroup>

            <FormGroup>
              <CheckboxGroup>
                <Checkbox
                  type="checkbox"
                  name="smsNotifications"
                  checked={settings.smsNotifications}
                  onChange={handleInputChange}
                />
                <CheckboxLabel>إشعارات الرسائل النصية</CheckboxLabel>
              </CheckboxGroup>
            </FormGroup>
          </FormGrid>
        </SettingsSection>

        {/* إعدادات التجارة */}
        <SettingsSection>
          <SectionTitle>إعدادات التجارة الإلكترونية</SectionTitle>
          <FormGrid>
            <FormGroup>
              <Label>معدل الضريبة (%)</Label>
              <Input
                type="number"
                name="taxRate"
                value={settings.taxRate}
                onChange={handleInputChange}
                min="0"
                max="100"
                step="0.1"
              />
            </FormGroup>

            <FormGroup>
              <Label>رسوم الشحن (ر.س)</Label>
              <Input
                type="number"
                name="shippingFee"
                value={settings.shippingFee}
                onChange={handleInputChange}
                min="0"
                step="0.01"
              />
            </FormGroup>

            <FormGroup>
              <Label>الحد الأدنى للشحن المجاني (ر.س)</Label>
              <Input
                type="number"
                name="freeShippingThreshold"
                value={settings.freeShippingThreshold}
                onChange={handleInputChange}
                min="0"
                step="0.01"
              />
            </FormGroup>
          </FormGrid>
        </SettingsSection>
      </SettingsGrid>

      <ButtonGroup>
        <ResetButton onClick={handleReset}>
          إعادة تعيين
        </ResetButton>
        <SaveButton onClick={handleSave}>
          حفظ الإعدادات
        </SaveButton>
      </ButtonGroup>
    </Container>
  );
};

export default SystemSettings;
