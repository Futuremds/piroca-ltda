import {exec} from "child_process"

// Comando para implantar na Vercel
const login = 'vercel login'
const comando = 'vercel projects add <nome-do-projeto>';
const comando2 = 'vercel --prod --yes';


// Executa o comando
exec(login, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao implantar: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Implantação bem-sucedida:\n${stdout}`);
  }).stdin.write('\n');

exec(comando, (error, stdout, stderr) => {
  if (error) {
    console.error(`Erro ao implantar: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Implantação bem-sucedida:\n${stdout}`);
});

exec(comando2, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao implantar: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Implantação bem-sucedida:\n${stdout}`);
  });
  