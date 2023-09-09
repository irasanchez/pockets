import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pockets',
  appName: 'pockets',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
