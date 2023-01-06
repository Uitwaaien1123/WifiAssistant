import { Button, Heading, Pane, Paragraph } from 'evergreen-ui';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../src/images/wifi.png';
import { Settings } from './components/Settings';
import { WifiCard } from './components/WifiCard';
import './style.css';
import { Translations } from './translations';

function App() {
  const html = document.querySelector('html');
  const { t, i18n } = useTranslation();
  const firstLoad = useRef(true);
  const [settings, setSettings] = useState({
    // Network SSID name
    ssid: '',
    // Network password
    password: '',
    // Settings: Network encryption mode
    encryptionMode: 'WPA',
    // Settings: EAP Method
    eapMethod: 'PWD',
    // Settings: EAP identity
    eapIdentity: '',
    // Settings: Hide password on the printed card
    hidePassword: false,
    // Settings: Mark your network as hidden SSID
    hiddenSSID: false,
    // Settings: Portrait orientation
    portrait: false,
  });
  const [errors, setErrors] = useState({
    ssidError: '',
    passwordError: '',
    eapIdentityError: '',
  });

  const htmlDirection = (languageID) => {
    languageID = languageID || i18n.language;
    const rtl = Translations.filter((t) => t.id === languageID)[0]?.rtl;
    return rtl ? 'rtl' : 'ltr';
  };

  const onPrint = () => {
    if (!settings.ssid.length) {
      setErrors({
        ...errors,
        ssidError: t('wifi.alert.name'),
      });
      return;
    }
    if (settings.password.length < 8 && settings.encryptionMode === 'WPA') {
      setErrors({
        ...errors,
        passwordError: t('wifi.alert.password.length.8'),
      });
      return;
    }
    if (settings.password.length < 5 && settings.encryptionMode === 'WEP') {
      setErrors({
        ...errors,
        passwordError: t('wifi.alert.password.length.5'),
      });
      return;
    }
    if (
      settings.password.length < 1 &&
      settings.encryptionMode === 'WPA2-EAP'
    ) {
      setErrors({
        ...errors,
        passwordError: t('wifi.alert.password'),
      });
      return;
    }
    if (
      settings.eapIdentity.length < 1 &&
      settings.encryptionMode === 'WPA2-EAP'
    ) {
      setErrors({
        ...errors,
        eapIdentityError: t('wifi.alert.eapIdentity'),
      });
      return;
    }
    document.title = 'WiFi Card - ' + settings.ssid;
    window.print();
  };

  const onSSIDChange = (ssid) => {
    setErrors({ ...errors, ssidError: '' });
    setSettings({ ...settings, ssid });
  };
  const onPasswordChange = (password) => {
    setErrors({ ...errors, passwordError: '' });
    setSettings({ ...settings, password });
  };
  const onEncryptionModeChange = (encryptionMode) => {
    setErrors({ ...errors, passwordError: '' });
    setSettings({ ...settings, encryptionMode });
  };
  const onEapMethodChange = (eapMethod) => {
    setSettings({ ...settings, eapMethod });
  };
  const onEapIdentityChange = (eapIdentity) => {
    setErrors({ ...errors, eapIdentityError: '' });
    setSettings({ ...settings, eapIdentity });
  };
  const onOrientationChange = (portrait) => {
    setSettings({ ...settings, portrait });
  };
  const onHidePasswordChange = (hidePassword) => {
    setSettings({ ...settings, hidePassword });
  };
  const onHiddenSSIDChange = (hiddenSSID) => {
    setSettings({ ...settings, hiddenSSID });
  };
  const onFirstLoad = () => {
    html.style.direction = htmlDirection();
    firstLoad.current = false;
  };

  useEffect(() => {
    if (htmlDirection() === 'rtl') {
      html.style.direction = 'rtl';
    }
  });

  return (
    <Pane>
      <Pane display="flex">
        <img alt="icon" src={logo} width="32" height="32" />
        <Heading size={900} paddingRight={16} paddingLeft={16}>
          {'WiFi连接码'}
        </Heading>
      </Pane>

      <Pane>
        <Paragraph marginTop={22}>{'输入您的 Wifi 名称和密码，生成相应 WiFi 连接二维码。无需手动输入，扫码直接连接！'}</Paragraph>

        <Paragraph marginTop={12}>
          {'您的 WiFi 信息永远只在本地储存，不会发送到服务端，请放心使用。'}
        </Paragraph>
      </Pane>

      <WifiCard
        settings={settings}
        ssidError={errors.ssidError}
        passwordError={errors.passwordError}
        eapIdentityError={errors.eapIdentityError}
        onSSIDChange={onSSIDChange}
        onEapIdentityChange={onEapIdentityChange}
        onPasswordChange={onPasswordChange}
      />

      <Settings
        settings={settings}
        firstLoad={firstLoad}
        onFirstLoad={onFirstLoad}
        onEncryptionModeChange={onEncryptionModeChange}
        onEapMethodChange={onEapMethodChange}
        onOrientationChange={onOrientationChange}
        onHidePasswordChange={onHidePasswordChange}
        onHiddenSSIDChange={onHiddenSSIDChange}
      />

      <Button
        id="print"
        appearance="primary"
        height={40}
        marginRight={16}
        onClick={onPrint}
      >
        {'打印连接码'}
      </Button>
    </Pane>
  );
}

export default App;