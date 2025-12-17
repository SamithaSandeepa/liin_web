const { spawn } = require('child_process');
const path = require('path');

const serverPath = path.join(__dirname, '.next', 'standalone', 'server.js');

const env = {
  ...process.env,
  NODE_ENV: 'production',
  PORT: process.env.PORT || 50000,
  HOSTNAME: process.env.HOSTNAME || '0.0.0.0'
};

console.log('Starting Next.js standalone server...');
console.log('Server path:', serverPath);
console.log('Using PORT:', env.PORT);

const child = spawn(process.execPath, [serverPath], {
  cwd: path.dirname(serverPath),
  env,
  stdio: 'inherit'
});

child.on('error', (err) => console.error('Failed to start:', err));
child.on('close', (code, signal) => console.log(`Closed. code=${code} signal=${signal}`));
