import { exec } from 'child_process';

const command = (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (_error, stdout) => {
      if (_error === null) {
        resolve(stdout);
      } else reject(_error);
    });
  });
};

export default {
  command,
};
