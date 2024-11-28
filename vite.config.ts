import { defineConfig } from 'vite';
import chalk from 'chalk';

export default defineConfig({
    server: {
        port: 8888,
        host: '0.0.0.0',
        open: true,
        hmr: true,
    },
    plugins: [

        {
            name: 'custom-console-log',
            configureServer(server) {
                server.middlewares.use((req, res, next) => {
                    console.log(
                        `${chalk.cyan('[VITE]')} ${chalk.green('v6.0.1 ready in')} ${chalk.yellow('165 ms')}`
                    );
                    console.log(
                        `${chalk.green('Local:')} ${chalk.blue('http://localhost:8888/')}`
                    );
                    console.log(
                        `${chalk.green('Network:')} use --host to expose`
                    );
                    console.log(
                        `${chalk.magenta('press h + enter to show help')}`
                    );
                    console.log(
                        `${chalk.red('15:31:08 [vite] (client) page reload src/app.tsx')}`
                    );
                    next();
                });
            }
        }
    ]
});
