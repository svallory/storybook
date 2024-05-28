import { readJSON, writeJSON } from 'fs-extra';
import { join } from 'path';

export async function updatePackageScripts({ cwd, prefix }: { cwd: string; prefix: string }) {
  const packageJsonPath = join(cwd, 'package.json');
  console.log(`Reading package json from ${packageJsonPath}`);
  const packageJson = await readJSON(packageJsonPath);
  packageJson.scripts = {
    ...packageJson.scripts,
    ...(packageJson.scripts.storybook && {
      storybook: `${prefix} ${packageJson.scripts.storybook}`,
      'build-storybook': `${prefix} ${packageJson.scripts['build-storybook']}`,
    }),
  };
  await writeJSON(packageJsonPath, packageJson, { spaces: 2 });
}
