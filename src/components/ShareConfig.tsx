import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface ShareConfigProps {
  configId?: string;
  onShare: (platform: string) => void;
  onCopyLink: () => void;
}

const ShareContainer = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ShareTitle = styled.h3`
  margin: 0 0 1rem;
  color: var(--text-primary);
`;

const ShareDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ShareLink = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const LinkInput = styled.input`
  flex-grow: 1;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-primary);
  margin-right: 0.5rem;
  
  @media (max-width: 576px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const CopyButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    opacity: 0.9;
  }
`;

const SharePlatforms = styled.div``;

const PlatformsTitle = styled.h4`
  margin: 0 0 1rem;
  color: var(--text-primary);
  font-size: 1rem;
`;

const PlatformButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PlatformButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--text-primary);
  
  &:hover {
    background-color: var(--background-color);
    transform: translateY(-3px);
  }
`;

const PlatformIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const PlatformName = styled.span`
  font-size: 0.9rem;
`;

const ShareConfig: React.FC<ShareConfigProps> = ({ configId, onShare, onCopyLink }) => {
  const { t } = useTranslation();
  const shareUrl = configId 
    ? `https://gametech-store.com/pc-builder/shared/${configId}` 
    : 'https://gametech-store.com/pc-builder/shared/demo123';
  
  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: '📘' },
    { id: 'twitter', name: 'Twitter', icon: '🐦' },
    { id: 'whatsapp', name: 'WhatsApp', icon: '📱' },
    { id: 'email', name: 'Email', icon: '✉️' },
  ];
  
  return (
    <ShareContainer>
      <ShareTitle>{t('pcBuilder.shareConfig')}</ShareTitle>
      <ShareDescription>
        {t('share.description')}
      </ShareDescription>
      
      <ShareLink>
        <LinkInput 
          type="text" 
          value={shareUrl} 
          readOnly 
        />
        <CopyButton onClick={onCopyLink}>
          {t('share.copyLink')}
        </CopyButton>
      </ShareLink>
      
      <SharePlatforms>
        <PlatformsTitle>{t('share.shareOn')}</PlatformsTitle>
        <PlatformButtons>
          {platforms.map(platform => (
            <PlatformButton 
              key={platform.id}
              onClick={() => onShare(platform.id)}
            >
              <PlatformIcon>{platform.icon}</PlatformIcon>
              <PlatformName>{platform.name}</PlatformName>
            </PlatformButton>
          ))}
        </PlatformButtons>
      </SharePlatforms>
    </ShareContainer>
  );
};

export default ShareConfig;
