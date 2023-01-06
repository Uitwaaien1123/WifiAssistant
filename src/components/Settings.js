import { Checkbox, Pane, RadioGroup } from 'evergreen-ui';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './style.css';

export const Settings = (props) => {
  const { t } = useTranslation();
  const encryptionModes = [
    { label: '无', value: '' },
    { label: 'WPA/WPA2/WPA3', value: 'WPA' },
    // { label: 'WPA2-EAP', value: 'WPA2-EAP' },
    { label: 'WEP', value: 'WEP' },
  ];

  useEffect(() => {
    if (props.firstLoad.current && window.innerWidth < 500) {
      props.onFirstLoad();
      props.onOrientationChange(true);
    }
  });

  return (
    <Pane id="settings" maxWidth={props.settings.portrait ? '350px' : '100%'}>
      <Checkbox
        label={t('button.rotate')}
        checked={props.settings.portrait}
        onChange={() => props.onOrientationChange(!props.settings.portrait)}
      />
      <Checkbox
        label={t('wifi.password.hide')}
        checked={props.settings.hidePassword}
        onChange={() =>
          props.onHidePasswordChange(!props.settings.hidePassword)
        }
      />
      <RadioGroup
        label={'请选择该wifi的加密方式'}
        size={16}
        value={props.settings.encryptionMode}
        options={encryptionModes}
        onChange={(e) => props.onEncryptionModeChange(e.target.value)}
      />
    </Pane>
  );
};
