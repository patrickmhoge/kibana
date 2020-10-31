import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface QueryByCsvPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface QueryByCsvPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
