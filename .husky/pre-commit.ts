import DOCS from '@docs/index.js';
import GIT from '@git/index.js';

DOCS.create();
await GIT.command('git add README.md');
