import { CoreBuilder } from '../../project_types';
import { baseGenerator } from '../baseGenerator';
import type { Generator } from '../types';

const generator: Generator = async (packageManager, npmOptions, options) => {
  await baseGenerator(
    packageManager,
    npmOptions,
    { ...options, builder: CoreBuilder.Vite },
    'marko',
    {
      staticDir: 'dist',
      // addMainFile: false,
      // addScripts: false,
      // addComponents: false,
      // extraMain: '',
      // extraPackages: [],
      // extraAddons: [],
      extensions: ['js', 'ts', 'marko'],
      // storybookConfigFolder: '.storybook',
      // componentsDestinationPath: 'src/components',
    },
    'marko-vite'
  );
};

export default generator;
