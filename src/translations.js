export const Translations = [
  {
    id: 'en-US',
    name: 'English',
    translation: {
      title: 'WiFi Card',
      'desc.use':
        'Print a simple card with your WiFi login details. Tape it to the fridge, keep it in your wallet, etc.',
      'desc.privacy':
        'Your WiFi information is never sent to the server. No tracking, analytics, or fingerprinting are used on this website. View the',
      'desc.source': 'source code',
      'wifi.identity': 'Identity',
      'wifi.identity.placeholder': 'Username',
      'wifi.login': 'WiFi Login',
      'wifi.name': 'Network name',
      'wifi.name.hiddenSSID': 'Hidden SSID',
      'wifi.name.placeholder': 'WiFi Network name',
      'wifi.password': 'Password',
      'wifi.password.placeholder': 'Password',
      'wifi.password.hide': 'Hide password',
      'wifi.password.encryption': 'Encryption',
      'wifi.password.encryption.none': 'None',
      'wifi.encryption.eapMethod': 'EAP method',
      'wifi.tip':
        "Point your phone's camera at the QR Code to connect automatically",
      'wifi.alert.name': 'Network name cannot be empty',
      'wifi.alert.password': 'Password cannot be empty',
      'wifi.alert.password.length.5':
        'Password must be at least 5 characters, or change the encryption to "None"',
      'wifi.alert.password.length.8':
        'Password must be at least 8 characters, or change the encryption to "None"',
      'wifi.alert.eapIdentity': 'Identity cannot be empty',
      'button.rotate': 'Rotate',
      'button.print': 'Print',
      select: 'Select Language',
    },
  },
  {
    id: 'sv-SE',
    name: 'Swedish - Svenska',
    translation: {
      title: 'WiFi Kort',
      'desc.use':
        'Skriv ut ett enkelt kort med inloggningsuppgifter till ditt WiFI. Sätt upp det på kylskåpet eller ha det i din plånbok etc.',
      'desc.privacy':
        'Din WiFi information skickas aldrig till webbservern. Varken spårning, analys eller identifiering används på hemsidan. Se ',
      'desc.source': 'källkoden',
      'wifi.login': 'WiFi Inloggning',
      'wifi.name': 'Nätverksnamn',
      'wifi.name.hiddenSSID': 'Dolt SSID',
      'wifi.name.placeholder': 'WiFi Nätverksnamn',
      'wifi.password': 'Lösenord',
      'wifi.password.placeholder': 'Lösenord',
      'wifi.password.hide': 'Dölj lösenordet',
      'wifi.password.encryption': 'Kryptering',
      'wifi.password.encryption.none': 'Ingen',
      'wifi.tip':
        'Peka din telefons kamera mot QR-koden för att ansluta automatiskt',
      'wifi.alert.name': 'Nätverksnamn måste fyllas i',
      'wifi.alert.password.length.5':
        'Lösenordet måste bestå av minst 5 tecken eller ändra kryptering till "Ingen"',
      'wifi.alert.password.length.8':
        'Lösenordet måste bestå av minst 8 tecken eller ändra kryptering till "Ingen"',
      'button.rotate': 'Rotera',
      'button.print': 'Skriv ut',
      select: 'Välj språk',
    },
  },
].sort((a, b) => {
  return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
});
